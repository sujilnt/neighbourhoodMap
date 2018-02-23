//import categories from "./categories.js";
const markers=[];
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
        let  uluru = {lat: cordinate.latitude, lng: cordinate.longitude};
        console.log(uluru);
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

    };
    // find the current location
    currentLocation();
}


window.initMap = initMap;


