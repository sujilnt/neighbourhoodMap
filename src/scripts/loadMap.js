import requesthandle from "./request.js";
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
    // find the current location
    currentLocation();
}
const initMapLoad=function(positionObj,cordinate){
    let  uluru = {
        lat: cordinate.latitude,
        lng: cordinate.longitude
    };
    var  map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    requesthandle(map,uluru);
    radioButtonfunction(map,uluru);
    var bounds = new google.maps.LatLngBounds();

};

const radioButtonfunction =function (map,uluru){
    const categoryId=document.getElementById("categories");
    let value=`<div class="cat">Categories</div>
            <div class="flex jc">
                <label class="prel" for="pub" ><input class="checkBox" name="query" type="radio" value="pub" id="pub" onChanges="elementBind(this)"><label for="pub">pubs</label></label>
                <label class="prel" for="restaurants"><input class="checkBox" name="query" type="radio" id="restaurants" value="restaurants" ><label for="restaurants">Restaurants</label></label>
                <label class="prel" for="clubs"><input class="checkBox" name="query" type="radio" id="clubs" value="clubs"><label>clubs</label></label>
                <label class="prel" for="library"><input class="checkBox" name="query" type="radio" id="library" value="library"><label>Library</label></label>
            </div>
`;
    categoryId.innerHTML=value;
    categoryId.addEventListener("change",elementBind,false);

    const checkBoxArr=[];
// adding one eventListener for all the checkboxes
    function elementBind(e){
        let eventtarget=e.target;
        if(eventtarget!== e.currentTarget){
            if(eventtarget.checked){
                checkBoxArr.push(eventtarget.id);
            }else{
                checkBoxArr.pop();
            }
        }
        e.stopPropagation();
        fetchingMapQuery(checkBoxArr);
    };
    const fetchingMapQuery=function(arr){
        var  map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: uluru
        });
        requesthandle(map,uluru,arr);
    }
}

window.initMap = initMap;


