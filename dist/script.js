/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loadMap = __webpack_require__(3);

var _loadMap2 = _interopRequireDefault(_loadMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = "successful ";
console.log("adding a change", a);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _categories = __webpack_require__(4);

var _categories2 = _interopRequireDefault(_categories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initMap() {
    //currentLocation() : - Its basically used to Identify thr User Location , it returns an Object.
    var currentLocation = function currentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                initMapLoad(position, position.coords);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };
    var initMapLoad = function initMapLoad(positionObj, cordinate) {
        var uluru = {
            lat: cordinate.latitude,
            lng: cordinate.longitude
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: uluru
        });
        var service = new google.maps.places.PlacesService(map);
        var request = {
            location: uluru,
            radius: '500',
            type: ['restaurant']
        };
        service.nearbySearch(request, callback);
        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    // adding markers to each element
                    createMarker(results[i]);
                }
            }
        }
        var createMarker = function createMarker(data) {
            var marker = new google.maps.Marker({
                map: map,
                icon: data.image,
                title: data.name,
                position: data.geometry.location
            });
            var infowindow = new google.maps.InfoWindow();
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent(data.name);
                infowindow.open(map, this);
            });
        };
        var bounds = new google.maps.LatLngBounds();
    };
    // find the current location
    currentLocation();
}

window.initMap = initMap;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dataApi = __webpack_require__(5);

var _dataApi2 = _interopRequireDefault(_dataApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categoryId = document.getElementById("categories");
var value = "<div class=\"cat\">Categories</div>\n            <div class=\"flex jc\">\n                <lable class=\"prel\" for=\"pub\" ><input class=\"checkBox\" type=\"checkbox\" value=\"pub\" id=\"pub\" onChanges=\"elementBind(this)\"><label for=\"pub\">pubs</label></lable>\n                <lable class=\"prel\" for=\"restaurants\"><input class=\"checkBox\" type=\"checkbox\" id=\"restaurants\" value=\"restaurants\" ><label for=\"restaurants\">Restaurants</label></lable>\n                <lable class=\"prel\" for=\"clubs\"><input class=\"checkBox\" type=\"checkbox\" id=\"clubs\"><label>clubs</label></lable>\n                <lable class=\"prel\" for=\"library\"><input class=\"checkBox\" type=\"checkbox\" id=\"library\"><label>Library</label></lable>\n            </div>\n";
categoryId.innerHTML = value;
categoryId.addEventListener("change", elementBind, false);

var checkBoxArr = [];
// adding one eventListener for all the checkboxes
function elementBind(e) {
    var eventtarget = e.target;
    if (eventtarget !== e.currentTarget) {
        if (eventtarget.checked) {
            checkBoxArr.push(eventtarget.id);
        } else {
            checkBoxArr.pop();
        }
    }
    e.stopPropagation();
    fetchingMapQuery(checkBoxArr);
};
var fetchingMapQuery = function fetchingMapQuery(arr) {
    console.log("array", arr);
};

exports.default = fetchingMapQuery();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var collectingData = function collectingData(data) {
    console.log("data", data);
};

var apiCallduringOnCheck = function apiCallduringOnCheck() {};

console.log(apiCallduringOnCheck);
console.log("called", apiCallduringOnCheck());

/***/ })
/******/ ]);