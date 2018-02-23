import categories from "./categories.js";
function initMap() {
    //currentLocation() : - Its basically used to Identify thr User Location , it returns an Object.
    const currentLocation=function(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
            initMapLoad(position,position.coords);
        });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };
    const initMapLoad=function(positionObj,cordinate){
        let  uluru = {
            lat: cordinate.latitude,
            lng: cordinate.longitude
        };
        var  map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: uluru
        });
        let service = new google.maps.places.PlacesService(map);
        var request = {
            location: uluru,
            radius: '500',
            type: ['restaurant']
        };
        service.nearbySearch(request, callback);
        function callback(results,status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    // adding markers to each element
                    createMarker(results[i]);
                }
            }
        }
        const createMarker=(data)=>{
            let  marker = new google.maps.Marker({
                map: map,
                icon: data.image,
                title: data.name,
                position: data.geometry.location
            });
            let infowindow=new google.maps.InfoWindow();
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(data.name);
                infowindow.open(map, this);
            });
        }
        var bounds = new google.maps.LatLngBounds();

    };
    // find the current location
    currentLocation();
}


window.initMap = initMap;


