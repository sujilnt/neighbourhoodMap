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
        let infowindow=new google.maps.InfoWindow();
        let  uluru = {
            lat: cordinate.latitude,
            lng: cordinate.longitude
        };
        var  map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: uluru
        });
        let service = new google.maps.places.PlacesService(map);
        var request = {
            location: uluru,
            radius: '1000',
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
                draggable: true,
                animation: google.maps.Animation.DROP,
                title: data.name,
                position: data.geometry.location
            });
            marker.addListener('click', function(value) {
                populateInfoWindow(this, infowindow);
            });
        }
        function populateInfoWindow(marker, infowindow) {
            // Check to make sure the infowindow is not already opened on this marker.
            if (infowindow.marker != marker) {
                infowindow.marker = marker;
                infowindow.setContent('');
                // Make sure the marker property is cleared if the infowindow is closed.
                infowindow.addListener('closeclick', function() {
                    InfoWindow.close();
                });
                const streetViewService = new google.maps.StreetViewService();
                const radius = 50;
                // In case the status is OK, which means the pano was found, compute the
                // position of the streetview image, then calculate the heading, then get a
                // panorama from that and set the options
                const getStreetView=function(data, status) {
                    if (status == google.maps.StreetViewStatus.OK) {
                        var nearStreetViewLocation = data.location.latLng;
                        var heading = google.maps.geometry.spherical.computeHeading(
                            nearStreetViewLocation, marker.position);
                        infowindow.setContent('<div class="markerTitleStyles">' + marker.title + '</div><div id="pano"></div>');
                        var panoramaOptions = {
                            position: nearStreetViewLocation,
                            pov: {
                                heading: 34,
                                pitch: 30
                            }
                        };
                        var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
                    } else {
                        infowindow.setContent('<div>' + marker.title + '</div>' + '<div>No Street View Found</div>');
                    }
                }
                // Use streetview service to get the closest streetview image within
                // 50 meters of the markers position
                streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
                console.log("streetviewservice",streetViewService);
                // Open the infowindow on the correct marker.
                infowindow.open(map, marker);
            }
        }
        var bounds = new google.maps.LatLngBounds();

    };
    // find the current location
    currentLocation();
}


window.initMap = initMap;


