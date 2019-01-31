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
/******/ 	__webpack_require__.p = "brochure/";
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
exports.push([module.i, ".brochure {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  margin: 24px;\n}\n\n.brochure-title {\n  box-sizing: border-box;\n  display: flex;\n  font-size: 24px;\n  line-height: 24px;\n  text-transform: uppercase;\n  margin: 0;\n  padding: 12px 0;\n}\n\n.brochure-book {\n  box-sizing: border-box;\n  position: relative;\n}\n\n.brochure-loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 160px;\n  height: 48px;\n  z-index: 3;\n}\n\n.brochure-page {\n  box-sizing: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  color: rgba(0, 0, 0, 0.1);\n  display: none;\n  position: absolute;\n  z-index: 1;\n  user-select: none;\n}\n\n.brochure-mainpage {\n  box-shadow: 10px 10px 30px rgba(0,0,0,0.3);\n  left: 50%;\n}\n\n.brochure-mainpage::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgb(112,66,20, 0.06);\n  box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.brochure-mainpage::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 10px;\n  bottom: 0;\n  width: 3px;\n  background: rgba(0,0,0,0.06);\n  box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);\n}\n\n.brochure-lastpage {\n  box-shadow: 10px 10px 30px rgba(0,0,0,0.3);\n  left: 0;\n}\n\n.brochure-lastpage::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgb(112,66,20, 0.06);\n  box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.brochure-lastpage::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 3px;\n  background: rgba(0,0,0,0.06);\n  box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);\n}\n\n.brochure-image {\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  user-select: none;\n}\n\n.move-right {\n  left: 0;\n  perspective-origin: 50% 0%;\n  transform-style: preserve-3d;\n  transform-origin: 100% 50% 0px;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n\n.flip-right {\n  perspective-origin: 0% 50%;\n  transform-origin: 0% 50% 0px;\n  z-index: 2;\n}\n\n.move-left {\n  perspective-origin: 0% 50%;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50% 0px;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n\n.flip-left {\n  perspective-origin: 0% 50%;\n  transform-origin: 100% 50% 0px;\n  z-index: 2;\n}\n", ""]);



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






const isTouch = 'ontouchstart' in window;

const events = isTouch
  ? { start: 'touchstart', move: 'touchmove', end: 'touchend' }
  : { start: 'mousedown', move: 'mousemove', end: 'mouseup' };

const TITLE_HEIGHT = 48; // css font-size + padding + margin for class brochure-title

let start = 0;
let startRender = 0;
let end = 0;

class Brochure {
  constructor({
    contentType,
    data,
    htmlNode,
    workerSrc = './brochure/pdf.worker.js',
    title = null,
    firstPageView = 'cover',
    options = {},
  }) {
    this.url = data;
    this.el = htmlNode;
    this.contentType = contentType;
    this.options = options;
    this.workerSrc = workerSrc;
    this.title = title;
    this.firstPageView = firstPageView;
    this.book = null;
    this.pages = [];
    this.pageNodes = [];
    this.pageContentNodes = [];
    this.currentPage = 0;
    this.numPages = 0;
    this.renderedPages = 0;
    this.width = htmlNode.getBoundingClientRect().width;
    this.height = options.height && options.height.value ? options.height.value : 480;
    this.posX = 0;
    this.posY = 0;
    this.bookWidth = 0;
    this.scale = 1;
    this.move = 'right';
    this.angle = -1;
    this.flippedPage = null;
    this.flippedPageBack = null;
    this.flippedPageUnder = null;
    this.amimationTimer = null;
    this.loading = null;

    this.flipStart = this.flipStart.bind(this);
    this.flipMove = this.flipMove.bind(this);
    this.flipEnd = this.flipEnd.bind(this);
  }

  /**
   * start fliping page
   * @param {MouseEvent} event - mousedown event
   */
  flipStart(event) {
    // if pdf with 1 page - can't flip
    if (this.numPages === 1) return;

    this.flippedPage = event.target.closest('.brochure-page');

    // check clicked on right or left page
    this.move = event.clientX - this.posX > this.bookWidth / 2 ? 'right' : 'left';

    // if we see 2 last pages - can't flip to right
    if (this.currentPage + 2 >= this.numPages && this.move === 'right') return;
    if (this.move === 'left' && this.currentPage === 0) return;
    if (this.move === 'right' && this.currentPage >= this.numPages - 1) return;

    this.move === 'right' ? this.flippedPage.classList.add('flip-right') : this.flippedPage.classList.add('flip-left');
    let index;
    if (this.firstPageView === 'cover') index = this.currentPage === 0 || this.move === 'left' ? 1 : 2;
    if (this.firstPageView === 'spread') index = this.move === 'left' ? 1 : 2;

    // set back of flipped page
    this.flippedPageBack = this.move === 'right' ? this.pageNodes[this.currentPage + index] : this.pageNodes[this.currentPage - index];
    this.move === 'right' ? this.flippedPageBack.classList.add('move-right') : this.flippedPageBack.classList.add('move-left');
    // if can - set underlying page
    if (this.move === 'right' && this.currentPage + 2 < this.numPages - 1) {
      this.flippedPageUnder = this.pageNodes[this.currentPage + index + 1];
      this.flippedPageUnder.style.left = '50%';
      this.flippedPageUnder.style.display = 'flex';
    }
    if (
      (this.move === 'left' && this.currentPage - 2 > 0 && this.firstPageView === 'cover')
      || (this.move === 'left' && this.currentPage - 2 >= 0 && this.firstPageView === 'spread')
    ) {
      this.flippedPageUnder = this.pageNodes[this.currentPage - index - 1];
      this.flippedPageUnder.style.left = '0';
      this.flippedPageUnder.style.display = 'flex';
    }
    document.addEventListener(events.move, this.flipMove);
    document.addEventListener(events.end, this.flipEnd);
  }

  flipMove(event) {
    const pageWidth = this.bookWidth;
    this.angle = 180 - 180 * (event.clientX - this.posX) / pageWidth;
    if (this.angle >= 180 || this.angle < 0) {
      this.flipEnd(event);
      return;
    }
    if (this.move === 'right') {
      if (this.angle < 90) {
        this.flippedPage.style.zIndex = '3';
        this.flippedPage.style.display = 'flex';
        this.flippedPage.style.transform = `perspective(2000px) rotateY(-${this.angle}deg)`;
        this.flippedPageBack.style.display = 'none';
      } else {
        this.flippedPageBack.style.display = 'flex';
        this.flippedPageBack.style.transform = `perspective(2000px) rotateY(${180 - this.angle}deg)`;
        this.flippedPage.style.display = 'none';
      }
    } else if (this.move === 'left') {
      if (this.angle >= 90) {
        this.flippedPage.style.display = 'flex';
        this.flippedPage.style.transform = `perspective(2000px) rotateY(${180 - this.angle}deg)`;
        this.flippedPageBack.style.display = 'none';
      } else {
        this.flippedPage.style.display = 'none';
        this.flippedPageBack.style.zIndex = '3';
        this.flippedPageBack.style.display = 'flex';
        this.flippedPageBack.style.left = '50%';
        this.flippedPageBack.style.transform = `perspective(2000px) rotateY(-${this.angle}deg)`;
      }
    }
  }

  flipAnimation() {
    const frame = 180 / 60;
    if (this.move === 'right' && this.angle < 90) {
      this.flippedPage.style.transform = `perspective(2000px) rotateY(-${this.angle}deg)`;
      this.angle -= frame;
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
      this.flipEnd();
      return;
    }
    requestAnimationFrame(this.flipAnimation.bind(this));
  }

  flipEnd(event) {
    // remove events listeners
    document.removeEventListener(events.move, this.flipMove);
    document.removeEventListener(events.end, this.flipEnd);
    if (this.angle > 0 && this.angle < 180) {
      requestAnimationFrame(this.flipAnimation.bind(this));
      return;
    }
    // empty flipped page and styles
    this.flippedPage.style.removeProperty('transform');
    this.flippedPage.style.removeProperty('z-index');
    this.move === 'right' ? this.flippedPage.classList.remove('flip-right') : this.flippedPage.classList.remove('flip-left');

    if ((this.move === 'right' && this.angle <= 90) || (this.move === 'left' && this.angle > 90)) {
      this.flippedPage = null;
      this.angle = -1;
      this.flippedPageBack.style.removeProperty('transform');
      this.flippedPageBack.style.removeProperty('display');
      this.move === 'right' ? this.flippedPageBack.classList.remove('move-right') : this.flippedPageBack.classList.remove('move-left');

      this.flippedPageUnder && this.flippedPageUnder.style.removeProperty('left');
      this.flippedPageUnder && this.flippedPageUnder.style.removeProperty('display');
      return;
    }
    this.flippedPage.style.removeProperty('display');
    this.flippedPage.style.removeProperty('left');
    this.flippedPage = null;

    // empty flipped page back and styles
    if (this.move === 'right') {
      this.flippedPageBack.classList.remove('move-right');
      this.flippedPageBack.style.transform = `perspective(2000px) rotateY(0deg)`;
      this.flippedPageBack.style.display = 'flex';
    } else {
      this.flippedPageBack.classList.remove('move-left');
      this.flippedPageBack.style.transform = `perspective(2000px) rotateY(0deg)`;
      this.flippedPageBack.style.left = '50%';
      this.flippedPageBack.style.display = 'flex';
    }
    this.flippedPageBack.style.removeProperty('z-index');
    this.flippedPageBack = null;

    // empty flipped page back and styles
    if (this.flippedPageUnder !== null) {
      this.flippedPageUnder = null;
    }

    this.pageNodes[this.currentPage].style.removeProperty('transform');
    this.pageNodes[this.currentPage].style.removeProperty('display');

    // render next pages
    if (this.firstPageView === 'cover' && this.move === 'right' && this.currentPage + 5 >= this.renderedPages) {
      this.renderPage(this.currentPage + 5);
      this.renderPage(this.currentPage + 6);
      this.renderedPages += 2;
    }

    // render next pages
    if (this.firstPageView === 'spread' && this.move === 'right' && this.currentPage + 6 >= this.renderedPages) {
      this.renderPage(this.currentPage + 6);
      this.renderPage(this.currentPage + 7);
      this.renderedPages += 2;
    }
    // flip from cover
    if (this.currentPage === 0 && this.firstPageView === 'cover') {
      this.currentPage += 1;
      return;
    }
    // flip to cover
    if (this.move === 'left' && this.currentPage === 1 && this.firstPageView === 'cover') {
      if (this.currentPage + 1 < this.numPages) {
        this.pageNodes[this.currentPage + 1].style.removeProperty('display');
        this.pageNodes[this.currentPage + 1].style.removeProperty('left');
        this.pageNodes[this.currentPage + 1].style.removeProperty('transform');
      }
      this.currentPage = 0;
      return;
    }
    // flip to right
    if (this.move === 'right' && this.currentPage < this.numPages - 1) {
      this.currentPage += 2;
      return;
    }
    // flip to left
    if (
      (this.move === 'left' && this.currentPage >= 3 && this.firstPageView === 'cover')
      || (this.move === 'left' && this.currentPage >= 2 && this.firstPageView === 'spread')
    ) {
      if (this.currentPage < this.numPages - 1) {
        this.pageNodes[this.currentPage + 1].style.removeProperty('display');
        this.pageNodes[this.currentPage + 1].style.removeProperty('left');
        this.pageNodes[this.currentPage + 1].style.removeProperty('transform');
      }
      this.currentPage -= 2;
    }
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

      if (this.firstPageView === 'cover' && page === 0) {
        pageNode.style.display = 'flex';
        pageNode.classList.add('brochure-mainpage');
      }

      // if view mode is cover and number of pages even - add cover to last page
      if (this.firstPageView === 'cover' && page === this.numPages - 1 && this.numPages % 2 === 0) pageNode.classList.add('brochure-lastpage');
      // if view mode is spread - show 2 pages
      if (this.firstPageView === 'spread' && page === 0) {
        pageNode.style.display = 'flex';
        pageNode.style.left = '0';
      }
      if (this.firstPageView === 'spread' && page === 1) {
        pageNode.style.display = 'flex';
        pageNode.style.left = '50%';
      }
      this.book.appendChild(pageNode);
      this.pageNodes.push(pageNode);
    } catch (err) {
      console.log(err);
    }
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
    this.book.addEventListener(events.start, this.flipStart);
    this.el.removeChild(this.loading);
  }

  /**
   * initialisation for pdf file
   */
  async initPdf() {
    let rendered = false;
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
          this.scale = Math.round(1000 * this.height / viewport.height) / 1000;
          viewport = page.getViewport(this.scale);
          this.bookWidth = 2 * viewport.width;
          this.book.style.width = this.bookWidth + 'px';
          this.posX = this.book.getBoundingClientRect().x;
          this.posY = this.book.getBoundingClientRect().y;
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
        if (!rendered && i >= 10) {
          this.render();
          rendered = true;
        }
      }
    } catch (err) {
      console.log(err);
    }
    if (!rendered) this.render();
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
    this.el.classList.add('brochure');
    if (this.title !== null) {
      this.el.appendChild(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('h2', { class: 'brochure-title' }, this.title));
      this.height -= TITLE_HEIGHT;
    }
    this.book = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'brochure-book' });
    this.book.style.height = this.height + 'px';
    // TODO loading state
    this.loading = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { class: 'brochure-loading' }, 'Loading...');
    this.el.appendChild(this.book);
    this.el.appendChild(this.loading);

    if (this.contentType === 'pdf') this.initPdf();
    if (this.contentType === 'page' && Array.isArray(this.url)) this.initPage();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Brochure);


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: createElement, applyCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyCss", function() { return applyCss; });
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
      if (typeof child === 'string') {
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


/***/ })

/******/ });
//# sourceMappingURL=brochure.js.map