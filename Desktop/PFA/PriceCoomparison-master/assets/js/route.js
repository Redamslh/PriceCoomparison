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