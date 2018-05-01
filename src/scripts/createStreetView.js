const populateInfoWindow=(marker, infowindow)=>{
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
                        pitch: 10
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

export default populateInfoWindow;