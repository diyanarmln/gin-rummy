/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: pink;\n}\n\n.red {\n  color: red;\n}\n\n.card-topleft {\n  position: relative;\n  top: 0.2em;\n  left: 0.75em;\n}\n\n.card-bottomright {\n  position: relative;\n  bottom: -2.5em;\n  right: 0.6em;\n  transform: rotate(180deg);\n}\n\n.card-corner-rank,\n.card-corner-suit {\n  width: 1em;\n  text-align: center;\n  transform: translate(-50%, 0);\n}\n\n.suitSize {\n  font-size: 9px;\n}\n\n.card-back {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #eceee3;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\");\n  margin-right: calc(25px - var(--card-width));\n  float: left;\n  background-size: cover;\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  padding: 10px;\n}\n\n.card-container {\n  display: flex;\n  flex: 1 0 0;\n  overflow-x: hidden;\n  justify-content: center;\n}\n.card-container:last-child {\n  flex: 0 0 auto;\n}\n\n.card-deck {\n  margin: 10px 9px;\n  /* --card-width: 5em; */\n  border-style: solid;\n  border-color: #eceee3;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\");\n  /* margin-right: calc(25px - var(--card-width)); */\n  /* float: left; */\n  background-size: cover;\n  border-radius: 0.25em;\n  display: inline-block;\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  padding: 10px;\n}\n\n.playing-deck-container {\n  align-items: center;\n}\n\n.playing-deck-btn-container {\n  margin: 10px 50px;\n}\n\n.card-front {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #acc5c2;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  margin-right: calc(25px - var(--card-width));\n  float: left;\n  /* background-size: cover; */\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  padding: 10px;\n  z-index: 1;\n}\n\n.card {\n  background-color: white;\n}\n\n.deadwoodContainer {\n  text-align: end;\n}\n\n.discard-deck {\n  /* margin: 10px 9px; */\n  /* --card-width: 5em; */\n  /* border-style: solid;\n  border-color: #eceee3; */\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  /* margin-right: calc(25px - var(--card-width)); */\n  /* float: left; */\n  /* background-size: cover; */\n  /* border-radius: 0.25em;\n  display: inline-block;\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  padding: 10px; */\n  margin: 0px 50px;\n}\n\n.discard-card-front {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #acc5c2;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  /* margin-right: calc(25px - var(--card-width)); */\n  float: left;\n  /* background-size: cover; */\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  padding: 10px;\n  z-index: 1;\n}\n\n.btn {\n  /* font-size: 12px; */\n  /* display: inline-block; */\n  /* text-align: center; */\n  /* width: 35px; */\n  /* background-color: #2196f3; */\n  /* padding: 0px; */\n  /* color: antiquewhite; */\n  /* height: 25px; */\n  /* font-weight: bold; */\n  /* width: 26px; */\n  /* display: inline-flex; */\n  border-style: groove;\n  padding: 0.5em 1em;\n  /* border-radius: 1em; */\n  border-style: solid;\n}\n\n.gameHelpText {\n  text-align: center;\n  padding-bottom: 0.5em;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;;EAEE,UAAU;EACV,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,+BAA+B;EAC/B,qEAAqE;EACrE,4CAA4C;EAC5C,WAAW;EACX,sBAAsB;EACtB,qBAAqB;EACrB,2BAA2B;EAC3B,eAAe;EACf,eAAe;EACf,UAAU;EACV,aAAa;AACf;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,+BAA+B;EAC/B,qEAAqE;EACrE,kDAAkD;EAClD,iBAAiB;EACjB,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,eAAe;EACf,UAAU;EACV,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,+BAA+B;EAC/B,2EAA2E;EAC3E,4CAA4C;EAC5C,WAAW;EACX,4BAA4B;EAC5B,qBAAqB;EACrB,2BAA2B;EAC3B,eAAe;EACf,eAAe;EACf,UAAU;EACV,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB;0BACwB;EACxB,yBAAyB;EACzB,+BAA+B;EAC/B,2EAA2E;EAC3E,kDAAkD;EAClD,iBAAiB;EACjB,4BAA4B;EAC5B;;;;;kBAKgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,+BAA+B;EAC/B,2EAA2E;EAC3E,kDAAkD;EAClD,WAAW;EACX,4BAA4B;EAC5B,qBAAqB;EACrB,2BAA2B;EAC3B,eAAe;EACf,eAAe;EACf,UAAU;EACV,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,2BAA2B;EAC3B,wBAAwB;EACxB,iBAAiB;EACjB,+BAA+B;EAC/B,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;EACjB,0BAA0B;EAC1B,oBAAoB;EACpB,kBAAkB;EAClB,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB","sourcesContent":["body {\n  background-color: pink;\n}\n\n.red {\n  color: red;\n}\n\n.card-topleft {\n  position: relative;\n  top: 0.2em;\n  left: 0.75em;\n}\n\n.card-bottomright {\n  position: relative;\n  bottom: -2.5em;\n  right: 0.6em;\n  transform: rotate(180deg);\n}\n\n.card-corner-rank,\n.card-corner-suit {\n  width: 1em;\n  text-align: center;\n  transform: translate(-50%, 0);\n}\n\n.suitSize {\n  font-size: 9px;\n}\n\n.card-back {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #eceee3;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\");\n  margin-right: calc(25px - var(--card-width));\n  float: left;\n  background-size: cover;\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  padding: 10px;\n}\n\n.card-container {\n  display: flex;\n  flex: 1 0 0;\n  overflow-x: hidden;\n  justify-content: center;\n}\n.card-container:last-child {\n  flex: 0 0 auto;\n}\n\n.card-deck {\n  margin: 10px 9px;\n  /* --card-width: 5em; */\n  border-style: solid;\n  border-color: #eceee3;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\");\n  /* margin-right: calc(25px - var(--card-width)); */\n  /* float: left; */\n  background-size: cover;\n  border-radius: 0.25em;\n  display: inline-block;\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  padding: 10px;\n}\n\n.playing-deck-container {\n  align-items: center;\n}\n\n.playing-deck-btn-container {\n  margin: 10px 50px;\n}\n\n.card-front {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #acc5c2;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  margin-right: calc(25px - var(--card-width));\n  float: left;\n  /* background-size: cover; */\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  padding: 10px;\n  z-index: 1;\n}\n\n.card {\n  background-color: white;\n}\n\n.deadwoodContainer {\n  text-align: end;\n}\n\n.discard-deck {\n  /* margin: 10px 9px; */\n  /* --card-width: 5em; */\n  /* border-style: solid;\n  border-color: #eceee3; */\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  /* margin-right: calc(25px - var(--card-width)); */\n  /* float: left; */\n  /* background-size: cover; */\n  /* border-radius: 0.25em;\n  display: inline-block;\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  padding: 10px; */\n  margin: 0px 50px;\n}\n\n.discard-card-front {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #acc5c2;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  /* margin-right: calc(25px - var(--card-width)); */\n  float: left;\n  /* background-size: cover; */\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  padding: 10px;\n  z-index: 1;\n}\n\n.btn {\n  /* font-size: 12px; */\n  /* display: inline-block; */\n  /* text-align: center; */\n  /* width: 35px; */\n  /* background-color: #2196f3; */\n  /* padding: 0px; */\n  /* color: antiquewhite; */\n  /* height: 25px; */\n  /* font-weight: bold; */\n  /* width: 26px; */\n  /* display: inline-flex; */\n  border-style: groove;\n  padding: 0.5em 1em;\n  /* border-radius: 1em; */\n  border-style: solid;\n}\n\n.gameHelpText {\n  text-align: center;\n  padding-bottom: 0.5em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
// import './styles.css';

/*
 * ========================================================
 * ========================================================
 * ========================================================
 * ========================================================
 *
 *                  DOM Creation Functions
 *
 * ========================================================
 * ========================================================
 * ========================================================
 */
var createContainer = function createContainer(containerId, containerColor) {
  var newDiv = document.createElement('div');
  newDiv.id = containerId;
  newDiv.style.backgroundColor = containerColor; // document.body.appendChild(newDiv);

  return newDiv;
};

var createLabel = function createLabel(labelFor, labelText) {
  var newLabel = document.createElement('label');
  newLabel["for"] = labelFor;
  newLabel.innerText = labelText;
  return newLabel;
};

var createInput = function createInput(inputType, inputName, inputValue, inputRequired) {
  var newInput = document.createElement('input');
  newInput.type = inputType;
  newInput.id = inputName;
  newInput.name = inputName;
  newInput.value = inputValue;
  newInput.required = inputRequired;
  return newInput;
};

var createButton = function createButton(btnId, btnText, btnCallback) {
  var newBtn = document.createElement('button');
  newBtn.id = btnId;
  newBtn.innerText = btnText;
  newBtn.addEventListener('click', btnCallback);
  return newBtn;
};

var showCard = function showCard(card) {
  var cardDiv = createContainer('cardDiv', 'white');
  cardDiv.classList.add('card-front');
  var cardElement = document.createElement('div', 'white');
  cardDiv.appendChild(cardElement);
  var colorClass = card.suitColour; // --- show card details in top left corner of card

  var suitNameTop = document.createElement('div');
  suitNameTop.classList.add('card-topleft');
  cardElement.appendChild(suitNameTop);
  var cardNameTop = document.createElement('div');
  cardNameTop.innerText = card.displayName;
  cardNameTop.classList.add('card-corner-rank', "".concat(colorClass));
  suitNameTop.appendChild(cardNameTop);
  var cardSuitTop = document.createElement('div');
  cardSuitTop.classList.add('card-corner-suit', 'suitSize');
  cardSuitTop.innerText = card.suitSymbol;
  suitNameTop.appendChild(cardSuitTop); // === show card details in bottom right corner of card

  var suitNameBottom = document.createElement('div');
  suitNameBottom.classList.add('card-bottomright');
  cardElement.appendChild(suitNameBottom);
  var cardNameBottom = document.createElement('div');
  cardNameBottom.innerText = card.displayName;
  cardNameBottom.classList.add('card-corner-rank', "".concat(colorClass));
  suitNameBottom.appendChild(cardNameBottom);
  var cardSuitBottom = document.createElement('div');
  cardSuitBottom.classList.add('card-corner-suit', 'suitSize');
  cardSuitBottom.innerText = card.suitSymbol;
  suitNameBottom.appendChild(cardSuitBottom);
  cardElement.classList.add('card');
  return cardDiv;
};
/*
 * ========================================================
 * ========================================================
 * ========================================================
 * ========================================================
 *
 *                  DOM Elements
 *
 * ========================================================
 * ========================================================
 * ========================================================
 */

/*
 * ========================================================
 * ========================================================
 * ========================================================
 * ========================================================
 *
 *                  Game Helper Functions
 *
 * ========================================================
 * ========================================================
 * ========================================================
 */


var gameContainer = document.getElementById('game-container');

var initGameBoardDom = function initGameBoardDom(gameData) {
  var boardUpperSection = createContainer('boardUpperSection', 'blue');
  var boardMiddleSection = createContainer('boardMiddleSection', 'green');
  var boardBottomSection = createContainer('boardBottomSection', 'pink');
  var boardGameHelpText = createContainer('boardGameHelpText', 'green'); // upper section of game board

  var opponentHandContainer = createContainer('opponentHandContainer', 'yellow');
  opponentHandContainer.classList.add('card-container', 'hand-position');
  boardUpperSection.appendChild(opponentHandContainer);

  for (var i = 0; i < 10; i += 1) {
    var cardBack = createContainer('cardBack');
    cardBack.classList.add('card-back');
    opponentHandContainer.appendChild(cardBack);
  } // middle section of game board


  var gameFunctionsContainer = createContainer('gameFunctionsContainer');
  gameFunctionsContainer.classList.add('card-container', 'playing-deck-container');
  boardMiddleSection.appendChild(gameFunctionsContainer);
  var leftButtonContainer = createContainer('leftButtonContainer', 'beige');
  leftButtonContainer.classList.add('playing-deck-btn-container');
  var ginBtn = createButton('ginBtn', 'Gin');
  ginBtn.classList.add('btn');
  leftButtonContainer.appendChild(ginBtn);
  var rightButtoncontainer = createContainer('rightButtoncontainer', 'beige');
  rightButtoncontainer.classList.add('playing-deck-btn-container');
  var passBtn = createButton('passBtn', 'Pass');
  passBtn.classList.add('btn');
  rightButtoncontainer.appendChild(passBtn);
  gameFunctionsContainer.appendChild(leftButtonContainer);
  var playingDeck = createContainer('cardBack');
  playingDeck.classList.add('card-deck');
  gameFunctionsContainer.appendChild(playingDeck);
  var discardPile = createContainer('discardPile');
  discardPile.classList.add('discard-deck');
  discardPile.style.marginRight = 0;
  var discardCardForPicking = showCard(gameData.discardCardForPicking);
  discardCardForPicking.classList.remove('card-front');
  discardCardForPicking.classList.add('discard-card-front');
  gameFunctionsContainer.appendChild(discardPile);
  discardPile.appendChild(discardCardForPicking);
  gameFunctionsContainer.appendChild(rightButtoncontainer); // game help text container

  var gameHelpText = createContainer('gameHelpText');
  gameHelpText.innerText = 'test';
  gameHelpText.classList.add('gameHelpText');
  boardGameHelpText.appendChild(gameHelpText); // bottom section of game board

  var playerHandContainer = createContainer('playerHandContainer', 'yellow');
  playerHandContainer.classList.add('card-container');
  boardBottomSection.appendChild(playerHandContainer);
  var playerHand = gameData.playerHand[1];

  for (var _i = 0; _i < playerHand.length; _i += 1) {
    var cardFront = showCard(playerHand[_i]);
    playerHandContainer.appendChild(cardFront);
  }

  var deadwoodCounter = createContainer('deadwoodCounter');
  deadwoodCounter.innerText = "Deadwood: ".concat(gameData.playerDeadwood[1]);
  deadwoodCounter.classList.add('deadwoodContainer');
  boardBottomSection.appendChild(deadwoodCounter);
  gameContainer.appendChild(boardUpperSection);
  gameContainer.appendChild(boardMiddleSection);
  gameContainer.appendChild(boardGameHelpText);
  gameContainer.appendChild(boardBottomSection);
};

var createGame = function createGame() {
  // Make a request to create a new game
  axios.post('/games').then(function (response) {
    // set the global value to the new game.
    currentGame = response.data;
    console.log(response); // display it out to the user
    // runGame(currentGame);

    initGameBoardDom(currentGame);
    createGameBtn.remove();
  })["catch"](function (error) {
    // handle error
    console.log(error);
  });
}; // webpack
// disable and hide buttons by default
// create game
// show pass button
// enable pass button
// pass button
// hide pass button
// computer turn
// random action to pass or not (run draw deck or drawdiscard callback to controller)
// player turn
// enable draw deck
// enable draw discard
// click draw deck
// add card to player hand (controller)
// enable discard of cards from hand
// disable draw deck
// disable draw discard
// computer turn
// random action to draw from deck or discard
// discard highest from deadwood
// check deadwood value 
// enable/show gin if deadwood.length = 1
// enable/show big gin if deadwood.length = 0
// enable/show knock if deadwood sum <= 10
// click drawDiscard
// add card to player hand (controller)
// enable discard of cards from hand
// disable draw deck
// disable draw discard
// computer turn
// random action to draw from deck or discard
// discard highest from deadwood
// check deadwood value 
// enable/show gin if deadwood.length = 1
// enable/show big gin if deadwood.length = 0
// enable/show knock if deadwood sum <= 10
// click discardFromHand
// push to discard pile (controller)
// disable discardFromHand
// recalculate deadwood
// other player turn
// enable draw deck
// enable draw discard
// click gin / big gin
// discard if gin and recalculate deadwood value
// add to player score (contoller)
// check if playerScore above 100 => endGame, show winner, update winner record
// else
// initialise new round (controller)
// create round
// click knock
// calculate player score from deadwood
// check if playerScore above 100 => endGame, show winner, update winner record
// else
// initialise new round (controller)
// create round

/*
 * ========================================================
 * ========================================================
 * ========================================================
 * ========================================================
 *
 *                  Initial Screen
 *
 * ========================================================
 * ========================================================
 * ========================================================
 */


var createGameBtn = createButton('createGameBtn', 'createGameBtn', createGame);
document.body.appendChild(createGameBtn);
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpbnJ1bW15Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dpbnJ1bW15Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dpbnJ1bW15Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dpbnJ1bW15Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dpbnJ1bW15Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9naW5ydW1teS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9naW5ydW1teS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9naW5ydW1teS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9naW5ydW1teS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dpbnJ1bW15Ly4vc3JjL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9naW5ydW1teS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcbi5yZWQge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmNhcmQtdG9wbGVmdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuMmVtO1xcbiAgbGVmdDogMC43NWVtO1xcbn1cXG5cXG4uY2FyZC1ib3R0b21yaWdodCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IC0yLjVlbTtcXG4gIHJpZ2h0OiAwLjZlbTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5jYXJkLWNvcm5lci1yYW5rLFxcbi5jYXJkLWNvcm5lci1zdWl0IHtcXG4gIHdpZHRoOiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG59XFxuXFxuLnN1aXRTaXplIHtcXG4gIGZvbnQtc2l6ZTogOXB4O1xcbn1cXG5cXG4uY2FyZC1iYWNrIHtcXG4gIG1hcmdpbjogMTBweCA5cHg7XFxuICAtLWNhcmQtd2lkdGg6IDVlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNlY2VlZTM7XFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTtcXG4gIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAwIDA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNhcmQtY29udGFpbmVyOmxhc3QtY2hpbGQge1xcbiAgZmxleDogMCAwIGF1dG87XFxufVxcblxcbi5jYXJkLWRlY2sge1xcbiAgbWFyZ2luOiAxMHB4IDlweDtcXG4gIC8qIC0tY2FyZC13aWR0aDogNWVtOyAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogI2VjZWVlMztcXG4gIC8qIGJvcmRlci13aWR0aDogMC41cHg7ICovXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYzU2Yzg2OyAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3dhbGxwYXBlcmFjY2Vzcy5jb20vZnVsbC8xODAwNDUxLmpwZ1xcXCIpO1xcbiAgLyogbWFyZ2luLXJpZ2h0OiBjYWxjKDI1cHggLSB2YXIoLS1jYXJkLXdpZHRoKSk7ICovXFxuICAvKiBmbG9hdDogbGVmdDsgKi9cXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4taGVpZ2h0OiA3ZW07XFxuICBtYXgtaGVpZ2h0OiA3ZW07XFxuICB3aWR0aDogNWVtO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnBsYXlpbmctZGVjay1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXlpbmctZGVjay1idG4tY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMTBweCA1MHB4O1xcbn1cXG5cXG4uY2FyZC1mcm9udCB7XFxuICBtYXJnaW46IDEwcHggOXB4O1xcbiAgLS1jYXJkLXdpZHRoOiA1ZW07XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjYWNjNWMyO1xcbiAgLyogYm9yZGVyLXdpZHRoOiAwLjVweDsgKi9cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNjNTZjODY7ICovXFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd2FsbHBhcGVyYWNjZXNzLmNvbS9mdWxsLzE4MDA0NTEuanBnXFxcIik7ICovXFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoMjVweCAtIHZhcigtLWNhcmQtd2lkdGgpKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cXG4gIG1pbi1oZWlnaHQ6IDdlbTtcXG4gIG1heC1oZWlnaHQ6IDdlbTtcXG4gIHdpZHRoOiA1ZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5kZWFkd29vZENvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5kaXNjYXJkLWRlY2sge1xcbiAgLyogbWFyZ2luOiAxMHB4IDlweDsgKi9cXG4gIC8qIC0tY2FyZC13aWR0aDogNWVtOyAqL1xcbiAgLyogYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogI2VjZWVlMzsgKi9cXG4gIC8qIGJvcmRlci13aWR0aDogMC41cHg7ICovXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYzU2Yzg2OyAqL1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3dhbGxwYXBlcmFjY2Vzcy5jb20vZnVsbC8xODAwNDUxLmpwZ1xcXCIpOyAqL1xcbiAgLyogbWFyZ2luLXJpZ2h0OiBjYWxjKDI1cHggLSB2YXIoLS1jYXJkLXdpZHRoKSk7ICovXFxuICAvKiBmbG9hdDogbGVmdDsgKi9cXG4gIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXFxuICAvKiBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4taGVpZ2h0OiA3ZW07XFxuICBtYXgtaGVpZ2h0OiA3ZW07XFxuICB3aWR0aDogNWVtO1xcbiAgcGFkZGluZzogMTBweDsgKi9cXG4gIG1hcmdpbjogMHB4IDUwcHg7XFxufVxcblxcbi5kaXNjYXJkLWNhcmQtZnJvbnQge1xcbiAgbWFyZ2luOiAxMHB4IDlweDtcXG4gIC0tY2FyZC13aWR0aDogNWVtO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogI2FjYzVjMjtcXG4gIC8qIGJvcmRlci13aWR0aDogMC41cHg7ICovXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYzU2Yzg2OyAqL1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3dhbGxwYXBlcmFjY2Vzcy5jb20vZnVsbC8xODAwNDUxLmpwZ1xcXCIpOyAqL1xcbiAgLyogbWFyZ2luLXJpZ2h0OiBjYWxjKDI1cHggLSB2YXIoLS1jYXJkLXdpZHRoKSk7ICovXFxuICBmbG9hdDogbGVmdDtcXG4gIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXFxuICBtaW4taGVpZ2h0OiA3ZW07XFxuICBtYXgtaGVpZ2h0OiA3ZW07XFxuICB3aWR0aDogNWVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5idG4ge1xcbiAgLyogZm9udC1zaXplOiAxMnB4OyAqL1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgLyogd2lkdGg6IDM1cHg7ICovXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyAqL1xcbiAgLyogcGFkZGluZzogMHB4OyAqL1xcbiAgLyogY29sb3I6IGFudGlxdWV3aGl0ZTsgKi9cXG4gIC8qIGhlaWdodDogMjVweDsgKi9cXG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xcbiAgLyogd2lkdGg6IDI2cHg7ICovXFxuICAvKiBkaXNwbGF5OiBpbmxpbmUtZmxleDsgKi9cXG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgLyogYm9yZGVyLXJhZGl1czogMWVtOyAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuLmdhbWVIZWxwVGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IscUVBQXFFO0VBQ3JFLDRDQUE0QztFQUM1QyxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IscUVBQXFFO0VBQ3JFLGtEQUFrRDtFQUNsRCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsMkVBQTJFO0VBQzNFLDRDQUE0QztFQUM1QyxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCOzBCQUN3QjtFQUN4Qix5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLDJFQUEyRTtFQUMzRSxrREFBa0Q7RUFDbEQsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1Qjs7Ozs7a0JBS2dCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLDJFQUEyRTtFQUMzRSxrREFBa0Q7RUFDbEQsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtFQUNWLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG5cXG4ucmVkIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5jYXJkLXRvcGxlZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwLjJlbTtcXG4gIGxlZnQ6IDAuNzVlbTtcXG59XFxuXFxuLmNhcmQtYm90dG9tcmlnaHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAtMi41ZW07XFxuICByaWdodDogMC42ZW07XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uY2FyZC1jb3JuZXItcmFuayxcXG4uY2FyZC1jb3JuZXItc3VpdCB7XFxuICB3aWR0aDogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxufVxcblxcbi5zdWl0U2l6ZSB7XFxuICBmb250LXNpemU6IDlweDtcXG59XFxuXFxuLmNhcmQtYmFjayB7XFxuICBtYXJnaW46IDEwcHggOXB4O1xcbiAgLS1jYXJkLXdpZHRoOiA1ZW07XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjZWNlZWUzO1xcbiAgLyogYm9yZGVyLXdpZHRoOiAwLjVweDsgKi9cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNjNTZjODY7ICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd2FsbHBhcGVyYWNjZXNzLmNvbS9mdWxsLzE4MDA0NTEuanBnXFxcIik7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoMjVweCAtIHZhcigtLWNhcmQtd2lkdGgpKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cXG4gIG1pbi1oZWlnaHQ6IDdlbTtcXG4gIG1heC1oZWlnaHQ6IDdlbTtcXG4gIHdpZHRoOiA1ZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jYXJkLWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG5cXG4uY2FyZC1kZWNrIHtcXG4gIG1hcmdpbjogMTBweCA5cHg7XFxuICAvKiAtLWNhcmQtd2lkdGg6IDVlbTsgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNlY2VlZTM7XFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTtcXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgLyogZmxvYXQ6IGxlZnQ7ICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wbGF5aW5nLWRlY2stY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5aW5nLWRlY2stYnRuLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDEwcHggNTBweDtcXG59XFxuXFxuLmNhcmQtZnJvbnQge1xcbiAgbWFyZ2luOiAxMHB4IDlweDtcXG4gIC0tY2FyZC13aWR0aDogNWVtO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogI2FjYzVjMjtcXG4gIC8qIGJvcmRlci13aWR0aDogMC41cHg7ICovXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYzU2Yzg2OyAqL1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3dhbGxwYXBlcmFjY2Vzcy5jb20vZnVsbC8xODAwNDUxLmpwZ1xcXCIpOyAqL1xcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKDI1cHggLSB2YXIoLS1jYXJkLXdpZHRoKSk7XFxuICBmbG9hdDogbGVmdDtcXG4gIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXFxuICBtaW4taGVpZ2h0OiA3ZW07XFxuICBtYXgtaGVpZ2h0OiA3ZW07XFxuICB3aWR0aDogNWVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGVhZHdvb2RDb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4uZGlzY2FyZC1kZWNrIHtcXG4gIC8qIG1hcmdpbjogMTBweCA5cHg7ICovXFxuICAvKiAtLWNhcmQtd2lkdGg6IDVlbTsgKi9cXG4gIC8qIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNlY2VlZTM7ICovXFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTsgKi9cXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgLyogZmxvYXQ6IGxlZnQ7ICovXFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgLyogYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIHBhZGRpbmc6IDEwcHg7ICovXFxuICBtYXJnaW46IDBweCA1MHB4O1xcbn1cXG5cXG4uZGlzY2FyZC1jYXJkLWZyb250IHtcXG4gIG1hcmdpbjogMTBweCA5cHg7XFxuICAtLWNhcmQtd2lkdGg6IDVlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNhY2M1YzI7XFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTsgKi9cXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYnRuIHtcXG4gIC8qIGZvbnQtc2l6ZTogMTJweDsgKi9cXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gIC8qIHdpZHRoOiAzNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgKi9cXG4gIC8qIHBhZGRpbmc6IDBweDsgKi9cXG4gIC8qIGNvbG9yOiBhbnRpcXVld2hpdGU7ICovXFxuICAvKiBoZWlnaHQ6IDI1cHg7ICovXFxuICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cXG4gIC8qIHdpZHRoOiAyNnB4OyAqL1xcbiAgLyogZGlzcGxheTogaW5saW5lLWZsZXg7ICovXFxuICBib3JkZXItc3R5bGU6IGdyb292ZTtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gIC8qIGJvcmRlci1yYWRpdXM6IDFlbTsgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcblxcbi5nYW1lSGVscFRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbi8qXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqICAgICAgICAgICAgICAgICAgRE9NIENyZWF0aW9uIEZ1bmN0aW9uc1xuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoY29udGFpbmVySWQsIGNvbnRhaW5lckNvbG9yKSA9PiB7XG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdEaXYuaWQgPSBjb250YWluZXJJZDtcbiAgbmV3RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbnRhaW5lckNvbG9yO1xuICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gIHJldHVybiBuZXdEaXY7XG59O1xuXG5jb25zdCBjcmVhdGVMYWJlbCA9IChsYWJlbEZvciwgbGFiZWxUZXh0KSA9PiB7XG4gIGNvbnN0IG5ld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbmV3TGFiZWwuZm9yID0gbGFiZWxGb3I7XG4gIG5ld0xhYmVsLmlubmVyVGV4dCA9IGxhYmVsVGV4dDtcbiAgcmV0dXJuIG5ld0xhYmVsO1xufTtcblxuY29uc3QgY3JlYXRlSW5wdXQgPSAoaW5wdXRUeXBlLCBpbnB1dE5hbWUsIGlucHV0VmFsdWUsIGlucHV0UmVxdWlyZWQpID0+IHtcbiAgY29uc3QgbmV3SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuZXdJbnB1dC50eXBlID0gaW5wdXRUeXBlO1xuICBuZXdJbnB1dC5pZCA9IGlucHV0TmFtZTtcbiAgbmV3SW5wdXQubmFtZSA9IGlucHV0TmFtZTtcbiAgbmV3SW5wdXQudmFsdWUgPSBpbnB1dFZhbHVlO1xuICBuZXdJbnB1dC5yZXF1aXJlZCA9IGlucHV0UmVxdWlyZWQ7XG4gIHJldHVybiBuZXdJbnB1dDtcbn07XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChidG5JZCwgYnRuVGV4dCwgYnRuQ2FsbGJhY2spID0+IHtcbiAgY29uc3QgbmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld0J0bi5pZCA9IGJ0bklkO1xuICBuZXdCdG4uaW5uZXJUZXh0ID0gYnRuVGV4dDtcbiAgbmV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuQ2FsbGJhY2spO1xuICByZXR1cm4gbmV3QnRuO1xufTtcblxuY29uc3Qgc2hvd0NhcmQgPSAoY2FyZCkgPT4ge1xuXG4gIGNvbnN0IGNhcmREaXYgPSBjcmVhdGVDb250YWluZXIoJ2NhcmREaXYnLCAnd2hpdGUnKTtcbiAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250Jyk7XG5cbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnLCAnd2hpdGUnKTtcbiAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkRWxlbWVudCk7XG4gIGNvbnN0IGNvbG9yQ2xhc3MgPSBjYXJkLnN1aXRDb2xvdXI7XG5cbiAgLy8gLS0tIHNob3cgY2FyZCBkZXRhaWxzIGluIHRvcCBsZWZ0IGNvcm5lciBvZiBjYXJkXG5cbiAgY29uc3Qgc3VpdE5hbWVUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VpdE5hbWVUb3AuY2xhc3NMaXN0LmFkZCgnY2FyZC10b3BsZWZ0Jyk7XG4gIGNhcmRFbGVtZW50LmFwcGVuZENoaWxkKHN1aXROYW1lVG9wKTtcblxuICBjb25zdCBjYXJkTmFtZVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkTmFtZVRvcC5pbm5lclRleHQgPSBjYXJkLmRpc3BsYXlOYW1lO1xuICBjYXJkTmFtZVRvcC5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvcm5lci1yYW5rJywgYCR7Y29sb3JDbGFzc31gKTtcbiAgc3VpdE5hbWVUb3AuYXBwZW5kQ2hpbGQoY2FyZE5hbWVUb3ApO1xuXG4gIGNvbnN0IGNhcmRTdWl0VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRTdWl0VG9wLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29ybmVyLXN1aXQnLCAnc3VpdFNpemUnKTtcbiAgY2FyZFN1aXRUb3AuaW5uZXJUZXh0ID0gY2FyZC5zdWl0U3ltYm9sO1xuICBzdWl0TmFtZVRvcC5hcHBlbmRDaGlsZChjYXJkU3VpdFRvcCk7XG5cbiAgLy8gPT09IHNob3cgY2FyZCBkZXRhaWxzIGluIGJvdHRvbSByaWdodCBjb3JuZXIgb2YgY2FyZFxuXG4gIGNvbnN0IHN1aXROYW1lQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN1aXROYW1lQm90dG9tLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm90dG9tcmlnaHQnKTtcbiAgY2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VpdE5hbWVCb3R0b20pO1xuXG4gIGNvbnN0IGNhcmROYW1lQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmROYW1lQm90dG9tLmlubmVyVGV4dCA9IGNhcmQuZGlzcGxheU5hbWU7XG4gIGNhcmROYW1lQm90dG9tLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29ybmVyLXJhbmsnLCBgJHtjb2xvckNsYXNzfWApO1xuICBzdWl0TmFtZUJvdHRvbS5hcHBlbmRDaGlsZChjYXJkTmFtZUJvdHRvbSk7XG5cbiAgY29uc3QgY2FyZFN1aXRCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZFN1aXRCb3R0b20uY2xhc3NMaXN0LmFkZCgnY2FyZC1jb3JuZXItc3VpdCcsICdzdWl0U2l6ZScpO1xuICBjYXJkU3VpdEJvdHRvbS5pbm5lclRleHQgPSBjYXJkLnN1aXRTeW1ib2w7XG4gIHN1aXROYW1lQm90dG9tLmFwcGVuZENoaWxkKGNhcmRTdWl0Qm90dG9tKTtcblxuICBjYXJkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgcmV0dXJuIGNhcmREaXY7XG5cbn07XG5cbi8qXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqICAgICAgICAgICAgICAgICAgRE9NIEVsZW1lbnRzXG4gKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cblxuXG4vKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiAgICAgICAgICAgICAgICAgIEdhbWUgSGVscGVyIEZ1bmN0aW9uc1xuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY29udGFpbmVyJylcblxuXG5jb25zdCBpbml0R2FtZUJvYXJkRG9tID0gKGdhbWVEYXRhKSA9PiB7XG5cbiAgY29uc3QgYm9hcmRVcHBlclNlY3Rpb24gPSBjcmVhdGVDb250YWluZXIoJ2JvYXJkVXBwZXJTZWN0aW9uJywgJ2JsdWUnKTtcbiAgY29uc3QgYm9hcmRNaWRkbGVTZWN0aW9uID0gY3JlYXRlQ29udGFpbmVyKCdib2FyZE1pZGRsZVNlY3Rpb24nLCAnZ3JlZW4nKTtcbiAgY29uc3QgYm9hcmRCb3R0b21TZWN0aW9uID0gY3JlYXRlQ29udGFpbmVyKCdib2FyZEJvdHRvbVNlY3Rpb24nLCAncGluaycpO1xuICBjb25zdCBib2FyZEdhbWVIZWxwVGV4dCA9IGNyZWF0ZUNvbnRhaW5lcignYm9hcmRHYW1lSGVscFRleHQnLCAnZ3JlZW4nKTtcblxuICAvLyB1cHBlciBzZWN0aW9uIG9mIGdhbWUgYm9hcmRcbiAgY29uc3Qgb3Bwb25lbnRIYW5kQ29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKCdvcHBvbmVudEhhbmRDb250YWluZXInLCAneWVsbG93Jyk7XG4gIG9wcG9uZW50SGFuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicsICdoYW5kLXBvc2l0aW9uJyk7XG4gIGJvYXJkVXBwZXJTZWN0aW9uLmFwcGVuZENoaWxkKG9wcG9uZW50SGFuZENvbnRhaW5lcik7XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCBjYXJkQmFjayA9IGNyZWF0ZUNvbnRhaW5lcignY2FyZEJhY2snKTtcbiAgICBjYXJkQmFjay5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2snKVxuICAgIG9wcG9uZW50SGFuZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQmFjayk7XG4gIH1cblxuICAvLyBtaWRkbGUgc2VjdGlvbiBvZiBnYW1lIGJvYXJkXG4gIGNvbnN0IGdhbWVGdW5jdGlvbnNDb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoJ2dhbWVGdW5jdGlvbnNDb250YWluZXInKTtcbiAgZ2FtZUZ1bmN0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicsICdwbGF5aW5nLWRlY2stY29udGFpbmVyJyk7XG4gIGJvYXJkTWlkZGxlU2VjdGlvbi5hcHBlbmRDaGlsZChnYW1lRnVuY3Rpb25zQ29udGFpbmVyKTtcblxuICBjb25zdCBsZWZ0QnV0dG9uQ29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKCdsZWZ0QnV0dG9uQ29udGFpbmVyJywgJ2JlaWdlJyk7XG4gIGxlZnRCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncGxheWluZy1kZWNrLWJ0bi1jb250YWluZXInKTtcbiAgY29uc3QgZ2luQnRuID0gY3JlYXRlQnV0dG9uKCdnaW5CdG4nLCAnR2luJyk7XG4gIGdpbkJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgbGVmdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChnaW5CdG4pO1xuXG4gIGNvbnN0IHJpZ2h0QnV0dG9uY29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKCdyaWdodEJ1dHRvbmNvbnRhaW5lcicsICdiZWlnZScpO1xuICByaWdodEJ1dHRvbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nLWRlY2stYnRuLWNvbnRhaW5lcicpXG4gIGNvbnN0IHBhc3NCdG4gPSBjcmVhdGVCdXR0b24oJ3Bhc3NCdG4nLCAnUGFzcycpO1xuICBwYXNzQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICByaWdodEJ1dHRvbmNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXNzQnRuKTtcblxuICBnYW1lRnVuY3Rpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRCdXR0b25Db250YWluZXIpO1xuXG4gIGNvbnN0IHBsYXlpbmdEZWNrID0gY3JlYXRlQ29udGFpbmVyKCdjYXJkQmFjaycpO1xuICBwbGF5aW5nRGVjay5jbGFzc0xpc3QuYWRkKCdjYXJkLWRlY2snKTtcbiAgZ2FtZUZ1bmN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5aW5nRGVjayk7XG5cbiAgY29uc3QgZGlzY2FyZFBpbGUgPSBjcmVhdGVDb250YWluZXIoJ2Rpc2NhcmRQaWxlJyk7XG4gIGRpc2NhcmRQaWxlLmNsYXNzTGlzdC5hZGQoJ2Rpc2NhcmQtZGVjaycpO1xuICBkaXNjYXJkUGlsZS5zdHlsZS5tYXJnaW5SaWdodCA9IDA7XG4gIGNvbnN0IGRpc2NhcmRDYXJkRm9yUGlja2luZyA9IHNob3dDYXJkKGdhbWVEYXRhLmRpc2NhcmRDYXJkRm9yUGlja2luZyk7XG4gIGRpc2NhcmRDYXJkRm9yUGlja2luZy5jbGFzc0xpc3QucmVtb3ZlKCdjYXJkLWZyb250Jyk7XG4gIGRpc2NhcmRDYXJkRm9yUGlja2luZy5jbGFzc0xpc3QuYWRkKCdkaXNjYXJkLWNhcmQtZnJvbnQnKTtcbiAgZ2FtZUZ1bmN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNjYXJkUGlsZSk7XG4gIGRpc2NhcmRQaWxlLmFwcGVuZENoaWxkKGRpc2NhcmRDYXJkRm9yUGlja2luZyk7XG5cbiAgZ2FtZUZ1bmN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEJ1dHRvbmNvbnRhaW5lcik7XG5cbiAgLy8gZ2FtZSBoZWxwIHRleHQgY29udGFpbmVyXG4gIGNvbnN0IGdhbWVIZWxwVGV4dCA9IGNyZWF0ZUNvbnRhaW5lcignZ2FtZUhlbHBUZXh0Jyk7XG4gIGdhbWVIZWxwVGV4dC5pbm5lclRleHQgPSAndGVzdCc7XG4gIGdhbWVIZWxwVGV4dC5jbGFzc0xpc3QuYWRkKCdnYW1lSGVscFRleHQnKTtcbiAgYm9hcmRHYW1lSGVscFRleHQuYXBwZW5kQ2hpbGQoZ2FtZUhlbHBUZXh0KTtcblxuICAvLyBib3R0b20gc2VjdGlvbiBvZiBnYW1lIGJvYXJkXG4gIGNvbnN0IHBsYXllckhhbmRDb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoJ3BsYXllckhhbmRDb250YWluZXInLCAneWVsbG93Jyk7XG4gIHBsYXllckhhbmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInKTtcbiAgYm9hcmRCb3R0b21TZWN0aW9uLmFwcGVuZENoaWxkKHBsYXllckhhbmRDb250YWluZXIpO1xuICBcbiAgbGV0IHBsYXllckhhbmQgPSBnYW1lRGF0YS5wbGF5ZXJIYW5kWzFdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXJIYW5kLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2FyZEZyb250ID0gc2hvd0NhcmQocGxheWVySGFuZFtpXSk7XG4gICAgcGxheWVySGFuZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRnJvbnQpO1xuICB9XG5cbiAgY29uc3QgZGVhZHdvb2RDb3VudGVyID0gY3JlYXRlQ29udGFpbmVyKCdkZWFkd29vZENvdW50ZXInKTtcbiAgZGVhZHdvb2RDb3VudGVyLmlubmVyVGV4dCA9IGBEZWFkd29vZDogJHtnYW1lRGF0YS5wbGF5ZXJEZWFkd29vZFsxXX1gXG4gIGRlYWR3b29kQ291bnRlci5jbGFzc0xpc3QuYWRkKCdkZWFkd29vZENvbnRhaW5lcicpXG4gIGJvYXJkQm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChkZWFkd29vZENvdW50ZXIpO1xuXG4gIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRVcHBlclNlY3Rpb24pO1xuICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkTWlkZGxlU2VjdGlvbik7XG4gIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRHYW1lSGVscFRleHQpO1xuICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkQm90dG9tU2VjdGlvbik7XG59XG5cbmNvbnN0IGNyZWF0ZUdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIE1ha2UgYSByZXF1ZXN0IHRvIGNyZWF0ZSBhIG5ldyBnYW1lXG4gIGF4aW9zLnBvc3QoJy9nYW1lcycpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyBzZXQgdGhlIGdsb2JhbCB2YWx1ZSB0byB0aGUgbmV3IGdhbWUuXG4gICAgICBjdXJyZW50R2FtZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICBcbiAgICAgIC8vIGRpc3BsYXkgaXQgb3V0IHRvIHRoZSB1c2VyXG4gICAgICAvLyBydW5HYW1lKGN1cnJlbnRHYW1lKTtcbiAgICAgIGluaXRHYW1lQm9hcmREb20oY3VycmVudEdhbWUpO1xuICAgICAgY3JlYXRlR2FtZUJ0bi5yZW1vdmUoKTtcblxuICAgICAgXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbn07XG5cbi8vIHdlYnBhY2tcblxuLy8gZGlzYWJsZSBhbmQgaGlkZSBidXR0b25zIGJ5IGRlZmF1bHRcblxuLy8gY3JlYXRlIGdhbWVcbi8vIHNob3cgcGFzcyBidXR0b25cbi8vIGVuYWJsZSBwYXNzIGJ1dHRvblxuXG4vLyBwYXNzIGJ1dHRvblxuLy8gaGlkZSBwYXNzIGJ1dHRvblxuLy8gY29tcHV0ZXIgdHVyblxuLy8gcmFuZG9tIGFjdGlvbiB0byBwYXNzIG9yIG5vdCAocnVuIGRyYXcgZGVjayBvciBkcmF3ZGlzY2FyZCBjYWxsYmFjayB0byBjb250cm9sbGVyKVxuLy8gcGxheWVyIHR1cm5cbi8vIGVuYWJsZSBkcmF3IGRlY2tcbi8vIGVuYWJsZSBkcmF3IGRpc2NhcmRcblxuLy8gY2xpY2sgZHJhdyBkZWNrXG4vLyBhZGQgY2FyZCB0byBwbGF5ZXIgaGFuZCAoY29udHJvbGxlcilcbi8vIGVuYWJsZSBkaXNjYXJkIG9mIGNhcmRzIGZyb20gaGFuZFxuLy8gZGlzYWJsZSBkcmF3IGRlY2tcbi8vIGRpc2FibGUgZHJhdyBkaXNjYXJkXG4vLyBjb21wdXRlciB0dXJuXG4vLyByYW5kb20gYWN0aW9uIHRvIGRyYXcgZnJvbSBkZWNrIG9yIGRpc2NhcmRcbi8vIGRpc2NhcmQgaGlnaGVzdCBmcm9tIGRlYWR3b29kXG4vLyBjaGVjayBkZWFkd29vZCB2YWx1ZSBcbi8vIGVuYWJsZS9zaG93IGdpbiBpZiBkZWFkd29vZC5sZW5ndGggPSAxXG4vLyBlbmFibGUvc2hvdyBiaWcgZ2luIGlmIGRlYWR3b29kLmxlbmd0aCA9IDBcbi8vIGVuYWJsZS9zaG93IGtub2NrIGlmIGRlYWR3b29kIHN1bSA8PSAxMFxuXG4vLyBjbGljayBkcmF3RGlzY2FyZFxuLy8gYWRkIGNhcmQgdG8gcGxheWVyIGhhbmQgKGNvbnRyb2xsZXIpXG4vLyBlbmFibGUgZGlzY2FyZCBvZiBjYXJkcyBmcm9tIGhhbmRcbi8vIGRpc2FibGUgZHJhdyBkZWNrXG4vLyBkaXNhYmxlIGRyYXcgZGlzY2FyZFxuLy8gY29tcHV0ZXIgdHVyblxuLy8gcmFuZG9tIGFjdGlvbiB0byBkcmF3IGZyb20gZGVjayBvciBkaXNjYXJkXG4vLyBkaXNjYXJkIGhpZ2hlc3QgZnJvbSBkZWFkd29vZFxuLy8gY2hlY2sgZGVhZHdvb2QgdmFsdWUgXG4vLyBlbmFibGUvc2hvdyBnaW4gaWYgZGVhZHdvb2QubGVuZ3RoID0gMVxuLy8gZW5hYmxlL3Nob3cgYmlnIGdpbiBpZiBkZWFkd29vZC5sZW5ndGggPSAwXG4vLyBlbmFibGUvc2hvdyBrbm9jayBpZiBkZWFkd29vZCBzdW0gPD0gMTBcblxuLy8gY2xpY2sgZGlzY2FyZEZyb21IYW5kXG4vLyBwdXNoIHRvIGRpc2NhcmQgcGlsZSAoY29udHJvbGxlcilcbi8vIGRpc2FibGUgZGlzY2FyZEZyb21IYW5kXG4vLyByZWNhbGN1bGF0ZSBkZWFkd29vZFxuLy8gb3RoZXIgcGxheWVyIHR1cm5cbi8vIGVuYWJsZSBkcmF3IGRlY2tcbi8vIGVuYWJsZSBkcmF3IGRpc2NhcmRcblxuLy8gY2xpY2sgZ2luIC8gYmlnIGdpblxuLy8gZGlzY2FyZCBpZiBnaW4gYW5kIHJlY2FsY3VsYXRlIGRlYWR3b29kIHZhbHVlXG4vLyBhZGQgdG8gcGxheWVyIHNjb3JlIChjb250b2xsZXIpXG4vLyBjaGVjayBpZiBwbGF5ZXJTY29yZSBhYm92ZSAxMDAgPT4gZW5kR2FtZSwgc2hvdyB3aW5uZXIsIHVwZGF0ZSB3aW5uZXIgcmVjb3JkXG4vLyBlbHNlXG4vLyBpbml0aWFsaXNlIG5ldyByb3VuZCAoY29udHJvbGxlcilcbi8vIGNyZWF0ZSByb3VuZFxuXG4vLyBjbGljayBrbm9ja1xuLy8gY2FsY3VsYXRlIHBsYXllciBzY29yZSBmcm9tIGRlYWR3b29kXG4vLyBjaGVjayBpZiBwbGF5ZXJTY29yZSBhYm92ZSAxMDAgPT4gZW5kR2FtZSwgc2hvdyB3aW5uZXIsIHVwZGF0ZSB3aW5uZXIgcmVjb3JkXG4vLyBlbHNlXG4vLyBpbml0aWFsaXNlIG5ldyByb3VuZCAoY29udHJvbGxlcilcbi8vIGNyZWF0ZSByb3VuZFxuXG5cblxuIFxuXG5cblxuXG4vKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiAgICAgICAgICAgICAgICAgIEluaXRpYWwgU2NyZWVuXG4gKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNvbnN0IGNyZWF0ZUdhbWVCdG4gPSBjcmVhdGVCdXR0b24oJ2NyZWF0ZUdhbWVCdG4nLCAnY3JlYXRlR2FtZUJ0bicsIGNyZWF0ZUdhbWUpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUdhbWVCdG4pOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRhaW5lciIsImNvbnRhaW5lcklkIiwiY29udGFpbmVyQ29sb3IiLCJuZXdEaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY3JlYXRlTGFiZWwiLCJsYWJlbEZvciIsImxhYmVsVGV4dCIsIm5ld0xhYmVsIiwiaW5uZXJUZXh0IiwiY3JlYXRlSW5wdXQiLCJpbnB1dFR5cGUiLCJpbnB1dE5hbWUiLCJpbnB1dFZhbHVlIiwiaW5wdXRSZXF1aXJlZCIsIm5ld0lucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsInJlcXVpcmVkIiwiY3JlYXRlQnV0dG9uIiwiYnRuSWQiLCJidG5UZXh0IiwiYnRuQ2FsbGJhY2siLCJuZXdCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd0NhcmQiLCJjYXJkIiwiY2FyZERpdiIsImNsYXNzTGlzdCIsImFkZCIsImNhcmRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjb2xvckNsYXNzIiwic3VpdENvbG91ciIsInN1aXROYW1lVG9wIiwiY2FyZE5hbWVUb3AiLCJkaXNwbGF5TmFtZSIsImNhcmRTdWl0VG9wIiwic3VpdFN5bWJvbCIsInN1aXROYW1lQm90dG9tIiwiY2FyZE5hbWVCb3R0b20iLCJjYXJkU3VpdEJvdHRvbSIsImdhbWVDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImluaXRHYW1lQm9hcmREb20iLCJnYW1lRGF0YSIsImJvYXJkVXBwZXJTZWN0aW9uIiwiYm9hcmRNaWRkbGVTZWN0aW9uIiwiYm9hcmRCb3R0b21TZWN0aW9uIiwiYm9hcmRHYW1lSGVscFRleHQiLCJvcHBvbmVudEhhbmRDb250YWluZXIiLCJpIiwiY2FyZEJhY2siLCJnYW1lRnVuY3Rpb25zQ29udGFpbmVyIiwibGVmdEJ1dHRvbkNvbnRhaW5lciIsImdpbkJ0biIsInJpZ2h0QnV0dG9uY29udGFpbmVyIiwicGFzc0J0biIsInBsYXlpbmdEZWNrIiwiZGlzY2FyZFBpbGUiLCJtYXJnaW5SaWdodCIsImRpc2NhcmRDYXJkRm9yUGlja2luZyIsInJlbW92ZSIsImdhbWVIZWxwVGV4dCIsInBsYXllckhhbmRDb250YWluZXIiLCJwbGF5ZXJIYW5kIiwibGVuZ3RoIiwiY2FyZEZyb250IiwiZGVhZHdvb2RDb3VudGVyIiwicGxheWVyRGVhZHdvb2QiLCJjcmVhdGVHYW1lIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY3VycmVudEdhbWUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUdhbWVCdG4iLCJlcnJvciIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9