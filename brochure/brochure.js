var __Brochure=(window.webpackJsonp_Brochure=window.webpackJsonp_Brochure||[]).push([[0],{"9tPo":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var i=t.protocol+"//"+t.host,n=i+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var s,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(s=0===a.indexOf("//")?a:0===a.indexOf("/")?i+a:n+a.replace(/^\.\//,""),"url("+JSON.stringify(s)+")")})}},JPst:function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=function(e,t){var i=e[1]||"",n=e[3];if(!n)return i;if(t&&"function"==typeof btoa){var s=(r=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),a=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[i].concat(a).concat([s]).join("\n")}var r;return[i].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},s=0;s<this.length;s++){var a=this[s][0];null!=a&&(n[a]=!0)}for(s=0;s<e.length;s++){var r=e[s];null!=r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),t.push(r))}},t}},Y8ul:function(e,t,i){(e.exports=i("JPst")(!1)).push([e.i,".brochure {\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  position: relative;\n  margin: 24px;\n}\n\n.brochure-title {\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 24px;\n  line-height: 24px;\n  margin: 0;\n  padding: 12px 0;\n  text-transform: uppercase;\n}\n\n.brochure-book {\n  box-sizing: border-box;\n  position: relative;\n}\n\n.brochure-loading {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 160px;\n  height: 48px;\n  z-index: 3;\n}\n\n.brochure-control {\n  display: flex;\n  align-items: center;\n}\n\n.brochure-pagination {\n  box-sizing: border-box;\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  margin-top: 24px;\n  width: 100%;\n}\n\n.brochure-pageInput {\n  box-sizing: border-box;\n  display: flex;\n  flex-basis: 200px;\n  margin-top: 24px;\n  padding: 0 24px;\n}\n\n.inputPage {\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  font-family: sans-serif;\n  font-size: 16px;\n  outline: none;\n  text-align: center;\n  width: 28px;\n}\n\n.inputTotal {\n  box-sizing: border-box;\n  font-family: sans-serif;\n  font-size: 16px;\n  outline: none;\n  padding: 0 8px;\n  text-align: center;\n}\n\n.pagination-numbers {\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: baseline;\n  width: 100%;\n}\n\n.pagination,\n.pagination-gap,\n.pagination-right,\n.pagination-left {\n  border-radius: 5px;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.87);\n  flex-basis: 10%;\n  font-family: sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  height: 32px;\n  line-height: 24px;\n  padding: 4px 2px;\n  text-align: center;\n  transition: all 300ms ease-out;\n  user-select: none;\n  vertical-align: middle;\n  width: 32px;\n}\n\n.pagination {\n  cursor: pointer;\n  display: none;\n}\n\n.pagination-display {\n  display: block;\n}\n\n.pagination:hover,\n.pagination-right:hover,\n.pagination-left:hover {\n  background-color: rgba(0, 0, 0, 0.12); \n}\n\n.pagination-active {\n  background-color: #007bff;\n  color: #ffffff;\n}\n\n.pagination-active:hover {\n  background-color: #0056b3;\n}\n\n.brochure-page {\n  box-sizing: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  color: rgba(0, 0, 0, 0.1);\n  display: none;\n  position: absolute;\n  z-index: 1;\n  -ms-user-select: none;\n      user-select: none;\n}\n\n.brochure-mainpage {\n  box-shadow: 10px 10px 30px rgba(0,0,0,0.3);\n}\n\n.brochure-mainpage::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgb(112,66,20, 0.06);\n  box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.brochure-mainpage::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 10px;\n  bottom: 0;\n  width: 3px;\n  background: rgba(0,0,0,0.06);\n  box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);\n}\n\n.brochure-lastpage {\n  box-shadow: 10px 10px 30px rgba(0,0,0,0.3);\n  left: 0;\n}\n\n.brochure-lastpage::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgb(112,66,20, 0.06);\n  box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.brochure-lastpage::after {\n  background: rgba(0,0,0,0.06);\n  bottom: 0;\n  box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);\n  content: '';\n  position: absolute;\n  right: 10px;\n  top: 0;\n  width: 3px;\n}\n\n.brochure-image {\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  -ms-user-select: none;\n      user-select: none;\n}\n\n.move-right {\n  left: 0;\n  perspective-origin: 50% 0%;\n  transform-style: preserve-3d;\n  transform-origin: 100% 50% 0px;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n\n.flip-right {\n  perspective-origin: 0% 50%;\n  transform-origin: 0% 50% 0px;\n  z-index: 2;\n}\n\n.move-left {\n  perspective-origin: 0% 50%;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50% 0px;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n\n.flip-left {\n  perspective-origin: 0% 50%;\n  transform-origin: 100% 50% 0px;\n  z-index: 2;\n}\n",""])},"aET+":function(e,t,i){var n,s,a={},r=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===s&&(s=n.apply(this,arguments)),s}),o=function(e){var t={};return function(e,i){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,i);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),h=null,p=0,l=[],g=i("9tPo");function d(e,t){for(var i=0;i<e.length;i++){var n=e[i],s=a[n.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](n.parts[r]);for(;r<n.parts.length;r++)s.parts.push(v(n.parts[r],t))}else{var o=[];for(r=0;r<n.parts.length;r++)o.push(v(n.parts[r],t));a[n.id]={id:n.id,refs:1,parts:o}}}}function c(e,t){for(var i=[],n={},s=0;s<e.length;s++){var a=e[s],r=t.base?a[0]+t.base:a[0],o={css:a[1],media:a[2],sourceMap:a[3]};n[r]?n[r].parts.push(o):i.push(n[r]={id:r,parts:[o]})}return i}function u(e,t){var i=o(e.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===e.insertAt)n?n.nextSibling?i.insertBefore(t,n.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),l.push(t);else if("bottom"===e.insertAt)i.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var s=o(e.insertAt.before,i);i.insertBefore(t,s)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return i.nc}();n&&(e.attrs.nonce=n)}return b(t,e.attrs),u(e,t),t}function b(e,t){Object.keys(t).forEach(function(i){e.setAttribute(i,t[i])})}function v(e,t){var i,n,s,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var r=p++;i=h||(h=m(t)),n=y.bind(null,i,r,!1),s=y.bind(null,i,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),u(e,t),t}(t),n=function(e,t,i){var n=i.css,s=i.sourceMap,a=void 0===t.convertToAbsoluteUrls&&s;(t.convertToAbsoluteUrls||a)&&(n=g(n));s&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var r=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}.bind(null,i,t),s=function(){f(i),i.href&&URL.revokeObjectURL(i.href)}):(i=m(t),n=function(e,t){var i=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}.bind(null,i),s=function(){f(i)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else s()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var i=c(e,t);return d(i,t),function(e){for(var n=[],s=0;s<i.length;s++){var r=i[s];(o=a[r.id]).refs--,n.push(o)}e&&d(c(e,t),t);for(s=0;s<n.length;s++){var o;if(0===(o=n[s]).refs){for(var h=0;h<o.parts.length;h++)o.parts[h]();delete a[o.id]}}}};var P,x=(P=[],function(e,t){return P[e]=t,P.filter(Boolean).join("\n")});function y(e,t,i,n){var s=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,s);else{var a=document.createTextNode(s),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}},nIBv:function(e,t,i){var n=i("Y8ul");"string"==typeof n&&(n=[[e.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(n,s);n.locals&&(e.exports=n.locals)},zLKI:function(e,t,i){"use strict";i.r(t);i("nIBv");const n=(e,t,i)=>{const n=null!==t&&"object"==typeof t?Object.keys(t):[],s=document.createElement(e);if(t&&n.forEach(e=>{s.setAttribute(e,t[e])}),null!=i){let e=i;Array.isArray(e)||(e=[e]),e.forEach(e=>{"string"!=typeof e&&"number"!=typeof e?s.appendChild(e):s.appendChild(document.createTextNode(e))})}return s},s="ontouchstart"in window?{start:"touchstart",move:"touchmove",end:"touchend"}:{start:"mousedown",move:"mousemove",end:"mouseup"},a=48,r=96;var o={state:"INACTIVE",transitions:{INACTIVE:{check:function(e,t){if(Object.assign(this,e),1===this.numPages)return;let i=-1!==t.type.indexOf("touch")?t.touches[0].clientX:t.clientX;this.move=i-this.posX>this.bookWidth/2?"right":"left","right"===this.move&&this.pageState.currentPage+2>=this.numPages||"left"===this.move&&0===this.pageState.currentPage||(this.flippedPage=t.target.closest(".brochure-page"),"right"===this.move&&this.changeStateTo("FLIP_RIGHT_TO_MIDDLE"),"left"===this.move&&this.changeStateTo("FLIP_LEFT_TO_MIDDLE"),this.moveHandler=this.moveHandler.bind(this),this.endMoveHandler=this.endMoveHandler.bind(this),this.dispatch("start"))},end:function(){document.removeEventListener(s.move,this.moveHandler),document.removeEventListener(s.end,this.endMoveHandler),this.angle=-1,this.flippedPageOtherside=null,this.flippedPage=null,this.flippedPageBack=null,this.flippedPageUnder=null}},FLIP_RIGHT_TO_MIDDLE:{start:function(){const e="cover"===this.firstPageView&&0===this.pageState.currentPage?1:2;this.pageState.currentPage>0&&(this.flippedPageOtherside=this.pageNodes[this.pageState.currentPage]),this.flippedPage.classList.add("flip-right"),this.flippedPageBack=this.pageNodes[this.pageState.currentPage+e],this.flippedPageBack.classList.add("move-right"),this.pageState.currentPage<this.numPages-3&&(this.flippedPageUnder=this.pageNodes[this.pageState.currentPage+e+1],Object.assign(this.flippedPageUnder.style,{display:"flex",left:"50%"})),document.addEventListener(s.move,this.moveHandler),document.addEventListener(s.end,this.endMoveHandler)},move:function(e){const t=this.bookWidth;let i=-1!==e.type.indexOf("touch")?e.touches[0].clientX:e.clientX;if(this.angle=180-180*(i-this.posX)/t,this.angle>90)return this.changeStateTo("FLIP_RIGHT_FROM_MIDDLE"),void this.dispatch("start",e);this.angle<0?this.dispatch("end"):Object.assign(this.flippedPage.style,{zIndex:3,display:"flex",transform:`perspective(2000px) rotateY(-${this.angle}deg)`})},end:function(){this.angle>5?this.dispatch("animation"):(this.flippedPage.removeAttribute("style"),this.flippedPage.classList.remove("flip-right"),this.flippedPage.style.display="flex",this.flippedPage.style.left="50%",this.flippedPageBack.removeAttribute("style"),this.flippedPageBack.classList.remove("move-right"),this.flippedPageUnder&&this.flippedPageUnder.removeAttribute("style"),this.changeStateTo("INACTIVE"),this.dispatch("end"))},animation:function(){this.startAnimation()}},FLIP_RIGHT_FROM_MIDDLE:{start:function(e){this.flippedPage.removeAttribute("style"),this.flippedPage.style.left="50%",this.dispatch("move",e)},move:function(e){const t=this.bookWidth;let i=-1!==e.type.indexOf("touch")?e.touches[0].clientX:e.clientX;if(this.angle=180-180*(i-this.posX)/t,this.angle<90)return this.flippedPageBack.removeAttribute("style"),this.changeStateTo("FLIP_RIGHT_TO_MIDDLE"),void this.dispatch("move",e);this.angle>180?this.dispatch("end"):Object.assign(this.flippedPageBack.style,{display:"flex",transform:`perspective(2000px) rotateY(${180-this.angle}deg)`})},end:function(){this.angle<175?this.dispatch("animation"):(this.flippedPageOtherside&&this.flippedPageOtherside.removeAttribute("style"),this.flippedPage.removeAttribute("style"),this.flippedPage.classList.remove("flip-right"),this.flippedPageBack.classList.remove("move-right"),this.flippedPageBack.removeAttribute("style"),this.flippedPageBack.style.display="flex",this.pageState.currentPage="cover"===this.firstPageView&&0===this.pageState.currentPage?this.pageState.currentPage+1:this.pageState.currentPage+2,this.changeStateTo("INACTIVE"),this.dispatch("end"))},animation:function(){this.startAnimation()}},FLIP_LEFT_TO_MIDDLE:{start:function(){this.pageState.currentPage<this.numPages-1&&(this.flippedPageOtherside=this.pageNodes[this.pageState.currentPage+1]),this.flippedPage.classList.add("flip-left"),this.flippedPageBack=this.pageNodes[this.pageState.currentPage-1],this.flippedPageBack.classList.add("move-left"),this.pageState.currentPage>2&&(this.flippedPageUnder=this.pageNodes[this.pageState.currentPage-1-1],Object.assign(this.flippedPageUnder.style,{display:"flex"})),document.addEventListener(s.move,this.moveHandler),document.addEventListener(s.end,this.endMoveHandler)},move:function(e){const t=this.bookWidth;let i=-1!==e.type.indexOf("touch")?e.touches[0].clientX:e.clientX;if(this.angle=180-180*(i-this.posX)/t,this.angle<90)return this.changeStateTo("FLIP_LEFT_FROM_MIDDLE"),void this.dispatch("start",e);this.angle>180?this.dispatch("end"):Object.assign(this.flippedPage.style,{zIndex:3,display:"flex",transform:`perspective(2000px) rotateY(${180-this.angle}deg)`})},end:function(){this.angle<175?this.dispatch("animation"):(this.flippedPage.removeAttribute("style"),this.flippedPage.classList.remove("flip-left"),this.flippedPage.style.display="flex",this.flippedPageBack.removeAttribute("style"),this.flippedPageBack.classList.remove("move-left"),this.flippedPageUnder&&this.flippedPageUnder.removeAttribute("style"),this.changeStateTo("INACTIVE"),this.dispatch("end"))},animation:function(){this.startAnimation()}},FLIP_LEFT_FROM_MIDDLE:{start:function(e){this.flippedPage.style.display="none",this.dispatch("move",e)},move:function(e){const t=this.bookWidth;let i=-1!==e.type.indexOf("touch")?e.touches[0].clientX:e.clientX;if(this.angle=180-180*(i-this.posX)/t,this.angle>90)return this.flippedPageBack.removeAttribute("style"),this.changeStateTo("FLIP_LEFT_TO_MIDDLE"),void this.dispatch("move",e);this.angle<0?this.dispatch("end"):Object.assign(this.flippedPageBack.style,{zIndex:3,display:"flex",left:"50%",transform:`perspective(2000px) rotateY(-${this.angle}deg)`})},end:function(){this.angle>5?this.dispatch("animation"):(this.flippedPageOtherside&&this.flippedPageOtherside.removeAttribute("style"),this.flippedPage.removeAttribute("style"),this.flippedPage.classList.remove("flip-left"),this.flippedPageBack.classList.remove("move-left"),this.flippedPageBack.removeAttribute("style"),this.flippedPageBack.style.display="flex",this.flippedPageBack.style.left="50%",this.pageState.currentPage="cover"===this.firstPageView&&1===this.pageState.currentPage?this.pageState.currentPage-1:this.pageState.currentPage-2,this.changeStateTo("INACTIVE"),this.dispatch("end"))},animation:function(){this.startAnimation()}}},dispatch(e,...t){const i=this.transitions[this.state][e];i&&i.call(this,...t)},changeStateTo(e){this.state=e},moveHandler(e){this.dispatch("move",e)},endMoveHandler(e){this.dispatch("end",e)},startAnimation(){document.removeEventListener(s.move,this.moveHandler),document.removeEventListener(s.end,this.endMoveHandler);const e=performance.now(),t=i=>{let n=i-e;n>600&&(n=600),this.flipAnimation(n,600),n<600&&null!==this.animationFrame&&(this.animationFrame=requestAnimationFrame(t))};this.animationFrame=requestAnimationFrame(t)},flipAnimation(e,t){const i=e>0?Math.round(90/t*1e3*e)/1e3:0;"right"===this.move&&this.angle<90&&(this.angle-=i,this.flippedPage.style.transform=`perspective(2000px) rotateY(-${this.angle}deg)`),"right"===this.move&&this.angle>=90&&(this.flippedPageBack.style.transform=`perspective(2000px) rotateY(${180-this.angle}deg)`,this.angle+=i),"left"===this.move&&this.angle>=90&&(this.flippedPage.style.transform=`perspective(2000px) rotateY(${180-this.angle}deg)`,this.angle+=i),"left"===this.move&&this.angle<90&&(this.flippedPageBack.style.transform=`perspective(2000px) rotateY(-${this.angle}deg)`,this.angle-=i),(this.angle>=180||this.angle<=0)&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null,this.dispatch("end"))}};let h=0,p=0,l=0,g=0;t.default=class{constructor({contentType:e="",data:t="",htmlNode:i=null,height:n=480,workerSrc:s="./brochure/pdf.worker.js",title:a=null,firstPageView:r="cover",pagination:o={},pageNumberInput:h=!1,saveLastSeenPage:p=!1,options:l={}}){this.url=t,this.el=i,this.contentType=e,this.options=l,this.workerSrc=s,this.title=a,this.firstPageView=r,this.pagination=o,this.pageNumberInput=h,this.saveLastSeenPage=p,this.book=null,this.pages=[],this.pageNodes=[],this.pageContentNodes=[],this.numPages=0,this.renderedPages=0,this.width=0,this.height=n,this.posX=0,this.posY=0,this.bookWidth=0,this.scale=1,this.move="right",this.angle=-1,this.flippedPageOtherside=null,this.flippedPage=null,this.flippedPageBack=null,this.flippedPageUnder=null,this.animationFrame=null,this.loading=null,this.controls=null,this.paginationNode=null,this.pageInput=null,this.pageInputNumber="1",this.pageState=new Proxy({currentPage:0},{set:this.stateChange.bind(this)}),this.fsm={},this.flip=this.flip.bind(this),this.paginationNumberClick=this.paginationNumberClick.bind(this),this.paginationLeft=this.paginationLeft.bind(this),this.paginationRight=this.paginationRight.bind(this),this.pageNumberChange=this.pageNumberChange.bind(this)}stateChange(e,t,i){return e[t]=i,"currentPage"===t&&this.currentPageChanged(i),!0}currentPageChanged(e){const t=[...this.book.querySelectorAll(".brochure-page")].filter(e=>"flex"===e.style.display),i=parseInt(t[0].getAttribute("data-pagenum"),10);if(e<0||e>=this.numPages)console.log("[currentPageChanged]: Incorrect page number");else{if(e+4>=this.renderedPages&&this.renderNext(),e!==i&&(t.forEach(e=>{e.removeAttribute("style")}),e>=1&&(this.book.querySelector(`[data-pagenum="${e}"]`).style.display="flex"),e<this.numPages-1)){const t="cover"===this.firstPageView&&0===e;Object.assign(this.book.querySelector(`[data-pagenum="${t?e:e+1}"]`).style,{display:"flex",left:"50%"})}!0===this.pagination.show&&this.paginationNumberChange(e)}}convertPageNumber(e){if("cover"===this.firstPageView){let t=e%2==0?e-1:e-2;return t<0&&(t=0),t}let t=e%2==0?e:e-1;return t<0&&(t=0),t}paginationNumberChange(e){const t=e+1,i=this.paginationNode.querySelector(".pagination-active"),n=parseInt(i.getAttribute("data-page"),10),s=t>n?"right":"left";if(n!==t){const n=this.paginationNode.querySelector(`[data-page="${t}"]`);if(n.classList.add("pagination-active"),i.classList.remove("pagination-active"),n.classList.contains("pagination-display")&&t!==this.numPages&&1!==t)return;this.paginationRerender(e,s)}}paginationRerender(e,t){const i=[...this.paginationNode.querySelectorAll(".pagination")],s=this.pagination.max-4;let a="right"===t?e-s+1:e-1,r="right"===t?e+1:e+s-1;const o=this.numPages,h=this.paginationNode.querySelector('[data-page="1"]'),p=this.paginationNode.querySelector(`[data-page="${this.numPages}"]`);!h.nextSibling.classList.contains("pagination-gap")&&e>1&&h.after(n("div",{class:"pagination-gap"},"...")),e<=1&&(h.nextSibling.classList.contains("pagination-gap")&&h.nextSibling.remove(),r+=2,0===e&&(r+=1)),p.previousSibling.classList.contains("pagination-gap")||p.before(n("div",{class:"pagination-gap"},"...")),e===o-1&&p.previousSibling.classList.contains("pagination-gap")&&(p.previousSibling.remove(),a-=2),i.forEach((e,t)=>{0===t||t===o-1||t>=a&&t<r?e.classList.add("pagination-display"):e.classList.remove("pagination-display")})}paginationNumberClick(e){const t=e.currentTarget;if(e.type&&t.classList.contains("pagination-active"))return;const i=parseInt(t.getAttribute("data-page"),10);this.pageState.currentPage=this.convertPageNumber(i)}paginationLeft(){const e=this.pageState.currentPage+1;1!==e&&("cover"!==this.firstPageView||2!==e?this.pageState.currentPage=this.pageState.currentPage-2:this.pageState.currentPage=this.pageState.currentPage-1)}paginationRight(){const e=this.pageState.currentPage+1;e!==this.numPages&&("cover"!==this.firstPageView||1!==e&&e!==this.numPages?this.pageState.currentPage=this.pageState.currentPage+2:this.pageState.currentPage=this.pageState.currentPage+1)}pageNumberChange(e){e.preventDefault();const t=e.key;if(!/^[0-9]$/i.test(t)&&-1===["ArrowRight","ArrowLeft","Backspace","Enter"].indexOf(t))return;const i=this.pageInput.querySelector("input"),n=i.selectionStart;let s=this.pageInputNumber;switch(t){case"Enter":return void this.pageNumberEnter();case"ArrowLeft":return void i.setSelectionRange(n-1,n-1);case"ArrowRight":return void i.setSelectionRange(n+1,n+1);case"Backspace":s=s.slice(0,-1);break;default:s+=t}parseInt(s,10)>this.numPages||(this.pageInputNumber=s,i.setAttribute("value",this.pageInputNumber),i.setSelectionRange(this.pageInputNumber.length,this.pageInputNumber.length))}pageNumberEnter(){const e=parseInt(this.pageInputNumber,10);e>this.numPages||e<0||isNaN(e)||(this.pageState.currentPage=this.convertPageNumber(e))}renderPage(e,t){try{let i=["brochure-page"];void 0!==t&&"string"==typeof t&&i.push(t);const s=n("div",{class:i.join(" "),"data-pagenum":e},this.pageContentNodes[e]);0===e&&(s.style.display="flex","cover"===this.firstPageView&&(s.style.left="50%"),s.classList.add("brochure-mainpage")),"cover"===this.firstPageView&&e===this.numPages-1&&this.numPages%2==0&&s.classList.add("brochure-lastpage"),"spread"===this.firstPageView&&1===e&&(s.style.display="flex",s.style.left="50%"),this.book.appendChild(s),this.pageNodes[e]=s}catch(e){console.log(e)}}renderNext(e){if(!0===e)return this.renderedPages<this.numPages&&void 0===this.pageNodes[this.renderedPages+1]&&(this.renderPage(this.renderedPages),this.renderedPages+=1),void(this.renderedPages<this.numPages&&void 0===this.pageNodes[this.renderedPages+1]&&(this.renderPage(this.renderedPages),this.renderedPages+=1));let t=this.pageState.currentPage>4?this.pageState.currentPage-4:this.pageState.currentPage,i=this.pageState.currentPage<this.numPages-4?this.pageState.currentPage+4:this.numPages;if(!(i<=t))for(let e=t;e<i;e++)!this.pageNodes[e]&&e<this.numPages&&this.renderPage(e)}flip(e){this.fsm.dispatch("check",this,e)}render(){p=performance.now(),this.renderedPages=this.numPages>=10?10:this.numPages;for(let e=0;e<this.renderedPages;e++)this.renderPage(e);if(l=performance.now(),console.log(`render pdf took ${p-h} milliseconds.`),console.log(`render html took ${l-p} milliseconds.`),!0!==this.pagination.show&&!0!==this.pageNumberInput||(this.controls=n("div",{class:"brochure-control"}),this.controls.style.width=this.bookWidth+"px",this.el.appendChild(this.controls)),!0===this.pagination.show&&this.renderPagination(),!0===this.pageNumberInput&&this.renderManualInput(),this.fsm=o,this.book.addEventListener(s.start,this.flip),this.el.removeChild(this.loading),!0===this.saveLastSeenPage){const e=parseInt(localStorage.getItem("saveLastSeenPage"),10)+1;this.changePage(e),!0===this.pagination.show&&(this.paginationNode.querySelector('[data-page="1"]').classList.remove("pagination-active"),this.paginationNode.querySelector(`[data-page="${e}"]`).classList.add("pagination-active"))}}renderPagination(){const e=this.pagination.max||10;this.paginationNode=n("div",{class:"brochure-pagination"});const t=n("div",{class:"pagination-numbers"});this.numPages>e&&this.paginationNode.appendChild(n("div",{class:"pagination-left"},"<"));for(let i=1;i<=this.numPages;i++){let s=n("div",{class:"pagination pagination-display","data-page":i},i);1===i&&s.classList.add("pagination-active"),i>e-2&&s.classList.remove("pagination-display"),i===this.numPages&&this.numPages>e&&(t.appendChild(n("div",{class:"pagination-gap"},"...")),s.classList.add("pagination-display")),t.appendChild(s)}this.paginationNode.appendChild(t),this.numPages>e&&this.paginationNode.appendChild(n("div",{class:"pagination-right"},">")),this.controls.appendChild(this.paginationNode),[...this.paginationNode.querySelectorAll(".pagination")].forEach(e=>{e.addEventListener("click",this.paginationNumberClick)}),this.numPages>e&&(this.paginationNode.querySelector(".pagination-left").addEventListener("click",this.paginationLeft),this.paginationNode.querySelector(".pagination-right").addEventListener("click",this.paginationRight))}renderManualInput(){const e=n("div",{class:"inputWrapper"},n("input",{type:"text",class:"inputPage",value:this.pageState.currentPage+1})),t=n("div",{class:"inputTotal"});t.textContent=`/ ${this.numPages}`,this.pageInput=n("div",{class:"brochure-pageInput"}),this.pageInput.appendChild(e),this.pageInput.appendChild(t),this.controls.appendChild(this.pageInput),this.pageInput.querySelector("input").addEventListener("keydown",this.pageNumberChange)}async initPdf(){let e=!1,t=this.pagination.max||10;h=performance.now();const i=window["pdfjs-dist/build/pdf"];i.GlobalWorkerOptions.workerSrc=this.workerSrc;try{this.pdf=await i.getDocument(this.url).promise,this.numPages=this.pdf.numPages;for(let i=1;i<=this.numPages;i++){const s=await this.pdf.getPage(i);if(1===i){let e=s.getViewport(1);this.scale=Math.round(1e3*this.height/e.height)/1e3,e=s.getViewport(this.scale),this.bookWidth=2*e.width,this.book.style.width=this.bookWidth+"px",this.posX=this.book.getBoundingClientRect().x,this.posY=this.book.getBoundingClientRect().y}const a=s.getViewport(this.scale),r=Math.round(1e3*a.width)/1e3,o=Math.round(1e3*a.height)/1e3,h=n("canvas",{width:r,height:o}),p={canvasContext:h.getContext("2d"),viewport:a};await s.render(p),this.pages.push(s),this.pageContentNodes.push(h),!e&&i>=t&&(this.render(),e=!0)}}catch(e){console.log(e)}e||this.render(),g=performance.now(),console.log(`render all html took ${g-h} milliseconds.`)}initPage(){this.numPages=this.url.length;for(let e=0;e<this.numPages;e++){0===e&&(this.bookWidth=this.width,this.book.style.width=this.bookWidth+"px",this.posX=this.book.getBoundingClientRect().x,this.posY=this.book.getBoundingClientRect().y);const t=n("img",{class:"brochure-image",src:this.url[e].url,draggable:!1});t.style.width=this.bookWidth/2+"px",t.style.height=this.height+"px",this.pageContentNodes.push(t)}this.render()}init(){if(!(this.el instanceof Element))throw new Error("Empty DOM node to create brochure");this.width=this.el.getBoundingClientRect().width,this.height=!0===this.pagination.show?this.height-r:this.height,this.el.classList.add("brochure"),null!==this.title&&(this.el.appendChild(n("h2",{class:"brochure-title"},this.title)),this.height-=a),this.book=n("div",{class:"brochure-book"}),this.book.style.height=this.height+"px",this.loading=n("div",{class:"brochure-loading"},"Loading..."),this.el.appendChild(this.book),this.el.appendChild(this.loading),"pdf"===this.contentType&&this.initPdf(),"page"===this.contentType&&Array.isArray(this.url)&&this.initPage()}}}},[["zLKI",1]]]);