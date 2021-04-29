
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
function initialize() {
    /*
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(33.604321, -7.549472);
  var mapOptions = { zoom:3, mapTypeId: google.maps.MapTypeId.ROADMAP, center: chicago }
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  const myLatLng = { lat: 33.604321, lng: -7.549472 };
  new google.maps.Marker({
   position: myLatLng,
   map,
   title: "Hello World!",
 });
 
  directionsDisplay.setMap(map);
*/

  //----------------------setting the places-------------------//
  const map = new google.maps.Map(document.getElementById("map_canvas"), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13,
    mapTypeId: "roadmap",
  });
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };
      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}
$(document).ready(function(e) { initialize() });