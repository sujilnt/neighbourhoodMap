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

var _categories = __webpack_require__(4);

var _categories2 = _interopRequireDefault(_categories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = "successful ";
console.log("adding a change", a);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function initMap() {
    var google = window.google;
    var uluru = { lat: 51.4816, lng: -3.1791 };
    //° N, ° W
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14.5,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: { lat: 51.484135, lng: -3.169751 },
        map: map,
        title: "Cardiff School of Computer Science"
    });
}
window.initMap = initMap;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ })
/******/ ]);