
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var lng,lat,st ;
getLocation()
$("#btes").click(function() {
  var coord = $("#btes").val()
  lnggz = coord.split("_")[1]
  ltgz = coord.split("_")[0]
  st = coord.split("_")[2]
  pr = coord.split("_")[3]
  console.log("lng2 " + lnggz +  ' lat2 : ' + ltgz  )
  //getstation(parseInt(lt),parseInt(lng))
  })
$("#btgz").click(function() {
var coord = $("#btgz").val()
lnggz = coord.split("_")[1]
ltgz = coord.split("_")[0]
st = coord.split("_")[2]
pr = coord.split("_")[3]
console.log("lng " + lnggz +  ' lat2 : ' + ltgz  )
//getstation(parseInt(lt),parseInt(lng))
})
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  lng =position.coords.longitude 
    console.log(position.coords.latitude + " " +  position.coords.longitude )
    lat = position.coords.latitude ;
}
function getstation(lt,lg){
  const map = new google.maps.Map(document.getElementById("map_canvas"), {
    center: { lat:33.5490143, lng:-7.6759489  },
    zoom: 13,
    mapTypeId: "roadmap",
  });
  new google.maps.Marker({
    position: { lat: lt, lng: lg },
    map,
    title: "Hello World!",
  });
}

  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;

  function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var chicago = new google.maps.LatLng(33.573038,-7.628285);
    var mapOptions = {
      zoom: 7,
      center: chicago
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    directionsDisplay.setMap(map);
    google.maps.event.addDomListener(document.getElementById('btgz'), 'click', calcRoute);
    google.maps.event.addDomListener(document.getElementById('btex'), 'click', calcRoute);
    google.maps.event.addDomListener(document.getElementById('btess'), 'click', calcRoute);


  }
var end,start
  function calcRoute(){
     start = new google.maps.LatLng(lat,lng);
    console.log("start :  " + start)
     end = new google.maps.LatLng(ltgz,lnggz);
    console.log("end :  " + end)

    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsDisplay.setOptions({
      draggable: false,
      suppressInfoWindows: false,
      suppressMarkers: true})

    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap(map);
      } else {
        alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
      }
    });
    const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    
    "</div>" +
    '<h4 id="firstHeading" class="firstHeading">'+ st + '</h4>' +
'<div style="background-color : #aadaff ; width : 100% ; height : 5px" ></div>' + 
'<div ><i class="fa fa-road" aria-hidden="true"></i>  distance : ' + parseFloat(calcCrow(lat,lng,ltgz,lnggz)).toFixed( 2 ) + 'km</div>'
+ '<div ><i class="fa fa-money" aria-hidden="true"></i>Price : '  +  pr + " DH" + '</div>'
+
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  function calcCrow(lat1, lon1, lat2, lon2) 
  {
    var R = 6371; // km
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);
  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
  }
    const marker = new google.maps.Marker({
      icon : "./assets/img/gazst.png/",
      position: new google.maps.LatLng(ltgz,lnggz),
      map,
      title: "Uluru (Ayers Rock)",
    });
      infowindow.open(map, marker);
    
    const marker2 = new google.maps.Marker({
      icon : "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png",
      position: new google.maps.LatLng(lat,lng),
      map,
      title: "Uluru (Ayers Rock)",
    });


  }

  google.maps.event.addDomListener(window, 'load', initialize);
/////////////////////////////////////////////////////////////////itenearaire/////////////////
/////////////////////////////////
////////////////


function calcCrow(lat1, lon1, lat2, lon2) 
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}
var lat22,lng22
function codeAddress(add) {
  var geocoder= new google.maps.Geocoder();
  geocoder.geocode( { 'address': add}, function(results, status) {
    if (status == 'OK') {
      lat = String(results[0].geometry.location)
      console.log(lat+ "------------" )
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

google.maps.event.addDomListener(window, 'load', function () {
  var places = new google.maps.places.Autocomplete(document.getElementById('txtFrom'));
  google.maps.event.addListener(places, 'place_changed', function () {
      var place = places.getPlace();
  });
  var places1 = new google.maps.places.Autocomplete(document.getElementById('txtTo'));
  google.maps.event.addListener(places1, 'place_changed', function () {
      var place1 = places1.getPlace();
  });
});
var waypts =[{ location: { lat:33.1090143, lng:-7.6759489  }, stopover: false}]
function calculateRoute(rootfrom, rootto) {
  // Center initialized to Naples, Italy
  var directionsService = new google.maps.DirectionsService();
  var directionsRequest = {
      origin: rootfrom,
      waypoints:waypts,
      destination: rootto,
      travelMode: google.maps.DirectionsTravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC
  };
  directionsService.route(
  directionsRequest,
  function (response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          new google.maps.DirectionsRenderer({
              map: map,
              directions: response
          });
      }
      else
          $("#lblError").append("Unable To Find Root");
  }
);
}
function calcCrow(lat1, lon1,waypoint) 
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}
$(document).ready(function () {
  // If the browser supports the Geolocation API
  if (typeof navigator.geolocation == "undefined") {
      $("#lblError").text("Your browser doesn't support the Geolocation API");
      return;
  }
  $("#sb").click(function (event) {
    codeAddress($("#txtFrom").val())
    /*
var station1 = firebase.database().ref('Casablanca/');

station1.on('value',(snapshot)=>{
    snapshot.forEach(function(snapshot1){
        snapshot1.forEach(function(snapshot2){
         snapshot2.forEach(function(snapshot3){


           if(snapshot2.key == formatDate()){
            gaz = snapshot2.val().gasoil
            spec = snapshot2.val().excellum
            ess = snapshot2.val().sans_plomb
          
           }
            else if(snapshot2.key == "coordonnee"){
if(calcCrow(lat,lng,snapshot2.val().lat,snapshot2.val().long)<mindist){
mindist = calcCrow(lat,lng,snapshot2.val().lat,snapshot2.val().long)
nearstation = snapshot1.key
}


            }
            
         })
         
            
          
          

        })
        
    })
   

})
      */

    console.log("clicked")
      event.preventDefault();
      calculateRoute($("#txtFrom").val(), $("#txtTo").val());
  });
});


/*
function initialize() {
  
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
 
}
/*
  directionsDisplay.setMap(map);

  //----------------------setting the places-------------------//
  /*
  const myLatLng = { lat: -25.363, lng: 131.044 };

   map = new google.maps.Map(document.getElementById("map_canvas"), {
    center: { lat:33.5827548, lng:-7.5610197  },
    zoom: 13,
    mapTypeId: "roadmap",
  });
  new google.maps.Marker({
    position: { lat: 33.5730338, lng: -7.6260965 },
    map,
    title: "Hello World!",
  });
  console.log("map : " +  map)
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
*/