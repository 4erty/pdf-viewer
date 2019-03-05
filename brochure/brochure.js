var __Brochure =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/brochure/brochure.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/brochure/brochure.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./src/brochure/brochure.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".brochure {\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  position: relative;\n  margin: 24px;\n}\n\n.brochure-title {\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 24px;\n  line-height: 24px;\n  margin: 0;\n  padding: 12px 0;\n  text-transform: uppercase;\n}\n\n.brochure-book {\n  box-sizing: border-box;\n  position: relative;\n}\n\n.brochure-loading {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 160px;\n  height: 48px;\n  z-index: 3;\n}\n\n.brochure-control {\n  display: flex;\n  align-items: center;\n}\n\n.brochure-pagination {\n  box-sizing: border-box;\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  margin-top: 24px;\n  width: 100%;\n}\n\n.brochure-pageInput {\n  box-sizing: border-box;\n  display: flex;\n  flex-basis: 200px;\n  margin-top: 24px;\n  padding: 0 24px;\n}\n\n.inputPage {\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  font-family: sans-serif;\n  font-size: 16px;\n  outline: none;\n  text-align: center;\n  width: 28px;\n}\n\n.inputTotal {\n  box-sizing: border-box;\n  font-family: sans-serif;\n  font-size: 16px;\n  outline: none;\n  padding: 0 8px;\n  text-align: center;\n}\n\n.pagination-numbers {\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: baseline;\n  width: 100%;\n}\n\n.pagination,\n.pagination-gap,\n.pagination-right,\n.pagination-left {\n  border-radius: 5px;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.87);\n  flex-basis: 10%;\n  font-family: sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  height: 32px;\n  line-height: 24px;\n  padding: 4px 2px;\n  text-align: center;\n  transition: all 300ms ease-out;\n  user-select: none;\n  vertical-align: middle;\n  width: 32px;\n}\n\n.pagination {\n  cursor: pointer;\n  display: none;\n}\n\n.pagination-display {\n  display: block;\n}\n\n.pagination:hover,\n.pagination-right:hover,\n.pagination-left:hover {\n  background-color: rgba(0, 0, 0, 0.12); \n}\n\n.pagination-active {\n  background-color: #007bff;\n  color: #ffffff;\n}\n\n.pagination-active:hover {\n  background-color: #0056b3;\n}\n\n.brochure-page {\n  box-sizing: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  color: rgba(0, 0, 0, 0.1);\n  display: none;\n  position: absolute;\n  z-index: 1;\n  -ms-user-select: none;\n      user-select: none;\n}\n\n.brochure-mainpage {\n  box-shadow: 10px 10px 30px rgba(0,0,0,0.3);\n}\n\n.brochure-mainpage::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgb(112,66,20, 0.06);\n  box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.brochure-mainpage::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 10px;\n  bottom: 0;\n  width: 3px;\n  background: rgba(0,0,0,0.06);\n  box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);\n}\n\n.brochure-lastpage {\n  box-shadow: 10px 10px 30px rgba(0,0,0,0.3);\n  left: 0;\n}\n\n.brochure-lastpage::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgb(112,66,20, 0.06);\n  box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.brochure-lastpage::after {\n  background: rgba(0,0,0,0.06);\n  bottom: 0;\n  box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);\n  content: '';\n  position: absolute;\n  right: 10px;\n  top: 0;\n  width: 3px;\n}\n\n.brochure-image {\n  object-fit: cover;\n  object-position: center;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  -ms-user-select: none;\n      user-select: none;\n}\n\n.move-right {\n  left: 0;\n  perspective-origin: 50% 0%;\n  transform-style: preserve-3d;\n  transform-origin: 100% 50% 0px;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n\n.flip-right {\n  perspective-origin: 0% 50%;\n  transform-origin: 0% 50% 0px;\n  z-index: 2;\n}\n\n.move-left {\n  perspective-origin: 0% 50%;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50% 0px;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n\n.flip-left {\n  perspective-origin: 0% 50%;\n  transform-origin: 100% 50% 0px;\n  z-index: 2;\n}\n\n.downloadButtonWrapper {\n  margin: 6px 12px;\n  max-height: 48px;\n}\n\n.downloadButton {\n  background-color: rgba(0, 123, 255, 1);\n  border: none;\n  box-shadow:\n    0 3px 1px -2px rgba(0,0,0,.2),\n    0 2px 2px 0 rgba(0,0,0,.14),\n    0 1px 5px 0 rgba(0,0,0,.12);\n  color: #ffffff;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 8px 32px;\n}\n\n.downloadButton:hover {\n  background-color: rgba(0, 123, 255, 0.87);\n  box-shadow:\n    0 2px 4px -1px rgba(0,0,0,.2),\n    0 4px 5px 0 rgba(0,0,0,.14),\n    0 1px 10px 0 rgba(0,0,0,.12);\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/brochure/brochure.css":
/*!***********************************!*\
  !*** ./src/brochure/brochure.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--4-1!./brochure.css */ "./node_modules/css-loader/dist/cjs.js?!./src/brochure/brochure.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/brochure/brochure.js":
/*!**********************************!*\
  !*** ./src/brochure/brochure.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brochure_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brochure.css */ "./src/brochure/brochure.css");
/* harmony import */ var _brochure_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_brochure_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _stateMachine_fsm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stateMachine/fsm */ "./src/stateMachine/fsm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.js");









// variables to calculate performance
let start = 0;
let startRender = 0;
let end = 0;
let endRender = 0;

/**
 * Represents a brochure.
 * @constructor
 * @param {string} contentType - select 'pdf' or 'page' to render pdf or images.
 * @param {(string|string[])} data - url to pdf or array of url to images.
 * @param {DOMElement} htmlNode  - DOMElement to render brochure
 * @param {string} workerSrc - path to pdfWorker.js
 * @param {string} [title] - title of brochure, if needed
 * @param {string} [firstPageView=cover] - 'cover' or 'spread' to display first page
 * @param {Object} [pagination={}] - pagination parameters
 * @param {boolean} [pagination.show] - show pagination or not
 * @param {number} [pagination.max=10] - maximum pages in pagination
 * @param {boolean} [pageNumberInput=false] - show manual page number input or not
 * @param {boolean} [saveLastSeenPage=false] - save last seen page
 * @param {boolean} [isShowDownloadLink=false] - show link to download pdf file
 */

class Brochure {
  constructor({
    contentType = '',
    data = '',
    htmlNode = null,
    height = 480,
    workerSrc = './brochure/pdf.worker.js',
    title = null,
    firstPageView = 'cover',
    pagination = {},
    pageNumberInput = false,
    saveLastSeenPage = false,
    isShowDownloadLink = false,
    options = {},
  }) {
    const initialState = {
      currentPage: 0,
    };
    this.url = data;
    this.el = htmlNode;
    this.contentType = contentType;
    this.options = options;
    this.workerSrc = workerSrc;
    this.title = title;
    this.firstPageView = firstPageView;
    this.pagination = pagination;
    this.pageNumberInput = pageNumberInput;
    this.saveLastSeenPage = saveLastSeenPage;
    this.book = null;
    this.pages = [];
    this.pageNodes = [];
    this.pageContentNodes = [];
    this.isShowDownloadLink = isShowDownloadLink;
    this.numPages = 0;
    this.renderedPages = 0;
    this.width = 0;
    this.height = height;
    this.posX = 0;
    this.posY = 0;
    this.bookWidth = 0;
    this.scale = 1;
    this.move = 'right';
    this.angle = -1;
    this.flippedPageOtherside = null;
    this.flippedPage = null;
    this.flippedPageBack = null;
    this.flippedPageUnder = null;
    this.animationFrame = null;
    this.loading = null;
    this.controls = null;
    this.paginationNode = null;
    this.pageInput = null;
    this.pageInputNumber = '1';
    this.pageState = new Proxy(initialState, { set: this.stateChange.bind(this) });
    this.fsm = {};

    this.flip = this.flip.bind(this);
    this.paginationNumberClick = this.paginationNumberClick.bind(this);
    this.paginationLeft = this.paginationLeft.bind(this);
    this.paginationRight = this.paginationRight.bind(this);
    this.pageNumberChange = this.pageNumberChange.bind(this);
  }

  /* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["target"] }] */
  stateChange(target, prop, value) {
    target[prop] = value;
    if (prop === 'currentPage') this.currentPageChanged(value);
    return true;
  }

  /**
   * current page change handler
   * @param {number} pageNum - new page number
   */
  currentPageChanged(pageNum) {
    let page = pageNum;
    const view = this.firstPageView;
    const dispalyedPages = [...this.book.querySelectorAll('.brochure-page')].filter(page => page.style.display === 'flex');
    const pageNumber = parseInt(dispalyedPages[0].getAttribute('data-pagenum'), 10);
    if (page < 0 || page >= this.numPages) {
      console.log('[currentPageChanged]: Incorrect page number');
      return;
    }
    // check if need to render pages
    if (page + 4 >= this.renderedPages) this.renderNext();
    // check if display correct pages
    if (page !== pageNumber) {
      dispalyedPages.forEach(page => { page.removeAttribute('style'); });
      if (view === 'cover') {
        if (page >= 1) this.book.querySelector(`[data-pagenum="${page}"]`).style.display = 'flex';
        if (page < this.numPages - 1) {
          const mainPage = this.firstPageView === 'cover' && page === 0;
          Object.assign(this.book.querySelector(`[data-pagenum="${mainPage ? page : page + 1}"]`).style, {
            display: 'flex',
            left: '50%',
          });
        }
      }

      if (view === 'spread') {
        if (page >= 0) this.book.querySelector(`[data-pagenum="${page}"]`).style.display = 'flex';
        if (page < this.numPages - 1) {
          Object.assign(this.book.querySelector(`[data-pagenum="${page + 1}"]`).style, {
            display: 'flex',
            left: '50%',
          });
        }
      }
    }
    // check pagination
    if (this.pagination.show === true) this.paginationNumberChange(page);
    // save last seen page
    if (this.saveLastSeenPage === true) localStorage.setItem(this.id, page);
  }

  /**
   *  help function to convert page number to possible numbers
   * @param {number} pageNumber page numbers from 1
   * @returns {number} - possble number to current page
   */
  convertPageNumber(pageNumber) {
    if (this.firstPageView === 'cover') {
      let page = pageNumber % 2 === 0
        ? pageNumber - 1
        : pageNumber - 2;
      if (page < 0) page = 0;
      return page;
    }
    let page = pageNumber % 2 === 1
      ? pageNumber - 1
      : pageNumber - 2;
    if (page < 0) page = 0;
    return page;
  }

  /**
   * change pagination page number handler
   * @param {number} page - page number
   */
  paginationNumberChange(page) {
    const pageNumber = page + 1;
    const active = this.paginationNode.querySelector('.pagination-active');
    const activeNumber = parseInt(active.getAttribute('data-page'), 10);
    const move = pageNumber > activeNumber ? 'right' : 'left';
    if (activeNumber !== pageNumber) {
      const pagination = this.paginationNode.querySelector(`[data-page="${pageNumber}"]`);
      pagination.classList.add('pagination-active');
      active.classList.remove('pagination-active');
      if (pagination.classList.contains('pagination-display') && pageNumber !== this.numPages && pageNumber !== 1) return;
      if (this.numPages <= this.pagination.max) return;
      this.paginationRerender(page, move);
    }
  }

  /**
   * redraw pagination numbers
   * @param {number} page - page number
   */
  paginationRerender(page) {
    const pages = [...this.paginationNode.querySelectorAll('.pagination')];
    const first = this.paginationNode.querySelector('[data-page="1"]');
    const last = this.paginationNode.querySelector(`[data-page="${this.numPages}"]`);
    const max = this.pagination.max - 4;
    const length = this.numPages;
    let start = page - max / 2;
    let end = page + max / 2;
    if (page > this.numPages - max) {
      if (last.previousSibling.classList.contains('pagination-gap')) last.previousSibling.remove();
      if (!first.nextSibling.classList.contains('pagination-gap')) {
        first.after(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'pagination-gap' }, '...'));
      }
      start = this.numPages - max - 2;
      end = this.numPages;
    } else if (page < max) {
      if (first.nextSibling.classList.contains('pagination-gap')) first.nextSibling.remove();
      if (!last.previousSibling.classList.contains('pagination-gap')) {
        last.before(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'pagination-gap' }, '...'));
      }
      start = 1;
      end = max + 2;
    } else {
      if (!last.previousSibling.classList.contains('pagination-gap')) {
        last.before(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'pagination-gap' }, '...'));
      }
      if (!first.nextSibling.classList.contains('pagination-gap')) {
        first.after(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'pagination-gap' }, '...'));
      }
    }

    pages.forEach((page, index) => {
      if (
        index === 0
        || index === length - 1
        || (index >= start && index < end)) {
        page.classList.add('pagination-display');
        return;
      }
      page.classList.remove('pagination-display');
    });
  }

  /**
   * click on pagination page number
   * @param {MouseEvent} event - mouse click event
   */
  paginationNumberClick(event) {
    const target = event.currentTarget;
    if (event.type && target.classList.contains('pagination-active')) return;
    const pageNumber = parseInt(target.getAttribute('data-page'), 10);
    this.pageState.currentPage = this.convertPageNumber(pageNumber);
  }

  /**
   * pagination left arrow click handler
   */
  paginationLeft() {
    const pageNumber = this.pageState.currentPage + 1;
    if (pageNumber === 1) return;
    if (
      this.firstPageView === 'cover' && pageNumber === 2) {
      this.pageState.currentPage = this.pageState.currentPage - 1;
      return;
    }
    this.pageState.currentPage = this.pageState.currentPage - 2;
  }

  /**
   * pagination right arrow click handler
   */
  paginationRight() {
    const pageNumber = this.pageState.currentPage + 1;
    if (pageNumber === this.numPages) return;
    if (
      this.firstPageView === 'cover'
      && (pageNumber === 1 || pageNumber === this.numPages)) {
      this.pageState.currentPage = this.pageState.currentPage + 1;
      return;
    }
    this.pageState.currentPage = this.pageState.currentPage + 2;
  }

  /**
   * number change handler for manual page number input
   * @param {KeyboardEvent} event - key down event object
   */
  pageNumberChange(event) {
    const validKeys = ['ArrowRight', 'ArrowLeft', 'Backspace', 'Enter'];
    event.preventDefault();
    const key = event.key;
    const isNumber = /^[0-9]$/i.test(key);
    if (!isNumber && validKeys.indexOf(key) === -1) return;
    const node = this.pageInput.querySelector('input');
    const pos = node.selectionStart;
    let value = this.pageInputNumber;
    switch (key) {
      case 'Enter':
        this.pageNumberEnter();
        return;
      case 'ArrowLeft':
        node.setSelectionRange(pos - 1, pos - 1);
        return;
      case 'ArrowRight':
        node.setSelectionRange(pos + 1, pos + 1);
        return;
      case 'Backspace':
        value = value.slice(0, -1);
        break;
      default:
        value += key;
    }

    const pageNumber = parseInt(value, 10);
    if (pageNumber > this.numPages) return;
    this.pageInputNumber = value;
    node.setAttribute('value', this.pageInputNumber);
    node.setSelectionRange(this.pageInputNumber.length, this.pageInputNumber.length);
  }

  /**
   * enter key pressed handler for manual page number input
   */
  pageNumberEnter() {
    const pageNumber = parseInt(this.pageInputNumber, 10);
    if (pageNumber > this.numPages || pageNumber < 0 || isNaN(pageNumber)) return;
    this.pageState.currentPage = this.convertPageNumber(pageNumber);
  }

  /**
   * render html for page
   * @param {number} page - ppage from pdfjs
   * @param {string} className - additinal class for page
   */
  renderPage(page, className) {
    try {
      let pageClasses = ['brochure-page'];

      if (className !== undefined && typeof className === 'string') pageClasses.push(className);
      const pageNode = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])(
        'div',
        { class: pageClasses.join(' '), 'data-pagenum': page },
        this.pageContentNodes[page],
      );

      if (page === 0) {
        pageNode.style.display = 'flex';
        if (this.firstPageView === 'cover') {
          pageNode.style.left = '50%';
          pageNode.classList.add('brochure-mainpage');
        }
      }

      // if view mode is cover and number of pages even - add cover to last page
      if (this.firstPageView === 'cover' && page === this.numPages - 1 && this.numPages % 2 === 0) pageNode.classList.add('brochure-lastpage');

      if (this.firstPageView === 'spread' && page === 1) {
        pageNode.style.display = 'flex';
        pageNode.style.left = '50%';
      }
      this.book.appendChild(pageNode);
      this.pageNodes[page] = pageNode;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * render pages if needed
   * @param {boolean} next - if next === true render next 2 pages, else render 6 pages around this.pageState.currentPage
   */
  renderNext(next) {
    if (next === true) {
      if (
        this.renderedPages < this.numPages
        && this.pageNodes[this.renderedPages + 1] === undefined
      ) {
        this.renderPage(this.renderedPages);
        this.renderedPages += 1;
      }
      if (
        this.renderedPages < this.numPages
        && this.pageNodes[this.renderedPages + 1] === undefined
      ) {
        this.renderPage(this.renderedPages);
        this.renderedPages += 1;
      }
      return;
    }
    let start = this.pageState.currentPage > 4
      ? this.pageState.currentPage - 4
      : this.pageState.currentPage;
    let end = this.pageState.currentPage < this.numPages - 4
      ? this.pageState.currentPage + 4
      : this.numPages;
    if (end <= start) return;
    for (let i = start; i < end; i++) {
      if (!this.pageNodes[i] && i < this.numPages) this.renderPage(i);
    }
  }

  /**
   * start flip
   * @param {event} event - mouse event
   */
  flip(event) {
    this.fsm.dispatch('check', this, event);
  }

  /**
   * render html
   */
  render() {
    startRender = performance.now();
    this.renderedPages = this.numPages >= 10 ? 10 : this.numPages;
    for (let i = 0; i < this.renderedPages; i++) {
      this.renderPage(i);
    }
    end = performance.now();
    console.log(`render pdf took ${startRender - start} milliseconds.`);
    console.log(`render html took ${end - startRender} milliseconds.`);
    if (this.pagination.show === true || this.pageNumberInput === true) {
      this.controls = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'brochure-control' });
      this.controls.style.width = this.bookWidth + 'px';
      this.el.appendChild(this.controls);
    }
    if (this.pagination.show === true) this.renderPagination();
    if (this.pageNumberInput === true) this.renderManualInput();
    if (this.isShowDownloadLink === true) this.renderDownloadButton();

    this.fsm = _stateMachine_fsm__WEBPACK_IMPORTED_MODULE_2__["default"];

    this.book.addEventListener(_config__WEBPACK_IMPORTED_MODULE_3__["events"].start, this.flip);

    this.el.removeChild(this.loading);

    if (this.saveLastSeenPage === true) {
      this.id = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getId"])(this.el);
      const pageNumber = parseInt(localStorage.getItem(this.id), 10);
      if (pageNumber) this.pageState.currentPage = pageNumber;
    }
  }

  /**
   * render pagination to the book
   */
  renderPagination() {
    const max = this.pagination.max || 10;
    this.paginationNode = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'brochure-pagination' });
    const pagination = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'pagination-numbers' });
    if (this.numPages > max) this.paginationNode.appendChild(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'pagination-left' }, '<'));
    for (let i = 1; i <= this.numPages; i++) {
      let node = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'pagination pagination-display', 'data-page': i }, i);
      if (i === 1) node.classList.add('pagination-active');
      if (i > max - 2) node.classList.remove('pagination-display');
      if (i === this.numPages && this.numPages > max) {
        pagination.appendChild(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'pagination-gap' }, '...'));
        node.classList.add('pagination-display');
      }
      pagination.appendChild(node);
    }

    this.paginationNode.appendChild(pagination);
    if (this.numPages > max) this.paginationNode.appendChild(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'pagination-right' }, '>'));

    this.controls.appendChild(this.paginationNode);
    [...this.paginationNode.querySelectorAll('.pagination')].forEach(el => {
      el.addEventListener('click', this.paginationNumberClick);
    });
    if (this.numPages > max) {
      this.paginationNode.querySelector('.pagination-left').addEventListener('click', this.paginationLeft);
      this.paginationNode.querySelector('.pagination-right').addEventListener('click', this.paginationRight);
    }
  }

  /**
   * render manual page number input
   */
  renderManualInput() {
    const inputNode = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])(
      'div',
      { class: 'inputWrapper' },
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('input', { type: 'text', class: 'inputPage', value: this.pageState.currentPage + 1 }),
    );
    const totalNode = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'inputTotal' });
    totalNode.textContent = `/ ${this.numPages}`;
    this.pageInput = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'brochure-pageInput' });
    this.pageInput.appendChild(inputNode);
    this.pageInput.appendChild(totalNode);
    this.controls.appendChild(this.pageInput);
    this.pageInput.querySelector('input').addEventListener('keydown', this.pageNumberChange);
  }

  /**
   * render download button
   */
  renderDownloadButton() {
    const downloadButton = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])(
      'div',
      { class: 'downloadButtonWrapper' },
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('button', { class: 'downloadButton' }, 'Скачать'),
    );
    this.el.appendChild(downloadButton);
    downloadButton.querySelector('.downloadButton').addEventListener('click', () => {
      const url = this.url;
      const name = `${this.title !== null ? this.title : 'file'}.pdf`;
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["downloadURI"])(url, name);
    });
  }

  /**
   * initialisation for pdf file
   */
  async initPdf() {
    let rendered = false;
    let renderedIndex = this.pagination.max || 10;
    start = performance.now();
    const pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = this.workerSrc;

    try {
      this.pdf = await pdfjsLib.getDocument(this.url).promise;
      this.numPages = this.pdf.numPages;

      for (let i = 1; i <= this.numPages; i++) {
        const page = await this.pdf.getPage(i);

        // if rendered first page - get width and position
        if (i === 1) {
          let viewport = page.getViewport(1);
          if (viewport.height >= viewport.width) {
            this.scale = Math.round(1000 * this.height / viewport.height) / 1000;
          }
          if (viewport.width > viewport.height) {
            this.scale = Math.round(1000 * this.width / (viewport.width * 2)) / 1000;
          }
          viewport = page.getViewport(this.scale);
          this.bookWidth = 2 * viewport.width;
          this.book.style.width = this.bookWidth + 'px';
          this.posX = this.book.getBoundingClientRect().x;
          this.posY = this.book.getBoundingClientRect().y;
          if (viewport.width > viewport.height) this.book.style.height = viewport.height + 'px';
        }

        const viewport = page.getViewport(this.scale);
        const width = Math.round(viewport.width * 1000) / 1000;
        const height = Math.round(viewport.height * 1000) / 1000;
        const canvas = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('canvas', { width, height });
        const context = canvas.getContext('2d');

        // Render PDF page into canvas context
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        await page.render(renderContext);
        this.pages.push(page);
        this.pageContentNodes.push(canvas);
        if (!rendered && i >= renderedIndex) {
          this.render();
          rendered = true;
        }
      }
    } catch (err) {
      console.log(err);
    }
    if (!rendered) this.render();
    endRender = performance.now();
    console.log(`render all html took ${endRender - start} milliseconds.`);
  }

  /**
   * initialisation for image/pages
   */
  initPage() {
    this.numPages = this.url.length;
    for (let i = 0; i < this.numPages; i++) {
      if (i === 0) {
        this.bookWidth = this.width;
        this.book.style.width = this.bookWidth + 'px';
        this.posX = this.book.getBoundingClientRect().x;
        this.posY = this.book.getBoundingClientRect().y;
      }

      const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('img', { class: 'brochure-image', src: this.url[i].url, draggable: false });
      content.style.width = this.bookWidth / 2 + 'px';
      content.style.height = this.height + 'px';
      this.pageContentNodes.push(content);
    }
    this.render();
  }

  /**
   * initialisation
   */
  init() {
    if (!(this.el instanceof Element)) throw new Error('Empty DOM node to create brochure');

    this.width = this.el.getBoundingClientRect().width;
    this.height = this.pagination.show === true ? this.height - _config__WEBPACK_IMPORTED_MODULE_3__["PAGINATION_HEIGHT"] : this.height;
    this.height = this.isShowDownloadLink === true
      ? this.height - _config__WEBPACK_IMPORTED_MODULE_3__["DOWNLOAD_BUTTON_HEIGHT"]
      : this.height;

    this.el.classList.add('brochure');
    if (this.title !== null) {
      this.el.appendChild(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('h2', { class: 'brochure-title' }, this.title));
      this.height -= _config__WEBPACK_IMPORTED_MODULE_3__["TITLE_HEIGHT"];
    }
    this.book = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'brochure-book' });
    this.book.style.height = this.height + 'px';
    // TODO loading state
    this.loading = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'brochure-loading' }, 'Загрузка страниц...');
    this.el.appendChild(this.book);
    this.el.appendChild(this.loading);

    if (this.contentType === 'pdf') this.initPdf();
    if (this.contentType === 'page' && Array.isArray(this.url)) this.initPage();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Brochure);


/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: isTouch, events, TITLE_HEIGHT, PAGINATION_HEIGHT, DOWNLOAD_BUTTON_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouch", function() { return isTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_HEIGHT", function() { return TITLE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_HEIGHT", function() { return PAGINATION_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOAD_BUTTON_HEIGHT", function() { return DOWNLOAD_BUTTON_HEIGHT; });
// check if has touch events
const isTouch = 'ontouchstart' in window;

// if isTouch - use touch events else use mouse events
const events = isTouch
  ? { start: 'touchstart', move: 'touchmove', end: 'touchend' }
  : { start: 'mousedown', move: 'mousemove', end: 'mouseup' };

// css font-size + padding + margin for class brochure-title
const TITLE_HEIGHT = 48;
// pagination height
const PAGINATION_HEIGHT = 96;
const DOWNLOAD_BUTTON_HEIGHT = 48;


/***/ }),

/***/ "./src/stateMachine/fsm.js":
/*!*********************************!*\
  !*** ./src/stateMachine/fsm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _states_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states.js */ "./src/stateMachine/states.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  state: _states_js__WEBPACK_IMPORTED_MODULE_0__["INACTIVE"],
  transitions: {
    [_states_js__WEBPACK_IMPORTED_MODULE_0__["INACTIVE"]]: {
      check: function (brochure, event) {
        Object.assign(this, brochure);
        // if pdf with 1 page - can't flip
        if (this.numPages === 1) return;
        let x = event.type.indexOf('touch') !== -1 ? event.touches[0].clientX : event.clientX;
        // check clicked on right or left page
        this.move = x - this.posX > this.bookWidth / 2 ? 'right' : 'left';
        // if we see 2 last pages - can't flip to right
        if (this.move === 'right' && this.pageState.currentPage + 2 >= this.numPages) return;
        // if flip left and currnet page = 0, can't flip
        if (this.move === 'left' && this.pageState.currentPage === 0) return;

        this.flippedPage = event.target.closest('.brochure-page');
        if (this.move === 'right') this.changeStateTo(_states_js__WEBPACK_IMPORTED_MODULE_0__["FLIP_RIGHT_TO_MIDDLE"]);
        if (this.move === 'left') this.changeStateTo(_states_js__WEBPACK_IMPORTED_MODULE_0__["FLIP_LEFT_TO_MIDDLE"]);
        this.moveHandler = this.moveHandler.bind(this);
        this.endMoveHandler = this.endMoveHandler.bind(this);
        this.dispatch('start');
      },
      end: function () {
        // remove events listeners
        document.removeEventListener(_config__WEBPACK_IMPORTED_MODULE_1__["events"].move, this.moveHandler);
        document.removeEventListener(_config__WEBPACK_IMPORTED_MODULE_1__["events"].end, this.endMoveHandler);

        this.angle = -1;
        this.flippedPageOtherside = null;
        this.flippedPage = null;
        this.flippedPageBack = null;
        this.flippedPageUnder = null;
      },
    },
    [_states_js__WEBPACK_IMPORTED_MODULE_0__["FLIP_RIGHT_TO_MIDDLE"]]: {
      start: function () {
        const index = this.firstPageView === 'cover' && this.pageState.currentPage === 0 ? 1 : 2;

        if (this.pageState.currentPage > 0) {
          this.flippedPageOtherside = this.pageNodes[this.pageState.currentPage];
        }

        this.flippedPage.classList.add('flip-right');

        this.flippedPageBack = this.pageNodes[this.pageState.currentPage + index];
        this.flippedPageBack.classList.add('move-right');

        if (this.pageState.currentPage < this.numPages - 3) {
          this.flippedPageUnder = this.pageNodes[this.pageState.currentPage + index + 1];
          Object.assign(this.flippedPageUnder.style, {
            display: 'flex',
            left: '50%',
          });
        }

        document.addEventListener(_config__WEBPACK_IMPORTED_MODULE_1__["events"].move, this.moveHandler);
        document.addEventListener(_config__WEBPACK_IMPORTED_MODULE_1__["events"].end, this.endMoveHandler);
      },
      move: function (event) {
        const pageWidth = this.bookWidth;
        let x = event.type.indexOf('touch') !== -1 ? event.touches[0].clientX : event.clientX;
        this.angle = 180 - 180 * (x - this.posX) / pageWidth;

        if (this.angle > 90) {
          this.changeStateTo(_states_js__WEBPACK_IMPORTED_MODULE_0__["FLIP_RIGHT_FROM_MIDDLE"]);
          this.dispatch('start', event);
          return;
        }

        if (this.angle < 0) {
          this.dispatch('end');
          return;
        }

        Object.assign(this.flippedPage.style, {
          zIndex: 3,
          display: 'flex',
          transform: `perspective(2000px) rotateY(-${this.angle}deg)`,
        });
      },
      end: function () {
        // if (this.flippedPageOtherside) this.flippedPageOtherside.removeAttribute('style');
        if (this.angle > 5) {
          this.dispatch('animation');
          return;
        }

        this.flippedPage.removeAttribute('style');
        this.flippedPage.classList.remove('flip-right');
        this.flippedPage.style.display = 'flex';
        this.flippedPage.style.left = '50%';

        this.flippedPageBack.removeAttribute('style');
        this.flippedPageBack.classList.remove('move-right');

        if (this.flippedPageUnder) this.flippedPageUnder.removeAttribute('style');

        this.changeStateTo(_states_js__WEBPACK_IMPORTED_MODULE_0__["INACTIVE"]);
        this.dispatch('end');
      },
      animation: function () {
        this.startAnimation();
      },
    },
    [_states_js__WEBPACK_IMPORTED_MODULE_0__["FLIP_RIGHT_FROM_MIDDLE"]]: {
      start: function (event) {
        this.flippedPage.removeAttribute('style');
        this.flippedPage.style.left = '50%';
        this.dispatch('move', event);
      },
      move: function (event) {
        const pageWidth = this.bookWidth;
        let x = event.type.indexOf('touch') !== -1 ? event.touches[0].clientX : event.clientX;
        this.angle = 180 - 180 * (x - this.posX) / pageWidth;

        if (this.angle < 90) {
          this.flippedPageBack.removeAttribute('style');
          this.changeStateTo(_states_js__WEBPACK_IMPORTED_MODULE_0__["FLIP_RIGHT_TO_MIDDLE"]);
          this.dispatch('move', event);
          return;
        }

        if (this.angle > 180) {
          this.dispatch('end');
          return;
        }

        Object.assign(this.flippedPageBack.style, {
          display: 'flex',
          transform: `perspective(2000px) rotateY(${180 - this.angle}deg)`,
        });
      },
      end: function () {
        if (this.angle < 175) {
          this.dispatch('animation');
          return;
        }

        if (this.flippedPageOtherside) this.flippedPageOtherside.removeAttribute('style');

        this.flippedPage.removeAttribute('style');
        this.flippedPage.classList.remove('flip-right');

        this.flippedPageBack.classList.remove('move-right');
        this.flippedPageBack.removeAttribute('style');
        this.flippedPageBack.style.display = 'flex';

        this.pageState.currentPage = this.firstPageView === 'cover' && this.pageState.currentPage === 0
          ? this.pageState.currentPage + 1
          : this.pageState.currentPage + 2;

        this.changeStateTo(_states_js__WEBPACK_IMPORTED_MODULE_0__["INACTIVE"]);
        this.dispatch('end');
      },
      animation: function () {
        this.startAnimation();
      },
    },
    [_states_js__WEBPACK_IMPORTED_MODULE_0__["FLIP_LEFT_TO_MIDDLE"]]: {
      start: function () {
        const index = 1;

        if (this.pageState.currentPage < this.numPages - 1) {
          this.flippedPageOtherside = this.pageNodes[this.pageState.currentPage + 1];
        }

        this.flippedPage.classList.add('flip-left');

        this.flippedPageBack = this.pageNodes[this.pageState.currentPage - index];
        this.flippedPageBack.classList.add('move-left');

        if (
          (this.firstPageView === 'cover' && this.pageState.currentPage > 2)
          || (this.firstPageView === 'spread' && this.pageState.currentPage > 1)
        ) {
          this.flippedPageUnder = this.pageNodes[this.pageState.currentPage - index - 1];
          Object.assign(this.flippedPageUnder.style, {
            display: 'flex',
          });
        }

        document.addEventListener(_config__WEBPACK_IMPORTED_MODULE_1__["events"].move, this.moveHandler);
        document.addEventListener(_config__WEBPACK_IMPORTED_MODULE_1__["events"].end, this.endMoveHandler);
      },
      move: function (event) {
        const pageWidth = this.bookWidth;
        let x = event.type.indexOf('touch') !== -1 ? event.touches[0].clientX : event.clientX;
        this.angle = 180 - 180 * (x - this.posX) / pageWidth;

        if (this.angle < 90) {
          this.changeStateTo(_states_js__WEBPACK_IMPORTED_MODULE_0__["FLIP_LEFT_FROM_MIDDLE"]);
          this.dispatch('start', event);
          return;
        }

        if (this.angle > 180) {
          this.dispatch('end');
          return;
        }

        Object.assign(this.flippedPage.style, {
          zIndex: 3,
          display: 'flex',
          transform: `perspective(2000px) rotateY(${180 - this.angle}deg)`,
        });
      },
      end: function () {
        if (this.angle < 175) {
          this.dispatch('animation');
          return;
        }

        this.flippedPage.removeAttribute('style');
        this.flippedPage.classList.remove('flip-left');
        this.flippedPage.style.display = 'flex';

        this.flippedPageBack.removeAttribute('style');
        this.flippedPageBack.classList.remove('move-left');

        if (this.flippedPageUnder) this.flippedPageUnder.removeAttribute('style');

        this.changeStateTo(_states_js__WEBPACK_IMPORTED_MODULE_0__["INACTIVE"]);
        this.dispatch('end');
      },
      animation: function () {
        this.startAnimation();
      },
    },
    [_states_js__WEBPACK_IMPORTED_MODULE_0__["FLIP_LEFT_FROM_MIDDLE"]]: {
      start: function (event) {
        this.flippedPage.style.display = 'none';
        this.dispatch('move', event);
      },
      move: function (event) {
        const pageWidth = this.bookWidth;
        let x = event.type.indexOf('touch') !== -1 ? event.touches[0].clientX : event.clientX;
        this.angle = 180 - 180 * (x - this.posX) / pageWidth;

        if (this.angle > 90) {
          this.flippedPageBack.removeAttribute('style');
          this.changeStateTo(_states_js__WEBPACK_IMPORTED_MODULE_0__["FLIP_LEFT_TO_MIDDLE"]);
          this.dispatch('move', event);
          return;
        }

        if (this.angle < 0) {
          this.dispatch('end');
          return;
        }

        Object.assign(this.flippedPageBack.style, {
          zIndex: 3,
          display: 'flex',
          left: '50%',
          transform: `perspective(2000px) rotateY(-${this.angle}deg)`,
        });
      },
      end: function () {
        if (this.angle > 5) {
          this.dispatch('animation');
          return;
        }

        if (this.flippedPageOtherside) this.flippedPageOtherside.removeAttribute('style');

        this.flippedPage.removeAttribute('style');
        this.flippedPage.classList.remove('flip-left');

        this.flippedPageBack.classList.remove('move-left');
        this.flippedPageBack.removeAttribute('style');
        this.flippedPageBack.style.display = 'flex';
        this.flippedPageBack.style.left = '50%';

        this.pageState.currentPage = this.firstPageView === 'cover' && this.pageState.currentPage === 1
          ? this.pageState.currentPage - 1
          : this.pageState.currentPage - 2;

        this.changeStateTo(_states_js__WEBPACK_IMPORTED_MODULE_0__["INACTIVE"]);
        this.dispatch('end');
      },
      animation: function () {
        this.startAnimation();
      },
    },
  },
  dispatch(actionName, ...payload) {
    // const actions = this.transitions[this.state];
    const action = this.transitions[this.state][actionName];

    if (action) {
      action.call(this, ...payload);
    }
  },
  changeStateTo(newState) {
    this.state = newState;
  },
  moveHandler(event) {
    this.dispatch('move', event);
  },
  endMoveHandler(event) {
    this.dispatch('end', event);
  },
  startAnimation() {
    // remove events listeners
    document.removeEventListener(_config__WEBPACK_IMPORTED_MODULE_1__["events"].move, this.moveHandler);
    document.removeEventListener(_config__WEBPACK_IMPORTED_MODULE_1__["events"].end, this.endMoveHandler);

    const start = performance.now();
    const duration = 600;

    const animate = (time) => {
      let timePassed = time - start;

      if (timePassed > duration) timePassed = duration;

      this.flipAnimation(timePassed, duration);

      if (timePassed < duration && this.animationFrame !== null) {
        this.animationFrame = requestAnimationFrame(animate);
      }
    };

    this.animationFrame = requestAnimationFrame(animate);
  },
  flipAnimation(timePassed, duration) {
    const frame = timePassed > 0 ? Math.round(1000 * (90 / duration) * timePassed) / 1000 : 0;

    if (this.move === 'right' && this.angle < 90) {
      this.angle -= frame;
      this.flippedPage.style.transform = `perspective(2000px) rotateY(-${this.angle}deg)`;
    }
    if (this.move === 'right' && this.angle >= 90) {
      this.flippedPageBack.style.transform = `perspective(2000px) rotateY(${180 - this.angle}deg)`;
      this.angle += frame;
    }
    if (this.move === 'left' && this.angle >= 90) {
      this.flippedPage.style.transform = `perspective(2000px) rotateY(${180 - this.angle}deg)`;
      this.angle += frame;
    }
    if (this.move === 'left' && this.angle < 90) {
      this.flippedPageBack.style.transform = `perspective(2000px) rotateY(-${this.angle}deg)`;
      this.angle -= frame;
    }

    if (this.angle >= 180 || this.angle <= 0) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
      this.dispatch('end');
    }
  },
});


/***/ }),

/***/ "./src/stateMachine/states.js":
/*!************************************!*\
  !*** ./src/stateMachine/states.js ***!
  \************************************/
/*! exports provided: INACTIVE, FLIP_RIGHT_TO_MIDDLE, FLIP_RIGHT_FROM_MIDDLE, FLIP_LEFT_TO_MIDDLE, FLIP_LEFT_FROM_MIDDLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INACTIVE", function() { return INACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_RIGHT_TO_MIDDLE", function() { return FLIP_RIGHT_TO_MIDDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_RIGHT_FROM_MIDDLE", function() { return FLIP_RIGHT_FROM_MIDDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_LEFT_TO_MIDDLE", function() { return FLIP_LEFT_TO_MIDDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_LEFT_FROM_MIDDLE", function() { return FLIP_LEFT_FROM_MIDDLE; });
const INACTIVE = 'INACTIVE';
const FLIP_RIGHT_TO_MIDDLE = 'FLIP_RIGHT_TO_MIDDLE';
const FLIP_RIGHT_FROM_MIDDLE = 'FLIP_RIGHT_FROM_MIDDLE';
const FLIP_LEFT_TO_MIDDLE = 'FLIP_LEFT_TO_MIDDLE';
const FLIP_LEFT_FROM_MIDDLE = 'FLIP_LEFT_FROM_MIDDLE';


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: createElement, applyCss, downloadURI, getId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyCss", function() { return applyCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadURI", function() { return downloadURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return getId; });
const createElement = (tagName, attributes, children) => {
  const keys = attributes !== null && typeof attributes === 'object' ? Object.keys(attributes) : [];
  const element = document.createElement(tagName);
  if (attributes) {
    keys.forEach(key => {
      element.setAttribute(key, attributes[key]);
    });
  }

  if (children !== undefined && children !== null) {
    let arr = children;
    if (!Array.isArray(arr)) arr = [arr];
    arr.forEach(child => {
      if (typeof child === 'string' || typeof child === 'number') {
        element.appendChild(document.createTextNode(child));
        return;
      }
      element.appendChild(child);
    });
  }

  return element;
};

const applyCss = (node, stylesObject) => {
  const keys = stylesObject !== null && typeof stylesObject === 'object' ? Object.keys(stylesObject) : [];
  if (keys.length === 0) return;

  keys.forEach(key => {
    node.style.setProperty(key, stylesObject[key]);
  });
};

const downloadURI = (uri, name) => {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  link.remove();
};

const getId = (element) => {
  const currentId = element.id;
  const text = 'brochure_id_';
  let i = 1;
  let id = text + i;
  if (currentId !== '' && currentId !== id) return currentId;

  while (currentId !== id) {
    id = text + i;
    i++;
  }

  return id;
};


/***/ })

/******/ });
//# sourceMappingURL=brochure.js.map