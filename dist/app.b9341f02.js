parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZBnv":[function(require,module,exports) {
function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}module.exports=n;
},{}],"No+o":[function(require,module,exports) {
function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}module.exports=r;
},{}],"LNzP":[function(require,module,exports) {
function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(t)}function t(n){return"function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?module.exports=t=function(t){return o(t)}:module.exports=t=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)},t(n)}module.exports=t;
},{}],"VmQe":[function(require,module,exports) {
function e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}module.exports=e;
},{}],"GF/C":[function(require,module,exports) {
var e=require("../helpers/typeof"),r=require("./assertThisInitialized");function t(t,i){return!i||"object"!==e(i)&&"function"!=typeof i?r(t):i}module.exports=t;
},{"../helpers/typeof":"LNzP","./assertThisInitialized":"VmQe"}],"9WQg":[function(require,module,exports) {
function t(e){return module.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t(e)}module.exports=t;
},{}],"Jibl":[function(require,module,exports) {
function t(o,e){return module.exports=t=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},t(o,e)}module.exports=t;
},{}],"9qng":[function(require,module,exports) {
var e=require("./setPrototypeOf");function r(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&e(r,t)}module.exports=r;
},{"./setPrototypeOf":"Jibl"}],"3eaY":[function(require,module,exports) {
function n(n){return-1!==Function.toString.call(n).indexOf("[native code]")}module.exports=n;
},{}],"XsAw":[function(require,module,exports) {
var t=require("./setPrototypeOf");function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function r(n,o,u){return e()?module.exports=r=Reflect.construct:module.exports=r=function(e,r,n){var o=[null];o.push.apply(o,r);var u=new(Function.bind.apply(e,o));return n&&t(u,n.prototype),u},r.apply(null,arguments)}module.exports=r;
},{"./setPrototypeOf":"Jibl"}],"C2vW":[function(require,module,exports) {
var e=require("./getPrototypeOf"),r=require("./setPrototypeOf"),t=require("./isNativeFunction"),o=require("./construct");function n(u){var i="function"==typeof Map?new Map:void 0;return module.exports=n=function(n){if(null===n||!t(n))return n;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(n))return i.get(n);i.set(n,u)}function u(){return o(n,arguments,e(this).constructor)}return u.prototype=Object.create(n.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),r(u,n)},n(u)}module.exports=n;
},{"./getPrototypeOf":"9WQg","./setPrototypeOf":"Jibl","./isNativeFunction":"3eaY","./construct":"XsAw"}],"euKU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppBlock=void 0;var e=u(require("@babel/runtime/helpers/classCallCheck")),t=u(require("@babel/runtime/helpers/createClass")),r=u(require("@babel/runtime/helpers/possibleConstructorReturn")),a=u(require("@babel/runtime/helpers/getPrototypeOf")),l=u(require("@babel/runtime/helpers/inherits")),i=u(require("@babel/runtime/helpers/wrapNativeSuper"));function u(e){return e&&e.__esModule?e:{default:e}}var n=function(i){function u(){var t;(0,e.default)(this,u),(t=(0,r.default)(this,(0,a.default)(u).call(this))).root=t.attachShadow({mode:"open"});var l=document.querySelector("template");return t.root.appendChild(l.content.cloneNode(!0)),t.title=t.getAttribute("title"),t.text=t.getAttribute("text"),t.class=t.getAttribute("class"),t.header=t.root.querySelector(".title"),t.paragraph=t.root.querySelector(".text"),t}return(0,l.default)(u,i),(0,t.default)(u,[{key:"init",value:function(){this.header.innerText=this.title,this.paragraph.innerText=this.text,this.paragraph.classList.add(this.class)}},{key:"updateElement",value:function(e,t){e.innerText=t}},{key:"updateClass",value:function(e,t){}},{key:"attributeChangedCallback",value:function(e,t,r){"title"===e&&this.updateElement(this.header,r),"text"===e&&this.updateElement(this.paragraph,r)}},{key:"connectedCallback",value:function(){this.init()}},{key:"disconnectedCallback",value:function(){}}],[{key:"observedAttributes",get:function(){return["title","text","class"]}}]),u}((0,i.default)(HTMLElement));exports.AppBlock=n;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"No+o","@babel/runtime/helpers/possibleConstructorReturn":"GF/C","@babel/runtime/helpers/getPrototypeOf":"9WQg","@babel/runtime/helpers/inherits":"9qng","@babel/runtime/helpers/wrapNativeSuper":"C2vW"}],"lBOa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.bases=exports.airtableKey=void 0;var e="keyLJFjUKsl2jfxfA";exports.airtableKey=e;var s={Content:"appB3NhaDjZBZ6g37"};exports.bases=s;
},{}],"KK7h":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDataFrom=c,exports.getLastRecordId=r,exports.fetchFromId=a;var t=require("./secret.js"),e="https://api.airtable.com/v0",n={mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t.airtableKey)}},o={fields:"fields[]=Id",sortField:"sort[0][field]=Created",sortDirection:"sort[0][direction]=desc",maxRecords:"maxRecords=1"};function r(r){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Content",a="".concat(e,"/").concat(t.bases[c],"/").concat(r,"?").concat(Object.values(o).join("&"));return fetch(a,n).then(function(t){return t.json()}).then(function(t){return t.records[0].fields.Id})}function c(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Content",a="".concat(e,"/").concat(t.bases[c],"/").concat(o,"?filterByFormula=(Id=").concat(r,")");return fetch(a,n).then(function(t){return t.json()}).then(function(t){return t.records})}function a(o,r){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Content",a="".concat(e,"/").concat(t.bases[c],"/").concat(o,"/").concat(r);return fetch(a,n).then(function(t){return t.json()}).then(function(t){return t.fields})}
},{"./secret.js":"lBOa"}],"e9oI":[function(require,module,exports) {
"use strict";function e(e){return Math.ceil(Math.random()*e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.randomNumber=e;
},{}],"1cHo":[function(require,module,exports) {
"use strict";var e=require("../airtable/client.js"),t=require("../helpers/random-number.js"),r=document.querySelector("#quote > app-block");(0,e.getLastRecordId)("Quotes").then(function(r){return(0,e.getDataFrom)("Quotes",(0,t.randomNumber)(r))}).then(function(e){return r.setAttribute("text",e[0].fields.Quote),e[0].fields.Author[0]}).then(function(t){return(0,e.fetchFromId)("Quotes",t)}).then(function(e){return r.setAttribute("title",e.Name)});
},{"../airtable/client.js":"KK7h","../helpers/random-number.js":"e9oI"}],"eb9L":[function(require,module,exports) {

},{}],"Fv9+":[function(require,module,exports) {
"use strict";var i=require("./components/block.js");require("./initialisers/init-quote.js"),require("./initialisers/init-principle.js"),window.customElements.define("app-block",i.AppBlock);
},{"./components/block.js":"euKU","./initialisers/init-quote.js":"1cHo","./initialisers/init-principle.js":"eb9L"}]},{},["Fv9+"], null)
//# sourceMappingURL=/app.b9341f02.js.map