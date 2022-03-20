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
___CSS_LOADER_EXPORT___.push([module.id, ".gameContainer {\n  background-color: #45a173;\n}\n\n.red {\n  color: red;\n}\n\n.card-topleft {\n  position: relative;\n  top: 0.2em;\n  left: 0.75em;\n}\n\n.card-bottomright {\n  position: relative;\n  bottom: -2.5em;\n  right: 0.6em;\n  transform: rotate(180deg);\n}\n\n.card-corner-rank,\n.card-corner-suit {\n  width: 1em;\n  text-align: center;\n  transform: translate(-50%, 0);\n}\n\n.suitSize {\n  font-size: 9px;\n}\n\n.card-back {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #eceee3;\n  /* border-width: 0.5px; */\n  background-color: white;\n  background-image: url(\"https://deck.of.cards/img/standard-deck/back.png\");\n  margin-right: calc(25px - var(--card-width));\n  float: left;\n  background-size: cover;\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.15);\n}\n\n.card-container {\n  display: flex;\n  flex: 1 0 0;\n  overflow-x: hidden;\n  justify-content: center;\n}\n.card-container:last-child {\n  flex: 0 0 auto;\n}\n\n.card-deck {\n  margin: 10px 9px;\n  /* --card-width: 5em; */\n  border-style: solid;\n  border-color: #eceee3;\n  /* border-width: 0.5px; */\n  background-color: white;\n  background-image: url(\"https://deck.of.cards/img/standard-deck/back.png\");\n  /* margin-right: calc(25px - var(--card-width)); */\n  /* float: left; */\n  background-size: cover;\n  border-radius: 0.25em;\n  display: inline-block;\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.15);\n}\n\n.playing-deck-container {\n  align-items: center;\n}\n\n.playing-deck-btn-container {\n  margin: 10px 50px;\n}\n\n.card-front {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #acc5c2;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  margin-right: calc(25px - var(--card-width));\n  float: left;\n  /* background-size: cover; */\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  z-index: 1;\n}\n\n.card {\n  background-color: white;\n}\n\n.deadwoodContainer {\n  text-align: end;\n}\n\n.discard-deck {\n  /* margin: 10px 9px; */\n  /* --card-width: 5em; */\n  /* border-style: solid;\n  border-color: #eceee3; */\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  /* margin-right: calc(25px - var(--card-width)); */\n  /* float: left; */\n  /* background-size: cover; */\n  /* border-radius: 0.25em;\n  display: inline-block;\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  padding: 10px; */\n  margin: 0px 50px;\n}\n\n.discard-card-front {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #acc5c2;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  /* margin-right: calc(25px - var(--card-width)); */\n  float: left;\n  /* background-size: cover; */\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  /* padding: 10px; */\n  z-index: 1;\n  box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.15);\n}\n\n.btn {\n  /* font-size: 12px; */\n  /* display: inline-block; */\n  /* text-align: center; */\n  /* width: 35px; */\n  /* background-color: #2196f3; */\n  /* padding: 0px; */\n  /* color: antiquewhite; */\n  /* height: 25px; */\n  /* font-weight: bold; */\n  /* width: 26px; */\n  /* display: inline-flex; */\n  border-style: groove;\n  padding: 0.5em 1em;\n  /* border-radius: 1em; */\n  border-style: solid;\n}\n\n.gameHelpText {\n  text-align: center;\n  padding-bottom: 0.5em;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;;EAEE,UAAU;EACV,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,uBAAuB;EACvB,yEAAyE;EACzE,4CAA4C;EAC5C,WAAW;EACX,sBAAsB;EACtB,qBAAqB;EACrB,2BAA2B;EAC3B,eAAe;EACf,eAAe;EACf,UAAU;EACV,kDAAkD;AACpD;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,uBAAuB;EACvB,yEAAyE;EACzE,kDAAkD;EAClD,iBAAiB;EACjB,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,eAAe;EACf,UAAU;EACV,kDAAkD;AACpD;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,+BAA+B;EAC/B,2EAA2E;EAC3E,4CAA4C;EAC5C,WAAW;EACX,4BAA4B;EAC5B,qBAAqB;EACrB,2BAA2B;EAC3B,eAAe;EACf,eAAe;EACf,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB;0BACwB;EACxB,yBAAyB;EACzB,+BAA+B;EAC/B,2EAA2E;EAC3E,kDAAkD;EAClD,iBAAiB;EACjB,4BAA4B;EAC5B;;;;;kBAKgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,+BAA+B;EAC/B,2EAA2E;EAC3E,kDAAkD;EAClD,WAAW;EACX,4BAA4B;EAC5B,qBAAqB;EACrB,2BAA2B;EAC3B,eAAe;EACf,eAAe;EACf,UAAU;EACV,mBAAmB;EACnB,UAAU;EACV,kDAAkD;AACpD;;AAEA;EACE,qBAAqB;EACrB,2BAA2B;EAC3B,wBAAwB;EACxB,iBAAiB;EACjB,+BAA+B;EAC/B,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;EACjB,0BAA0B;EAC1B,oBAAoB;EACpB,kBAAkB;EAClB,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB","sourcesContent":[".gameContainer {\n  background-color: #45a173;\n}\n\n.red {\n  color: red;\n}\n\n.card-topleft {\n  position: relative;\n  top: 0.2em;\n  left: 0.75em;\n}\n\n.card-bottomright {\n  position: relative;\n  bottom: -2.5em;\n  right: 0.6em;\n  transform: rotate(180deg);\n}\n\n.card-corner-rank,\n.card-corner-suit {\n  width: 1em;\n  text-align: center;\n  transform: translate(-50%, 0);\n}\n\n.suitSize {\n  font-size: 9px;\n}\n\n.card-back {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #eceee3;\n  /* border-width: 0.5px; */\n  background-color: white;\n  background-image: url(\"https://deck.of.cards/img/standard-deck/back.png\");\n  margin-right: calc(25px - var(--card-width));\n  float: left;\n  background-size: cover;\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.15);\n}\n\n.card-container {\n  display: flex;\n  flex: 1 0 0;\n  overflow-x: hidden;\n  justify-content: center;\n}\n.card-container:last-child {\n  flex: 0 0 auto;\n}\n\n.card-deck {\n  margin: 10px 9px;\n  /* --card-width: 5em; */\n  border-style: solid;\n  border-color: #eceee3;\n  /* border-width: 0.5px; */\n  background-color: white;\n  background-image: url(\"https://deck.of.cards/img/standard-deck/back.png\");\n  /* margin-right: calc(25px - var(--card-width)); */\n  /* float: left; */\n  background-size: cover;\n  border-radius: 0.25em;\n  display: inline-block;\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.15);\n}\n\n.playing-deck-container {\n  align-items: center;\n}\n\n.playing-deck-btn-container {\n  margin: 10px 50px;\n}\n\n.card-front {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #acc5c2;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  margin-right: calc(25px - var(--card-width));\n  float: left;\n  /* background-size: cover; */\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  z-index: 1;\n}\n\n.card {\n  background-color: white;\n}\n\n.deadwoodContainer {\n  text-align: end;\n}\n\n.discard-deck {\n  /* margin: 10px 9px; */\n  /* --card-width: 5em; */\n  /* border-style: solid;\n  border-color: #eceee3; */\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  /* margin-right: calc(25px - var(--card-width)); */\n  /* float: left; */\n  /* background-size: cover; */\n  /* border-radius: 0.25em;\n  display: inline-block;\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  padding: 10px; */\n  margin: 0px 50px;\n}\n\n.discard-card-front {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #acc5c2;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  /* margin-right: calc(25px - var(--card-width)); */\n  float: left;\n  /* background-size: cover; */\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  /* padding: 10px; */\n  z-index: 1;\n  box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.15);\n}\n\n.btn {\n  /* font-size: 12px; */\n  /* display: inline-block; */\n  /* text-align: center; */\n  /* width: 35px; */\n  /* background-color: #2196f3; */\n  /* padding: 0px; */\n  /* color: antiquewhite; */\n  /* height: 25px; */\n  /* font-weight: bold; */\n  /* width: 26px; */\n  /* display: inline-flex; */\n  border-style: groove;\n  padding: 0.5em 1em;\n  /* border-radius: 1em; */\n  border-style: solid;\n}\n\n.gameHelpText {\n  text-align: center;\n  padding-bottom: 0.5em;\n}\n"],"sourceRoot":""}]);
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
  var boardUpperSection = createContainer('boardUpperSection');
  var boardMiddleSection = createContainer('boardMiddleSection');
  var boardBottomSection = createContainer('boardBottomSection');
  var boardGameHelpText = createContainer('boardGameHelpText'); // upper section of game board

  var opponentHandContainer = createContainer('opponentHandContainer');
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

  var playerHandContainer = createContainer('playerHandContainer');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naW5ydW1teS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2dpbnJ1bW15Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9naW5ydW1teS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dpbnJ1bW15Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dpbnJ1bW15Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9naW5ydW1teS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9naW5ydW1teS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9naW5ydW1teS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dpbnJ1bW15Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dpbnJ1bW15L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9naW5ydW1teS8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvLi9zcmMvc3R5bGVzLmNzcz80NGIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTE3MztcXG59XFxuXFxuLnJlZCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uY2FyZC10b3BsZWZ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC4yZW07XFxuICBsZWZ0OiAwLjc1ZW07XFxufVxcblxcbi5jYXJkLWJvdHRvbXJpZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogLTIuNWVtO1xcbiAgcmlnaHQ6IDAuNmVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmNhcmQtY29ybmVyLXJhbmssXFxuLmNhcmQtY29ybmVyLXN1aXQge1xcbiAgd2lkdGg6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbn1cXG5cXG4uc3VpdFNpemUge1xcbiAgZm9udC1zaXplOiA5cHg7XFxufVxcblxcbi5jYXJkLWJhY2sge1xcbiAgbWFyZ2luOiAxMHB4IDlweDtcXG4gIC0tY2FyZC13aWR0aDogNWVtO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogI2VjZWVlMztcXG4gIC8qIGJvcmRlci13aWR0aDogMC41cHg7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9kZWNrLm9mLmNhcmRzL2ltZy9zdGFuZGFyZC1kZWNrL2JhY2sucG5nXFxcIik7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoMjVweCAtIHZhcigtLWNhcmQtd2lkdGgpKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cXG4gIG1pbi1oZWlnaHQ6IDdlbTtcXG4gIG1heC1oZWlnaHQ6IDdlbTtcXG4gIHdpZHRoOiA1ZW07XFxuICBib3gtc2hhZG93OiAwIDAuMDYyNWVtIDAuMTI1ZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDAgMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2FyZC1jb250YWluZXI6bGFzdC1jaGlsZCB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG59XFxuXFxuLmNhcmQtZGVjayB7XFxuICBtYXJnaW46IDEwcHggOXB4O1xcbiAgLyogLS1jYXJkLXdpZHRoOiA1ZW07ICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjZWNlZWUzO1xcbiAgLyogYm9yZGVyLXdpZHRoOiAwLjVweDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2RlY2sub2YuY2FyZHMvaW1nL3N0YW5kYXJkLWRlY2svYmFjay5wbmdcXFwiKTtcXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgLyogZmxvYXQ6IGxlZnQ7ICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIGJveC1zaGFkb3c6IDAgMC4wNjI1ZW0gMC4xMjVlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cXG4ucGxheWluZy1kZWNrLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWluZy1kZWNrLWJ0bi1jb250YWluZXIge1xcbiAgbWFyZ2luOiAxMHB4IDUwcHg7XFxufVxcblxcbi5jYXJkLWZyb250IHtcXG4gIG1hcmdpbjogMTBweCA5cHg7XFxuICAtLWNhcmQtd2lkdGg6IDVlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNhY2M1YzI7XFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTsgKi9cXG4gIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGVhZHdvb2RDb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4uZGlzY2FyZC1kZWNrIHtcXG4gIC8qIG1hcmdpbjogMTBweCA5cHg7ICovXFxuICAvKiAtLWNhcmQtd2lkdGg6IDVlbTsgKi9cXG4gIC8qIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNlY2VlZTM7ICovXFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTsgKi9cXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgLyogZmxvYXQ6IGxlZnQ7ICovXFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgLyogYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIHBhZGRpbmc6IDEwcHg7ICovXFxuICBtYXJnaW46IDBweCA1MHB4O1xcbn1cXG5cXG4uZGlzY2FyZC1jYXJkLWZyb250IHtcXG4gIG1hcmdpbjogMTBweCA5cHg7XFxuICAtLWNhcmQtd2lkdGg6IDVlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNhY2M1YzI7XFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTsgKi9cXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxuICB6LWluZGV4OiAxO1xcbiAgYm94LXNoYWRvdzogMCAwLjA2MjVlbSAwLjEyNWVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcblxcbi5idG4ge1xcbiAgLyogZm9udC1zaXplOiAxMnB4OyAqL1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgLyogd2lkdGg6IDM1cHg7ICovXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyAqL1xcbiAgLyogcGFkZGluZzogMHB4OyAqL1xcbiAgLyogY29sb3I6IGFudGlxdWV3aGl0ZTsgKi9cXG4gIC8qIGhlaWdodDogMjVweDsgKi9cXG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xcbiAgLyogd2lkdGg6IDI2cHg7ICovXFxuICAvKiBkaXNwbGF5OiBpbmxpbmUtZmxleDsgKi9cXG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgLyogYm9yZGVyLXJhZGl1czogMWVtOyAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuLmdhbWVIZWxwVGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIseUVBQXlFO0VBQ3pFLDRDQUE0QztFQUM1QyxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIseUVBQXlFO0VBQ3pFLGtEQUFrRDtFQUNsRCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsMkVBQTJFO0VBQzNFLDRDQUE0QztFQUM1QyxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkI7MEJBQ3dCO0VBQ3hCLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsMkVBQTJFO0VBQzNFLGtEQUFrRDtFQUNsRCxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCOzs7OztrQkFLZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsMkVBQTJFO0VBQzNFLGtEQUFrRDtFQUNsRCxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTE3MztcXG59XFxuXFxuLnJlZCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uY2FyZC10b3BsZWZ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC4yZW07XFxuICBsZWZ0OiAwLjc1ZW07XFxufVxcblxcbi5jYXJkLWJvdHRvbXJpZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogLTIuNWVtO1xcbiAgcmlnaHQ6IDAuNmVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmNhcmQtY29ybmVyLXJhbmssXFxuLmNhcmQtY29ybmVyLXN1aXQge1xcbiAgd2lkdGg6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbn1cXG5cXG4uc3VpdFNpemUge1xcbiAgZm9udC1zaXplOiA5cHg7XFxufVxcblxcbi5jYXJkLWJhY2sge1xcbiAgbWFyZ2luOiAxMHB4IDlweDtcXG4gIC0tY2FyZC13aWR0aDogNWVtO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogI2VjZWVlMztcXG4gIC8qIGJvcmRlci13aWR0aDogMC41cHg7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9kZWNrLm9mLmNhcmRzL2ltZy9zdGFuZGFyZC1kZWNrL2JhY2sucG5nXFxcIik7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoMjVweCAtIHZhcigtLWNhcmQtd2lkdGgpKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cXG4gIG1pbi1oZWlnaHQ6IDdlbTtcXG4gIG1heC1oZWlnaHQ6IDdlbTtcXG4gIHdpZHRoOiA1ZW07XFxuICBib3gtc2hhZG93OiAwIDAuMDYyNWVtIDAuMTI1ZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDAgMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2FyZC1jb250YWluZXI6bGFzdC1jaGlsZCB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG59XFxuXFxuLmNhcmQtZGVjayB7XFxuICBtYXJnaW46IDEwcHggOXB4O1xcbiAgLyogLS1jYXJkLXdpZHRoOiA1ZW07ICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjZWNlZWUzO1xcbiAgLyogYm9yZGVyLXdpZHRoOiAwLjVweDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2RlY2sub2YuY2FyZHMvaW1nL3N0YW5kYXJkLWRlY2svYmFjay5wbmdcXFwiKTtcXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgLyogZmxvYXQ6IGxlZnQ7ICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIGJveC1zaGFkb3c6IDAgMC4wNjI1ZW0gMC4xMjVlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cXG4ucGxheWluZy1kZWNrLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWluZy1kZWNrLWJ0bi1jb250YWluZXIge1xcbiAgbWFyZ2luOiAxMHB4IDUwcHg7XFxufVxcblxcbi5jYXJkLWZyb250IHtcXG4gIG1hcmdpbjogMTBweCA5cHg7XFxuICAtLWNhcmQtd2lkdGg6IDVlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNhY2M1YzI7XFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTsgKi9cXG4gIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGVhZHdvb2RDb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4uZGlzY2FyZC1kZWNrIHtcXG4gIC8qIG1hcmdpbjogMTBweCA5cHg7ICovXFxuICAvKiAtLWNhcmQtd2lkdGg6IDVlbTsgKi9cXG4gIC8qIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNlY2VlZTM7ICovXFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTsgKi9cXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgLyogZmxvYXQ6IGxlZnQ7ICovXFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgLyogYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIHBhZGRpbmc6IDEwcHg7ICovXFxuICBtYXJnaW46IDBweCA1MHB4O1xcbn1cXG5cXG4uZGlzY2FyZC1jYXJkLWZyb250IHtcXG4gIG1hcmdpbjogMTBweCA5cHg7XFxuICAtLWNhcmQtd2lkdGg6IDVlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNhY2M1YzI7XFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTsgKi9cXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxuICB6LWluZGV4OiAxO1xcbiAgYm94LXNoYWRvdzogMCAwLjA2MjVlbSAwLjEyNWVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcblxcbi5idG4ge1xcbiAgLyogZm9udC1zaXplOiAxMnB4OyAqL1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgLyogd2lkdGg6IDM1cHg7ICovXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyAqL1xcbiAgLyogcGFkZGluZzogMHB4OyAqL1xcbiAgLyogY29sb3I6IGFudGlxdWV3aGl0ZTsgKi9cXG4gIC8qIGhlaWdodDogMjVweDsgKi9cXG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xcbiAgLyogd2lkdGg6IDI2cHg7ICovXFxuICAvKiBkaXNwbGF5OiBpbmxpbmUtZmxleDsgKi9cXG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgLyogYm9yZGVyLXJhZGl1czogMWVtOyAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuLmdhbWVIZWxwVGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqICAgICAgICAgICAgICAgICAgRE9NIENyZWF0aW9uIEZ1bmN0aW9uc1xuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoY29udGFpbmVySWQsIGNvbnRhaW5lckNvbG9yKSA9PiB7XG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdEaXYuaWQgPSBjb250YWluZXJJZDtcbiAgbmV3RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbnRhaW5lckNvbG9yO1xuICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gIHJldHVybiBuZXdEaXY7XG59O1xuXG5jb25zdCBjcmVhdGVMYWJlbCA9IChsYWJlbEZvciwgbGFiZWxUZXh0KSA9PiB7XG4gIGNvbnN0IG5ld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbmV3TGFiZWwuZm9yID0gbGFiZWxGb3I7XG4gIG5ld0xhYmVsLmlubmVyVGV4dCA9IGxhYmVsVGV4dDtcbiAgcmV0dXJuIG5ld0xhYmVsO1xufTtcblxuY29uc3QgY3JlYXRlSW5wdXQgPSAoaW5wdXRUeXBlLCBpbnB1dE5hbWUsIGlucHV0VmFsdWUsIGlucHV0UmVxdWlyZWQpID0+IHtcbiAgY29uc3QgbmV3SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuZXdJbnB1dC50eXBlID0gaW5wdXRUeXBlO1xuICBuZXdJbnB1dC5pZCA9IGlucHV0TmFtZTtcbiAgbmV3SW5wdXQubmFtZSA9IGlucHV0TmFtZTtcbiAgbmV3SW5wdXQudmFsdWUgPSBpbnB1dFZhbHVlO1xuICBuZXdJbnB1dC5yZXF1aXJlZCA9IGlucHV0UmVxdWlyZWQ7XG4gIHJldHVybiBuZXdJbnB1dDtcbn07XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChidG5JZCwgYnRuVGV4dCwgYnRuQ2FsbGJhY2spID0+IHtcbiAgY29uc3QgbmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld0J0bi5pZCA9IGJ0bklkO1xuICBuZXdCdG4uaW5uZXJUZXh0ID0gYnRuVGV4dDtcbiAgbmV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuQ2FsbGJhY2spO1xuICByZXR1cm4gbmV3QnRuO1xufTtcblxuY29uc3Qgc2hvd0NhcmQgPSAoY2FyZCkgPT4ge1xuXG4gIGNvbnN0IGNhcmREaXYgPSBjcmVhdGVDb250YWluZXIoJ2NhcmREaXYnLCAnd2hpdGUnKTtcbiAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjYXJkLWZyb250Jyk7XG5cbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnLCAnd2hpdGUnKTtcbiAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkRWxlbWVudCk7XG4gIGNvbnN0IGNvbG9yQ2xhc3MgPSBjYXJkLnN1aXRDb2xvdXI7XG5cbiAgLy8gLS0tIHNob3cgY2FyZCBkZXRhaWxzIGluIHRvcCBsZWZ0IGNvcm5lciBvZiBjYXJkXG5cbiAgY29uc3Qgc3VpdE5hbWVUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VpdE5hbWVUb3AuY2xhc3NMaXN0LmFkZCgnY2FyZC10b3BsZWZ0Jyk7XG4gIGNhcmRFbGVtZW50LmFwcGVuZENoaWxkKHN1aXROYW1lVG9wKTtcblxuICBjb25zdCBjYXJkTmFtZVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkTmFtZVRvcC5pbm5lclRleHQgPSBjYXJkLmRpc3BsYXlOYW1lO1xuICBjYXJkTmFtZVRvcC5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvcm5lci1yYW5rJywgYCR7Y29sb3JDbGFzc31gKTtcbiAgc3VpdE5hbWVUb3AuYXBwZW5kQ2hpbGQoY2FyZE5hbWVUb3ApO1xuXG4gIGNvbnN0IGNhcmRTdWl0VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRTdWl0VG9wLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29ybmVyLXN1aXQnLCAnc3VpdFNpemUnKTtcbiAgY2FyZFN1aXRUb3AuaW5uZXJUZXh0ID0gY2FyZC5zdWl0U3ltYm9sO1xuICBzdWl0TmFtZVRvcC5hcHBlbmRDaGlsZChjYXJkU3VpdFRvcCk7XG5cbiAgLy8gPT09IHNob3cgY2FyZCBkZXRhaWxzIGluIGJvdHRvbSByaWdodCBjb3JuZXIgb2YgY2FyZFxuXG4gIGNvbnN0IHN1aXROYW1lQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN1aXROYW1lQm90dG9tLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm90dG9tcmlnaHQnKTtcbiAgY2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VpdE5hbWVCb3R0b20pO1xuXG4gIGNvbnN0IGNhcmROYW1lQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmROYW1lQm90dG9tLmlubmVyVGV4dCA9IGNhcmQuZGlzcGxheU5hbWU7XG4gIGNhcmROYW1lQm90dG9tLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29ybmVyLXJhbmsnLCBgJHtjb2xvckNsYXNzfWApO1xuICBzdWl0TmFtZUJvdHRvbS5hcHBlbmRDaGlsZChjYXJkTmFtZUJvdHRvbSk7XG5cbiAgY29uc3QgY2FyZFN1aXRCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZFN1aXRCb3R0b20uY2xhc3NMaXN0LmFkZCgnY2FyZC1jb3JuZXItc3VpdCcsICdzdWl0U2l6ZScpO1xuICBjYXJkU3VpdEJvdHRvbS5pbm5lclRleHQgPSBjYXJkLnN1aXRTeW1ib2w7XG4gIHN1aXROYW1lQm90dG9tLmFwcGVuZENoaWxkKGNhcmRTdWl0Qm90dG9tKTtcblxuICBjYXJkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgcmV0dXJuIGNhcmREaXY7XG5cbn07XG5cbi8qXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqICAgICAgICAgICAgICAgICAgRE9NIEVsZW1lbnRzXG4gKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cblxuXG4vKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiAgICAgICAgICAgICAgICAgIEdhbWUgSGVscGVyIEZ1bmN0aW9uc1xuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY29udGFpbmVyJylcblxuXG5jb25zdCBpbml0R2FtZUJvYXJkRG9tID0gKGdhbWVEYXRhKSA9PiB7XG5cbiAgY29uc3QgYm9hcmRVcHBlclNlY3Rpb24gPSBjcmVhdGVDb250YWluZXIoJ2JvYXJkVXBwZXJTZWN0aW9uJyk7XG4gIGNvbnN0IGJvYXJkTWlkZGxlU2VjdGlvbiA9IGNyZWF0ZUNvbnRhaW5lcignYm9hcmRNaWRkbGVTZWN0aW9uJyk7XG4gIGNvbnN0IGJvYXJkQm90dG9tU2VjdGlvbiA9IGNyZWF0ZUNvbnRhaW5lcignYm9hcmRCb3R0b21TZWN0aW9uJyk7XG4gIGNvbnN0IGJvYXJkR2FtZUhlbHBUZXh0ID0gY3JlYXRlQ29udGFpbmVyKCdib2FyZEdhbWVIZWxwVGV4dCcpO1xuXG4gIC8vIHVwcGVyIHNlY3Rpb24gb2YgZ2FtZSBib2FyZFxuICBjb25zdCBvcHBvbmVudEhhbmRDb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoJ29wcG9uZW50SGFuZENvbnRhaW5lcicpXG4gIG9wcG9uZW50SGFuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicsICdoYW5kLXBvc2l0aW9uJyk7XG4gIGJvYXJkVXBwZXJTZWN0aW9uLmFwcGVuZENoaWxkKG9wcG9uZW50SGFuZENvbnRhaW5lcik7XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCBjYXJkQmFjayA9IGNyZWF0ZUNvbnRhaW5lcignY2FyZEJhY2snKTtcbiAgICBjYXJkQmFjay5jbGFzc0xpc3QuYWRkKCdjYXJkLWJhY2snKVxuICAgIG9wcG9uZW50SGFuZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQmFjayk7XG4gIH1cblxuICAvLyBtaWRkbGUgc2VjdGlvbiBvZiBnYW1lIGJvYXJkXG4gIGNvbnN0IGdhbWVGdW5jdGlvbnNDb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoJ2dhbWVGdW5jdGlvbnNDb250YWluZXInKTtcbiAgZ2FtZUZ1bmN0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicsICdwbGF5aW5nLWRlY2stY29udGFpbmVyJyk7XG4gIGJvYXJkTWlkZGxlU2VjdGlvbi5hcHBlbmRDaGlsZChnYW1lRnVuY3Rpb25zQ29udGFpbmVyKTtcblxuICBjb25zdCBsZWZ0QnV0dG9uQ29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKCdsZWZ0QnV0dG9uQ29udGFpbmVyJywgJ2JlaWdlJyk7XG4gIGxlZnRCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncGxheWluZy1kZWNrLWJ0bi1jb250YWluZXInKTtcbiAgY29uc3QgZ2luQnRuID0gY3JlYXRlQnV0dG9uKCdnaW5CdG4nLCAnR2luJyk7XG4gIGdpbkJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgbGVmdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChnaW5CdG4pO1xuXG4gIGNvbnN0IHJpZ2h0QnV0dG9uY29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKCdyaWdodEJ1dHRvbmNvbnRhaW5lcicsICdiZWlnZScpO1xuICByaWdodEJ1dHRvbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nLWRlY2stYnRuLWNvbnRhaW5lcicpXG4gIGNvbnN0IHBhc3NCdG4gPSBjcmVhdGVCdXR0b24oJ3Bhc3NCdG4nLCAnUGFzcycpO1xuICBwYXNzQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICByaWdodEJ1dHRvbmNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXNzQnRuKTtcblxuICBnYW1lRnVuY3Rpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRCdXR0b25Db250YWluZXIpO1xuXG4gIGNvbnN0IHBsYXlpbmdEZWNrID0gY3JlYXRlQ29udGFpbmVyKCdjYXJkQmFjaycpO1xuICBwbGF5aW5nRGVjay5jbGFzc0xpc3QuYWRkKCdjYXJkLWRlY2snKTtcbiAgZ2FtZUZ1bmN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5aW5nRGVjayk7XG5cbiAgY29uc3QgZGlzY2FyZFBpbGUgPSBjcmVhdGVDb250YWluZXIoJ2Rpc2NhcmRQaWxlJyk7XG4gIGRpc2NhcmRQaWxlLmNsYXNzTGlzdC5hZGQoJ2Rpc2NhcmQtZGVjaycpO1xuICBkaXNjYXJkUGlsZS5zdHlsZS5tYXJnaW5SaWdodCA9IDA7XG4gIGNvbnN0IGRpc2NhcmRDYXJkRm9yUGlja2luZyA9IHNob3dDYXJkKGdhbWVEYXRhLmRpc2NhcmRDYXJkRm9yUGlja2luZyk7XG4gIGRpc2NhcmRDYXJkRm9yUGlja2luZy5jbGFzc0xpc3QucmVtb3ZlKCdjYXJkLWZyb250Jyk7XG4gIGRpc2NhcmRDYXJkRm9yUGlja2luZy5jbGFzc0xpc3QuYWRkKCdkaXNjYXJkLWNhcmQtZnJvbnQnKTtcbiAgZ2FtZUZ1bmN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNjYXJkUGlsZSk7XG4gIGRpc2NhcmRQaWxlLmFwcGVuZENoaWxkKGRpc2NhcmRDYXJkRm9yUGlja2luZyk7XG5cbiAgZ2FtZUZ1bmN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEJ1dHRvbmNvbnRhaW5lcik7XG5cbiAgLy8gZ2FtZSBoZWxwIHRleHQgY29udGFpbmVyXG4gIGNvbnN0IGdhbWVIZWxwVGV4dCA9IGNyZWF0ZUNvbnRhaW5lcignZ2FtZUhlbHBUZXh0Jyk7XG4gIGdhbWVIZWxwVGV4dC5pbm5lclRleHQgPSAndGVzdCc7XG4gIGdhbWVIZWxwVGV4dC5jbGFzc0xpc3QuYWRkKCdnYW1lSGVscFRleHQnKTtcbiAgYm9hcmRHYW1lSGVscFRleHQuYXBwZW5kQ2hpbGQoZ2FtZUhlbHBUZXh0KTtcblxuICAvLyBib3R0b20gc2VjdGlvbiBvZiBnYW1lIGJvYXJkXG4gIGNvbnN0IHBsYXllckhhbmRDb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoJ3BsYXllckhhbmRDb250YWluZXInKTtcbiAgcGxheWVySGFuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpO1xuICBib2FyZEJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQocGxheWVySGFuZENvbnRhaW5lcik7XG4gIFxuICBsZXQgcGxheWVySGFuZCA9IGdhbWVEYXRhLnBsYXllckhhbmRbMV07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllckhhbmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjYXJkRnJvbnQgPSBzaG93Q2FyZChwbGF5ZXJIYW5kW2ldKTtcbiAgICBwbGF5ZXJIYW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRGcm9udCk7XG4gIH1cblxuICBjb25zdCBkZWFkd29vZENvdW50ZXIgPSBjcmVhdGVDb250YWluZXIoJ2RlYWR3b29kQ291bnRlcicpO1xuICBkZWFkd29vZENvdW50ZXIuaW5uZXJUZXh0ID0gYERlYWR3b29kOiAke2dhbWVEYXRhLnBsYXllckRlYWR3b29kWzFdfWBcbiAgZGVhZHdvb2RDb3VudGVyLmNsYXNzTGlzdC5hZGQoJ2RlYWR3b29kQ29udGFpbmVyJylcbiAgYm9hcmRCb3R0b21TZWN0aW9uLmFwcGVuZENoaWxkKGRlYWR3b29kQ291bnRlcik7XG5cbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZFVwcGVyU2VjdGlvbik7XG4gIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRNaWRkbGVTZWN0aW9uKTtcbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZEdhbWVIZWxwVGV4dCk7XG4gIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRCb3R0b21TZWN0aW9uKTtcbn1cblxuY29uc3QgY3JlYXRlR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gTWFrZSBhIHJlcXVlc3QgdG8gY3JlYXRlIGEgbmV3IGdhbWVcbiAgYXhpb3MucG9zdCgnL2dhbWVzJylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIHNldCB0aGUgZ2xvYmFsIHZhbHVlIHRvIHRoZSBuZXcgZ2FtZS5cbiAgICAgIGN1cnJlbnRHYW1lID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIFxuICAgICAgLy8gZGlzcGxheSBpdCBvdXQgdG8gdGhlIHVzZXJcbiAgICAgIC8vIHJ1bkdhbWUoY3VycmVudEdhbWUpO1xuICAgICAgaW5pdEdhbWVCb2FyZERvbShjdXJyZW50R2FtZSk7XG4gICAgICBjcmVhdGVHYW1lQnRuLnJlbW92ZSgpO1xuXG4gICAgICBcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vIGhhbmRsZSBlcnJvclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xufTtcblxuLy8gd2VicGFja1xuXG4vLyBkaXNhYmxlIGFuZCBoaWRlIGJ1dHRvbnMgYnkgZGVmYXVsdFxuXG4vLyBjcmVhdGUgZ2FtZVxuLy8gc2hvdyBwYXNzIGJ1dHRvblxuLy8gZW5hYmxlIHBhc3MgYnV0dG9uXG5cbi8vIHBhc3MgYnV0dG9uXG4vLyBoaWRlIHBhc3MgYnV0dG9uXG4vLyBjb21wdXRlciB0dXJuXG4vLyByYW5kb20gYWN0aW9uIHRvIHBhc3Mgb3Igbm90IChydW4gZHJhdyBkZWNrIG9yIGRyYXdkaXNjYXJkIGNhbGxiYWNrIHRvIGNvbnRyb2xsZXIpXG4vLyBwbGF5ZXIgdHVyblxuLy8gZW5hYmxlIGRyYXcgZGVja1xuLy8gZW5hYmxlIGRyYXcgZGlzY2FyZFxuXG4vLyBjbGljayBkcmF3IGRlY2tcbi8vIGFkZCBjYXJkIHRvIHBsYXllciBoYW5kIChjb250cm9sbGVyKVxuLy8gZW5hYmxlIGRpc2NhcmQgb2YgY2FyZHMgZnJvbSBoYW5kXG4vLyBkaXNhYmxlIGRyYXcgZGVja1xuLy8gZGlzYWJsZSBkcmF3IGRpc2NhcmRcbi8vIGNvbXB1dGVyIHR1cm5cbi8vIHJhbmRvbSBhY3Rpb24gdG8gZHJhdyBmcm9tIGRlY2sgb3IgZGlzY2FyZFxuLy8gZGlzY2FyZCBoaWdoZXN0IGZyb20gZGVhZHdvb2Rcbi8vIGNoZWNrIGRlYWR3b29kIHZhbHVlIFxuLy8gZW5hYmxlL3Nob3cgZ2luIGlmIGRlYWR3b29kLmxlbmd0aCA9IDFcbi8vIGVuYWJsZS9zaG93IGJpZyBnaW4gaWYgZGVhZHdvb2QubGVuZ3RoID0gMFxuLy8gZW5hYmxlL3Nob3cga25vY2sgaWYgZGVhZHdvb2Qgc3VtIDw9IDEwXG5cbi8vIGNsaWNrIGRyYXdEaXNjYXJkXG4vLyBhZGQgY2FyZCB0byBwbGF5ZXIgaGFuZCAoY29udHJvbGxlcilcbi8vIGVuYWJsZSBkaXNjYXJkIG9mIGNhcmRzIGZyb20gaGFuZFxuLy8gZGlzYWJsZSBkcmF3IGRlY2tcbi8vIGRpc2FibGUgZHJhdyBkaXNjYXJkXG4vLyBjb21wdXRlciB0dXJuXG4vLyByYW5kb20gYWN0aW9uIHRvIGRyYXcgZnJvbSBkZWNrIG9yIGRpc2NhcmRcbi8vIGRpc2NhcmQgaGlnaGVzdCBmcm9tIGRlYWR3b29kXG4vLyBjaGVjayBkZWFkd29vZCB2YWx1ZSBcbi8vIGVuYWJsZS9zaG93IGdpbiBpZiBkZWFkd29vZC5sZW5ndGggPSAxXG4vLyBlbmFibGUvc2hvdyBiaWcgZ2luIGlmIGRlYWR3b29kLmxlbmd0aCA9IDBcbi8vIGVuYWJsZS9zaG93IGtub2NrIGlmIGRlYWR3b29kIHN1bSA8PSAxMFxuXG4vLyBjbGljayBkaXNjYXJkRnJvbUhhbmRcbi8vIHB1c2ggdG8gZGlzY2FyZCBwaWxlIChjb250cm9sbGVyKVxuLy8gZGlzYWJsZSBkaXNjYXJkRnJvbUhhbmRcbi8vIHJlY2FsY3VsYXRlIGRlYWR3b29kXG4vLyBvdGhlciBwbGF5ZXIgdHVyblxuLy8gZW5hYmxlIGRyYXcgZGVja1xuLy8gZW5hYmxlIGRyYXcgZGlzY2FyZFxuXG4vLyBjbGljayBnaW4gLyBiaWcgZ2luXG4vLyBkaXNjYXJkIGlmIGdpbiBhbmQgcmVjYWxjdWxhdGUgZGVhZHdvb2QgdmFsdWVcbi8vIGFkZCB0byBwbGF5ZXIgc2NvcmUgKGNvbnRvbGxlcilcbi8vIGNoZWNrIGlmIHBsYXllclNjb3JlIGFib3ZlIDEwMCA9PiBlbmRHYW1lLCBzaG93IHdpbm5lciwgdXBkYXRlIHdpbm5lciByZWNvcmRcbi8vIGVsc2Vcbi8vIGluaXRpYWxpc2UgbmV3IHJvdW5kIChjb250cm9sbGVyKVxuLy8gY3JlYXRlIHJvdW5kXG5cbi8vIGNsaWNrIGtub2NrXG4vLyBjYWxjdWxhdGUgcGxheWVyIHNjb3JlIGZyb20gZGVhZHdvb2Rcbi8vIGNoZWNrIGlmIHBsYXllclNjb3JlIGFib3ZlIDEwMCA9PiBlbmRHYW1lLCBzaG93IHdpbm5lciwgdXBkYXRlIHdpbm5lciByZWNvcmRcbi8vIGVsc2Vcbi8vIGluaXRpYWxpc2UgbmV3IHJvdW5kIChjb250cm9sbGVyKVxuLy8gY3JlYXRlIHJvdW5kXG5cblxuXG4gXG5cblxuXG5cbi8qXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqICAgICAgICAgICAgICAgICAgSW5pdGlhbCBTY3JlZW5cbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY29uc3QgY3JlYXRlR2FtZUJ0biA9IGNyZWF0ZUJ1dHRvbignY3JlYXRlR2FtZUJ0bicsICdjcmVhdGVHYW1lQnRuJywgY3JlYXRlR2FtZSlcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlR2FtZUJ0bik7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGFpbmVyIiwiY29udGFpbmVySWQiLCJjb250YWluZXJDb2xvciIsIm5ld0RpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjcmVhdGVMYWJlbCIsImxhYmVsRm9yIiwibGFiZWxUZXh0IiwibmV3TGFiZWwiLCJpbm5lclRleHQiLCJjcmVhdGVJbnB1dCIsImlucHV0VHlwZSIsImlucHV0TmFtZSIsImlucHV0VmFsdWUiLCJpbnB1dFJlcXVpcmVkIiwibmV3SW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwicmVxdWlyZWQiLCJjcmVhdGVCdXR0b24iLCJidG5JZCIsImJ0blRleHQiLCJidG5DYWxsYmFjayIsIm5ld0J0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93Q2FyZCIsImNhcmQiLCJjYXJkRGl2IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2FyZEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNvbG9yQ2xhc3MiLCJzdWl0Q29sb3VyIiwic3VpdE5hbWVUb3AiLCJjYXJkTmFtZVRvcCIsImRpc3BsYXlOYW1lIiwiY2FyZFN1aXRUb3AiLCJzdWl0U3ltYm9sIiwic3VpdE5hbWVCb3R0b20iLCJjYXJkTmFtZUJvdHRvbSIsImNhcmRTdWl0Qm90dG9tIiwiZ2FtZUNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwiaW5pdEdhbWVCb2FyZERvbSIsImdhbWVEYXRhIiwiYm9hcmRVcHBlclNlY3Rpb24iLCJib2FyZE1pZGRsZVNlY3Rpb24iLCJib2FyZEJvdHRvbVNlY3Rpb24iLCJib2FyZEdhbWVIZWxwVGV4dCIsIm9wcG9uZW50SGFuZENvbnRhaW5lciIsImkiLCJjYXJkQmFjayIsImdhbWVGdW5jdGlvbnNDb250YWluZXIiLCJsZWZ0QnV0dG9uQ29udGFpbmVyIiwiZ2luQnRuIiwicmlnaHRCdXR0b25jb250YWluZXIiLCJwYXNzQnRuIiwicGxheWluZ0RlY2siLCJkaXNjYXJkUGlsZSIsIm1hcmdpblJpZ2h0IiwiZGlzY2FyZENhcmRGb3JQaWNraW5nIiwicmVtb3ZlIiwiZ2FtZUhlbHBUZXh0IiwicGxheWVySGFuZENvbnRhaW5lciIsInBsYXllckhhbmQiLCJsZW5ndGgiLCJjYXJkRnJvbnQiLCJkZWFkd29vZENvdW50ZXIiLCJwbGF5ZXJEZWFkd29vZCIsImNyZWF0ZUdhbWUiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjdXJyZW50R2FtZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlR2FtZUJ0biIsImVycm9yIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=