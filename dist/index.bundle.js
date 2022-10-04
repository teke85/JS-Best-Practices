"use strict";
(self["webpackChunkwebpack_boiler_plate"] = self["webpackChunkwebpack_boiler_plate"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background: #e5e7ed;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #414348;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 400px;\r\n  margin: 100px auto;\r\n  align-items: center;\r\n}\r\n\r\n/* stylelint-disable */\r\n.main-sec {\r\n  width: 550px;\r\n  padding: 10px;\r\n  border: 2px solid #041444;\r\n  border-radius: 10px;\r\n  background: linear-gradient(315deg, #dde0e8, #d3d5d8);\r\n}\r\n\r\nh1 {\r\n  font-size: 24px;\r\n  color: #041444;\r\n}\r\n\r\n#title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 50px;\r\n  padding: 0 10px;\r\n  border-radius: 10px 10px 0 0;\r\n  border-bottom: 3px solid #041444;\r\n}\r\n\r\n#title-icon,\r\n#add-icon,\r\n#item-icon {\r\n  cursor: pointer;\r\n  transition: 1s;\r\n}\r\n\r\n#add-icon:hover,\r\n#item-icon:hover {\r\n  transform: translateY(2px);\r\n}\r\n\r\n#input-area {\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 10px;\r\n  border-bottom: 2px solid #041444;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n  color: #041444;\r\n  font-size: 16px;\r\n}\r\n\r\ninput {\r\n  outline: none;\r\n  border: none;\r\n  background: transparent;\r\n  font-size: 16px;\r\n}\r\n\r\n#do-input {\r\n  width: 90%;\r\n}\r\n\r\n.list-task-item {\r\n  color: #041444;\r\n  font-weight: 500;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  accent-color: #0ac36a;\r\n  margin-right: 10px;\r\n}\r\n\r\ninput:checked + .task-item {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.list_div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: auto;\r\n  max-height: 400px;\r\n  overflow: scroll;\r\n  scroll-behavior: smooth;\r\n  scrollbar-color: #041444;\r\n  scrollbar-width: none; /* Firefox */\r\n  -ms-overflow-style: none; /* Internet Explorer 10+ */\r\n}\r\n\r\n.todo_list_div::-webkit-scrollbar {\r\n  /* WebKit */\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 50px;\r\n  padding: 0 10px;\r\n  border-bottom: 2px solid #041444;\r\n}\r\n\r\n.list-item-info {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 95%;\r\n}\r\n\r\n.bottom-sec {\r\n  display: flex;\r\n  height: 50px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n#clear {\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n}\r\n\r\n#clear:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.alert {\r\n  color: #db0505;\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n  margin: 25px 0;\r\n}\r\n\r\n.reset:hover {\r\n  -webkit-animation: rotate-center 0.6s ease-in-out both;\r\n  animation: rotate-center 0.6s ease-in-out both;\r\n}\r\n\r\n/* stylelint-enable */\r\n@-webkit-keyframes rotate-center {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate-center {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;;;EAGE,sBAAsB;EACtB,8BAA8B;EAC9B,kCAAkC;EAClC,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA,sBAAsB;AACtB;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,qDAAqD;AACvD;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,eAAe;EACf,4BAA4B;EAC5B,gCAAgC;AAClC;;AAEA;;;EAGE,eAAe;EACf,cAAc;AAChB;;AAEA;;EAEE,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,uBAAuB;EACvB,wBAAwB;EACxB,qBAAqB,EAAE,YAAY;EACnC,wBAAwB,EAAE,0BAA0B;AACtD;;AAEA;EACE,WAAW;EACX,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,sDAAsD;EACtD,8CAA8C;AAChD;;AAEA,qBAAqB;AACrB;EACE;IACE,4BAA4B;IAC5B,oBAAoB;EACtB;;EAEA;IACE,iCAAiC;IACjC,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,4BAA4B;IAC5B,oBAAoB;EACtB;;EAEA;IACE,iCAAiC;IACjC,yBAAyB;EAC3B;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background: #e5e7ed;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #414348;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 400px;\r\n  margin: 100px auto;\r\n  align-items: center;\r\n}\r\n\r\n/* stylelint-disable */\r\n.main-sec {\r\n  width: 550px;\r\n  padding: 10px;\r\n  border: 2px solid #041444;\r\n  border-radius: 10px;\r\n  background: linear-gradient(315deg, #dde0e8, #d3d5d8);\r\n}\r\n\r\nh1 {\r\n  font-size: 24px;\r\n  color: #041444;\r\n}\r\n\r\n#title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 50px;\r\n  padding: 0 10px;\r\n  border-radius: 10px 10px 0 0;\r\n  border-bottom: 3px solid #041444;\r\n}\r\n\r\n#title-icon,\r\n#add-icon,\r\n#item-icon {\r\n  cursor: pointer;\r\n  transition: 1s;\r\n}\r\n\r\n#add-icon:hover,\r\n#item-icon:hover {\r\n  transform: translateY(2px);\r\n}\r\n\r\n#input-area {\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 10px;\r\n  border-bottom: 2px solid #041444;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n  color: #041444;\r\n  font-size: 16px;\r\n}\r\n\r\ninput {\r\n  outline: none;\r\n  border: none;\r\n  background: transparent;\r\n  font-size: 16px;\r\n}\r\n\r\n#do-input {\r\n  width: 90%;\r\n}\r\n\r\n.list-task-item {\r\n  color: #041444;\r\n  font-weight: 500;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  accent-color: #0ac36a;\r\n  margin-right: 10px;\r\n}\r\n\r\ninput:checked + .task-item {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.list_div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: auto;\r\n  max-height: 400px;\r\n  overflow: scroll;\r\n  scroll-behavior: smooth;\r\n  scrollbar-color: #041444;\r\n  scrollbar-width: none; /* Firefox */\r\n  -ms-overflow-style: none; /* Internet Explorer 10+ */\r\n}\r\n\r\n.todo_list_div::-webkit-scrollbar {\r\n  /* WebKit */\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 50px;\r\n  padding: 0 10px;\r\n  border-bottom: 2px solid #041444;\r\n}\r\n\r\n.list-item-info {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 95%;\r\n}\r\n\r\n.bottom-sec {\r\n  display: flex;\r\n  height: 50px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n#clear {\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n}\r\n\r\n#clear:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.alert {\r\n  color: #db0505;\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n  margin: 25px 0;\r\n}\r\n\r\n.reset:hover {\r\n  -webkit-animation: rotate-center 0.6s ease-in-out both;\r\n  animation: rotate-center 0.6s ease-in-out both;\r\n}\r\n\r\n/* stylelint-enable */\r\n@-webkit-keyframes rotate-center {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate-center {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _icons_refresh_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/refresh.png */ "./src/icons/refresh.png");
/* harmony import */ var _icons_add_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/add.png */ "./src/icons/add.png");
/* harmony import */ var _modules_manageListItems_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/manageListItems.js */ "./src/modules/manageListItems.js");
/* harmony import */ var _modules_checkBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkBox.js */ "./src/modules/checkBox.js");
/* eslint-disable import/no-unresolved */






const titleSpan = document.getElementById('title-icon');
const addSpan = document.getElementById('add-icon');
const icon1 = new Image();
icon1.src = _icons_refresh_png__WEBPACK_IMPORTED_MODULE_1__;
icon1.classList.add('reset');
const icon2 = new Image();
icon2.src = _icons_add_png__WEBPACK_IMPORTED_MODULE_2__;
titleSpan.appendChild(icon1);
addSpan.appendChild(icon2);

_modules_manageListItems_js__WEBPACK_IMPORTED_MODULE_3__["default"].add();
_modules_manageListItems_js__WEBPACK_IMPORTED_MODULE_3__["default"].show();
_modules_manageListItems_js__WEBPACK_IMPORTED_MODULE_3__["default"].remove();
_modules_manageListItems_js__WEBPACK_IMPORTED_MODULE_3__["default"].edit();
_modules_manageListItems_js__WEBPACK_IMPORTED_MODULE_3__["default"].clear();
(0,_modules_checkBox_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
_modules_manageListItems_js__WEBPACK_IMPORTED_MODULE_3__["default"].reset();


/***/ }),

/***/ "./src/modules/checkBox.js":
/*!*********************************!*\
  !*** ./src/modules/checkBox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ check)
/* harmony export */ });
function check() {
  const inputChecks = document.querySelectorAll('.check');
  inputChecks.forEach((check) => {
    check.addEventListener('change', (e) => {
      let toDos = [];
      toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
      toDos.forEach((task) => {
        if (e.target.id === `input${task.index}` && task.completed === false) {
          task.completed = true;
          e.target.checked = true;
          localStorage.setItem('toDos', JSON.stringify(toDos));
        } else if (
          e.target.id === `input${task.index}`
          && task.completed === true
        ) {
          task.completed = false;
          e.target.checked = false;
          localStorage.setItem('toDos', JSON.stringify(toDos));
        }
      });
    });
  });
}


/***/ }),

/***/ "./src/modules/manageListItems.js":
/*!****************************************!*\
  !*** ./src/modules/manageListItems.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var _icons_delete_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/delete.png */ "./src/icons/delete.png");


const icon3 = new Image()
icon3.src = _icons_delete_png__WEBPACK_IMPORTED_MODULE_0__
const toDos = []

class ToDo {
  constructor(todo) {
    this.description = todo
    this.index = toDos.length + 1
    this.id = Date.now().toString()
    this.completed = false
  }

  static add() {
    const alert = document.querySelector('.alert')
    const addIcon = document.getElementById('add-icon')
    const doInput = document.getElementById('do-input')
    alert.style.display = 'none'
    addIcon.addEventListener('click', () => {
      let toDos = []
      toDos = JSON.parse(localStorage.getItem('toDos') || '[]')
      if (doInput.value !== '') {
        const newTask = new ToDo(doInput.value)
        toDos.push(newTask)
        toDos.forEach((task, i) => {
          task.index = i + 1
        })
        localStorage.setItem('toDos', JSON.stringify(toDos))
        doInput.value = ''
        window.location.reload()
      } else {
        alert.innerText = 'the input field is empty, kindly add some text!'
        alert.style.display = 'flex'
      }
    })
  }

  static show() {
    const todoList = document.getElementById('item-do-list')
    const toDos = JSON.parse(localStorage.getItem('toDos') || '[]')
    let inputCheck = ''
    todoList.innerHTML = ''
    toDos.forEach((task) => {
      if (task.completed === false) {
        inputCheck = ''
      } else {
        inputCheck = 'checked'
      }
      todoList.innerHTML += `
      <li>
        <div class="list-item-info">
          <input ${inputCheck} type="checkbox" class="check" id="input${task.index}">
          <input id="${task.index}" class="list-task-item" value="${task.description}">
        </div>
        <span id="item-icon">
          <img src="${icon3.src}" class="remove" id="${task.id}" alt="Remove Task" title="Remove Task">
        </span>
      </li>
      `
    })
  }

  static remove() {
    const removeIcon = document.querySelectorAll('.remove')
    removeIcon.forEach((icon) => {
      icon.addEventListener('click', (e) => {
        let toDos = JSON.parse(localStorage.getItem('toDos') || '[]')
        toDos = toDos.filter((task) => task.id !== e.target.id)
        toDos.forEach((task, i) => {
          task.index = i + 1
        })
        localStorage.setItem('toDos', JSON.stringify(toDos))
        window.location.reload()
      })
    })
  }

  static edit() {
    const taskItems = document.querySelectorAll('.list-task-item')
    taskItems.forEach((item) => {
      item.addEventListener('click', () => {
        item.style.background = '#ddd'
        item.setAttribute('contenteditable', 'true')
      })
      item.addEventListener('focusout', () => {
        const toDos = JSON.parse(localStorage.getItem('toDos') || '[]')
        item.style.background = 'none'
        toDos.forEach((task) => {
          if (task.index.toString() === item.id) {
            task.description = item.value
            localStorage.setItem('toDos', JSON.stringify(toDos))
          }
        })
      })
    })
  }

  static clear() {
    const clearButton = document.getElementById('clear')
    clearButton.addEventListener('click', (e) => {
      e.preventDefault()
      let toDos = JSON.parse(localStorage.getItem('toDos') || '[]')
      toDos = toDos.filter((task) => task.completed === false)
      localStorage.setItem('toDos', JSON.stringify(toDos))
      window.location.reload()
    })
  }

  static reset() {
    const resetButton = document.querySelector('.reset')
    const alert = document.querySelector('.alert')
    let toDos = JSON.parse(localStorage.getItem('toDos') || '[]')
    resetButton.addEventListener('click', () => {
      if (toDos === '') {
        alert.innerText = 'List is empty.'
        alert.style.display = 'flex'
      } else {
        // eslint-disable-next-line no-lonely-if, no-restricted-globals, no-alert
        if (
          confirm(
            'All items will be removed permanately. Would you still like to go ahead?'
          )
        ) {
          toDos = []
          localStorage.setItem('toDos', JSON.stringify(toDos))
          window.location.reload()
        }
      }
    })
  }
}


/***/ }),

/***/ "./src/icons/add.png":
/*!***************************!*\
  !*** ./src/icons/add.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a7464b9b7f4fb5e534a.png";

/***/ }),

/***/ "./src/icons/delete.png":
/*!******************************!*\
  !*** ./src/icons/delete.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd2eeae21d8405c05839.png";

/***/ }),

/***/ "./src/icons/refresh.png":
/*!*******************************!*\
  !*** ./src/icons/refresh.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bddde9e1f5c66280c436.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXItcGxhdGUvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVyLXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlci1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVyLXBsYXRlLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVyLXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVyLXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlci1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlci1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlci1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVyLXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXItcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXItcGxhdGUvLi9zcmMvbW9kdWxlcy9jaGVja0JveC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlci1wbGF0ZS8uL3NyYy9tb2R1bGVzL21hbmFnZUxpc3RJdGVtcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MjAwOzMwMDs0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlNWU3ZWQ7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICM0MTQzNDg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBtYXJnaW46IDEwMHB4IGF1dG87XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xcclxcbi5tYWluLXNlYyB7XFxyXFxuICB3aWR0aDogNTUwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzA0MTQ0NDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZGRlMGU4LCAjZDNkNWQ4KTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6ICMwNDE0NDQ7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzA0MTQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlLWljb24sXFxyXFxuI2FkZC1pY29uLFxcclxcbiNpdGVtLWljb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbiNhZGQtaWNvbjpob3ZlcixcXHJcXG4jaXRlbS1pY29uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXQtYXJlYSB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDQxNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjMDQxNDQ0O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbiNkby1pbnB1dCB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC10YXNrLWl0ZW0ge1xcclxcbiAgY29sb3I6ICMwNDE0NDQ7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXHJcXG4gIGFjY2VudC1jb2xvcjogIzBhYzM2YTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC50YXNrLWl0ZW0ge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5saXN0X2RpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBzY3JvbGxiYXItY29sb3I6ICMwNDE0NDQ7XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cXHJcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXFxyXFxufVxcclxcblxcclxcbi50b2RvX2xpc3RfZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAvKiBXZWJLaXQgKi9cXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDQxNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLXNlYyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbiNjbGVhcjpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0IHtcXHJcXG4gIGNvbG9yOiAjZGIwNTA1O1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIG1hcmdpbjogMjVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQ6aG92ZXIge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZS1jZW50ZXIgMC42cyBlYXNlLWluLW91dCBib3RoO1xcclxcbiAgYW5pbWF0aW9uOiByb3RhdGUtY2VudGVyIDAuNnMgZWFzZS1pbi1vdXQgYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xcclxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUtY2VudGVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1jZW50ZXIge1xcclxcbiAgMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUdFLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0FBQ2xDOztBQUVBOzs7RUFHRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixxQkFBcUIsRUFBRSxZQUFZO0VBQ25DLHdCQUF3QixFQUFFLDBCQUEwQjtBQUN0RDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNEQUFzRDtFQUN0RCw4Q0FBOEM7QUFDaEQ7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MjAwOzMwMDs0MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlNWU3ZWQ7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICM0MTQzNDg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBtYXJnaW46IDEwMHB4IGF1dG87XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xcclxcbi5tYWluLXNlYyB7XFxyXFxuICB3aWR0aDogNTUwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzA0MTQ0NDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZGRlMGU4LCAjZDNkNWQ4KTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6ICMwNDE0NDQ7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzA0MTQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlLWljb24sXFxyXFxuI2FkZC1pY29uLFxcclxcbiNpdGVtLWljb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbiNhZGQtaWNvbjpob3ZlcixcXHJcXG4jaXRlbS1pY29uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXQtYXJlYSB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDQxNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjMDQxNDQ0O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbiNkby1pbnB1dCB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC10YXNrLWl0ZW0ge1xcclxcbiAgY29sb3I6ICMwNDE0NDQ7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXHJcXG4gIGFjY2VudC1jb2xvcjogIzBhYzM2YTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC50YXNrLWl0ZW0ge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5saXN0X2RpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBzY3JvbGxiYXItY29sb3I6ICMwNDE0NDQ7XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cXHJcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXFxyXFxufVxcclxcblxcclxcbi50b2RvX2xpc3RfZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAvKiBXZWJLaXQgKi9cXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDQxNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLXNlYyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbiNjbGVhcjpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0IHtcXHJcXG4gIGNvbG9yOiAjZGIwNTA1O1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIG1hcmdpbjogMjVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQ6aG92ZXIge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZS1jZW50ZXIgMC42cyBlYXNlLWluLW91dCBib3RoO1xcclxcbiAgYW5pbWF0aW9uOiByb3RhdGUtY2VudGVyIDAuNnMgZWFzZS1pbi1vdXQgYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xcclxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUtY2VudGVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1jZW50ZXIge1xcclxcbiAgMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cclxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCB0aXRsZUljb24gZnJvbSAnLi9pY29ucy9yZWZyZXNoLnBuZyc7XHJcbmltcG9ydCBhZGRJY29uIGZyb20gJy4vaWNvbnMvYWRkLnBuZyc7XHJcbmltcG9ydCBUb0RvIGZyb20gJy4vbW9kdWxlcy9tYW5hZ2VMaXN0SXRlbXMuanMnO1xyXG5pbXBvcnQgY2hlY2sgZnJvbSAnLi9tb2R1bGVzL2NoZWNrQm94LmpzJztcclxuXHJcbmNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pY29uJyk7XHJcbmNvbnN0IGFkZFNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWljb24nKTtcclxuY29uc3QgaWNvbjEgPSBuZXcgSW1hZ2UoKTtcclxuaWNvbjEuc3JjID0gdGl0bGVJY29uO1xyXG5pY29uMS5jbGFzc0xpc3QuYWRkKCdyZXNldCcpO1xyXG5jb25zdCBpY29uMiA9IG5ldyBJbWFnZSgpO1xyXG5pY29uMi5zcmMgPSBhZGRJY29uO1xyXG50aXRsZVNwYW4uYXBwZW5kQ2hpbGQoaWNvbjEpO1xyXG5hZGRTcGFuLmFwcGVuZENoaWxkKGljb24yKTtcclxuXHJcblRvRG8uYWRkKCk7XHJcblRvRG8uc2hvdygpO1xyXG5Ub0RvLnJlbW92ZSgpO1xyXG5Ub0RvLmVkaXQoKTtcclxuVG9Eby5jbGVhcigpO1xyXG5jaGVjaygpO1xyXG5Ub0RvLnJlc2V0KCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrKCkge1xyXG4gIGNvbnN0IGlucHV0Q2hlY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XHJcbiAgaW5wdXRDaGVja3MuZm9yRWFjaCgoY2hlY2spID0+IHtcclxuICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgIGxldCB0b0RvcyA9IFtdO1xyXG4gICAgICB0b0RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9zJykgfHwgJ1tdJyk7XHJcbiAgICAgIHRvRG9zLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09IGBpbnB1dCR7dGFzay5pbmRleH1gICYmIHRhc2suY29tcGxldGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgZS50YXJnZXQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb3MnLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICBlLnRhcmdldC5pZCA9PT0gYGlucHV0JHt0YXNrLmluZGV4fWBcclxuICAgICAgICAgICYmIHRhc2suY29tcGxldGVkID09PSB0cnVlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgZS50YXJnZXQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9zJywgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHJlbW92ZUljb24gZnJvbSAnLi4vaWNvbnMvZGVsZXRlLnBuZydcclxuXHJcbmNvbnN0IGljb24zID0gbmV3IEltYWdlKClcclxuaWNvbjMuc3JjID0gcmVtb3ZlSWNvblxyXG5jb25zdCB0b0RvcyA9IFtdXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcclxuICBjb25zdHJ1Y3Rvcih0b2RvKSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdG9kb1xyXG4gICAgdGhpcy5pbmRleCA9IHRvRG9zLmxlbmd0aCArIDFcclxuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKClcclxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2VcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGQoKSB7XHJcbiAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpXHJcbiAgICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1pY29uJylcclxuICAgIGNvbnN0IGRvSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG8taW5wdXQnKVxyXG4gICAgYWxlcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgYWRkSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHRvRG9zID0gW11cclxuICAgICAgdG9Eb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvcycpIHx8ICdbXScpXHJcbiAgICAgIGlmIChkb0lucHV0LnZhbHVlICE9PSAnJykge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9Ebyhkb0lucHV0LnZhbHVlKVxyXG4gICAgICAgIHRvRG9zLnB1c2gobmV3VGFzaylcclxuICAgICAgICB0b0Rvcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XHJcbiAgICAgICAgICB0YXNrLmluZGV4ID0gaSArIDFcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvcycsIEpTT04uc3RyaW5naWZ5KHRvRG9zKSlcclxuICAgICAgICBkb0lucHV0LnZhbHVlID0gJydcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydC5pbm5lclRleHQgPSAndGhlIGlucHV0IGZpZWxkIGlzIGVtcHR5LCBraW5kbHkgYWRkIHNvbWUgdGV4dCEnXHJcbiAgICAgICAgYWxlcnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNob3coKSB7XHJcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRvLWxpc3QnKVxyXG4gICAgY29uc3QgdG9Eb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvcycpIHx8ICdbXScpXHJcbiAgICBsZXQgaW5wdXRDaGVjayA9ICcnXHJcbiAgICB0b2RvTGlzdC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgdG9Eb3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZiAodGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgaW5wdXRDaGVjayA9ICcnXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5wdXRDaGVjayA9ICdjaGVja2VkJ1xyXG4gICAgICB9XHJcbiAgICAgIHRvZG9MaXN0LmlubmVySFRNTCArPSBgXHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtLWluZm9cIj5cclxuICAgICAgICAgIDxpbnB1dCAke2lucHV0Q2hlY2t9IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tcIiBpZD1cImlucHV0JHt0YXNrLmluZGV4fVwiPlxyXG4gICAgICAgICAgPGlucHV0IGlkPVwiJHt0YXNrLmluZGV4fVwiIGNsYXNzPVwibGlzdC10YXNrLWl0ZW1cIiB2YWx1ZT1cIiR7dGFzay5kZXNjcmlwdGlvbn1cIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBpZD1cIml0ZW0taWNvblwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIke2ljb24zLnNyY31cIiBjbGFzcz1cInJlbW92ZVwiIGlkPVwiJHt0YXNrLmlkfVwiIGFsdD1cIlJlbW92ZSBUYXNrXCIgdGl0bGU9XCJSZW1vdmUgVGFza1wiPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgICAgYFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmUoKSB7XHJcbiAgICBjb25zdCByZW1vdmVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZScpXHJcbiAgICByZW1vdmVJY29uLmZvckVhY2goKGljb24pID0+IHtcclxuICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvRG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb3MnKSB8fCAnW10nKVxyXG4gICAgICAgIHRvRG9zID0gdG9Eb3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBlLnRhcmdldC5pZClcclxuICAgICAgICB0b0Rvcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XHJcbiAgICAgICAgICB0YXNrLmluZGV4ID0gaSArIDFcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvcycsIEpTT04uc3RyaW5naWZ5KHRvRG9zKSlcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZWRpdCgpIHtcclxuICAgIGNvbnN0IHRhc2tJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LXRhc2staXRlbScpXHJcbiAgICB0YXNrSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZCA9ICcjZGRkJ1xyXG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpXHJcbiAgICAgIH0pXHJcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9Eb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvcycpIHx8ICdbXScpXHJcbiAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ25vbmUnXHJcbiAgICAgICAgdG9Eb3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgaWYgKHRhc2suaW5kZXgudG9TdHJpbmcoKSA9PT0gaXRlbS5pZCkge1xyXG4gICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gaXRlbS52YWx1ZVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb3MnLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2xlYXIoKSB7XHJcbiAgICBjb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhcicpXHJcbiAgICBjbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICBsZXQgdG9Eb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvcycpIHx8ICdbXScpXHJcbiAgICAgIHRvRG9zID0gdG9Eb3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmNvbXBsZXRlZCA9PT0gZmFsc2UpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvcycsIEpTT04uc3RyaW5naWZ5KHRvRG9zKSlcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlc2V0KCkge1xyXG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKVxyXG4gICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKVxyXG4gICAgbGV0IHRvRG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb3MnKSB8fCAnW10nKVxyXG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0b0RvcyA9PT0gJycpIHtcclxuICAgICAgICBhbGVydC5pbm5lclRleHQgPSAnTGlzdCBpcyBlbXB0eS4nXHJcbiAgICAgICAgYWxlcnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lbHktaWYsIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscywgbm8tYWxlcnRcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjb25maXJtKFxyXG4gICAgICAgICAgICAnQWxsIGl0ZW1zIHdpbGwgYmUgcmVtb3ZlZCBwZXJtYW5hdGVseS4gV291bGQgeW91IHN0aWxsIGxpa2UgdG8gZ28gYWhlYWQ/J1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdG9Eb3MgPSBbXVxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9zJywgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKVxyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=