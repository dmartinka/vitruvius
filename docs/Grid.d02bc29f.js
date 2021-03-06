// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/vue/views/Grid.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'grid',
  data: function data() {
    return {};
  }
};
exports.default = _default;
        var $fef65e = exports.default || module.exports;
      
      if (typeof $fef65e === 'function') {
        $fef65e = $fef65e.options;
      }
    
        /* template */
        Object.assign($fef65e, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { attrs: { id: "grid" } }, [
      _c("h1", { staticClass: "mb-30" }, [_vm._v("Grid")]),
      _vm._v(" "),
      _c("h3", { staticClass: "my-30" }, [_vm._v("Regular Grid")]),
      _vm._v(" "),
      _c("pre", { staticClass: "prettyprint linenums lang-html" }, [
        _vm._v(
          '  <!-- Full width column -->\n  <div class="v-flex">\n    <div class="w-full"></div>\n  </div>\n\n  <!-- Two columns -->\n  <div class="v-flex">\n    <div class="v-flex-item w-1/2"></div>\n    <div class="v-flex-item w-1/2"></div>\n  </div>\n\n  <!-- Three columns -->\n  <div class="v-flex">\n    <div class="v-flex-item w-1/3"></div>\n    <div class="v-flex-item w-1/3"></div>\n    <div class="v-flex-item w-1/3"></div>\n  </div>\n\n  <!-- Four columns -->\n  <div class="v-flex">\n    <div class="v-flex-item w-1/4"></div>\n    <div class="v-flex-item w-1/4"></div>\n    <div class="v-flex-item w-1/4"></div>\n    <div class="v-flex-item w-1/4"></div>\n  </div>\n\n  <!-- Five columns -->\n  <div class="v-flex">\n    <div class="v-flex-item w-1/5"></div>\n    <div class="v-flex-item w-1/5"></div>\n    <div class="v-flex-item w-1/5"></div>\n    <div class="v-flex-item w-1/5"></div>\n    <div class="v-flex-item w-1/5"></div>\n  </div>'
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "v-flex" }, [
        _c("div", { staticClass: "v-flex-item w-full" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "v-flex" }, [
        _c(
          "div",
          { staticClass: "v-flex-item w-1/2 bg-moxi-green text-center" },
          [_vm._v("1")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "v-flex-item w-1/2 bg-moxi-green-light text-center" },
          [_vm._v("2")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "v-flex" }, [
        _c(
          "div",
          { staticClass: "v-flex-item w-1/3 bg-moxi-green text-center" },
          [_vm._v("1")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "v-flex-item w-1/3 bg-moxi-green-light text-center" },
          [_vm._v("2")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "v-flex-item w-1/3 bg-moxi-green text-center" },
          [_vm._v("3")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "v-flex" }, [
        _c(
          "div",
          { staticClass: "v-flex-item w-1/4 bg-moxi-green text-center" },
          [_vm._v("1")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "v-flex-item w-1/4 bg-moxi-green-light text-center" },
          [_vm._v("2")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "v-flex-item w-1/4 bg-moxi-green text-center" },
          [_vm._v("3")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "v-flex-item w-1/4 bg-moxi-green-light text-center" },
          [_vm._v("4")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "v-flex" }, [
        _c(
          "div",
          { staticClass: "v-flex-item w-1/5 bg-moxi-green text-center" },
          [_vm._v("1")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "v-flex-item w-1/5 bg-moxi-green-light text-center" },
          [_vm._v("2")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "v-flex-item w-1/5 bg-moxi-green text-center" },
          [_vm._v("3")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "v-flex-item w-1/5 bg-moxi-green-light text-center" },
          [_vm._v("4")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "v-flex-item w-1/5 bg-moxi-green text-center" },
          [_vm._v("5")]
        )
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "my-30" }, [_vm._v("Responsive Grid")]),
      _vm._v(" "),
      _c("pre", { staticClass: "prettyprint linenums lang-html" }, [
        _vm._v(
          '  <!-- Six columns -->\n  <div class="v-flex-wrap">\n    <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"></div>\n    <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"></div>\n    <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"></div>\n    <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"></div>\n    <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6"></div>\n    <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6"></div>\n  </div>\n\n  <div class="v-flex-wrap">\n    <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"></div>\n    <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"></div>\n    <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"></div>\n    <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"></div>\n    <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6"></div>\n    <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6"></div>\n  </div>'
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "v-flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center"
          },
          [_vm._v("1")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center"
          },
          [_vm._v("2")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center"
          },
          [_vm._v("3")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center"
          },
          [_vm._v("4")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green text-center"
          },
          [_vm._v("5")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green-light text-center"
          },
          [_vm._v("6")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "v-flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center"
          },
          [_vm._v("7")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center"
          },
          [_vm._v("8")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center"
          },
          [_vm._v("9")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center"
          },
          [_vm._v("10")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green text-center"
          },
          [_vm._v("11")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green-light text-center"
          },
          [_vm._v("12")]
        )
      ])
    ])
  }
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$fef65e', $fef65e);
          } else {
            api.reload('$fef65e', $fef65e);
          }
        }

        
      }
    })();
},{"vue-hot-reload-api":"node_modules/vue-hot-reload-api/dist/index.js","vue":"node_modules/vue/dist/vue.runtime.esm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54159" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/Grid.d02bc29f.map