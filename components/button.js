parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Y5ZL":[function(require,module,exports) {
"use strict";function e(e){return"string"==typeof e?e.split(/([_A-Z])/).reduce(function(e,t,r){return""+e+(e&&r%2!=0?"-":"")+(t="_"===t?"":t).toLowerCase()}):e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.dashCase=e,exports.keys=r,exports.empty=void 0;var t=function(e){return null==e};function r(e){e=e||{};var t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(e)):t}exports.empty=t;
},{}],"DKqm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.name=r;var e=require("./util.js");function t(e,t){return(-1===e.indexOf("-")?"x-"+e:e)+(t?"-"+t:"")}function r(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"element";r=(0,e.dashCase)(r);for(var n=0;customElements.get(t(r,n));)++n;return t(r,n)}
},{"./util.js":"Y5ZL"}],"TxCg":[function(require,module,exports) {

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.define=r;var e=require("./name.js");function r(r){return customElements.define(r.is||(0,e.name)(),r),r}
},{"./name.js":"DKqm"}],"lZZY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.emit=o;var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t={bubbles:!0,cancelable:!0,composed:!1};function o(o,n,r){var c=e({},t,r),s=void 0;return"composed"in CustomEvent.prototype?s=new CustomEvent(n,c):((s=document.createEvent("CustomEvent")).initCustomEvent(n,c.bubbles,c.cancelable,c.detail),Object.defineProperty(s,"composed",{value:c.composed})),o.dispatchEvent(s)}
},{}],"l9D9":[function(require,module,exports) {
"use strict";function e(e){var t=e.checked,r=e.type,n=e.value;return"checkbox"===r||"radio"===r?!!t&&(n||!0):n}function t(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"state.";return function(n){var o=n.target||n.composedPath&&n.composedPath()[0],a=e(o),c=r||o.name||"value";if(c.indexOf(".")>-1){var u=c.split("."),i=u[0],s=u.pop();u.reduce(function(e,t){return e[t]},t)[s||o.name]=a,t[i]=t[i]}else t[c]=a}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.link=t;
},{}],"44ZF":[function(require,module,exports) {
"use strict";function o(o){return o._shadowRoot||(o._shadowRoot=o.shadowRoot||o.attachShadow({mode:"open"}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shadow=o;
},{}],"x2lL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.withChildren=void 0;var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),o=function t(e,o,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,o);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,r)}if("value"in n)return n.value;var c=n.get;return void 0!==c?c.call(r):void 0};function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=function(e){var o=e.getPrototypeOf||function(t){return t.__proto__},r=e.setPrototypeOf||function(t,e){return t.__proto__=e,t},n="object"===("undefined"==typeof Reflect?"undefined":t(Reflect))?Reflect.construct:function(t,e,o){var n,i=[null];return i.push.apply(i,e),n=t.bind.apply(t,i),r(new n,o.prototype)};return function(t){var e=o(t);return r(t,r(function(){return n(e,arguments,o(this).constructor)},e))}}(Object),p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return c(function(c){function p(){return r(this,p),n(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return i(p,t),e(p,[{key:"childrenUpdated",value:function(){o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"childrenUpdated",this)&&o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"childrenUpdated",this).call(this),this.props&&this.props.hasOwnProperty("children")&&(this.props={children:this.children})}},{key:"connectedCallback",value:function(){if(o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"connectedCallback",this)&&o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"connectedCallback",this).call(this),this.childrenUpdated){var t=this.childrenUpdated.bind(this);this._mo=new MutationObserver(t),this._mo.observe(this,{childList:!0}),t()}}},{key:"disconnectedCallback",value:function(){o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"disconnectedCallback",this)&&o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"disconnectedCallback",this).call(this),this._mo&&this._mo.disconnect()}}]),p}())};exports.withChildren=p;
},{}],"1UON":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.withContext=void 0;var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(e){var n=e.getPrototypeOf||function(t){return t.__proto__},o=e.setPrototypeOf||function(t,e){return t.__proto__=e,t},r="object"===("undefined"==typeof Reflect?"undefined":t(Reflect))?Reflect.construct:function(t,e,n){var r,u=[null];return u.push.apply(u,e),r=t.bind.apply(t,u),o(new r,n.prototype)};return function(t){var e=n(t);return o(t,o(function(){return r(e,arguments,n(this).constructor)},e))}}(Object),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return u(function(u){function i(){return n(this,i),o(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return r(i,t),e(i,[{key:"context",get:function(){if(this._context)return this._context;for(var t=this;t=t.parentNode||t.host;)if("context"in t)return t.context;return{}},set:function(t){this._context=t}}]),i}())};exports.withContext=i;
},{}],"JWIF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.withLifecycle=void 0;var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),o=function t(e,o,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,o);if(void 0===r){var c=Object.getPrototypeOf(e);return null===c?void 0:t(c,o,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0};function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(e){var o=e.getPrototypeOf||function(t){return t.__proto__},n=e.setPrototypeOf||function(t,e){return t.__proto__=e,t},r="object"===("undefined"==typeof Reflect?"undefined":t(Reflect))?Reflect.construct:function(t,e,o){var r,c=[null];return c.push.apply(c,e),r=t.bind.apply(t,c),n(new r,o.prototype)};return function(t){var e=o(t);return n(t,n(function(){return r(e,arguments,o(this).constructor)},e))}}(Object),p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return i(function(i){function p(){return n(this,p),r(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return c(p,t),e(p,[{key:"connectedCallback",value:function(){this.connecting&&this.connecting(),o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"connectedCallback",this)&&o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"connectedCallback",this).call(this),this.connected&&this.connected()}},{key:"disconnectedCallback",value:function(){this.disconnecting&&this.disconnecting(),o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"disconnectedCallback",this)&&o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"disconnectedCallback",this).call(this),this.disconnected&&this.disconnected()}}]),p}())};exports.withLifecycle=p;
},{}],"6S3N":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.normalizeAttributeDefinition=s,exports.normalizePropertyDefinition=l,exports.prop=d,exports.props=exports.withUpdate=void 0;var t=require("./util.js"),e=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),r=function t(e,r,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,r);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,o)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(o):void 0},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var p=function(t){var e=t.getPrototypeOf||function(t){return t.__proto__},r=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},o="object"===("undefined"==typeof Reflect?"undefined":n(Reflect))?Reflect.construct:function(t,e,o){var n,i=[null];return i.push.apply(i,e),n=t.bind.apply(t,i),r(new n,o.prototype)};return function(t){var n=e(t);return r(t,r(function(){return o(n,arguments,e(this).constructor)},n))}}(Object);function s(e,r){var i=r.attribute,a="object"===(void 0===i?"undefined":n(i))?o({},i):{source:i,target:i};return!0===a.source&&(a.source=(0,t.dashCase)(e)),!0===a.target&&(a.target=(0,t.dashCase)(e)),a}function c(t){return t}function l(t,e){var r=e.coerce,o=e.default,n=e.deserialize,i=e.serialize;return{attribute:s(t,e),coerce:r||c,default:o,deserialize:n||c,serialize:i||c}}var f=new Map;function b(e){if(!e.hasOwnProperty("_propsNormalized")){var r=e.props;(0,t.keys)(r).forEach(function(t){var o=r[t]||r.any;f.has(o)&&(o=f.get(o)),"function"!=typeof o&&(o=d(o)),o({constructor:e},t)})}}function y(t){window.Promise?Promise.resolve().then(t):setTimeout(t)}function d(t){var e=t||{},r=function(t,r){var o=t.constructor,n=l(r,e);o.hasOwnProperty("_propsNormalized")||(o._propsNormalized={}),o._propsNormalized[r]=n;var i=n.attribute,a=i.source,u=i.target;a&&(o._observedAttributes.push(a),o._attributeToPropertyMap[a]=r,a!==u&&(o._attributeToAttributeMap[a]=u)),Object.defineProperty(o.prototype,r,{configurable:!0,get:function(){var t=this._props[r];return null==t?n.default:t},set:function(t){var e=n.attribute.target,o=n.serialize;if(e){var i=o?o(t):t;null==i?this.removeAttribute(e):this.setAttribute(e,i)}this._props[r]=n.coerce(t),this.triggerUpdate()}})};return Object.keys(e).forEach(function(t){return r[t]=e[t]}),r}var _=function(){var o,n,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return p((n=o=function(o){function n(){var t,e,r;i(this,n);for(var o=arguments.length,u=Array(o),p=0;p<o;p++)u[p]=arguments[p];return e=r=a(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(u))),r._prevProps={},r._prevState={},r._props={},r._state={},a(r,e)}return u(n,s),e(n,[{key:"attributeChangedCallback",value:function(t,e,o){var i=this.constructor,a=i._attributeToAttributeMap,u=i._attributeToPropertyMap,p=i._propsNormalized;r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,t,e,o);var s=u[t];if(s){var c=p[s];if(c){var l=c.default,f=c.deserialize,b=f?f(o):o;this._props[s]=null==b?l:b,this.triggerUpdate()}}var y=a[t];y&&(null==o?this.removeAttribute(y):this.setAttribute(y,o))}},{key:"connectedCallback",value:function(){r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.triggerUpdate()}},{key:"shouldUpdate",value:function(){return!0}},{key:"triggerUpdate",value:function(){var t=this;this._updating||(this._updating=!0,y(function(){var e=t._prevProps,r=t._prevState;t.updating&&t.updating(e,r),t.updated&&t.shouldUpdate(e,r)&&t.updated(e,r),t._prevProps=t.props,t._prevState=t.state,t._updating=!1}))}},{key:"props",get:function(){var e=this;return(0,t.keys)(this.constructor.props).reduce(function(t,r){return t[r]=e[r],t},{})},set:function(e){var r=this,o=this.constructor.props;(0,t.keys)(e).forEach(function(t){return t in o&&(r[t]=e[t])})}},{key:"state",get:function(){return this._state},set:function(t){this._state=t,this.triggerUpdate()}}],[{key:"observedAttributes",get:function(){return b(this),this._observedAttributes.concat(r(n.__proto__||Object.getPrototypeOf(n),"observedAttributes",this)||[])}},{key:"props",get:function(){return this._props},set:function(t){this._props=t}}]),n}(),o._attributeToAttributeMap={},o._attributeToPropertyMap={},o._observedAttributes=[],o._props={},n))};exports.withUpdate=_;var v=JSON.parse,h=JSON.stringify,g=Object.freeze({source:!0}),O=function(e){return(0,t.empty)(e)?0:Number(e)},m=d({attribute:g}),j=d({attribute:g,coerce:function(e){return Array.isArray(e)?e:(0,t.empty)(e)?null:[e]},default:Object.freeze([]),deserialize:v,serialize:h}),P=d({attribute:g,coerce:Boolean,default:!1,deserialize:function(e){return!(0,t.empty)(e)},serialize:function(t){return t?"":null}}),z=d({attribute:g,default:0,coerce:O,deserialize:O,serialize:function(e){return(0,t.empty)(e)?null:String(Number(e))}}),k=d({attribute:g,default:Object.freeze({}),deserialize:v,serialize:h}),w=d({attribute:g,default:"",coerce:String,serialize:function(e){return(0,t.empty)(e)?null:String(e)}});f.set(Array,j),f.set(Boolean,P),f.set(Number,z),f.set(Object,k),f.set(String,w);var A={any:m,array:j,boolean:P,number:z,object:k,string:w};exports.props=A;
},{"./util.js":"Y5ZL"}],"drFV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.withRenderer=void 0;var t=require("./shadow.js"),e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),o=function t(e,r,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,r);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,o)}if("value"in n)return n.value;var p=n.get;return void 0!==p?p.call(o):void 0};function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(t){var r=t.getPrototypeOf||function(t){return t.__proto__},o=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},n="object"===("undefined"==typeof Reflect?"undefined":e(Reflect))?Reflect.construct:function(t,e,r){var n,i=[null];return i.push.apply(i,e),n=t.bind.apply(t,i),o(new n,r.prototype)};return function(t){var e=r(t);return o(t,o(function(){return n(e,arguments,r(this).constructor)},e))}}(Object),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return u(function(u){function c(){return n(this,c),i(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return p(c,e),r(c,[{key:"renderer",value:function(t,e){o(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"renderer",this)?o(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"renderer",this).call(this,t,e):t.innerHTML=e()||""}},{key:"updated",value:function(t,e){var r=this;o(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"updated",this)&&o(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"updated",this).call(this,t,e),this.rendering&&this.rendering(),this.renderer(this.renderRoot,function(){return r.render&&r.render(r)}),this.rendered&&this.rendered()}},{key:"renderRoot",get:function(){return o(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"renderRoot",this)||(0,t.shadow)(this)}}]),c}())};exports.withRenderer=c;
},{"./shadow.js":"44ZF"}],"XGhd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.withComponent=void 0;var e=require("./with-children.js"),t=require("./with-context.js"),r=require("./with-lifecycle.js"),i=require("./with-update.js"),n=require("./with-renderer.js"),h=function(){var h=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return(0,r.withLifecycle)((0,e.withChildren)((0,t.withContext)((0,i.withUpdate)((0,n.withRenderer)(h||HTMLElement)))))};exports.withComponent=h;
},{"./with-children.js":"x2lL","./with-context.js":"1UON","./with-lifecycle.js":"JWIF","./with-update.js":"6S3N","./with-renderer.js":"drFV"}],"VUUb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./define.js");Object.keys(e).forEach(function(r){"default"!==r&&"__esModule"!==r&&Object.defineProperty(exports,r,{enumerable:!0,get:function(){return e[r]}})});var r=require("./emit.js");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return r[e]}})});var t=require("./link.js");Object.keys(t).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return t[e]}})});var n=require("./name.js");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return n[e]}})});var u=require("./shadow.js");Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return u[e]}})});var o=require("./with-children.js");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return o[e]}})});var c=require("./with-context.js");Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return c[e]}})});var f=require("./with-component.js");Object.keys(f).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return f[e]}})});var i=require("./with-lifecycle.js");Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return i[e]}})});var s=require("./with-update.js");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return s[e]}})});var a=require("./with-renderer.js");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return a[e]}})});
},{"./define.js":"TxCg","./emit.js":"lZZY","./link.js":"l9D9","./name.js":"DKqm","./shadow.js":"44ZF","./with-children.js":"x2lL","./with-context.js":"1UON","./with-component.js":"XGhd","./with-lifecycle.js":"JWIF","./with-update.js":"6S3N","./with-renderer.js":"drFV"}],"uicY":[function(require,module,exports) {
"use strict";var t=require("skatejs");function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}function c(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var a=function(n){function o(){return e(this,o),c(this,u(o).apply(this,arguments))}return f(o,(0,t.withComponent)()),r(o,[{key:"returnClass",value:function(t){var n=t.split(","),e="";return n.forEach(function(t){e+="btn-".concat(t," ")}),e}},{key:"render",value:function(t){var n=t.type,e=t.icon,o=t.onClick,r=e?'<i class="'.concat(e,'"></i> '):"";return'\n      <button class="btn '.concat(this.returnClass(n),'" onclick="').concat(o,'">\n        ').concat(r,"\n        ").concat(this.innerHTML,"\n      </button>\n    ")}},{key:"renderRoot",get:function(){return this}}],[{key:"props",get:function(){return{type:t.props.string,icon:t.props.string,onClick:t.props.string}}}]),o}();customElements.define("vp-button",a);
},{"skatejs":"VUUb"}],"zoTV":[function(require,module,exports) {
"use strict";require("../button/button");
},{"../button/button":"uicY"}]},{},["zoTV"], null)
//# sourceMappingURL=/button.map