import populateInfoWindow from "./createStreetView.js";
const handlingRequerst = (map,uluru,keywordArray=['restaurants']) =>{
    let infowindow=new google.maps.InfoWindow();
    let service = new google.maps.places.PlacesService(map);
    var request = {
        location: uluru,
        radius: '1000',
        type: keywordArray
    };
    service.nearbySearch(request, callback);
    function callback(results,status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                // adding markers to each element
                createMarker(results[i],i,results);
            }
        }
    }
    const createMarker=(data,i,collectiondata)=>{
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
            console.log("this",this);
        });
    }

}

export default handlingRequerst;