function initMap() {
    const google=window.google;
    var uluru = {lat: 51.4816, lng: -3.1791};
    //° N, ° W
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14.5,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: {lat: 51.484135,lng:-3.169751},
        map: map,
        title:"Cardiff School of Computer Science"
    });
}
window.initMap = initMap;


