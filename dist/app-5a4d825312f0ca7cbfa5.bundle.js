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
___CSS_LOADER_EXPORT___.push([module.id, ".gameContainer {\n  background-color: #45a173;\n}\n\n.red {\n  color: red;\n}\n\n.card-topleft {\n  position: relative;\n  top: 0.2em;\n  left: 0.75em;\n}\n\n.card-bottomright {\n  position: relative;\n  bottom: -2.5em;\n  right: 0.6em;\n  transform: rotate(180deg);\n}\n\n.card-corner-rank,\n.card-corner-suit {\n  width: 1em;\n  text-align: center;\n  transform: translate(-50%, 0);\n}\n\n.suitSize {\n  font-size: 9px;\n}\n\n.card-back {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #eceee3;\n  /* border-width: 0.5px; */\n  background-color: white;\n  background-image: url(\"https://deck.of.cards/img/standard-deck/back.png\");\n  margin-right: calc(25px - var(--card-width));\n  float: left;\n  background-size: cover;\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.15);\n}\n\n.card-container {\n  display: flex;\n  flex: 1 0 0;\n  overflow-x: hidden;\n  justify-content: center;\n}\n.card-container:last-child {\n  flex: 0 0 auto;\n}\n\n.card-deck {\n  margin: 10px 9px;\n  /* --card-width: 5em; */\n  border-style: solid;\n  border-color: #eceee3;\n  /* border-width: 0.5px; */\n  background-color: white;\n  background-image: url(\"https://deck.of.cards/img/standard-deck/back.png\");\n  /* margin-right: calc(25px - var(--card-width)); */\n  /* float: left; */\n  background-size: cover;\n  border-radius: 0.25em;\n  display: inline-block;\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.15);\n}\n\n.playing-deck-container {\n  align-items: center;\n}\n\n.playing-deck-btn-container {\n  margin: 10px 50px;\n}\n\n.card-front {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #acc5c2;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  margin-right: calc(25px - var(--card-width));\n  float: left;\n  /* background-size: cover; */\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  z-index: 1;\n}\n\n.card {\n  background-color: white;\n}\n\n.deadwoodContainer {\n  text-align: end;\n}\n\n.discard-deck {\n  /* margin: 10px 9px; */\n  /* --card-width: 5em; */\n  /* border-style: solid;\n  border-color: #eceee3; */\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  /* margin-right: calc(25px - var(--card-width)); */\n  /* float: left; */\n  /* background-size: cover; */\n  /* border-radius: 0.25em;\n  display: inline-block;\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  padding: 10px; */\n  margin: 0px 50px;\n}\n\n.discard-card-front {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #acc5c2;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  /* margin-right: calc(25px - var(--card-width)); */\n  float: left;\n  /* background-size: cover; */\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  /* padding: 10px; */\n  z-index: 1;\n    box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.15);\n\n}\n\n.btn {\n  /* font-size: 12px; */\n  /* display: inline-block; */\n  /* text-align: center; */\n  /* width: 35px; */\n  /* background-color: #2196f3; */\n  /* padding: 0px; */\n  /* color: antiquewhite; */\n  /* height: 25px; */\n  /* font-weight: bold; */\n  /* width: 26px; */\n  /* display: inline-flex; */\n  border-style: groove;\n  padding: 0.5em 1em;\n  /* border-radius: 1em; */\n  border-style: solid;\n}\n\n.gameHelpText {\n  text-align: center;\n  padding-bottom: 0.5em;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;;EAEE,UAAU;EACV,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,uBAAuB;EACvB,yEAAyE;EACzE,4CAA4C;EAC5C,WAAW;EACX,sBAAsB;EACtB,qBAAqB;EACrB,2BAA2B;EAC3B,eAAe;EACf,eAAe;EACf,UAAU;EACV,kDAAkD;AACpD;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,uBAAuB;EACvB,yEAAyE;EACzE,kDAAkD;EAClD,iBAAiB;EACjB,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,eAAe;EACf,UAAU;EACV,kDAAkD;AACpD;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,+BAA+B;EAC/B,2EAA2E;EAC3E,4CAA4C;EAC5C,WAAW;EACX,4BAA4B;EAC5B,qBAAqB;EACrB,2BAA2B;EAC3B,eAAe;EACf,eAAe;EACf,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB;0BACwB;EACxB,yBAAyB;EACzB,+BAA+B;EAC/B,2EAA2E;EAC3E,kDAAkD;EAClD,iBAAiB;EACjB,4BAA4B;EAC5B;;;;;kBAKgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,+BAA+B;EAC/B,2EAA2E;EAC3E,kDAAkD;EAClD,WAAW;EACX,4BAA4B;EAC5B,qBAAqB;EACrB,2BAA2B;EAC3B,eAAe;EACf,eAAe;EACf,UAAU;EACV,mBAAmB;EACnB,UAAU;IACR,kDAAkD;;AAEtD;;AAEA;EACE,qBAAqB;EACrB,2BAA2B;EAC3B,wBAAwB;EACxB,iBAAiB;EACjB,+BAA+B;EAC/B,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;EACjB,0BAA0B;EAC1B,oBAAoB;EACpB,kBAAkB;EAClB,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB","sourcesContent":[".gameContainer {\n  background-color: #45a173;\n}\n\n.red {\n  color: red;\n}\n\n.card-topleft {\n  position: relative;\n  top: 0.2em;\n  left: 0.75em;\n}\n\n.card-bottomright {\n  position: relative;\n  bottom: -2.5em;\n  right: 0.6em;\n  transform: rotate(180deg);\n}\n\n.card-corner-rank,\n.card-corner-suit {\n  width: 1em;\n  text-align: center;\n  transform: translate(-50%, 0);\n}\n\n.suitSize {\n  font-size: 9px;\n}\n\n.card-back {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #eceee3;\n  /* border-width: 0.5px; */\n  background-color: white;\n  background-image: url(\"https://deck.of.cards/img/standard-deck/back.png\");\n  margin-right: calc(25px - var(--card-width));\n  float: left;\n  background-size: cover;\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.15);\n}\n\n.card-container {\n  display: flex;\n  flex: 1 0 0;\n  overflow-x: hidden;\n  justify-content: center;\n}\n.card-container:last-child {\n  flex: 0 0 auto;\n}\n\n.card-deck {\n  margin: 10px 9px;\n  /* --card-width: 5em; */\n  border-style: solid;\n  border-color: #eceee3;\n  /* border-width: 0.5px; */\n  background-color: white;\n  background-image: url(\"https://deck.of.cards/img/standard-deck/back.png\");\n  /* margin-right: calc(25px - var(--card-width)); */\n  /* float: left; */\n  background-size: cover;\n  border-radius: 0.25em;\n  display: inline-block;\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.15);\n}\n\n.playing-deck-container {\n  align-items: center;\n}\n\n.playing-deck-btn-container {\n  margin: 10px 50px;\n}\n\n.card-front {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #acc5c2;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  margin-right: calc(25px - var(--card-width));\n  float: left;\n  /* background-size: cover; */\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  z-index: 1;\n}\n\n.card {\n  background-color: white;\n}\n\n.deadwoodContainer {\n  text-align: end;\n}\n\n.discard-deck {\n  /* margin: 10px 9px; */\n  /* --card-width: 5em; */\n  /* border-style: solid;\n  border-color: #eceee3; */\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  /* margin-right: calc(25px - var(--card-width)); */\n  /* float: left; */\n  /* background-size: cover; */\n  /* border-radius: 0.25em;\n  display: inline-block;\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  padding: 10px; */\n  margin: 0px 50px;\n}\n\n.discard-card-front {\n  margin: 10px 9px;\n  --card-width: 5em;\n  border-style: solid;\n  border-color: #acc5c2;\n  /* border-width: 0.5px; */\n  /* background-color: #c56c86; */\n  /* background-image: url(\"https://wallpaperaccess.com/full/1800451.jpg\"); */\n  /* margin-right: calc(25px - var(--card-width)); */\n  float: left;\n  /* background-size: cover; */\n  border-radius: 0.25em;\n  /* display: inline-block; */\n  min-height: 7em;\n  max-height: 7em;\n  width: 5em;\n  /* padding: 10px; */\n  z-index: 1;\n    box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.15);\n\n}\n\n.btn {\n  /* font-size: 12px; */\n  /* display: inline-block; */\n  /* text-align: center; */\n  /* width: 35px; */\n  /* background-color: #2196f3; */\n  /* padding: 0px; */\n  /* color: antiquewhite; */\n  /* height: 25px; */\n  /* font-weight: bold; */\n  /* width: 26px; */\n  /* display: inline-flex; */\n  border-style: groove;\n  padding: 0.5em 1em;\n  /* border-radius: 1em; */\n  border-style: solid;\n}\n\n.gameHelpText {\n  text-align: center;\n  padding-bottom: 0.5em;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naW5ydW1teS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2dpbnJ1bW15Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9naW5ydW1teS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dpbnJ1bW15Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dpbnJ1bW15Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9naW5ydW1teS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9naW5ydW1teS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9naW5ydW1teS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dpbnJ1bW15Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dpbnJ1bW15L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9naW5ydW1teS8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vZ2lucnVtbXkvLi9zcmMvc3R5bGVzLmNzcz80NGIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTE3MztcXG59XFxuXFxuLnJlZCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uY2FyZC10b3BsZWZ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC4yZW07XFxuICBsZWZ0OiAwLjc1ZW07XFxufVxcblxcbi5jYXJkLWJvdHRvbXJpZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogLTIuNWVtO1xcbiAgcmlnaHQ6IDAuNmVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmNhcmQtY29ybmVyLXJhbmssXFxuLmNhcmQtY29ybmVyLXN1aXQge1xcbiAgd2lkdGg6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbn1cXG5cXG4uc3VpdFNpemUge1xcbiAgZm9udC1zaXplOiA5cHg7XFxufVxcblxcbi5jYXJkLWJhY2sge1xcbiAgbWFyZ2luOiAxMHB4IDlweDtcXG4gIC0tY2FyZC13aWR0aDogNWVtO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogI2VjZWVlMztcXG4gIC8qIGJvcmRlci13aWR0aDogMC41cHg7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9kZWNrLm9mLmNhcmRzL2ltZy9zdGFuZGFyZC1kZWNrL2JhY2sucG5nXFxcIik7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoMjVweCAtIHZhcigtLWNhcmQtd2lkdGgpKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cXG4gIG1pbi1oZWlnaHQ6IDdlbTtcXG4gIG1heC1oZWlnaHQ6IDdlbTtcXG4gIHdpZHRoOiA1ZW07XFxuICBib3gtc2hhZG93OiAwIDAuMDYyNWVtIDAuMTI1ZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDAgMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2FyZC1jb250YWluZXI6bGFzdC1jaGlsZCB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG59XFxuXFxuLmNhcmQtZGVjayB7XFxuICBtYXJnaW46IDEwcHggOXB4O1xcbiAgLyogLS1jYXJkLXdpZHRoOiA1ZW07ICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjZWNlZWUzO1xcbiAgLyogYm9yZGVyLXdpZHRoOiAwLjVweDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2RlY2sub2YuY2FyZHMvaW1nL3N0YW5kYXJkLWRlY2svYmFjay5wbmdcXFwiKTtcXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgLyogZmxvYXQ6IGxlZnQ7ICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIGJveC1zaGFkb3c6IDAgMC4wNjI1ZW0gMC4xMjVlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cXG4ucGxheWluZy1kZWNrLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWluZy1kZWNrLWJ0bi1jb250YWluZXIge1xcbiAgbWFyZ2luOiAxMHB4IDUwcHg7XFxufVxcblxcbi5jYXJkLWZyb250IHtcXG4gIG1hcmdpbjogMTBweCA5cHg7XFxuICAtLWNhcmQtd2lkdGg6IDVlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNhY2M1YzI7XFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTsgKi9cXG4gIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGVhZHdvb2RDb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4uZGlzY2FyZC1kZWNrIHtcXG4gIC8qIG1hcmdpbjogMTBweCA5cHg7ICovXFxuICAvKiAtLWNhcmQtd2lkdGg6IDVlbTsgKi9cXG4gIC8qIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNlY2VlZTM7ICovXFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTsgKi9cXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgLyogZmxvYXQ6IGxlZnQ7ICovXFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgLyogYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIHBhZGRpbmc6IDEwcHg7ICovXFxuICBtYXJnaW46IDBweCA1MHB4O1xcbn1cXG5cXG4uZGlzY2FyZC1jYXJkLWZyb250IHtcXG4gIG1hcmdpbjogMTBweCA5cHg7XFxuICAtLWNhcmQtd2lkdGg6IDVlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNhY2M1YzI7XFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTsgKi9cXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxuICB6LWluZGV4OiAxO1xcbiAgICBib3gtc2hhZG93OiAwIDAuMDYyNWVtIDAuMTI1ZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG5cXG59XFxuXFxuLmJ0biB7XFxuICAvKiBmb250LXNpemU6IDEycHg7ICovXFxuICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICAvKiB3aWR0aDogMzVweDsgKi9cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7ICovXFxuICAvKiBwYWRkaW5nOiAwcHg7ICovXFxuICAvKiBjb2xvcjogYW50aXF1ZXdoaXRlOyAqL1xcbiAgLyogaGVpZ2h0OiAyNXB4OyAqL1xcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXFxuICAvKiB3aWR0aDogMjZweDsgKi9cXG4gIC8qIGRpc3BsYXk6IGlubGluZS1mbGV4OyAqL1xcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICAvKiBib3JkZXItcmFkaXVzOiAxZW07ICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG4uZ2FtZUhlbHBUZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2Qix5RUFBeUU7RUFDekUsNENBQTRDO0VBQzVDLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7RUFDVixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2Qix5RUFBeUU7RUFDekUsa0RBQWtEO0VBQ2xELGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7RUFDVixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQiwyRUFBMkU7RUFDM0UsNENBQTRDO0VBQzVDLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QjswQkFDd0I7RUFDeEIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQiwyRUFBMkU7RUFDM0Usa0RBQWtEO0VBQ2xELGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUI7Ozs7O2tCQUtnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQiwyRUFBMkU7RUFDM0Usa0RBQWtEO0VBQ2xELFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsVUFBVTtJQUNSLGtEQUFrRDs7QUFFdEQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTE3MztcXG59XFxuXFxuLnJlZCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uY2FyZC10b3BsZWZ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC4yZW07XFxuICBsZWZ0OiAwLjc1ZW07XFxufVxcblxcbi5jYXJkLWJvdHRvbXJpZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogLTIuNWVtO1xcbiAgcmlnaHQ6IDAuNmVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmNhcmQtY29ybmVyLXJhbmssXFxuLmNhcmQtY29ybmVyLXN1aXQge1xcbiAgd2lkdGg6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbn1cXG5cXG4uc3VpdFNpemUge1xcbiAgZm9udC1zaXplOiA5cHg7XFxufVxcblxcbi5jYXJkLWJhY2sge1xcbiAgbWFyZ2luOiAxMHB4IDlweDtcXG4gIC0tY2FyZC13aWR0aDogNWVtO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogI2VjZWVlMztcXG4gIC8qIGJvcmRlci13aWR0aDogMC41cHg7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9kZWNrLm9mLmNhcmRzL2ltZy9zdGFuZGFyZC1kZWNrL2JhY2sucG5nXFxcIik7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoMjVweCAtIHZhcigtLWNhcmQtd2lkdGgpKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cXG4gIG1pbi1oZWlnaHQ6IDdlbTtcXG4gIG1heC1oZWlnaHQ6IDdlbTtcXG4gIHdpZHRoOiA1ZW07XFxuICBib3gtc2hhZG93OiAwIDAuMDYyNWVtIDAuMTI1ZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDAgMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2FyZC1jb250YWluZXI6bGFzdC1jaGlsZCB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG59XFxuXFxuLmNhcmQtZGVjayB7XFxuICBtYXJnaW46IDEwcHggOXB4O1xcbiAgLyogLS1jYXJkLXdpZHRoOiA1ZW07ICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjZWNlZWUzO1xcbiAgLyogYm9yZGVyLXdpZHRoOiAwLjVweDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2RlY2sub2YuY2FyZHMvaW1nL3N0YW5kYXJkLWRlY2svYmFjay5wbmdcXFwiKTtcXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgLyogZmxvYXQ6IGxlZnQ7ICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIGJveC1zaGFkb3c6IDAgMC4wNjI1ZW0gMC4xMjVlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cXG4ucGxheWluZy1kZWNrLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWluZy1kZWNrLWJ0bi1jb250YWluZXIge1xcbiAgbWFyZ2luOiAxMHB4IDUwcHg7XFxufVxcblxcbi5jYXJkLWZyb250IHtcXG4gIG1hcmdpbjogMTBweCA5cHg7XFxuICAtLWNhcmQtd2lkdGg6IDVlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNhY2M1YzI7XFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTsgKi9cXG4gIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGVhZHdvb2RDb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4uZGlzY2FyZC1kZWNrIHtcXG4gIC8qIG1hcmdpbjogMTBweCA5cHg7ICovXFxuICAvKiAtLWNhcmQtd2lkdGg6IDVlbTsgKi9cXG4gIC8qIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNlY2VlZTM7ICovXFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTsgKi9cXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgLyogZmxvYXQ6IGxlZnQ7ICovXFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgLyogYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIHBhZGRpbmc6IDEwcHg7ICovXFxuICBtYXJnaW46IDBweCA1MHB4O1xcbn1cXG5cXG4uZGlzY2FyZC1jYXJkLWZyb250IHtcXG4gIG1hcmdpbjogMTBweCA5cHg7XFxuICAtLWNhcmQtd2lkdGg6IDVlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNhY2M1YzI7XFxuICAvKiBib3JkZXItd2lkdGg6IDAuNXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2M1NmM4NjsgKi9cXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTgwMDQ1MS5qcGdcXFwiKTsgKi9cXG4gIC8qIG1hcmdpbi1yaWdodDogY2FsYygyNXB4IC0gdmFyKC0tY2FyZC13aWR0aCkpOyAqL1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgbWluLWhlaWdodDogN2VtO1xcbiAgbWF4LWhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxuICB6LWluZGV4OiAxO1xcbiAgICBib3gtc2hhZG93OiAwIDAuMDYyNWVtIDAuMTI1ZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG5cXG59XFxuXFxuLmJ0biB7XFxuICAvKiBmb250LXNpemU6IDEycHg7ICovXFxuICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICAvKiB3aWR0aDogMzVweDsgKi9cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7ICovXFxuICAvKiBwYWRkaW5nOiAwcHg7ICovXFxuICAvKiBjb2xvcjogYW50aXF1ZXdoaXRlOyAqL1xcbiAgLyogaGVpZ2h0OiAyNXB4OyAqL1xcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXFxuICAvKiB3aWR0aDogMjZweDsgKi9cXG4gIC8qIGRpc3BsYXk6IGlubGluZS1mbGV4OyAqL1xcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICAvKiBib3JkZXItcmFkaXVzOiAxZW07ICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG4uZ2FtZUhlbHBUZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogICAgICAgICAgICAgICAgICBET00gQ3JlYXRpb24gRnVuY3Rpb25zXG4gKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9IChjb250YWluZXJJZCwgY29udGFpbmVyQ29sb3IpID0+IHtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld0Rpdi5pZCA9IGNvbnRhaW5lcklkO1xuICBuZXdEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29udGFpbmVyQ29sb3I7XG4gIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgcmV0dXJuIG5ld0Rpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZUxhYmVsID0gKGxhYmVsRm9yLCBsYWJlbFRleHQpID0+IHtcbiAgY29uc3QgbmV3TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBuZXdMYWJlbC5mb3IgPSBsYWJlbEZvcjtcbiAgbmV3TGFiZWwuaW5uZXJUZXh0ID0gbGFiZWxUZXh0O1xuICByZXR1cm4gbmV3TGFiZWw7XG59O1xuXG5jb25zdCBjcmVhdGVJbnB1dCA9IChpbnB1dFR5cGUsIGlucHV0TmFtZSwgaW5wdXRWYWx1ZSwgaW5wdXRSZXF1aXJlZCkgPT4ge1xuICBjb25zdCBuZXdJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5ld0lucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gIG5ld0lucHV0LmlkID0gaW5wdXROYW1lO1xuICBuZXdJbnB1dC5uYW1lID0gaW5wdXROYW1lO1xuICBuZXdJbnB1dC52YWx1ZSA9IGlucHV0VmFsdWU7XG4gIG5ld0lucHV0LnJlcXVpcmVkID0gaW5wdXRSZXF1aXJlZDtcbiAgcmV0dXJuIG5ld0lucHV0O1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKGJ0bklkLCBidG5UZXh0LCBidG5DYWxsYmFjaykgPT4ge1xuICBjb25zdCBuZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3QnRuLmlkID0gYnRuSWQ7XG4gIG5ld0J0bi5pbm5lclRleHQgPSBidG5UZXh0O1xuICBuZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidG5DYWxsYmFjayk7XG4gIHJldHVybiBuZXdCdG47XG59O1xuXG5jb25zdCBzaG93Q2FyZCA9IChjYXJkKSA9PiB7XG5cbiAgY29uc3QgY2FyZERpdiA9IGNyZWF0ZUNvbnRhaW5lcignY2FyZERpdicsICd3aGl0ZScpO1xuICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQtZnJvbnQnKTtcblxuICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3aGl0ZScpO1xuICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRFbGVtZW50KTtcbiAgY29uc3QgY29sb3JDbGFzcyA9IGNhcmQuc3VpdENvbG91cjtcblxuICAvLyAtLS0gc2hvdyBjYXJkIGRldGFpbHMgaW4gdG9wIGxlZnQgY29ybmVyIG9mIGNhcmRcblxuICBjb25zdCBzdWl0TmFtZVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdWl0TmFtZVRvcC5jbGFzc0xpc3QuYWRkKCdjYXJkLXRvcGxlZnQnKTtcbiAgY2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VpdE5hbWVUb3ApO1xuXG4gIGNvbnN0IGNhcmROYW1lVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmROYW1lVG9wLmlubmVyVGV4dCA9IGNhcmQuZGlzcGxheU5hbWU7XG4gIGNhcmROYW1lVG9wLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29ybmVyLXJhbmsnLCBgJHtjb2xvckNsYXNzfWApO1xuICBzdWl0TmFtZVRvcC5hcHBlbmRDaGlsZChjYXJkTmFtZVRvcCk7XG5cbiAgY29uc3QgY2FyZFN1aXRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZFN1aXRUb3AuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb3JuZXItc3VpdCcsICdzdWl0U2l6ZScpO1xuICBjYXJkU3VpdFRvcC5pbm5lclRleHQgPSBjYXJkLnN1aXRTeW1ib2w7XG4gIHN1aXROYW1lVG9wLmFwcGVuZENoaWxkKGNhcmRTdWl0VG9wKTtcblxuICAvLyA9PT0gc2hvdyBjYXJkIGRldGFpbHMgaW4gYm90dG9tIHJpZ2h0IGNvcm5lciBvZiBjYXJkXG5cbiAgY29uc3Qgc3VpdE5hbWVCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VpdE5hbWVCb3R0b20uY2xhc3NMaXN0LmFkZCgnY2FyZC1ib3R0b21yaWdodCcpO1xuICBjYXJkRWxlbWVudC5hcHBlbmRDaGlsZChzdWl0TmFtZUJvdHRvbSk7XG5cbiAgY29uc3QgY2FyZE5hbWVCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZE5hbWVCb3R0b20uaW5uZXJUZXh0ID0gY2FyZC5kaXNwbGF5TmFtZTtcbiAgY2FyZE5hbWVCb3R0b20uY2xhc3NMaXN0LmFkZCgnY2FyZC1jb3JuZXItcmFuaycsIGAke2NvbG9yQ2xhc3N9YCk7XG4gIHN1aXROYW1lQm90dG9tLmFwcGVuZENoaWxkKGNhcmROYW1lQm90dG9tKTtcblxuICBjb25zdCBjYXJkU3VpdEJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkU3VpdEJvdHRvbS5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvcm5lci1zdWl0JywgJ3N1aXRTaXplJyk7XG4gIGNhcmRTdWl0Qm90dG9tLmlubmVyVGV4dCA9IGNhcmQuc3VpdFN5bWJvbDtcbiAgc3VpdE5hbWVCb3R0b20uYXBwZW5kQ2hpbGQoY2FyZFN1aXRCb3R0b20pO1xuXG4gIGNhcmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICByZXR1cm4gY2FyZERpdjtcblxufTtcblxuLypcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogICAgICAgICAgICAgICAgICBET00gRWxlbWVudHNcbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuXG5cbi8qXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqICAgICAgICAgICAgICAgICAgR2FtZSBIZWxwZXIgRnVuY3Rpb25zXG4gKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jb250YWluZXInKVxuXG5cbmNvbnN0IGluaXRHYW1lQm9hcmREb20gPSAoZ2FtZURhdGEpID0+IHtcblxuICBjb25zdCBib2FyZFVwcGVyU2VjdGlvbiA9IGNyZWF0ZUNvbnRhaW5lcignYm9hcmRVcHBlclNlY3Rpb24nKTtcbiAgY29uc3QgYm9hcmRNaWRkbGVTZWN0aW9uID0gY3JlYXRlQ29udGFpbmVyKCdib2FyZE1pZGRsZVNlY3Rpb24nKTtcbiAgY29uc3QgYm9hcmRCb3R0b21TZWN0aW9uID0gY3JlYXRlQ29udGFpbmVyKCdib2FyZEJvdHRvbVNlY3Rpb24nKTtcbiAgY29uc3QgYm9hcmRHYW1lSGVscFRleHQgPSBjcmVhdGVDb250YWluZXIoJ2JvYXJkR2FtZUhlbHBUZXh0Jyk7XG5cbiAgLy8gdXBwZXIgc2VjdGlvbiBvZiBnYW1lIGJvYXJkXG4gIGNvbnN0IG9wcG9uZW50SGFuZENvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcignb3Bwb25lbnRIYW5kQ29udGFpbmVyJylcbiAgb3Bwb25lbnRIYW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGFpbmVyJywgJ2hhbmQtcG9zaXRpb24nKTtcbiAgYm9hcmRVcHBlclNlY3Rpb24uYXBwZW5kQ2hpbGQob3Bwb25lbnRIYW5kQ29udGFpbmVyKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNhcmRCYWNrID0gY3JlYXRlQ29udGFpbmVyKCdjYXJkQmFjaycpO1xuICAgIGNhcmRCYWNrLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYmFjaycpXG4gICAgb3Bwb25lbnRIYW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRCYWNrKTtcbiAgfVxuXG4gIC8vIG1pZGRsZSBzZWN0aW9uIG9mIGdhbWUgYm9hcmRcbiAgY29uc3QgZ2FtZUZ1bmN0aW9uc0NvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcignZ2FtZUZ1bmN0aW9uc0NvbnRhaW5lcicpO1xuICBnYW1lRnVuY3Rpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGFpbmVyJywgJ3BsYXlpbmctZGVjay1jb250YWluZXInKTtcbiAgYm9hcmRNaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKGdhbWVGdW5jdGlvbnNDb250YWluZXIpO1xuXG4gIGNvbnN0IGxlZnRCdXR0b25Db250YWluZXIgPSBjcmVhdGVDb250YWluZXIoJ2xlZnRCdXR0b25Db250YWluZXInLCAnYmVpZ2UnKTtcbiAgbGVmdEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nLWRlY2stYnRuLWNvbnRhaW5lcicpO1xuICBjb25zdCBnaW5CdG4gPSBjcmVhdGVCdXR0b24oJ2dpbkJ0bicsICdHaW4nKTtcbiAgZ2luQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICBsZWZ0QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGdpbkJ0bik7XG5cbiAgY29uc3QgcmlnaHRCdXR0b25jb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoJ3JpZ2h0QnV0dG9uY29udGFpbmVyJywgJ2JlaWdlJyk7XG4gIHJpZ2h0QnV0dG9uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BsYXlpbmctZGVjay1idG4tY29udGFpbmVyJylcbiAgY29uc3QgcGFzc0J0biA9IGNyZWF0ZUJ1dHRvbigncGFzc0J0bicsICdQYXNzJyk7XG4gIHBhc3NCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gIHJpZ2h0QnV0dG9uY29udGFpbmVyLmFwcGVuZENoaWxkKHBhc3NCdG4pO1xuXG4gIGdhbWVGdW5jdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgY29uc3QgcGxheWluZ0RlY2sgPSBjcmVhdGVDb250YWluZXIoJ2NhcmRCYWNrJyk7XG4gIHBsYXlpbmdEZWNrLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGVjaycpO1xuICBnYW1lRnVuY3Rpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXlpbmdEZWNrKTtcblxuICBjb25zdCBkaXNjYXJkUGlsZSA9IGNyZWF0ZUNvbnRhaW5lcignZGlzY2FyZFBpbGUnKTtcbiAgZGlzY2FyZFBpbGUuY2xhc3NMaXN0LmFkZCgnZGlzY2FyZC1kZWNrJyk7XG4gIGRpc2NhcmRQaWxlLnN0eWxlLm1hcmdpblJpZ2h0ID0gMDtcbiAgY29uc3QgZGlzY2FyZENhcmRGb3JQaWNraW5nID0gc2hvd0NhcmQoZ2FtZURhdGEuZGlzY2FyZENhcmRGb3JQaWNraW5nKTtcbiAgZGlzY2FyZENhcmRGb3JQaWNraW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmQtZnJvbnQnKTtcbiAgZGlzY2FyZENhcmRGb3JQaWNraW5nLmNsYXNzTGlzdC5hZGQoJ2Rpc2NhcmQtY2FyZC1mcm9udCcpO1xuICBnYW1lRnVuY3Rpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc2NhcmRQaWxlKTtcbiAgZGlzY2FyZFBpbGUuYXBwZW5kQ2hpbGQoZGlzY2FyZENhcmRGb3JQaWNraW5nKTtcblxuICBnYW1lRnVuY3Rpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0QnV0dG9uY29udGFpbmVyKTtcblxuICAvLyBnYW1lIGhlbHAgdGV4dCBjb250YWluZXJcbiAgY29uc3QgZ2FtZUhlbHBUZXh0ID0gY3JlYXRlQ29udGFpbmVyKCdnYW1lSGVscFRleHQnKTtcbiAgZ2FtZUhlbHBUZXh0LmlubmVyVGV4dCA9ICd0ZXN0JztcbiAgZ2FtZUhlbHBUZXh0LmNsYXNzTGlzdC5hZGQoJ2dhbWVIZWxwVGV4dCcpO1xuICBib2FyZEdhbWVIZWxwVGV4dC5hcHBlbmRDaGlsZChnYW1lSGVscFRleHQpO1xuXG4gIC8vIGJvdHRvbSBzZWN0aW9uIG9mIGdhbWUgYm9hcmRcbiAgY29uc3QgcGxheWVySGFuZENvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcigncGxheWVySGFuZENvbnRhaW5lcicpO1xuICBwbGF5ZXJIYW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGFpbmVyJyk7XG4gIGJvYXJkQm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChwbGF5ZXJIYW5kQ29udGFpbmVyKTtcbiAgXG4gIGxldCBwbGF5ZXJIYW5kID0gZ2FtZURhdGEucGxheWVySGFuZFsxXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgcGxheWVySGFuZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNhcmRGcm9udCA9IHNob3dDYXJkKHBsYXllckhhbmRbaV0pO1xuICAgIHBsYXllckhhbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZEZyb250KTtcbiAgfVxuXG4gIGNvbnN0IGRlYWR3b29kQ291bnRlciA9IGNyZWF0ZUNvbnRhaW5lcignZGVhZHdvb2RDb3VudGVyJyk7XG4gIGRlYWR3b29kQ291bnRlci5pbm5lclRleHQgPSBgRGVhZHdvb2Q6ICR7Z2FtZURhdGEucGxheWVyRGVhZHdvb2RbMV19YFxuICBkZWFkd29vZENvdW50ZXIuY2xhc3NMaXN0LmFkZCgnZGVhZHdvb2RDb250YWluZXInKVxuICBib2FyZEJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVhZHdvb2RDb3VudGVyKTtcblxuICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkVXBwZXJTZWN0aW9uKTtcbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZE1pZGRsZVNlY3Rpb24pO1xuICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkR2FtZUhlbHBUZXh0KTtcbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZEJvdHRvbVNlY3Rpb24pO1xufVxuXG5jb25zdCBjcmVhdGVHYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBNYWtlIGEgcmVxdWVzdCB0byBjcmVhdGUgYSBuZXcgZ2FtZVxuICBheGlvcy5wb3N0KCcvZ2FtZXMnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gc2V0IHRoZSBnbG9iYWwgdmFsdWUgdG8gdGhlIG5ldyBnYW1lLlxuICAgICAgY3VycmVudEdhbWUgPSByZXNwb25zZS5kYXRhO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgXG4gICAgICAvLyBkaXNwbGF5IGl0IG91dCB0byB0aGUgdXNlclxuICAgICAgLy8gcnVuR2FtZShjdXJyZW50R2FtZSk7XG4gICAgICBpbml0R2FtZUJvYXJkRG9tKGN1cnJlbnRHYW1lKTtcbiAgICAgIGNyZWF0ZUdhbWVCdG4ucmVtb3ZlKCk7XG5cbiAgICAgIFxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG59O1xuXG4vLyB3ZWJwYWNrXG5cbi8vIGRpc2FibGUgYW5kIGhpZGUgYnV0dG9ucyBieSBkZWZhdWx0XG5cbi8vIGNyZWF0ZSBnYW1lXG4vLyBzaG93IHBhc3MgYnV0dG9uXG4vLyBlbmFibGUgcGFzcyBidXR0b25cblxuLy8gcGFzcyBidXR0b25cbi8vIGhpZGUgcGFzcyBidXR0b25cbi8vIGNvbXB1dGVyIHR1cm5cbi8vIHJhbmRvbSBhY3Rpb24gdG8gcGFzcyBvciBub3QgKHJ1biBkcmF3IGRlY2sgb3IgZHJhd2Rpc2NhcmQgY2FsbGJhY2sgdG8gY29udHJvbGxlcilcbi8vIHBsYXllciB0dXJuXG4vLyBlbmFibGUgZHJhdyBkZWNrXG4vLyBlbmFibGUgZHJhdyBkaXNjYXJkXG5cbi8vIGNsaWNrIGRyYXcgZGVja1xuLy8gYWRkIGNhcmQgdG8gcGxheWVyIGhhbmQgKGNvbnRyb2xsZXIpXG4vLyBlbmFibGUgZGlzY2FyZCBvZiBjYXJkcyBmcm9tIGhhbmRcbi8vIGRpc2FibGUgZHJhdyBkZWNrXG4vLyBkaXNhYmxlIGRyYXcgZGlzY2FyZFxuLy8gY29tcHV0ZXIgdHVyblxuLy8gcmFuZG9tIGFjdGlvbiB0byBkcmF3IGZyb20gZGVjayBvciBkaXNjYXJkXG4vLyBkaXNjYXJkIGhpZ2hlc3QgZnJvbSBkZWFkd29vZFxuLy8gY2hlY2sgZGVhZHdvb2QgdmFsdWUgXG4vLyBlbmFibGUvc2hvdyBnaW4gaWYgZGVhZHdvb2QubGVuZ3RoID0gMVxuLy8gZW5hYmxlL3Nob3cgYmlnIGdpbiBpZiBkZWFkd29vZC5sZW5ndGggPSAwXG4vLyBlbmFibGUvc2hvdyBrbm9jayBpZiBkZWFkd29vZCBzdW0gPD0gMTBcblxuLy8gY2xpY2sgZHJhd0Rpc2NhcmRcbi8vIGFkZCBjYXJkIHRvIHBsYXllciBoYW5kIChjb250cm9sbGVyKVxuLy8gZW5hYmxlIGRpc2NhcmQgb2YgY2FyZHMgZnJvbSBoYW5kXG4vLyBkaXNhYmxlIGRyYXcgZGVja1xuLy8gZGlzYWJsZSBkcmF3IGRpc2NhcmRcbi8vIGNvbXB1dGVyIHR1cm5cbi8vIHJhbmRvbSBhY3Rpb24gdG8gZHJhdyBmcm9tIGRlY2sgb3IgZGlzY2FyZFxuLy8gZGlzY2FyZCBoaWdoZXN0IGZyb20gZGVhZHdvb2Rcbi8vIGNoZWNrIGRlYWR3b29kIHZhbHVlIFxuLy8gZW5hYmxlL3Nob3cgZ2luIGlmIGRlYWR3b29kLmxlbmd0aCA9IDFcbi8vIGVuYWJsZS9zaG93IGJpZyBnaW4gaWYgZGVhZHdvb2QubGVuZ3RoID0gMFxuLy8gZW5hYmxlL3Nob3cga25vY2sgaWYgZGVhZHdvb2Qgc3VtIDw9IDEwXG5cbi8vIGNsaWNrIGRpc2NhcmRGcm9tSGFuZFxuLy8gcHVzaCB0byBkaXNjYXJkIHBpbGUgKGNvbnRyb2xsZXIpXG4vLyBkaXNhYmxlIGRpc2NhcmRGcm9tSGFuZFxuLy8gcmVjYWxjdWxhdGUgZGVhZHdvb2Rcbi8vIG90aGVyIHBsYXllciB0dXJuXG4vLyBlbmFibGUgZHJhdyBkZWNrXG4vLyBlbmFibGUgZHJhdyBkaXNjYXJkXG5cbi8vIGNsaWNrIGdpbiAvIGJpZyBnaW5cbi8vIGRpc2NhcmQgaWYgZ2luIGFuZCByZWNhbGN1bGF0ZSBkZWFkd29vZCB2YWx1ZVxuLy8gYWRkIHRvIHBsYXllciBzY29yZSAoY29udG9sbGVyKVxuLy8gY2hlY2sgaWYgcGxheWVyU2NvcmUgYWJvdmUgMTAwID0+IGVuZEdhbWUsIHNob3cgd2lubmVyLCB1cGRhdGUgd2lubmVyIHJlY29yZFxuLy8gZWxzZVxuLy8gaW5pdGlhbGlzZSBuZXcgcm91bmQgKGNvbnRyb2xsZXIpXG4vLyBjcmVhdGUgcm91bmRcblxuLy8gY2xpY2sga25vY2tcbi8vIGNhbGN1bGF0ZSBwbGF5ZXIgc2NvcmUgZnJvbSBkZWFkd29vZFxuLy8gY2hlY2sgaWYgcGxheWVyU2NvcmUgYWJvdmUgMTAwID0+IGVuZEdhbWUsIHNob3cgd2lubmVyLCB1cGRhdGUgd2lubmVyIHJlY29yZFxuLy8gZWxzZVxuLy8gaW5pdGlhbGlzZSBuZXcgcm91bmQgKGNvbnRyb2xsZXIpXG4vLyBjcmVhdGUgcm91bmRcblxuXG5cbiBcblxuXG5cblxuLypcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogICAgICAgICAgICAgICAgICBJbml0aWFsIFNjcmVlblxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jb25zdCBjcmVhdGVHYW1lQnRuID0gY3JlYXRlQnV0dG9uKCdjcmVhdGVHYW1lQnRuJywgJ2NyZWF0ZUdhbWVCdG4nLCBjcmVhdGVHYW1lKVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVHYW1lQnRuKTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250YWluZXIiLCJjb250YWluZXJJZCIsImNvbnRhaW5lckNvbG9yIiwibmV3RGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNyZWF0ZUxhYmVsIiwibGFiZWxGb3IiLCJsYWJlbFRleHQiLCJuZXdMYWJlbCIsImlubmVyVGV4dCIsImNyZWF0ZUlucHV0IiwiaW5wdXRUeXBlIiwiaW5wdXROYW1lIiwiaW5wdXRWYWx1ZSIsImlucHV0UmVxdWlyZWQiLCJuZXdJbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJyZXF1aXJlZCIsImNyZWF0ZUJ1dHRvbiIsImJ0bklkIiwiYnRuVGV4dCIsImJ0bkNhbGxiYWNrIiwibmV3QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dDYXJkIiwiY2FyZCIsImNhcmREaXYiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYXJkRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY29sb3JDbGFzcyIsInN1aXRDb2xvdXIiLCJzdWl0TmFtZVRvcCIsImNhcmROYW1lVG9wIiwiZGlzcGxheU5hbWUiLCJjYXJkU3VpdFRvcCIsInN1aXRTeW1ib2wiLCJzdWl0TmFtZUJvdHRvbSIsImNhcmROYW1lQm90dG9tIiwiY2FyZFN1aXRCb3R0b20iLCJnYW1lQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbml0R2FtZUJvYXJkRG9tIiwiZ2FtZURhdGEiLCJib2FyZFVwcGVyU2VjdGlvbiIsImJvYXJkTWlkZGxlU2VjdGlvbiIsImJvYXJkQm90dG9tU2VjdGlvbiIsImJvYXJkR2FtZUhlbHBUZXh0Iiwib3Bwb25lbnRIYW5kQ29udGFpbmVyIiwiaSIsImNhcmRCYWNrIiwiZ2FtZUZ1bmN0aW9uc0NvbnRhaW5lciIsImxlZnRCdXR0b25Db250YWluZXIiLCJnaW5CdG4iLCJyaWdodEJ1dHRvbmNvbnRhaW5lciIsInBhc3NCdG4iLCJwbGF5aW5nRGVjayIsImRpc2NhcmRQaWxlIiwibWFyZ2luUmlnaHQiLCJkaXNjYXJkQ2FyZEZvclBpY2tpbmciLCJyZW1vdmUiLCJnYW1lSGVscFRleHQiLCJwbGF5ZXJIYW5kQ29udGFpbmVyIiwicGxheWVySGFuZCIsImxlbmd0aCIsImNhcmRGcm9udCIsImRlYWR3b29kQ291bnRlciIsInBsYXllckRlYWR3b29kIiwiY3JlYXRlR2FtZSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImN1cnJlbnRHYW1lIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVHYW1lQnRuIiwiZXJyb3IiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==