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
})({"images/arenas/0/arena.png":[function(require,module,exports) {
module.exports = "/arena.dee3014b.png";
},{}],"images/arenas/1/arena.png":[function(require,module,exports) {
module.exports = "/arena.7d88a0b9.png";
},{}],"images/fighters/kano/left/attractive-stand-up/0.png":[function(require,module,exports) {
module.exports = "/0.88533a0e.png";
},{}],"images/fighters/kano/left/attractive-stand-up/1.png":[function(require,module,exports) {
module.exports = "/1.68a1c470.png";
},{}],"images/fighters/kano/left/attractive-stand-up/2.png":[function(require,module,exports) {
module.exports = "/2.4bdd058f.png";
},{}],"images/fighters/kano/left/attractive-stand-up/3.png":[function(require,module,exports) {
module.exports = "/3.12227b62.png";
},{}],"images/fighters/kano/left/backward-jump/0.png":[function(require,module,exports) {
module.exports = "/0.938580cd.png";
},{}],"images/fighters/kano/left/backward-jump/1.png":[function(require,module,exports) {
module.exports = "/1.08ab7e2f.png";
},{}],"images/fighters/kano/left/backward-jump/2.png":[function(require,module,exports) {
module.exports = "/2.d577d0c5.png";
},{}],"images/fighters/kano/left/backward-jump/3.png":[function(require,module,exports) {
module.exports = "/3.a4390469.png";
},{}],"images/fighters/kano/left/backward-jump/4.png":[function(require,module,exports) {
module.exports = "/4.e6e85ee4.png";
},{}],"images/fighters/kano/left/backward-jump/5.png":[function(require,module,exports) {
module.exports = "/5.6efbba80.png";
},{}],"images/fighters/kano/left/backward-jump/6.png":[function(require,module,exports) {
module.exports = "/6.05ff62fe.png";
},{}],"images/fighters/kano/left/backward-jump/7.png":[function(require,module,exports) {
module.exports = "/7.2b0fbf53.png";
},{}],"images/fighters/kano/left/backward-jump-kick/0.png":[function(require,module,exports) {
module.exports = "/0.a13c236d.png";
},{}],"images/fighters/kano/left/backward-jump-kick/1.png":[function(require,module,exports) {
module.exports = "/1.4431ed82.png";
},{}],"images/fighters/kano/left/backward-jump-kick/2.png":[function(require,module,exports) {
module.exports = "/2.158e843f.png";
},{}],"images/fighters/kano/left/backward-jump-punch/0.png":[function(require,module,exports) {
module.exports = "/0.dccdd0b5.png";
},{}],"images/fighters/kano/left/backward-jump-punch/1.png":[function(require,module,exports) {
module.exports = "/1.1b20a168.png";
},{}],"images/fighters/kano/left/backward-jump-punch/2.png":[function(require,module,exports) {
module.exports = "/2.ee0a788b.png";
},{}],"images/fighters/kano/left/blocking/0.png":[function(require,module,exports) {
module.exports = "/0.b9d7f757.png";
},{}],"images/fighters/kano/left/blocking/1.png":[function(require,module,exports) {
module.exports = "/1.42b2a881.png";
},{}],"images/fighters/kano/left/blocking/2.png":[function(require,module,exports) {
module.exports = "/2.99ce2582.png";
},{}],"images/fighters/kano/left/endure/0.png":[function(require,module,exports) {
module.exports = "/0.075fc80e.png";
},{}],"images/fighters/kano/left/endure/1.png":[function(require,module,exports) {
module.exports = "/1.92fe8e84.png";
},{}],"images/fighters/kano/left/endure/2.png":[function(require,module,exports) {
module.exports = "/2.9caef3e5.png";
},{}],"images/fighters/kano/left/fall/0.png":[function(require,module,exports) {
module.exports = "/0.23babadb.png";
},{}],"images/fighters/kano/left/fall/1.png":[function(require,module,exports) {
module.exports = "/1.7fd6d3da.png";
},{}],"images/fighters/kano/left/fall/2.png":[function(require,module,exports) {
module.exports = "/2.954880a0.png";
},{}],"images/fighters/kano/left/fall/3.png":[function(require,module,exports) {
module.exports = "/3.0a16c6c5.png";
},{}],"images/fighters/kano/left/fall/4.png":[function(require,module,exports) {
module.exports = "/4.d27b5ad4.png";
},{}],"images/fighters/kano/left/fall/5.png":[function(require,module,exports) {
module.exports = "/5.133341c2.png";
},{}],"images/fighters/kano/left/fall/6.png":[function(require,module,exports) {
module.exports = "/6.c49e6977.png";
},{}],"images/fighters/kano/left/forward-jump/0.png":[function(require,module,exports) {
module.exports = "/0.fbd71b6c.png";
},{}],"images/fighters/kano/left/forward-jump/1.png":[function(require,module,exports) {
module.exports = "/1.bf052398.png";
},{}],"images/fighters/kano/left/forward-jump/2.png":[function(require,module,exports) {
module.exports = "/2.3dae55b1.png";
},{}],"images/fighters/kano/left/forward-jump/3.png":[function(require,module,exports) {
module.exports = "/3.ee0d7b2d.png";
},{}],"images/fighters/kano/left/forward-jump/4.png":[function(require,module,exports) {
module.exports = "/4.ef58b369.png";
},{}],"images/fighters/kano/left/forward-jump/5.png":[function(require,module,exports) {
module.exports = "/5.ebcef9e4.png";
},{}],"images/fighters/kano/left/forward-jump/6.png":[function(require,module,exports) {
module.exports = "/6.15db54a8.png";
},{}],"images/fighters/kano/left/forward-jump/7.png":[function(require,module,exports) {
module.exports = "/7.464a157a.png";
},{}],"images/fighters/kano/left/forward-jump-kick/0.png":[function(require,module,exports) {
module.exports = "/0.803d6d79.png";
},{}],"images/fighters/kano/left/forward-jump-kick/1.png":[function(require,module,exports) {
module.exports = "/1.7d23a259.png";
},{}],"images/fighters/kano/left/forward-jump-kick/2.png":[function(require,module,exports) {
module.exports = "/2.2a2e02ae.png";
},{}],"images/fighters/kano/left/forward-jump-punch/0.png":[function(require,module,exports) {
module.exports = "/0.00d9baf6.png";
},{}],"images/fighters/kano/left/forward-jump-punch/1.png":[function(require,module,exports) {
module.exports = "/1.7e1c1f97.png";
},{}],"images/fighters/kano/left/forward-jump-punch/2.png":[function(require,module,exports) {
module.exports = "/2.514ecad7.png";
},{}],"images/fighters/kano/left/high-kick/0.png":[function(require,module,exports) {
module.exports = "/0.2a298afc.png";
},{}],"images/fighters/kano/left/high-kick/1.png":[function(require,module,exports) {
module.exports = "/1.de448089.png";
},{}],"images/fighters/kano/left/high-kick/2.png":[function(require,module,exports) {
module.exports = "/2.9d3f2783.png";
},{}],"images/fighters/kano/left/high-kick/3.png":[function(require,module,exports) {
module.exports = "/3.24841d9f.png";
},{}],"images/fighters/kano/left/high-kick/4.png":[function(require,module,exports) {
module.exports = "/4.465e1044.png";
},{}],"images/fighters/kano/left/high-kick/5.png":[function(require,module,exports) {
module.exports = "/5.e6a7b52b.png";
},{}],"images/fighters/kano/left/high-kick/6.png":[function(require,module,exports) {
module.exports = "/6.0e836cc6.png";
},{}],"images/fighters/kano/left/high-punch/0.png":[function(require,module,exports) {
module.exports = "/0.8ffa902d.png";
},{}],"images/fighters/kano/left/high-punch/1.png":[function(require,module,exports) {
module.exports = "/1.3cf5edc9.png";
},{}],"images/fighters/kano/left/high-punch/2.png":[function(require,module,exports) {
module.exports = "/2.130fd283.png";
},{}],"images/fighters/kano/left/high-punch/3.png":[function(require,module,exports) {
module.exports = "/3.31046bc1.png";
},{}],"images/fighters/kano/left/high-punch/4.png":[function(require,module,exports) {
module.exports = "/4.8aed1db1.png";
},{}],"images/fighters/kano/left/high-punch/5.png":[function(require,module,exports) {
module.exports = "/5.33dd6a33.png";
},{}],"images/fighters/kano/left/high-punch/6.png":[function(require,module,exports) {
module.exports = "/6.218fc951.png";
},{}],"images/fighters/kano/left/high-punch/7.png":[function(require,module,exports) {
module.exports = "/7.b2481473.png";
},{}],"images/fighters/kano/left/jumping/0.png":[function(require,module,exports) {
module.exports = "/0.baeb5bb8.png";
},{}],"images/fighters/kano/left/jumping/1.png":[function(require,module,exports) {
module.exports = "/1.010a1495.png";
},{}],"images/fighters/kano/left/jumping/2.png":[function(require,module,exports) {
module.exports = "/2.c296ff71.png";
},{}],"images/fighters/kano/left/jumping/3.png":[function(require,module,exports) {
module.exports = "/3.bc7fd1e6.png";
},{}],"images/fighters/kano/left/jumping/4.png":[function(require,module,exports) {
module.exports = "/4.2cf86439.png";
},{}],"images/fighters/kano/left/jumping/5.png":[function(require,module,exports) {
module.exports = "/5.913dd3ac.png";
},{}],"images/fighters/kano/left/knock-down/0.png":[function(require,module,exports) {
module.exports = "/0.c193d7b1.png";
},{}],"images/fighters/kano/left/knock-down/1.png":[function(require,module,exports) {
module.exports = "/1.23614d94.png";
},{}],"images/fighters/kano/left/knock-down/2.png":[function(require,module,exports) {
module.exports = "/2.ad535403.png";
},{}],"images/fighters/kano/left/knock-down/3.png":[function(require,module,exports) {
module.exports = "/3.6b21bc78.png";
},{}],"images/fighters/kano/left/knock-down/4.png":[function(require,module,exports) {
module.exports = "/4.9cac7e97.png";
},{}],"images/fighters/kano/left/knock-down/5.png":[function(require,module,exports) {
module.exports = "/5.03d5cd05.png";
},{}],"images/fighters/kano/left/knock-down/6.png":[function(require,module,exports) {
module.exports = "/6.73715175.png";
},{}],"images/fighters/kano/left/knock-down/7.png":[function(require,module,exports) {
module.exports = "/7.0ef67ab1.png";
},{}],"images/fighters/kano/left/knock-down/8.png":[function(require,module,exports) {
module.exports = "/8.e60f4c40.png";
},{}],"images/fighters/kano/left/knock-down/9.png":[function(require,module,exports) {
module.exports = "/9.aebe6cda.png";
},{}],"images/fighters/kano/left/low-kick/0.png":[function(require,module,exports) {
module.exports = "/0.45388e96.png";
},{}],"images/fighters/kano/left/low-kick/1.png":[function(require,module,exports) {
module.exports = "/1.e6aee7c2.png";
},{}],"images/fighters/kano/left/low-kick/2.png":[function(require,module,exports) {
module.exports = "/2.6d74ec9e.png";
},{}],"images/fighters/kano/left/low-kick/3.png":[function(require,module,exports) {
module.exports = "/3.fb0b85f7.png";
},{}],"images/fighters/kano/left/low-kick/4.png":[function(require,module,exports) {
module.exports = "/4.da294d6b.png";
},{}],"images/fighters/kano/left/low-kick/5.png":[function(require,module,exports) {
module.exports = "/5.f4f12c37.png";
},{}],"images/fighters/kano/left/low-punch/0.png":[function(require,module,exports) {
module.exports = "/0.b58e0574.png";
},{}],"images/fighters/kano/left/low-punch/1.png":[function(require,module,exports) {
module.exports = "/1.7e60cdfa.png";
},{}],"images/fighters/kano/left/low-punch/2.png":[function(require,module,exports) {
module.exports = "/2.324f966a.png";
},{}],"images/fighters/kano/left/low-punch/3.png":[function(require,module,exports) {
module.exports = "/3.29ec2806.png";
},{}],"images/fighters/kano/left/low-punch/4.png":[function(require,module,exports) {
module.exports = "/4.861e10bd.png";
},{}],"images/fighters/kano/left/spin-kick/0.png":[function(require,module,exports) {
module.exports = "/0.94d15cfb.png";
},{}],"images/fighters/kano/left/spin-kick/1.png":[function(require,module,exports) {
module.exports = "/1.8460afc6.png";
},{}],"images/fighters/kano/left/spin-kick/2.png":[function(require,module,exports) {
module.exports = "/2.f8e5cf00.png";
},{}],"images/fighters/kano/left/spin-kick/3.png":[function(require,module,exports) {
module.exports = "/3.b83aed37.png";
},{}],"images/fighters/kano/left/spin-kick/4.png":[function(require,module,exports) {
module.exports = "/4.bafc76be.png";
},{}],"images/fighters/kano/left/spin-kick/5.png":[function(require,module,exports) {
module.exports = "/5.fbf92968.png";
},{}],"images/fighters/kano/left/spin-kick/6.png":[function(require,module,exports) {
module.exports = "/6.80b3da85.png";
},{}],"images/fighters/kano/left/spin-kick/7.png":[function(require,module,exports) {
module.exports = "/7.6f8022bc.png";
},{}],"images/fighters/kano/left/squat-endure/0.png":[function(require,module,exports) {
module.exports = "/0.a83fd18e.png";
},{}],"images/fighters/kano/left/squat-endure/1.png":[function(require,module,exports) {
module.exports = "/1.c1d728d5.png";
},{}],"images/fighters/kano/left/squat-endure/2.png":[function(require,module,exports) {
module.exports = "/2.df8409a5.png";
},{}],"images/fighters/kano/left/squat-high-kick/0.png":[function(require,module,exports) {
module.exports = "/0.c6c3ee5f.png";
},{}],"images/fighters/kano/left/squat-high-kick/1.png":[function(require,module,exports) {
module.exports = "/1.7976e86a.png";
},{}],"images/fighters/kano/left/squat-high-kick/2.png":[function(require,module,exports) {
module.exports = "/2.965ae5b7.png";
},{}],"images/fighters/kano/left/squat-high-kick/3.png":[function(require,module,exports) {
module.exports = "/3.25d4c3f1.png";
},{}],"images/fighters/kano/left/squat-low-kick/0.png":[function(require,module,exports) {
module.exports = "/0.99efd236.png";
},{}],"images/fighters/kano/left/squat-low-kick/1.png":[function(require,module,exports) {
module.exports = "/1.d3aaaf61.png";
},{}],"images/fighters/kano/left/squat-low-kick/2.png":[function(require,module,exports) {
module.exports = "/2.443939fe.png";
},{}],"images/fighters/kano/left/squat-low-punch/0.png":[function(require,module,exports) {
module.exports = "/0.c259afd2.png";
},{}],"images/fighters/kano/left/squat-low-punch/1.png":[function(require,module,exports) {
module.exports = "/1.93b36072.png";
},{}],"images/fighters/kano/left/squat-low-punch/2.png":[function(require,module,exports) {
module.exports = "/2.132168bd.png";
},{}],"images/fighters/kano/left/squating/0.png":[function(require,module,exports) {
module.exports = "/0.b0ea1f68.png";
},{}],"images/fighters/kano/left/squating/1.png":[function(require,module,exports) {
module.exports = "/1.f2859470.png";
},{}],"images/fighters/kano/left/squating/2.png":[function(require,module,exports) {
module.exports = "/2.01128368.png";
},{}],"images/fighters/kano/left/stand/0.png":[function(require,module,exports) {
module.exports = "/0.0d97f9cc.png";
},{}],"images/fighters/kano/left/stand/1.png":[function(require,module,exports) {
module.exports = "/1.0ba2b5b7.png";
},{}],"images/fighters/kano/left/stand/2.png":[function(require,module,exports) {
module.exports = "/2.5e6e3620.png";
},{}],"images/fighters/kano/left/stand/3.png":[function(require,module,exports) {
module.exports = "/3.7d38a128.png";
},{}],"images/fighters/kano/left/stand/4.png":[function(require,module,exports) {
module.exports = "/4.a8e39302.png";
},{}],"images/fighters/kano/left/stand/5.png":[function(require,module,exports) {
module.exports = "/5.7264b944.png";
},{}],"images/fighters/kano/left/stand/6.png":[function(require,module,exports) {
module.exports = "/6.89b922f3.png";
},{}],"images/fighters/kano/left/stand/7.png":[function(require,module,exports) {
module.exports = "/7.dfeec085.png";
},{}],"images/fighters/kano/left/stand/8.png":[function(require,module,exports) {
module.exports = "/8.4adc19db.png";
},{}],"images/fighters/kano/left/stand-up/0.png":[function(require,module,exports) {
module.exports = "/0.5436b932.png";
},{}],"images/fighters/kano/left/stand-up/1.png":[function(require,module,exports) {
module.exports = "/1.43e62ccf.png";
},{}],"images/fighters/kano/left/stand-up/2.png":[function(require,module,exports) {
module.exports = "/2.8dbfaef6.png";
},{}],"images/fighters/kano/left/uppercut/0.png":[function(require,module,exports) {
module.exports = "/0.5aedad75.png";
},{}],"images/fighters/kano/left/uppercut/1.png":[function(require,module,exports) {
module.exports = "/1.44635e46.png";
},{}],"images/fighters/kano/left/uppercut/2.png":[function(require,module,exports) {
module.exports = "/2.48abb3eb.png";
},{}],"images/fighters/kano/left/uppercut/3.png":[function(require,module,exports) {
module.exports = "/3.6ec86cbd.png";
},{}],"images/fighters/kano/left/uppercut/4.png":[function(require,module,exports) {
module.exports = "/4.74dd7a76.png";
},{}],"images/fighters/kano/left/uppercut/5.png":[function(require,module,exports) {
module.exports = "/5.8a4e9bf8.png";
},{}],"images/fighters/kano/left/walking/0.png":[function(require,module,exports) {
module.exports = "/0.339c9127.png";
},{}],"images/fighters/kano/left/walking/1.png":[function(require,module,exports) {
module.exports = "/1.40042ac0.png";
},{}],"images/fighters/kano/left/walking/2.png":[function(require,module,exports) {
module.exports = "/2.1f303646.png";
},{}],"images/fighters/kano/left/walking/3.png":[function(require,module,exports) {
module.exports = "/3.94bafdac.png";
},{}],"images/fighters/kano/left/walking/4.png":[function(require,module,exports) {
module.exports = "/4.84e7d871.png";
},{}],"images/fighters/kano/left/walking/5.png":[function(require,module,exports) {
module.exports = "/5.525b28b5.png";
},{}],"images/fighters/kano/left/walking/6.png":[function(require,module,exports) {
module.exports = "/6.7c9145aa.png";
},{}],"images/fighters/kano/left/walking/7.png":[function(require,module,exports) {
module.exports = "/7.adfc4e4b.png";
},{}],"images/fighters/kano/left/walking/8.png":[function(require,module,exports) {
module.exports = "/8.c57a430a.png";
},{}],"images/fighters/kano/left/walking-backward/0.png":[function(require,module,exports) {
module.exports = "/0.c31d742e.png";
},{}],"images/fighters/kano/left/walking-backward/1.png":[function(require,module,exports) {
module.exports = "/1.7dd7e9b7.png";
},{}],"images/fighters/kano/left/walking-backward/2.png":[function(require,module,exports) {
module.exports = "/2.9242d42e.png";
},{}],"images/fighters/kano/left/walking-backward/3.png":[function(require,module,exports) {
module.exports = "/3.5061cb93.png";
},{}],"images/fighters/kano/left/walking-backward/4.png":[function(require,module,exports) {
module.exports = "/4.e5d306b3.png";
},{}],"images/fighters/kano/left/walking-backward/5.png":[function(require,module,exports) {
module.exports = "/5.465ccbe1.png";
},{}],"images/fighters/kano/left/walking-backward/6.png":[function(require,module,exports) {
module.exports = "/6.87de5bf5.png";
},{}],"images/fighters/kano/left/walking-backward/7.png":[function(require,module,exports) {
module.exports = "/7.b5a517e7.png";
},{}],"images/fighters/kano/left/walking-backward/8.png":[function(require,module,exports) {
module.exports = "/8.c2722877.png";
},{}],"images/fighters/kano/left/win/0.png":[function(require,module,exports) {
module.exports = "/0.d56f4805.png";
},{}],"images/fighters/kano/left/win/1.png":[function(require,module,exports) {
module.exports = "/1.9a01004a.png";
},{}],"images/fighters/kano/left/win/2.png":[function(require,module,exports) {
module.exports = "/2.67698223.png";
},{}],"images/fighters/kano/left/win/3.png":[function(require,module,exports) {
module.exports = "/3.25d19b75.png";
},{}],"images/fighters/kano/left/win/4.png":[function(require,module,exports) {
module.exports = "/4.b28902b9.png";
},{}],"images/fighters/kano/left/win/5.png":[function(require,module,exports) {
module.exports = "/5.2b15b48e.png";
},{}],"images/fighters/kano/left/win/6.png":[function(require,module,exports) {
module.exports = "/6.f14a8e5e.png";
},{}],"images/fighters/kano/left/win/7.png":[function(require,module,exports) {
module.exports = "/7.084426ea.png";
},{}],"images/fighters/kano/left/win/8.png":[function(require,module,exports) {
module.exports = "/8.843c486e.png";
},{}],"images/fighters/kano/left/win/9.png":[function(require,module,exports) {
module.exports = "/9.918c988d.png";
},{}],"images/fighters/kano/right/backward-jump/0.png":[function(require,module,exports) {
module.exports = "/0.9c218b5f.png";
},{}],"images/fighters/kano/right/backward-jump/1.png":[function(require,module,exports) {
module.exports = "/1.39fc7243.png";
},{}],"images/fighters/kano/right/backward-jump/2.png":[function(require,module,exports) {
module.exports = "/2.5d401417.png";
},{}],"images/fighters/kano/right/backward-jump/3.png":[function(require,module,exports) {
module.exports = "/3.49f8a2d7.png";
},{}],"images/fighters/kano/right/backward-jump/4.png":[function(require,module,exports) {
module.exports = "/4.3f35352a.png";
},{}],"images/fighters/kano/right/backward-jump/5.png":[function(require,module,exports) {
module.exports = "/5.e1e42ca8.png";
},{}],"images/fighters/kano/right/backward-jump/6.png":[function(require,module,exports) {
module.exports = "/6.6797a467.png";
},{}],"images/fighters/kano/right/backward-jump/7.png":[function(require,module,exports) {
module.exports = "/7.735b2ad4.png";
},{}],"images/fighters/kano/right/attractive-stand-up/0.png":[function(require,module,exports) {
module.exports = "/0.6da5a204.png";
},{}],"images/fighters/kano/right/attractive-stand-up/1.png":[function(require,module,exports) {
module.exports = "/1.36cf2391.png";
},{}],"images/fighters/kano/right/attractive-stand-up/2.png":[function(require,module,exports) {
module.exports = "/2.a8d71617.png";
},{}],"images/fighters/kano/right/attractive-stand-up/3.png":[function(require,module,exports) {
module.exports = "/3.06998b62.png";
},{}],"images/fighters/kano/right/backward-jump-kick/0.png":[function(require,module,exports) {
module.exports = "/0.8be7c1a1.png";
},{}],"images/fighters/kano/right/backward-jump-kick/1.png":[function(require,module,exports) {
module.exports = "/1.da432d00.png";
},{}],"images/fighters/kano/right/backward-jump-kick/2.png":[function(require,module,exports) {
module.exports = "/2.3bc0ae33.png";
},{}],"images/fighters/kano/right/backward-jump-punch/0.png":[function(require,module,exports) {
module.exports = "/0.0d48c909.png";
},{}],"images/fighters/kano/right/backward-jump-punch/1.png":[function(require,module,exports) {
module.exports = "/1.b4eef847.png";
},{}],"images/fighters/kano/right/backward-jump-punch/2.png":[function(require,module,exports) {
module.exports = "/2.675886ba.png";
},{}],"images/fighters/kano/right/blocking/0.png":[function(require,module,exports) {
module.exports = "/0.97178b50.png";
},{}],"images/fighters/kano/right/blocking/1.png":[function(require,module,exports) {
module.exports = "/1.5c4dfcca.png";
},{}],"images/fighters/kano/right/blocking/2.png":[function(require,module,exports) {
module.exports = "/2.93156a61.png";
},{}],"images/fighters/kano/right/endure/0.png":[function(require,module,exports) {
module.exports = "/0.74af8e34.png";
},{}],"images/fighters/kano/right/endure/1.png":[function(require,module,exports) {
module.exports = "/1.92f48e20.png";
},{}],"images/fighters/kano/right/endure/2.png":[function(require,module,exports) {
module.exports = "/2.c4deb8d1.png";
},{}],"images/fighters/kano/right/fall/0.png":[function(require,module,exports) {
module.exports = "/0.d83b2ade.png";
},{}],"images/fighters/kano/right/fall/1.png":[function(require,module,exports) {
module.exports = "/1.9a68409b.png";
},{}],"images/fighters/kano/right/fall/2.png":[function(require,module,exports) {
module.exports = "/2.85ea1a41.png";
},{}],"images/fighters/kano/right/fall/3.png":[function(require,module,exports) {
module.exports = "/3.e24a5545.png";
},{}],"images/fighters/kano/right/fall/4.png":[function(require,module,exports) {
module.exports = "/4.620e62df.png";
},{}],"images/fighters/kano/right/fall/5.png":[function(require,module,exports) {
module.exports = "/5.85f7bbba.png";
},{}],"images/fighters/kano/right/fall/6.png":[function(require,module,exports) {
module.exports = "/6.edd3e567.png";
},{}],"images/fighters/kano/right/forward-jump/0.png":[function(require,module,exports) {
module.exports = "/0.acb776e8.png";
},{}],"images/fighters/kano/right/forward-jump/1.png":[function(require,module,exports) {
module.exports = "/1.8e64fd9f.png";
},{}],"images/fighters/kano/right/forward-jump/2.png":[function(require,module,exports) {
module.exports = "/2.0b92746a.png";
},{}],"images/fighters/kano/right/forward-jump/3.png":[function(require,module,exports) {
module.exports = "/3.55dcf034.png";
},{}],"images/fighters/kano/right/forward-jump/4.png":[function(require,module,exports) {
module.exports = "/4.3ff0bf92.png";
},{}],"images/fighters/kano/right/forward-jump/5.png":[function(require,module,exports) {
module.exports = "/5.40926a27.png";
},{}],"images/fighters/kano/right/forward-jump/6.png":[function(require,module,exports) {
module.exports = "/6.c4bb392c.png";
},{}],"images/fighters/kano/right/forward-jump/7.png":[function(require,module,exports) {
module.exports = "/7.2ff662d3.png";
},{}],"images/fighters/kano/right/forward-jump-kick/0.png":[function(require,module,exports) {
module.exports = "/0.af499e60.png";
},{}],"images/fighters/kano/right/forward-jump-kick/1.png":[function(require,module,exports) {
module.exports = "/1.2bd5f805.png";
},{}],"images/fighters/kano/right/forward-jump-kick/2.png":[function(require,module,exports) {
module.exports = "/2.ccb0dde3.png";
},{}],"images/fighters/kano/right/forward-jump-punch/0.png":[function(require,module,exports) {
module.exports = "/0.de9f3a46.png";
},{}],"images/fighters/kano/right/forward-jump-punch/1.png":[function(require,module,exports) {
module.exports = "/1.01fe7916.png";
},{}],"images/fighters/kano/right/forward-jump-punch/2.png":[function(require,module,exports) {
module.exports = "/2.a63fdbdb.png";
},{}],"images/fighters/kano/right/high-kick/0.png":[function(require,module,exports) {
module.exports = "/0.2461a232.png";
},{}],"images/fighters/kano/right/high-kick/1.png":[function(require,module,exports) {
module.exports = "/1.b7d42e2a.png";
},{}],"images/fighters/kano/right/high-kick/2.png":[function(require,module,exports) {
module.exports = "/2.9cdb5c0a.png";
},{}],"images/fighters/kano/right/high-kick/3.png":[function(require,module,exports) {
module.exports = "/3.9ab19174.png";
},{}],"images/fighters/kano/right/high-kick/4.png":[function(require,module,exports) {
module.exports = "/4.a446f474.png";
},{}],"images/fighters/kano/right/high-kick/5.png":[function(require,module,exports) {
module.exports = "/5.bcc1d5eb.png";
},{}],"images/fighters/kano/right/high-kick/6.png":[function(require,module,exports) {
module.exports = "/6.1a3dd4bf.png";
},{}],"images/fighters/kano/right/high-punch/0.png":[function(require,module,exports) {
module.exports = "/0.34d69c35.png";
},{}],"images/fighters/kano/right/high-punch/1.png":[function(require,module,exports) {
module.exports = "/1.a7d2ba48.png";
},{}],"images/fighters/kano/right/high-punch/2.png":[function(require,module,exports) {
module.exports = "/2.9ea55b17.png";
},{}],"images/fighters/kano/right/high-punch/3.png":[function(require,module,exports) {
module.exports = "/3.4c255e7e.png";
},{}],"images/fighters/kano/right/high-punch/4.png":[function(require,module,exports) {
module.exports = "/4.5ec2b6ec.png";
},{}],"images/fighters/kano/right/high-punch/5.png":[function(require,module,exports) {
module.exports = "/5.5b41d5d0.png";
},{}],"images/fighters/kano/right/high-punch/6.png":[function(require,module,exports) {
module.exports = "/6.1a37c843.png";
},{}],"images/fighters/kano/right/high-punch/7.png":[function(require,module,exports) {
module.exports = "/7.3f43d40a.png";
},{}],"images/fighters/kano/right/jumping/0.png":[function(require,module,exports) {
module.exports = "/0.b095bd3d.png";
},{}],"images/fighters/kano/right/jumping/1.png":[function(require,module,exports) {
module.exports = "/1.be254716.png";
},{}],"images/fighters/kano/right/jumping/2.png":[function(require,module,exports) {
module.exports = "/2.fe723b0d.png";
},{}],"images/fighters/kano/right/jumping/3.png":[function(require,module,exports) {
module.exports = "/3.3177ad57.png";
},{}],"images/fighters/kano/right/jumping/4.png":[function(require,module,exports) {
module.exports = "/4.d0769d73.png";
},{}],"images/fighters/kano/right/jumping/5.png":[function(require,module,exports) {
module.exports = "/5.15605408.png";
},{}],"images/fighters/kano/right/knock-down/0.png":[function(require,module,exports) {
module.exports = "/0.196517f6.png";
},{}],"images/fighters/kano/right/knock-down/1.png":[function(require,module,exports) {
module.exports = "/1.089544bc.png";
},{}],"images/fighters/kano/right/knock-down/2.png":[function(require,module,exports) {
module.exports = "/2.955ed100.png";
},{}],"images/fighters/kano/right/knock-down/3.png":[function(require,module,exports) {
module.exports = "/3.cf6fb1d4.png";
},{}],"images/fighters/kano/right/knock-down/4.png":[function(require,module,exports) {
module.exports = "/4.fc1f3ed5.png";
},{}],"images/fighters/kano/right/knock-down/5.png":[function(require,module,exports) {
module.exports = "/5.199b732b.png";
},{}],"images/fighters/kano/right/knock-down/6.png":[function(require,module,exports) {
module.exports = "/6.4a971cdb.png";
},{}],"images/fighters/kano/right/knock-down/7.png":[function(require,module,exports) {
module.exports = "/7.152f8945.png";
},{}],"images/fighters/kano/right/knock-down/8.png":[function(require,module,exports) {
module.exports = "/8.e28aca4e.png";
},{}],"images/fighters/kano/right/knock-down/9.png":[function(require,module,exports) {
module.exports = "/9.0d92fa8a.png";
},{}],"images/fighters/kano/right/low-kick/0.png":[function(require,module,exports) {
module.exports = "/0.fab86763.png";
},{}],"images/fighters/kano/right/low-kick/1.png":[function(require,module,exports) {
module.exports = "/1.8eff176e.png";
},{}],"images/fighters/kano/right/low-kick/2.png":[function(require,module,exports) {
module.exports = "/2.0ff241f1.png";
},{}],"images/fighters/kano/right/low-kick/3.png":[function(require,module,exports) {
module.exports = "/3.d1d299bf.png";
},{}],"images/fighters/kano/right/low-kick/4.png":[function(require,module,exports) {
module.exports = "/4.a17d872f.png";
},{}],"images/fighters/kano/right/low-kick/5.png":[function(require,module,exports) {
module.exports = "/5.53a7f95e.png";
},{}],"images/fighters/kano/right/low-punch/0.png":[function(require,module,exports) {
module.exports = "/0.ff908058.png";
},{}],"images/fighters/kano/right/low-punch/1.png":[function(require,module,exports) {
module.exports = "/1.5e374a36.png";
},{}],"images/fighters/kano/right/low-punch/2.png":[function(require,module,exports) {
module.exports = "/2.b9532059.png";
},{}],"images/fighters/kano/right/low-punch/3.png":[function(require,module,exports) {
module.exports = "/3.73b86372.png";
},{}],"images/fighters/kano/right/low-punch/4.png":[function(require,module,exports) {
module.exports = "/4.57031a43.png";
},{}],"images/fighters/kano/right/spin-kick/0.png":[function(require,module,exports) {
module.exports = "/0.431ff1a8.png";
},{}],"images/fighters/kano/right/spin-kick/1.png":[function(require,module,exports) {
module.exports = "/1.d94b52bc.png";
},{}],"images/fighters/kano/right/spin-kick/2.png":[function(require,module,exports) {
module.exports = "/2.3f504f8b.png";
},{}],"images/fighters/kano/right/spin-kick/3.png":[function(require,module,exports) {
module.exports = "/3.dce1887a.png";
},{}],"images/fighters/kano/right/spin-kick/4.png":[function(require,module,exports) {
module.exports = "/4.87ffc4a5.png";
},{}],"images/fighters/kano/right/spin-kick/5.png":[function(require,module,exports) {
module.exports = "/5.29ae4a9b.png";
},{}],"images/fighters/kano/right/spin-kick/6.png":[function(require,module,exports) {
module.exports = "/6.51efc9f2.png";
},{}],"images/fighters/kano/right/spin-kick/7.png":[function(require,module,exports) {
module.exports = "/7.3f2f9a25.png";
},{}],"images/fighters/kano/right/squat-endure/0.png":[function(require,module,exports) {
module.exports = "/0.aee9c1dd.png";
},{}],"images/fighters/kano/right/squat-endure/1.png":[function(require,module,exports) {
module.exports = "/1.8ad81b12.png";
},{}],"images/fighters/kano/right/squat-endure/2.png":[function(require,module,exports) {
module.exports = "/2.3df601d6.png";
},{}],"images/fighters/kano/right/squat-high-kick/0.png":[function(require,module,exports) {
module.exports = "/0.0ee2945a.png";
},{}],"images/fighters/kano/right/squat-high-kick/1.png":[function(require,module,exports) {
module.exports = "/1.002e9deb.png";
},{}],"images/fighters/kano/right/squat-high-kick/2.png":[function(require,module,exports) {
module.exports = "/2.0d38f1c2.png";
},{}],"images/fighters/kano/right/squat-high-kick/3.png":[function(require,module,exports) {
module.exports = "/3.6b7cebb6.png";
},{}],"images/fighters/kano/right/squat-low-kick/0.png":[function(require,module,exports) {
module.exports = "/0.3032896b.png";
},{}],"images/fighters/kano/right/squat-low-kick/1.png":[function(require,module,exports) {
module.exports = "/1.d9baa215.png";
},{}],"images/fighters/kano/right/squat-low-kick/2.png":[function(require,module,exports) {
module.exports = "/2.e06ca5ef.png";
},{}],"images/fighters/kano/right/squat-low-punch/0.png":[function(require,module,exports) {
module.exports = "/0.35a792bf.png";
},{}],"images/fighters/kano/right/squat-low-punch/1.png":[function(require,module,exports) {
module.exports = "/1.6fe5ed6c.png";
},{}],"images/fighters/kano/right/squat-low-punch/2.png":[function(require,module,exports) {
module.exports = "/2.c9fe90f3.png";
},{}],"images/fighters/kano/right/squating/0.png":[function(require,module,exports) {
module.exports = "/0.77231f84.png";
},{}],"images/fighters/kano/right/squating/1.png":[function(require,module,exports) {
module.exports = "/1.101c39cb.png";
},{}],"images/fighters/kano/right/squating/2.png":[function(require,module,exports) {
module.exports = "/2.439a2450.png";
},{}],"images/fighters/kano/right/stand/0.png":[function(require,module,exports) {
module.exports = "/0.f6d2d63d.png";
},{}],"images/fighters/kano/right/stand/1.png":[function(require,module,exports) {
module.exports = "/1.3545011f.png";
},{}],"images/fighters/kano/right/stand/2.png":[function(require,module,exports) {
module.exports = "/2.1c91b165.png";
},{}],"images/fighters/kano/right/stand/3.png":[function(require,module,exports) {
module.exports = "/3.29965dd6.png";
},{}],"images/fighters/kano/right/stand/4.png":[function(require,module,exports) {
module.exports = "/4.6b9e2833.png";
},{}],"images/fighters/kano/right/stand/5.png":[function(require,module,exports) {
module.exports = "/5.188ca6f9.png";
},{}],"images/fighters/kano/right/stand/6.png":[function(require,module,exports) {
module.exports = "/6.3ec90822.png";
},{}],"images/fighters/kano/right/stand/7.png":[function(require,module,exports) {
module.exports = "/7.ea11f18d.png";
},{}],"images/fighters/kano/right/stand/8.png":[function(require,module,exports) {
module.exports = "/8.ea3e9518.png";
},{}],"images/fighters/kano/right/uppercut/0.png":[function(require,module,exports) {
module.exports = "/0.bd79765e.png";
},{}],"images/fighters/kano/right/uppercut/1.png":[function(require,module,exports) {
module.exports = "/1.64a036c5.png";
},{}],"images/fighters/kano/right/uppercut/2.png":[function(require,module,exports) {
module.exports = "/2.ac4060dc.png";
},{}],"images/fighters/kano/right/uppercut/3.png":[function(require,module,exports) {
module.exports = "/3.e5205cfb.png";
},{}],"images/fighters/kano/right/uppercut/4.png":[function(require,module,exports) {
module.exports = "/4.b7f9db25.png";
},{}],"images/fighters/kano/right/uppercut/5.png":[function(require,module,exports) {
module.exports = "/5.65254163.png";
},{}],"images/fighters/kano/right/stand-up/0.png":[function(require,module,exports) {
module.exports = "/0.405053da.png";
},{}],"images/fighters/kano/right/stand-up/1.png":[function(require,module,exports) {
module.exports = "/1.21dad61b.png";
},{}],"images/fighters/kano/right/stand-up/2.png":[function(require,module,exports) {
module.exports = "/2.f96162a1.png";
},{}],"images/fighters/kano/right/walking/0.png":[function(require,module,exports) {
module.exports = "/0.dcb535ee.png";
},{}],"images/fighters/kano/right/walking/1.png":[function(require,module,exports) {
module.exports = "/1.dd76dc00.png";
},{}],"images/fighters/kano/right/walking/2.png":[function(require,module,exports) {
module.exports = "/2.8180fe5a.png";
},{}],"images/fighters/kano/right/walking/3.png":[function(require,module,exports) {
module.exports = "/3.b13c6780.png";
},{}],"images/fighters/kano/right/walking/4.png":[function(require,module,exports) {
module.exports = "/4.83c3b895.png";
},{}],"images/fighters/kano/right/walking/5.png":[function(require,module,exports) {
module.exports = "/5.7a9530b5.png";
},{}],"images/fighters/kano/right/walking/6.png":[function(require,module,exports) {
module.exports = "/6.0c08226b.png";
},{}],"images/fighters/kano/right/walking/7.png":[function(require,module,exports) {
module.exports = "/7.adfa10ac.png";
},{}],"images/fighters/kano/right/walking/8.png":[function(require,module,exports) {
module.exports = "/8.0796444d.png";
},{}],"images/fighters/kano/right/walking-backward/0.png":[function(require,module,exports) {
module.exports = "/0.6101f608.png";
},{}],"images/fighters/kano/right/walking-backward/1.png":[function(require,module,exports) {
module.exports = "/1.0108f056.png";
},{}],"images/fighters/kano/right/walking-backward/2.png":[function(require,module,exports) {
module.exports = "/2.f0b3e070.png";
},{}],"images/fighters/kano/right/walking-backward/3.png":[function(require,module,exports) {
module.exports = "/3.6f3459d1.png";
},{}],"images/fighters/kano/right/walking-backward/4.png":[function(require,module,exports) {
module.exports = "/4.b795ff8e.png";
},{}],"images/fighters/kano/right/walking-backward/5.png":[function(require,module,exports) {
module.exports = "/5.19671624.png";
},{}],"images/fighters/kano/right/walking-backward/6.png":[function(require,module,exports) {
module.exports = "/6.0376e822.png";
},{}],"images/fighters/kano/right/walking-backward/7.png":[function(require,module,exports) {
module.exports = "/7.7535f7f0.png";
},{}],"images/fighters/kano/right/walking-backward/8.png":[function(require,module,exports) {
module.exports = "/8.eee5c0dd.png";
},{}],"images/fighters/kano/right/win/0.png":[function(require,module,exports) {
module.exports = "/0.692f4f2a.png";
},{}],"images/fighters/kano/right/win/1.png":[function(require,module,exports) {
module.exports = "/1.2943720f.png";
},{}],"images/fighters/kano/right/win/2.png":[function(require,module,exports) {
module.exports = "/2.57a55c9d.png";
},{}],"images/fighters/kano/right/win/3.png":[function(require,module,exports) {
module.exports = "/3.28090e99.png";
},{}],"images/fighters/kano/right/win/4.png":[function(require,module,exports) {
module.exports = "/4.dd6e1bd7.png";
},{}],"images/fighters/kano/right/win/5.png":[function(require,module,exports) {
module.exports = "/5.fcfac931.png";
},{}],"images/fighters/kano/right/win/6.png":[function(require,module,exports) {
module.exports = "/6.b7441dd3.png";
},{}],"images/fighters/kano/right/win/7.png":[function(require,module,exports) {
module.exports = "/7.17adcd7d.png";
},{}],"images/fighters/kano/right/win/8.png":[function(require,module,exports) {
module.exports = "/8.07b79ed3.png";
},{}],"images/fighters/kano/right/win/9.png":[function(require,module,exports) {
module.exports = "/9.b8a97a17.png";
},{}],"images/fighters/subzero/left/attractive-stand-up/0.png":[function(require,module,exports) {
module.exports = "/0.59279b10.png";
},{}],"images/fighters/subzero/left/attractive-stand-up/1.png":[function(require,module,exports) {
module.exports = "/1.d699f009.png";
},{}],"images/fighters/subzero/left/attractive-stand-up/2.png":[function(require,module,exports) {
module.exports = "/2.c2f43c0f.png";
},{}],"images/fighters/subzero/left/attractive-stand-up/3.png":[function(require,module,exports) {
module.exports = "/3.93b11760.png";
},{}],"images/fighters/subzero/left/attractive-stand-up/4.png":[function(require,module,exports) {
module.exports = "/4.229cf734.png";
},{}],"images/fighters/subzero/left/backward-jump/0.png":[function(require,module,exports) {
module.exports = "/0.04c24568.png";
},{}],"images/fighters/subzero/left/backward-jump/1.png":[function(require,module,exports) {
module.exports = "/1.6357e82f.png";
},{}],"images/fighters/subzero/left/backward-jump/2.png":[function(require,module,exports) {
module.exports = "/2.56ae5232.png";
},{}],"images/fighters/subzero/left/backward-jump/3.png":[function(require,module,exports) {
module.exports = "/3.356f6d9e.png";
},{}],"images/fighters/subzero/left/backward-jump/4.png":[function(require,module,exports) {
module.exports = "/4.802a4547.png";
},{}],"images/fighters/subzero/left/backward-jump/5.png":[function(require,module,exports) {
module.exports = "/5.899b0a45.png";
},{}],"images/fighters/subzero/left/backward-jump/6.png":[function(require,module,exports) {
module.exports = "/6.b1b002e4.png";
},{}],"images/fighters/subzero/left/backward-jump/7.png":[function(require,module,exports) {
module.exports = "/7.50a91415.png";
},{}],"images/fighters/subzero/left/backward-jump-kick/0.png":[function(require,module,exports) {
module.exports = "/0.d62bc4f5.png";
},{}],"images/fighters/subzero/left/backward-jump-kick/1.png":[function(require,module,exports) {
module.exports = "/1.dcffb269.png";
},{}],"images/fighters/subzero/left/backward-jump-kick/2.png":[function(require,module,exports) {
module.exports = "/2.0c2c73ba.png";
},{}],"images/fighters/subzero/left/backward-jump-punch/0.png":[function(require,module,exports) {
module.exports = "/0.92f44523.png";
},{}],"images/fighters/subzero/left/backward-jump-punch/1.png":[function(require,module,exports) {
module.exports = "/1.b422447e.png";
},{}],"images/fighters/subzero/left/backward-jump-punch/2.png":[function(require,module,exports) {
module.exports = "/2.7a2bc2a6.png";
},{}],"images/fighters/subzero/left/blocking/0.png":[function(require,module,exports) {
module.exports = "/0.afe2156e.png";
},{}],"images/fighters/subzero/left/blocking/1.png":[function(require,module,exports) {
module.exports = "/1.830d2153.png";
},{}],"images/fighters/subzero/left/blocking/2.png":[function(require,module,exports) {
module.exports = "/2.be6a9f0a.png";
},{}],"images/fighters/subzero/left/endure/0.png":[function(require,module,exports) {
module.exports = "/0.fea86221.png";
},{}],"images/fighters/subzero/left/endure/1.png":[function(require,module,exports) {
module.exports = "/1.e97af1ce.png";
},{}],"images/fighters/subzero/left/endure/2.png":[function(require,module,exports) {
module.exports = "/2.35017146.png";
},{}],"images/fighters/subzero/left/fall/0.png":[function(require,module,exports) {
module.exports = "/0.85a59273.png";
},{}],"images/fighters/subzero/left/fall/1.png":[function(require,module,exports) {
module.exports = "/1.b6291a00.png";
},{}],"images/fighters/subzero/left/fall/2.png":[function(require,module,exports) {
module.exports = "/2.61293967.png";
},{}],"images/fighters/subzero/left/fall/3.png":[function(require,module,exports) {
module.exports = "/3.b99b5616.png";
},{}],"images/fighters/subzero/left/fall/4.png":[function(require,module,exports) {
module.exports = "/4.5f6b6331.png";
},{}],"images/fighters/subzero/left/fall/5.png":[function(require,module,exports) {
module.exports = "/5.e8d2809c.png";
},{}],"images/fighters/subzero/left/fall/6.png":[function(require,module,exports) {
module.exports = "/6.55881f4a.png";
},{}],"images/fighters/subzero/left/forward-jump/0.png":[function(require,module,exports) {
module.exports = "/0.a24db83e.png";
},{}],"images/fighters/subzero/left/forward-jump/1.png":[function(require,module,exports) {
module.exports = "/1.9f00aa20.png";
},{}],"images/fighters/subzero/left/forward-jump/2.png":[function(require,module,exports) {
module.exports = "/2.d07b649e.png";
},{}],"images/fighters/subzero/left/forward-jump/3.png":[function(require,module,exports) {
module.exports = "/3.73fdea92.png";
},{}],"images/fighters/subzero/left/forward-jump/4.png":[function(require,module,exports) {
module.exports = "/4.44bf5148.png";
},{}],"images/fighters/subzero/left/forward-jump/5.png":[function(require,module,exports) {
module.exports = "/5.9246e379.png";
},{}],"images/fighters/subzero/left/forward-jump/6.png":[function(require,module,exports) {
module.exports = "/6.a1f9e736.png";
},{}],"images/fighters/subzero/left/forward-jump/7.png":[function(require,module,exports) {
module.exports = "/7.bffcdaa6.png";
},{}],"images/fighters/subzero/left/forward-jump-kick/0.png":[function(require,module,exports) {
module.exports = "/0.4a66c023.png";
},{}],"images/fighters/subzero/left/forward-jump-kick/1.png":[function(require,module,exports) {
module.exports = "/1.0bafefe1.png";
},{}],"images/fighters/subzero/left/forward-jump-kick/2.png":[function(require,module,exports) {
module.exports = "/2.01c615df.png";
},{}],"images/fighters/subzero/left/forward-jump-punch/0.png":[function(require,module,exports) {
module.exports = "/0.72b93db9.png";
},{}],"images/fighters/subzero/left/forward-jump-punch/1.png":[function(require,module,exports) {
module.exports = "/1.b67c99b1.png";
},{}],"images/fighters/subzero/left/forward-jump-punch/2.png":[function(require,module,exports) {
module.exports = "/2.6a85a02b.png";
},{}],"images/fighters/subzero/left/high-kick/0.png":[function(require,module,exports) {
module.exports = "/0.5282e5cc.png";
},{}],"images/fighters/subzero/left/high-kick/1.png":[function(require,module,exports) {
module.exports = "/1.ab71ec9f.png";
},{}],"images/fighters/subzero/left/high-kick/2.png":[function(require,module,exports) {
module.exports = "/2.ab8a45c7.png";
},{}],"images/fighters/subzero/left/high-kick/3.png":[function(require,module,exports) {
module.exports = "/3.4164d57e.png";
},{}],"images/fighters/subzero/left/high-kick/4.png":[function(require,module,exports) {
module.exports = "/4.afd5beab.png";
},{}],"images/fighters/subzero/left/high-kick/5.png":[function(require,module,exports) {
module.exports = "/5.0d784904.png";
},{}],"images/fighters/subzero/left/high-kick/6.png":[function(require,module,exports) {
module.exports = "/6.4d64c507.png";
},{}],"images/fighters/subzero/left/high-punch/0.png":[function(require,module,exports) {
module.exports = "/0.0ab5e7f1.png";
},{}],"images/fighters/subzero/left/high-punch/1.png":[function(require,module,exports) {
module.exports = "/1.daf747f2.png";
},{}],"images/fighters/subzero/left/high-punch/2.png":[function(require,module,exports) {
module.exports = "/2.6c010b8c.png";
},{}],"images/fighters/subzero/left/high-punch/3.png":[function(require,module,exports) {
module.exports = "/3.2a4d0ef5.png";
},{}],"images/fighters/subzero/left/high-punch/4.png":[function(require,module,exports) {
module.exports = "/4.51087521.png";
},{}],"images/fighters/subzero/left/high-punch/5.png":[function(require,module,exports) {
module.exports = "/5.38d14bb0.png";
},{}],"images/fighters/subzero/left/high-punch/6.png":[function(require,module,exports) {
module.exports = "/6.0464b4bd.png";
},{}],"images/fighters/subzero/left/high-punch/7.png":[function(require,module,exports) {
module.exports = "/7.1b8f766f.png";
},{}],"images/fighters/subzero/left/jumping/0.png":[function(require,module,exports) {
module.exports = "/0.5443df91.png";
},{}],"images/fighters/subzero/left/jumping/1.png":[function(require,module,exports) {
module.exports = "/1.13a1032e.png";
},{}],"images/fighters/subzero/left/jumping/2.png":[function(require,module,exports) {
module.exports = "/2.d5a3ea1e.png";
},{}],"images/fighters/subzero/left/jumping/3.png":[function(require,module,exports) {
module.exports = "/3.9794c33e.png";
},{}],"images/fighters/subzero/left/jumping/4.png":[function(require,module,exports) {
module.exports = "/4.250a9202.png";
},{}],"images/fighters/subzero/left/jumping/5.png":[function(require,module,exports) {
module.exports = "/5.89fe7c71.png";
},{}],"images/fighters/subzero/left/knock-down/0.png":[function(require,module,exports) {
module.exports = "/0.c2640c3f.png";
},{}],"images/fighters/subzero/left/knock-down/1.png":[function(require,module,exports) {
module.exports = "/1.052a6c31.png";
},{}],"images/fighters/subzero/left/knock-down/2.png":[function(require,module,exports) {
module.exports = "/2.680fcc86.png";
},{}],"images/fighters/subzero/left/knock-down/3.png":[function(require,module,exports) {
module.exports = "/3.733c274b.png";
},{}],"images/fighters/subzero/left/knock-down/4.png":[function(require,module,exports) {
module.exports = "/4.1ad5a6bc.png";
},{}],"images/fighters/subzero/left/knock-down/5.png":[function(require,module,exports) {
module.exports = "/5.8769fdce.png";
},{}],"images/fighters/subzero/left/knock-down/6.png":[function(require,module,exports) {
module.exports = "/6.f1a5e32d.png";
},{}],"images/fighters/subzero/left/knock-down/7.png":[function(require,module,exports) {
module.exports = "/7.79da2ebd.png";
},{}],"images/fighters/subzero/left/knock-down/8.png":[function(require,module,exports) {
module.exports = "/8.7f2b12db.png";
},{}],"images/fighters/subzero/left/knock-down/9.png":[function(require,module,exports) {
module.exports = "/9.d2d6806b.png";
},{}],"images/fighters/subzero/left/low-kick/0.png":[function(require,module,exports) {
module.exports = "/0.f294e80e.png";
},{}],"images/fighters/subzero/left/low-kick/1.png":[function(require,module,exports) {
module.exports = "/1.47928407.png";
},{}],"images/fighters/subzero/left/low-kick/2.png":[function(require,module,exports) {
module.exports = "/2.9153c0d0.png";
},{}],"images/fighters/subzero/left/low-kick/3.png":[function(require,module,exports) {
module.exports = "/3.ea9d0c5f.png";
},{}],"images/fighters/subzero/left/low-kick/4.png":[function(require,module,exports) {
module.exports = "/4.82b7041f.png";
},{}],"images/fighters/subzero/left/low-kick/5.png":[function(require,module,exports) {
module.exports = "/5.99d43b84.png";
},{}],"images/fighters/subzero/left/low-punch/0.png":[function(require,module,exports) {
module.exports = "/0.6b648f16.png";
},{}],"images/fighters/subzero/left/low-punch/1.png":[function(require,module,exports) {
module.exports = "/1.873db693.png";
},{}],"images/fighters/subzero/left/low-punch/2.png":[function(require,module,exports) {
module.exports = "/2.378b7ea6.png";
},{}],"images/fighters/subzero/left/low-punch/3.png":[function(require,module,exports) {
module.exports = "/3.8bb284f1.png";
},{}],"images/fighters/subzero/left/low-punch/4.png":[function(require,module,exports) {
module.exports = "/4.6d8554d5.png";
},{}],"images/fighters/subzero/left/spin-kick/0.png":[function(require,module,exports) {
module.exports = "/0.59271daf.png";
},{}],"images/fighters/subzero/left/spin-kick/1.png":[function(require,module,exports) {
module.exports = "/1.12afe237.png";
},{}],"images/fighters/subzero/left/spin-kick/2.png":[function(require,module,exports) {
module.exports = "/2.9e882c96.png";
},{}],"images/fighters/subzero/left/spin-kick/3.png":[function(require,module,exports) {
module.exports = "/3.ab0f3886.png";
},{}],"images/fighters/subzero/left/spin-kick/4.png":[function(require,module,exports) {
module.exports = "/4.0bd19cf0.png";
},{}],"images/fighters/subzero/left/spin-kick/5.png":[function(require,module,exports) {
module.exports = "/5.453277d2.png";
},{}],"images/fighters/subzero/left/spin-kick/6.png":[function(require,module,exports) {
module.exports = "/6.97a1bd01.png";
},{}],"images/fighters/subzero/left/spin-kick/7.png":[function(require,module,exports) {
module.exports = "/7.c8140f83.png";
},{}],"images/fighters/subzero/left/squat-endure/0.png":[function(require,module,exports) {
module.exports = "/0.4eb718ce.png";
},{}],"images/fighters/subzero/left/squat-endure/1.png":[function(require,module,exports) {
module.exports = "/1.601d3503.png";
},{}],"images/fighters/subzero/left/squat-endure/2.png":[function(require,module,exports) {
module.exports = "/2.8a57b47f.png";
},{}],"images/fighters/subzero/left/squat-high-kick/0.png":[function(require,module,exports) {
module.exports = "/0.6e8507ba.png";
},{}],"images/fighters/subzero/left/squat-high-kick/1.png":[function(require,module,exports) {
module.exports = "/1.79b585ae.png";
},{}],"images/fighters/subzero/left/squat-high-kick/2.png":[function(require,module,exports) {
module.exports = "/2.633439ff.png";
},{}],"images/fighters/subzero/left/squat-high-kick/3.png":[function(require,module,exports) {
module.exports = "/3.41fc124b.png";
},{}],"images/fighters/subzero/left/squat-low-kick/0.png":[function(require,module,exports) {
module.exports = "/0.fb2a589c.png";
},{}],"images/fighters/subzero/left/squat-low-kick/1.png":[function(require,module,exports) {
module.exports = "/1.20956776.png";
},{}],"images/fighters/subzero/left/squat-low-kick/2.png":[function(require,module,exports) {
module.exports = "/2.ab914cb0.png";
},{}],"images/fighters/subzero/left/squat-low-punch/0.png":[function(require,module,exports) {
module.exports = "/0.816a0aaa.png";
},{}],"images/fighters/subzero/left/squat-low-punch/1.png":[function(require,module,exports) {
module.exports = "/1.d3c5c2b3.png";
},{}],"images/fighters/subzero/left/squat-low-punch/2.png":[function(require,module,exports) {
module.exports = "/2.c44a09e5.png";
},{}],"images/fighters/subzero/left/squating/0.png":[function(require,module,exports) {
module.exports = "/0.bde60e0c.png";
},{}],"images/fighters/subzero/left/squating/1.png":[function(require,module,exports) {
module.exports = "/1.223454fb.png";
},{}],"images/fighters/subzero/left/squating/2.png":[function(require,module,exports) {
module.exports = "/2.17dcf0d5.png";
},{}],"images/fighters/subzero/left/stand/0.png":[function(require,module,exports) {
module.exports = "/0.0090f53c.png";
},{}],"images/fighters/subzero/left/stand/1.png":[function(require,module,exports) {
module.exports = "/1.905bc5e3.png";
},{}],"images/fighters/subzero/left/stand/2.png":[function(require,module,exports) {
module.exports = "/2.c259b78b.png";
},{}],"images/fighters/subzero/left/stand/3.png":[function(require,module,exports) {
module.exports = "/3.9fbd7d71.png";
},{}],"images/fighters/subzero/left/stand/4.png":[function(require,module,exports) {
module.exports = "/4.7aae21c1.png";
},{}],"images/fighters/subzero/left/stand/5.png":[function(require,module,exports) {
module.exports = "/5.7e91ed69.png";
},{}],"images/fighters/subzero/left/stand/6.png":[function(require,module,exports) {
module.exports = "/6.a340e21f.png";
},{}],"images/fighters/subzero/left/stand/7.png":[function(require,module,exports) {
module.exports = "/7.9e70af2f.png";
},{}],"images/fighters/subzero/left/stand/8.png":[function(require,module,exports) {
module.exports = "/8.97c2efed.png";
},{}],"images/fighters/subzero/left/stand/9.png":[function(require,module,exports) {
module.exports = "/9.3c1ee7e0.png";
},{}],"images/fighters/subzero/left/stand-up/0.png":[function(require,module,exports) {
module.exports = "/0.4c3db57b.png";
},{}],"images/fighters/subzero/left/stand-up/1.png":[function(require,module,exports) {
module.exports = "/1.9106451e.png";
},{}],"images/fighters/subzero/left/stand-up/2.png":[function(require,module,exports) {
module.exports = "/2.ffb0cfc2.png";
},{}],"images/fighters/subzero/left/uppercut/0.png":[function(require,module,exports) {
module.exports = "/0.b201bfab.png";
},{}],"images/fighters/subzero/left/uppercut/1.png":[function(require,module,exports) {
module.exports = "/1.240373cd.png";
},{}],"images/fighters/subzero/left/uppercut/2.png":[function(require,module,exports) {
module.exports = "/2.8b63f91c.png";
},{}],"images/fighters/subzero/left/uppercut/3.png":[function(require,module,exports) {
module.exports = "/3.47c75b9a.png";
},{}],"images/fighters/subzero/left/uppercut/4.png":[function(require,module,exports) {
module.exports = "/4.46f5a34c.png";
},{}],"images/fighters/subzero/left/walking/0.png":[function(require,module,exports) {
module.exports = "/0.29fbe8ab.png";
},{}],"images/fighters/subzero/left/walking/1.png":[function(require,module,exports) {
module.exports = "/1.0b2e8bd0.png";
},{}],"images/fighters/subzero/left/walking/2.png":[function(require,module,exports) {
module.exports = "/2.22ebf75f.png";
},{}],"images/fighters/subzero/left/walking/3.png":[function(require,module,exports) {
module.exports = "/3.a2030fa7.png";
},{}],"images/fighters/subzero/left/walking/4.png":[function(require,module,exports) {
module.exports = "/4.7a2168ba.png";
},{}],"images/fighters/subzero/left/walking/5.png":[function(require,module,exports) {
module.exports = "/5.d6b81880.png";
},{}],"images/fighters/subzero/left/walking/6.png":[function(require,module,exports) {
module.exports = "/6.0deb2880.png";
},{}],"images/fighters/subzero/left/walking/7.png":[function(require,module,exports) {
module.exports = "/7.5b467ef8.png";
},{}],"images/fighters/subzero/left/walking/8.png":[function(require,module,exports) {
module.exports = "/8.cf2199d3.png";
},{}],"images/fighters/subzero/left/walking-backward/0.png":[function(require,module,exports) {
module.exports = "/0.2238410a.png";
},{}],"images/fighters/subzero/left/walking-backward/1.png":[function(require,module,exports) {
module.exports = "/1.8db1f910.png";
},{}],"images/fighters/subzero/left/walking-backward/2.png":[function(require,module,exports) {
module.exports = "/2.aba5081e.png";
},{}],"images/fighters/subzero/left/walking-backward/3.png":[function(require,module,exports) {
module.exports = "/3.80cbfafd.png";
},{}],"images/fighters/subzero/left/walking-backward/4.png":[function(require,module,exports) {
module.exports = "/4.50b6d349.png";
},{}],"images/fighters/subzero/left/walking-backward/5.png":[function(require,module,exports) {
module.exports = "/5.bd7530cc.png";
},{}],"images/fighters/subzero/left/walking-backward/6.png":[function(require,module,exports) {
module.exports = "/6.7b6a6654.png";
},{}],"images/fighters/subzero/left/walking-backward/7.png":[function(require,module,exports) {
module.exports = "/7.18342482.png";
},{}],"images/fighters/subzero/left/walking-backward/8.png":[function(require,module,exports) {
module.exports = "/8.5ac8526e.png";
},{}],"images/fighters/subzero/left/win/0.png":[function(require,module,exports) {
module.exports = "/0.97c74a80.png";
},{}],"images/fighters/subzero/left/win/1.png":[function(require,module,exports) {
module.exports = "/1.62de8d0e.png";
},{}],"images/fighters/subzero/left/win/2.png":[function(require,module,exports) {
module.exports = "/2.2a59a5aa.png";
},{}],"images/fighters/subzero/left/win/3.png":[function(require,module,exports) {
module.exports = "/3.168aaaf5.png";
},{}],"images/fighters/subzero/left/win/4.png":[function(require,module,exports) {
module.exports = "/4.7061fef8.png";
},{}],"images/fighters/subzero/left/win/5.png":[function(require,module,exports) {
module.exports = "/5.6a34069b.png";
},{}],"images/fighters/subzero/left/win/6.png":[function(require,module,exports) {
module.exports = "/6.ab3d82c2.png";
},{}],"images/fighters/subzero/left/win/7.png":[function(require,module,exports) {
module.exports = "/7.627a5141.png";
},{}],"images/fighters/subzero/left/win/8.png":[function(require,module,exports) {
module.exports = "/8.c2d3c27f.png";
},{}],"images/fighters/subzero/left/win/9.png":[function(require,module,exports) {
module.exports = "/9.c01d829d.png";
},{}],"images/fighters/subzero/right/attractive-stand-up/0.png":[function(require,module,exports) {
module.exports = "/0.4068e048.png";
},{}],"images/fighters/subzero/right/attractive-stand-up/1.png":[function(require,module,exports) {
module.exports = "/1.4a235e30.png";
},{}],"images/fighters/subzero/right/attractive-stand-up/2.png":[function(require,module,exports) {
module.exports = "/2.508288ee.png";
},{}],"images/fighters/subzero/right/attractive-stand-up/3.png":[function(require,module,exports) {
module.exports = "/3.ed081230.png";
},{}],"images/fighters/subzero/right/attractive-stand-up/4.png":[function(require,module,exports) {
module.exports = "/4.4d63149d.png";
},{}],"images/fighters/subzero/right/backward-jump/0.png":[function(require,module,exports) {
module.exports = "/0.b9df8f17.png";
},{}],"images/fighters/subzero/right/backward-jump/1.png":[function(require,module,exports) {
module.exports = "/1.69a6aeee.png";
},{}],"images/fighters/subzero/right/backward-jump/2.png":[function(require,module,exports) {
module.exports = "/2.7d56440c.png";
},{}],"images/fighters/subzero/right/backward-jump/3.png":[function(require,module,exports) {
module.exports = "/3.19b72bf3.png";
},{}],"images/fighters/subzero/right/backward-jump/4.png":[function(require,module,exports) {
module.exports = "/4.e1f8e12e.png";
},{}],"images/fighters/subzero/right/backward-jump/5.png":[function(require,module,exports) {
module.exports = "/5.1d411bc2.png";
},{}],"images/fighters/subzero/right/backward-jump/6.png":[function(require,module,exports) {
module.exports = "/6.03c0f268.png";
},{}],"images/fighters/subzero/right/backward-jump/7.png":[function(require,module,exports) {
module.exports = "/7.d95ae43e.png";
},{}],"images/fighters/subzero/right/backward-jump-kick/0.png":[function(require,module,exports) {
module.exports = "/0.20f586d2.png";
},{}],"images/fighters/subzero/right/backward-jump-kick/1.png":[function(require,module,exports) {
module.exports = "/1.4fa9b715.png";
},{}],"images/fighters/subzero/right/backward-jump-kick/2.png":[function(require,module,exports) {
module.exports = "/2.edf77afd.png";
},{}],"images/fighters/subzero/right/backward-jump-punch/0.png":[function(require,module,exports) {
module.exports = "/0.1eb0bb55.png";
},{}],"images/fighters/subzero/right/backward-jump-punch/1.png":[function(require,module,exports) {
module.exports = "/1.41e40fdb.png";
},{}],"images/fighters/subzero/right/backward-jump-punch/2.png":[function(require,module,exports) {
module.exports = "/2.9b0de5e4.png";
},{}],"images/fighters/subzero/right/blocking/0.png":[function(require,module,exports) {
module.exports = "/0.6444fa0f.png";
},{}],"images/fighters/subzero/right/blocking/1.png":[function(require,module,exports) {
module.exports = "/1.af0157e3.png";
},{}],"images/fighters/subzero/right/blocking/2.png":[function(require,module,exports) {
module.exports = "/2.d21054e7.png";
},{}],"images/fighters/subzero/right/endure/0.png":[function(require,module,exports) {
module.exports = "/0.38f647c0.png";
},{}],"images/fighters/subzero/right/endure/1.png":[function(require,module,exports) {
module.exports = "/1.f423bb3d.png";
},{}],"images/fighters/subzero/right/endure/2.png":[function(require,module,exports) {
module.exports = "/2.85ce5bad.png";
},{}],"images/fighters/subzero/right/fall/0.png":[function(require,module,exports) {
module.exports = "/0.0ef1977e.png";
},{}],"images/fighters/subzero/right/fall/1.png":[function(require,module,exports) {
module.exports = "/1.b15ce9ea.png";
},{}],"images/fighters/subzero/right/fall/2.png":[function(require,module,exports) {
module.exports = "/2.e6662e16.png";
},{}],"images/fighters/subzero/right/fall/3.png":[function(require,module,exports) {
module.exports = "/3.dee7d3d5.png";
},{}],"images/fighters/subzero/right/fall/4.png":[function(require,module,exports) {
module.exports = "/4.a5d45a34.png";
},{}],"images/fighters/subzero/right/fall/5.png":[function(require,module,exports) {
module.exports = "/5.aef4175e.png";
},{}],"images/fighters/subzero/right/fall/6.png":[function(require,module,exports) {
module.exports = "/6.fbf2ec36.png";
},{}],"images/fighters/subzero/right/forward-jump/0.png":[function(require,module,exports) {
module.exports = "/0.438a3e1c.png";
},{}],"images/fighters/subzero/right/forward-jump/1.png":[function(require,module,exports) {
module.exports = "/1.fe95c508.png";
},{}],"images/fighters/subzero/right/forward-jump/2.png":[function(require,module,exports) {
module.exports = "/2.bca064bf.png";
},{}],"images/fighters/subzero/right/forward-jump/3.png":[function(require,module,exports) {
module.exports = "/3.bb98d426.png";
},{}],"images/fighters/subzero/right/forward-jump/4.png":[function(require,module,exports) {
module.exports = "/4.086c3518.png";
},{}],"images/fighters/subzero/right/forward-jump/5.png":[function(require,module,exports) {
module.exports = "/5.b7bda96a.png";
},{}],"images/fighters/subzero/right/forward-jump/6.png":[function(require,module,exports) {
module.exports = "/6.eb7133f2.png";
},{}],"images/fighters/subzero/right/forward-jump/7.png":[function(require,module,exports) {
module.exports = "/7.d2bea171.png";
},{}],"images/fighters/subzero/right/forward-jump-kick/0.png":[function(require,module,exports) {
module.exports = "/0.772e7e66.png";
},{}],"images/fighters/subzero/right/forward-jump-kick/1.png":[function(require,module,exports) {
module.exports = "/1.9804d582.png";
},{}],"images/fighters/subzero/right/forward-jump-kick/2.png":[function(require,module,exports) {
module.exports = "/2.a612dc88.png";
},{}],"images/fighters/subzero/right/forward-jump-punch/0.png":[function(require,module,exports) {
module.exports = "/0.06bb0812.png";
},{}],"images/fighters/subzero/right/forward-jump-punch/1.png":[function(require,module,exports) {
module.exports = "/1.4d91a982.png";
},{}],"images/fighters/subzero/right/forward-jump-punch/2.png":[function(require,module,exports) {
module.exports = "/2.834b2226.png";
},{}],"images/fighters/subzero/right/high-kick/0.png":[function(require,module,exports) {
module.exports = "/0.f0d3353a.png";
},{}],"images/fighters/subzero/right/high-kick/1.png":[function(require,module,exports) {
module.exports = "/1.3f38bf03.png";
},{}],"images/fighters/subzero/right/high-kick/2.png":[function(require,module,exports) {
module.exports = "/2.0835e8cd.png";
},{}],"images/fighters/subzero/right/high-kick/3.png":[function(require,module,exports) {
module.exports = "/3.8f6c6cc5.png";
},{}],"images/fighters/subzero/right/high-kick/4.png":[function(require,module,exports) {
module.exports = "/4.77088d6d.png";
},{}],"images/fighters/subzero/right/high-kick/5.png":[function(require,module,exports) {
module.exports = "/5.71af4ecb.png";
},{}],"images/fighters/subzero/right/high-kick/6.png":[function(require,module,exports) {
module.exports = "/6.45dd147f.png";
},{}],"images/fighters/subzero/right/high-punch/0.png":[function(require,module,exports) {
module.exports = "/0.f009508c.png";
},{}],"images/fighters/subzero/right/high-punch/1.png":[function(require,module,exports) {
module.exports = "/1.36472419.png";
},{}],"images/fighters/subzero/right/high-punch/2.png":[function(require,module,exports) {
module.exports = "/2.634e0b84.png";
},{}],"images/fighters/subzero/right/high-punch/3.png":[function(require,module,exports) {
module.exports = "/3.c287711b.png";
},{}],"images/fighters/subzero/right/high-punch/4.png":[function(require,module,exports) {
module.exports = "/4.efc1edcd.png";
},{}],"images/fighters/subzero/right/high-punch/5.png":[function(require,module,exports) {
module.exports = "/5.3a621de3.png";
},{}],"images/fighters/subzero/right/high-punch/6.png":[function(require,module,exports) {
module.exports = "/6.678e3089.png";
},{}],"images/fighters/subzero/right/high-punch/7.png":[function(require,module,exports) {
module.exports = "/7.c799a164.png";
},{}],"images/fighters/subzero/right/jumping/0.png":[function(require,module,exports) {
module.exports = "/0.8fdf0ccb.png";
},{}],"images/fighters/subzero/right/jumping/1.png":[function(require,module,exports) {
module.exports = "/1.961a3e17.png";
},{}],"images/fighters/subzero/right/jumping/2.png":[function(require,module,exports) {
module.exports = "/2.0cc948ee.png";
},{}],"images/fighters/subzero/right/jumping/3.png":[function(require,module,exports) {
module.exports = "/3.322dd630.png";
},{}],"images/fighters/subzero/right/jumping/4.png":[function(require,module,exports) {
module.exports = "/4.e36df438.png";
},{}],"images/fighters/subzero/right/jumping/5.png":[function(require,module,exports) {
module.exports = "/5.60759b18.png";
},{}],"images/fighters/subzero/right/knock-down/0.png":[function(require,module,exports) {
module.exports = "/0.6a008104.png";
},{}],"images/fighters/subzero/right/knock-down/1.png":[function(require,module,exports) {
module.exports = "/1.d235d639.png";
},{}],"images/fighters/subzero/right/knock-down/2.png":[function(require,module,exports) {
module.exports = "/2.0964121e.png";
},{}],"images/fighters/subzero/right/knock-down/3.png":[function(require,module,exports) {
module.exports = "/3.40e93d65.png";
},{}],"images/fighters/subzero/right/knock-down/4.png":[function(require,module,exports) {
module.exports = "/4.5bd5e19b.png";
},{}],"images/fighters/subzero/right/knock-down/5.png":[function(require,module,exports) {
module.exports = "/5.4d52b967.png";
},{}],"images/fighters/subzero/right/knock-down/6.png":[function(require,module,exports) {
module.exports = "/6.657be528.png";
},{}],"images/fighters/subzero/right/knock-down/7.png":[function(require,module,exports) {
module.exports = "/7.2f43d1c4.png";
},{}],"images/fighters/subzero/right/knock-down/8.png":[function(require,module,exports) {
module.exports = "/8.d3e43856.png";
},{}],"images/fighters/subzero/right/knock-down/9.png":[function(require,module,exports) {
module.exports = "/9.48c7f0d5.png";
},{}],"images/fighters/subzero/right/low-kick/0.png":[function(require,module,exports) {
module.exports = "/0.4f46f63f.png";
},{}],"images/fighters/subzero/right/low-kick/1.png":[function(require,module,exports) {
module.exports = "/1.1404d686.png";
},{}],"images/fighters/subzero/right/low-kick/2.png":[function(require,module,exports) {
module.exports = "/2.49a9e7dd.png";
},{}],"images/fighters/subzero/right/low-kick/3.png":[function(require,module,exports) {
module.exports = "/3.c2f988ff.png";
},{}],"images/fighters/subzero/right/low-kick/4.png":[function(require,module,exports) {
module.exports = "/4.b05acf02.png";
},{}],"images/fighters/subzero/right/low-kick/5.png":[function(require,module,exports) {
module.exports = "/5.a8dfc363.png";
},{}],"images/fighters/subzero/right/low-punch/0.png":[function(require,module,exports) {
module.exports = "/0.04879942.png";
},{}],"images/fighters/subzero/right/low-punch/1.png":[function(require,module,exports) {
module.exports = "/1.eb6eed6b.png";
},{}],"images/fighters/subzero/right/low-punch/2.png":[function(require,module,exports) {
module.exports = "/2.0e9edb98.png";
},{}],"images/fighters/subzero/right/low-punch/3.png":[function(require,module,exports) {
module.exports = "/3.eda54498.png";
},{}],"images/fighters/subzero/right/low-punch/4.png":[function(require,module,exports) {
module.exports = "/4.f083b956.png";
},{}],"images/fighters/subzero/right/spin-kick/0.png":[function(require,module,exports) {
module.exports = "/0.81d9258f.png";
},{}],"images/fighters/subzero/right/spin-kick/1.png":[function(require,module,exports) {
module.exports = "/1.b32dcf00.png";
},{}],"images/fighters/subzero/right/spin-kick/2.png":[function(require,module,exports) {
module.exports = "/2.e7350d39.png";
},{}],"images/fighters/subzero/right/spin-kick/3.png":[function(require,module,exports) {
module.exports = "/3.7f05d2a9.png";
},{}],"images/fighters/subzero/right/spin-kick/4.png":[function(require,module,exports) {
module.exports = "/4.2129f388.png";
},{}],"images/fighters/subzero/right/spin-kick/5.png":[function(require,module,exports) {
module.exports = "/5.1d45f346.png";
},{}],"images/fighters/subzero/right/spin-kick/6.png":[function(require,module,exports) {
module.exports = "/6.648b2984.png";
},{}],"images/fighters/subzero/right/spin-kick/7.png":[function(require,module,exports) {
module.exports = "/7.78a7ae81.png";
},{}],"images/fighters/subzero/right/squat-endure/0.png":[function(require,module,exports) {
module.exports = "/0.a581edb4.png";
},{}],"images/fighters/subzero/right/squat-endure/1.png":[function(require,module,exports) {
module.exports = "/1.946fdd0e.png";
},{}],"images/fighters/subzero/right/squat-endure/2.png":[function(require,module,exports) {
module.exports = "/2.0d6c91ce.png";
},{}],"images/fighters/subzero/right/squat-high-kick/0.png":[function(require,module,exports) {
module.exports = "/0.33aa888c.png";
},{}],"images/fighters/subzero/right/squat-high-kick/1.png":[function(require,module,exports) {
module.exports = "/1.d6f7b458.png";
},{}],"images/fighters/subzero/right/squat-high-kick/2.png":[function(require,module,exports) {
module.exports = "/2.e0f7ad7c.png";
},{}],"images/fighters/subzero/right/squat-high-kick/3.png":[function(require,module,exports) {
module.exports = "/3.339899e3.png";
},{}],"images/fighters/subzero/right/squat-low-kick/0.png":[function(require,module,exports) {
module.exports = "/0.52261c7b.png";
},{}],"images/fighters/subzero/right/squat-low-kick/1.png":[function(require,module,exports) {
module.exports = "/1.e1a5257b.png";
},{}],"images/fighters/subzero/right/squat-low-kick/2.png":[function(require,module,exports) {
module.exports = "/2.18fe049e.png";
},{}],"images/fighters/subzero/right/squat-low-punch/0.png":[function(require,module,exports) {
module.exports = "/0.e498dfe1.png";
},{}],"images/fighters/subzero/right/squat-low-punch/1.png":[function(require,module,exports) {
module.exports = "/1.a5cfd50d.png";
},{}],"images/fighters/subzero/right/squat-low-punch/2.png":[function(require,module,exports) {
module.exports = "/2.82738da2.png";
},{}],"images/fighters/subzero/right/squating/0.png":[function(require,module,exports) {
module.exports = "/0.96bd7149.png";
},{}],"images/fighters/subzero/right/squating/1.png":[function(require,module,exports) {
module.exports = "/1.eb119f6c.png";
},{}],"images/fighters/subzero/right/squating/2.png":[function(require,module,exports) {
module.exports = "/2.c7823b5f.png";
},{}],"images/fighters/subzero/right/stand/0.png":[function(require,module,exports) {
module.exports = "/0.62ef5404.png";
},{}],"images/fighters/subzero/right/stand/1.png":[function(require,module,exports) {
module.exports = "/1.4badd1b2.png";
},{}],"images/fighters/subzero/right/stand/2.png":[function(require,module,exports) {
module.exports = "/2.5de53c84.png";
},{}],"images/fighters/subzero/right/stand/3.png":[function(require,module,exports) {
module.exports = "/3.55807515.png";
},{}],"images/fighters/subzero/right/stand/4.png":[function(require,module,exports) {
module.exports = "/4.d63d7360.png";
},{}],"images/fighters/subzero/right/stand/5.png":[function(require,module,exports) {
module.exports = "/5.a9f3b19d.png";
},{}],"images/fighters/subzero/right/stand/6.png":[function(require,module,exports) {
module.exports = "/6.feefffa7.png";
},{}],"images/fighters/subzero/right/stand/7.png":[function(require,module,exports) {
module.exports = "/7.b418beb5.png";
},{}],"images/fighters/subzero/right/stand/8.png":[function(require,module,exports) {
module.exports = "/8.85ca3a01.png";
},{}],"images/fighters/subzero/right/stand-up/0.png":[function(require,module,exports) {
module.exports = "/0.fcc69627.png";
},{}],"images/fighters/subzero/right/stand-up/1.png":[function(require,module,exports) {
module.exports = "/1.f7b35edb.png";
},{}],"images/fighters/subzero/right/stand-up/2.png":[function(require,module,exports) {
module.exports = "/2.21491a89.png";
},{}],"images/fighters/subzero/right/uppercut/0.png":[function(require,module,exports) {
module.exports = "/0.f6acf20f.png";
},{}],"images/fighters/subzero/right/uppercut/1.png":[function(require,module,exports) {
module.exports = "/1.d92c0c59.png";
},{}],"images/fighters/subzero/right/uppercut/2.png":[function(require,module,exports) {
module.exports = "/2.19369c57.png";
},{}],"images/fighters/subzero/right/uppercut/3.png":[function(require,module,exports) {
module.exports = "/3.f32c1277.png";
},{}],"images/fighters/subzero/right/uppercut/4.png":[function(require,module,exports) {
module.exports = "/4.c9c23802.png";
},{}],"images/fighters/subzero/right/walking/0.png":[function(require,module,exports) {
module.exports = "/0.15f1221d.png";
},{}],"images/fighters/subzero/right/walking/1.png":[function(require,module,exports) {
module.exports = "/1.586a847d.png";
},{}],"images/fighters/subzero/right/walking/2.png":[function(require,module,exports) {
module.exports = "/2.6b5350e3.png";
},{}],"images/fighters/subzero/right/walking/3.png":[function(require,module,exports) {
module.exports = "/3.eea62a82.png";
},{}],"images/fighters/subzero/right/walking/4.png":[function(require,module,exports) {
module.exports = "/4.970318f9.png";
},{}],"images/fighters/subzero/right/walking/5.png":[function(require,module,exports) {
module.exports = "/5.a25e4693.png";
},{}],"images/fighters/subzero/right/walking/6.png":[function(require,module,exports) {
module.exports = "/6.c74578ec.png";
},{}],"images/fighters/subzero/right/walking/7.png":[function(require,module,exports) {
module.exports = "/7.c8b841c7.png";
},{}],"images/fighters/subzero/right/walking/8.png":[function(require,module,exports) {
module.exports = "/8.e7509ae5.png";
},{}],"images/fighters/subzero/right/walking-backward/0.png":[function(require,module,exports) {
module.exports = "/0.cc7c3350.png";
},{}],"images/fighters/subzero/right/walking-backward/1.png":[function(require,module,exports) {
module.exports = "/1.86fc23f6.png";
},{}],"images/fighters/subzero/right/walking-backward/2.png":[function(require,module,exports) {
module.exports = "/2.780dab79.png";
},{}],"images/fighters/subzero/right/walking-backward/3.png":[function(require,module,exports) {
module.exports = "/3.592d06e3.png";
},{}],"images/fighters/subzero/right/walking-backward/4.png":[function(require,module,exports) {
module.exports = "/4.1fdebe1c.png";
},{}],"images/fighters/subzero/right/walking-backward/5.png":[function(require,module,exports) {
module.exports = "/5.7502c7d8.png";
},{}],"images/fighters/subzero/right/walking-backward/6.png":[function(require,module,exports) {
module.exports = "/6.37ae138a.png";
},{}],"images/fighters/subzero/right/walking-backward/7.png":[function(require,module,exports) {
module.exports = "/7.5ffd1dd0.png";
},{}],"images/fighters/subzero/right/walking-backward/8.png":[function(require,module,exports) {
module.exports = "/8.afc2ff71.png";
},{}],"images/fighters/subzero/right/win/0.png":[function(require,module,exports) {
module.exports = "/0.e65a77ed.png";
},{}],"images/fighters/subzero/right/win/1.png":[function(require,module,exports) {
module.exports = "/1.36f6b5a0.png";
},{}],"images/fighters/subzero/right/win/2.png":[function(require,module,exports) {
module.exports = "/2.23224d4e.png";
},{}],"images/fighters/subzero/right/win/3.png":[function(require,module,exports) {
module.exports = "/3.9e9a00ac.png";
},{}],"images/fighters/subzero/right/win/4.png":[function(require,module,exports) {
module.exports = "/4.7e7b1f04.png";
},{}],"images/fighters/subzero/right/win/5.png":[function(require,module,exports) {
module.exports = "/5.5602546b.png";
},{}],"images/fighters/subzero/right/win/6.png":[function(require,module,exports) {
module.exports = "/6.cdf48f1e.png";
},{}],"images/fighters/subzero/right/win/7.png":[function(require,module,exports) {
module.exports = "/7.38a91dd7.png";
},{}],"images/fighters/subzero/right/win/8.png":[function(require,module,exports) {
module.exports = "/8.cfc97bf4.png";
},{}],"images/fighters/subzero/right/win/9.png":[function(require,module,exports) {
module.exports = "/9.1133f0c2.png";
},{}],"images/**/*.png":[function(require,module,exports) {
module.exports = {
  "arenas": {
    "0": {
      "arena": require("./../arenas/0/arena.png")
    },
    "1": {
      "arena": require("./../arenas/1/arena.png")
    }
  },
  "fighters": {
    "kano": {
      "left": {
        "attractive-stand-up": {
          "0": require("./../fighters/kano/left/attractive-stand-up/0.png"),
          "1": require("./../fighters/kano/left/attractive-stand-up/1.png"),
          "2": require("./../fighters/kano/left/attractive-stand-up/2.png"),
          "3": require("./../fighters/kano/left/attractive-stand-up/3.png")
        },
        "backward-jump": {
          "0": require("./../fighters/kano/left/backward-jump/0.png"),
          "1": require("./../fighters/kano/left/backward-jump/1.png"),
          "2": require("./../fighters/kano/left/backward-jump/2.png"),
          "3": require("./../fighters/kano/left/backward-jump/3.png"),
          "4": require("./../fighters/kano/left/backward-jump/4.png"),
          "5": require("./../fighters/kano/left/backward-jump/5.png"),
          "6": require("./../fighters/kano/left/backward-jump/6.png"),
          "7": require("./../fighters/kano/left/backward-jump/7.png")
        },
        "backward-jump-kick": {
          "0": require("./../fighters/kano/left/backward-jump-kick/0.png"),
          "1": require("./../fighters/kano/left/backward-jump-kick/1.png"),
          "2": require("./../fighters/kano/left/backward-jump-kick/2.png")
        },
        "backward-jump-punch": {
          "0": require("./../fighters/kano/left/backward-jump-punch/0.png"),
          "1": require("./../fighters/kano/left/backward-jump-punch/1.png"),
          "2": require("./../fighters/kano/left/backward-jump-punch/2.png")
        },
        "blocking": {
          "0": require("./../fighters/kano/left/blocking/0.png"),
          "1": require("./../fighters/kano/left/blocking/1.png"),
          "2": require("./../fighters/kano/left/blocking/2.png")
        },
        "endure": {
          "0": require("./../fighters/kano/left/endure/0.png"),
          "1": require("./../fighters/kano/left/endure/1.png"),
          "2": require("./../fighters/kano/left/endure/2.png")
        },
        "fall": {
          "0": require("./../fighters/kano/left/fall/0.png"),
          "1": require("./../fighters/kano/left/fall/1.png"),
          "2": require("./../fighters/kano/left/fall/2.png"),
          "3": require("./../fighters/kano/left/fall/3.png"),
          "4": require("./../fighters/kano/left/fall/4.png"),
          "5": require("./../fighters/kano/left/fall/5.png"),
          "6": require("./../fighters/kano/left/fall/6.png")
        },
        "forward-jump": {
          "0": require("./../fighters/kano/left/forward-jump/0.png"),
          "1": require("./../fighters/kano/left/forward-jump/1.png"),
          "2": require("./../fighters/kano/left/forward-jump/2.png"),
          "3": require("./../fighters/kano/left/forward-jump/3.png"),
          "4": require("./../fighters/kano/left/forward-jump/4.png"),
          "5": require("./../fighters/kano/left/forward-jump/5.png"),
          "6": require("./../fighters/kano/left/forward-jump/6.png"),
          "7": require("./../fighters/kano/left/forward-jump/7.png")
        },
        "forward-jump-kick": {
          "0": require("./../fighters/kano/left/forward-jump-kick/0.png"),
          "1": require("./../fighters/kano/left/forward-jump-kick/1.png"),
          "2": require("./../fighters/kano/left/forward-jump-kick/2.png")
        },
        "forward-jump-punch": {
          "0": require("./../fighters/kano/left/forward-jump-punch/0.png"),
          "1": require("./../fighters/kano/left/forward-jump-punch/1.png"),
          "2": require("./../fighters/kano/left/forward-jump-punch/2.png")
        },
        "high-kick": {
          "0": require("./../fighters/kano/left/high-kick/0.png"),
          "1": require("./../fighters/kano/left/high-kick/1.png"),
          "2": require("./../fighters/kano/left/high-kick/2.png"),
          "3": require("./../fighters/kano/left/high-kick/3.png"),
          "4": require("./../fighters/kano/left/high-kick/4.png"),
          "5": require("./../fighters/kano/left/high-kick/5.png"),
          "6": require("./../fighters/kano/left/high-kick/6.png")
        },
        "high-punch": {
          "0": require("./../fighters/kano/left/high-punch/0.png"),
          "1": require("./../fighters/kano/left/high-punch/1.png"),
          "2": require("./../fighters/kano/left/high-punch/2.png"),
          "3": require("./../fighters/kano/left/high-punch/3.png"),
          "4": require("./../fighters/kano/left/high-punch/4.png"),
          "5": require("./../fighters/kano/left/high-punch/5.png"),
          "6": require("./../fighters/kano/left/high-punch/6.png"),
          "7": require("./../fighters/kano/left/high-punch/7.png")
        },
        "jumping": {
          "0": require("./../fighters/kano/left/jumping/0.png"),
          "1": require("./../fighters/kano/left/jumping/1.png"),
          "2": require("./../fighters/kano/left/jumping/2.png"),
          "3": require("./../fighters/kano/left/jumping/3.png"),
          "4": require("./../fighters/kano/left/jumping/4.png"),
          "5": require("./../fighters/kano/left/jumping/5.png")
        },
        "knock-down": {
          "0": require("./../fighters/kano/left/knock-down/0.png"),
          "1": require("./../fighters/kano/left/knock-down/1.png"),
          "2": require("./../fighters/kano/left/knock-down/2.png"),
          "3": require("./../fighters/kano/left/knock-down/3.png"),
          "4": require("./../fighters/kano/left/knock-down/4.png"),
          "5": require("./../fighters/kano/left/knock-down/5.png"),
          "6": require("./../fighters/kano/left/knock-down/6.png"),
          "7": require("./../fighters/kano/left/knock-down/7.png"),
          "8": require("./../fighters/kano/left/knock-down/8.png"),
          "9": require("./../fighters/kano/left/knock-down/9.png")
        },
        "low-kick": {
          "0": require("./../fighters/kano/left/low-kick/0.png"),
          "1": require("./../fighters/kano/left/low-kick/1.png"),
          "2": require("./../fighters/kano/left/low-kick/2.png"),
          "3": require("./../fighters/kano/left/low-kick/3.png"),
          "4": require("./../fighters/kano/left/low-kick/4.png"),
          "5": require("./../fighters/kano/left/low-kick/5.png")
        },
        "low-punch": {
          "0": require("./../fighters/kano/left/low-punch/0.png"),
          "1": require("./../fighters/kano/left/low-punch/1.png"),
          "2": require("./../fighters/kano/left/low-punch/2.png"),
          "3": require("./../fighters/kano/left/low-punch/3.png"),
          "4": require("./../fighters/kano/left/low-punch/4.png")
        },
        "spin-kick": {
          "0": require("./../fighters/kano/left/spin-kick/0.png"),
          "1": require("./../fighters/kano/left/spin-kick/1.png"),
          "2": require("./../fighters/kano/left/spin-kick/2.png"),
          "3": require("./../fighters/kano/left/spin-kick/3.png"),
          "4": require("./../fighters/kano/left/spin-kick/4.png"),
          "5": require("./../fighters/kano/left/spin-kick/5.png"),
          "6": require("./../fighters/kano/left/spin-kick/6.png"),
          "7": require("./../fighters/kano/left/spin-kick/7.png")
        },
        "squat-endure": {
          "0": require("./../fighters/kano/left/squat-endure/0.png"),
          "1": require("./../fighters/kano/left/squat-endure/1.png"),
          "2": require("./../fighters/kano/left/squat-endure/2.png")
        },
        "squat-high-kick": {
          "0": require("./../fighters/kano/left/squat-high-kick/0.png"),
          "1": require("./../fighters/kano/left/squat-high-kick/1.png"),
          "2": require("./../fighters/kano/left/squat-high-kick/2.png"),
          "3": require("./../fighters/kano/left/squat-high-kick/3.png")
        },
        "squat-low-kick": {
          "0": require("./../fighters/kano/left/squat-low-kick/0.png"),
          "1": require("./../fighters/kano/left/squat-low-kick/1.png"),
          "2": require("./../fighters/kano/left/squat-low-kick/2.png")
        },
        "squat-low-punch": {
          "0": require("./../fighters/kano/left/squat-low-punch/0.png"),
          "1": require("./../fighters/kano/left/squat-low-punch/1.png"),
          "2": require("./../fighters/kano/left/squat-low-punch/2.png")
        },
        "squating": {
          "0": require("./../fighters/kano/left/squating/0.png"),
          "1": require("./../fighters/kano/left/squating/1.png"),
          "2": require("./../fighters/kano/left/squating/2.png")
        },
        "stand": {
          "0": require("./../fighters/kano/left/stand/0.png"),
          "1": require("./../fighters/kano/left/stand/1.png"),
          "2": require("./../fighters/kano/left/stand/2.png"),
          "3": require("./../fighters/kano/left/stand/3.png"),
          "4": require("./../fighters/kano/left/stand/4.png"),
          "5": require("./../fighters/kano/left/stand/5.png"),
          "6": require("./../fighters/kano/left/stand/6.png"),
          "7": require("./../fighters/kano/left/stand/7.png"),
          "8": require("./../fighters/kano/left/stand/8.png")
        },
        "stand-up": {
          "0": require("./../fighters/kano/left/stand-up/0.png"),
          "1": require("./../fighters/kano/left/stand-up/1.png"),
          "2": require("./../fighters/kano/left/stand-up/2.png")
        },
        "uppercut": {
          "0": require("./../fighters/kano/left/uppercut/0.png"),
          "1": require("./../fighters/kano/left/uppercut/1.png"),
          "2": require("./../fighters/kano/left/uppercut/2.png"),
          "3": require("./../fighters/kano/left/uppercut/3.png"),
          "4": require("./../fighters/kano/left/uppercut/4.png"),
          "5": require("./../fighters/kano/left/uppercut/5.png")
        },
        "walking": {
          "0": require("./../fighters/kano/left/walking/0.png"),
          "1": require("./../fighters/kano/left/walking/1.png"),
          "2": require("./../fighters/kano/left/walking/2.png"),
          "3": require("./../fighters/kano/left/walking/3.png"),
          "4": require("./../fighters/kano/left/walking/4.png"),
          "5": require("./../fighters/kano/left/walking/5.png"),
          "6": require("./../fighters/kano/left/walking/6.png"),
          "7": require("./../fighters/kano/left/walking/7.png"),
          "8": require("./../fighters/kano/left/walking/8.png")
        },
        "walking-backward": {
          "0": require("./../fighters/kano/left/walking-backward/0.png"),
          "1": require("./../fighters/kano/left/walking-backward/1.png"),
          "2": require("./../fighters/kano/left/walking-backward/2.png"),
          "3": require("./../fighters/kano/left/walking-backward/3.png"),
          "4": require("./../fighters/kano/left/walking-backward/4.png"),
          "5": require("./../fighters/kano/left/walking-backward/5.png"),
          "6": require("./../fighters/kano/left/walking-backward/6.png"),
          "7": require("./../fighters/kano/left/walking-backward/7.png"),
          "8": require("./../fighters/kano/left/walking-backward/8.png")
        },
        "win": {
          "0": require("./../fighters/kano/left/win/0.png"),
          "1": require("./../fighters/kano/left/win/1.png"),
          "2": require("./../fighters/kano/left/win/2.png"),
          "3": require("./../fighters/kano/left/win/3.png"),
          "4": require("./../fighters/kano/left/win/4.png"),
          "5": require("./../fighters/kano/left/win/5.png"),
          "6": require("./../fighters/kano/left/win/6.png"),
          "7": require("./../fighters/kano/left/win/7.png"),
          "8": require("./../fighters/kano/left/win/8.png"),
          "9": require("./../fighters/kano/left/win/9.png")
        }
      },
      "right": {
        "backward-jump": {
          "0": require("./../fighters/kano/right/backward-jump/0.png"),
          "1": require("./../fighters/kano/right/backward-jump/1.png"),
          "2": require("./../fighters/kano/right/backward-jump/2.png"),
          "3": require("./../fighters/kano/right/backward-jump/3.png"),
          "4": require("./../fighters/kano/right/backward-jump/4.png"),
          "5": require("./../fighters/kano/right/backward-jump/5.png"),
          "6": require("./../fighters/kano/right/backward-jump/6.png"),
          "7": require("./../fighters/kano/right/backward-jump/7.png")
        },
        "attractive-stand-up": {
          "0": require("./../fighters/kano/right/attractive-stand-up/0.png"),
          "1": require("./../fighters/kano/right/attractive-stand-up/1.png"),
          "2": require("./../fighters/kano/right/attractive-stand-up/2.png"),
          "3": require("./../fighters/kano/right/attractive-stand-up/3.png")
        },
        "backward-jump-kick": {
          "0": require("./../fighters/kano/right/backward-jump-kick/0.png"),
          "1": require("./../fighters/kano/right/backward-jump-kick/1.png"),
          "2": require("./../fighters/kano/right/backward-jump-kick/2.png")
        },
        "backward-jump-punch": {
          "0": require("./../fighters/kano/right/backward-jump-punch/0.png"),
          "1": require("./../fighters/kano/right/backward-jump-punch/1.png"),
          "2": require("./../fighters/kano/right/backward-jump-punch/2.png")
        },
        "blocking": {
          "0": require("./../fighters/kano/right/blocking/0.png"),
          "1": require("./../fighters/kano/right/blocking/1.png"),
          "2": require("./../fighters/kano/right/blocking/2.png")
        },
        "endure": {
          "0": require("./../fighters/kano/right/endure/0.png"),
          "1": require("./../fighters/kano/right/endure/1.png"),
          "2": require("./../fighters/kano/right/endure/2.png")
        },
        "fall": {
          "0": require("./../fighters/kano/right/fall/0.png"),
          "1": require("./../fighters/kano/right/fall/1.png"),
          "2": require("./../fighters/kano/right/fall/2.png"),
          "3": require("./../fighters/kano/right/fall/3.png"),
          "4": require("./../fighters/kano/right/fall/4.png"),
          "5": require("./../fighters/kano/right/fall/5.png"),
          "6": require("./../fighters/kano/right/fall/6.png")
        },
        "forward-jump": {
          "0": require("./../fighters/kano/right/forward-jump/0.png"),
          "1": require("./../fighters/kano/right/forward-jump/1.png"),
          "2": require("./../fighters/kano/right/forward-jump/2.png"),
          "3": require("./../fighters/kano/right/forward-jump/3.png"),
          "4": require("./../fighters/kano/right/forward-jump/4.png"),
          "5": require("./../fighters/kano/right/forward-jump/5.png"),
          "6": require("./../fighters/kano/right/forward-jump/6.png"),
          "7": require("./../fighters/kano/right/forward-jump/7.png")
        },
        "forward-jump-kick": {
          "0": require("./../fighters/kano/right/forward-jump-kick/0.png"),
          "1": require("./../fighters/kano/right/forward-jump-kick/1.png"),
          "2": require("./../fighters/kano/right/forward-jump-kick/2.png")
        },
        "forward-jump-punch": {
          "0": require("./../fighters/kano/right/forward-jump-punch/0.png"),
          "1": require("./../fighters/kano/right/forward-jump-punch/1.png"),
          "2": require("./../fighters/kano/right/forward-jump-punch/2.png")
        },
        "high-kick": {
          "0": require("./../fighters/kano/right/high-kick/0.png"),
          "1": require("./../fighters/kano/right/high-kick/1.png"),
          "2": require("./../fighters/kano/right/high-kick/2.png"),
          "3": require("./../fighters/kano/right/high-kick/3.png"),
          "4": require("./../fighters/kano/right/high-kick/4.png"),
          "5": require("./../fighters/kano/right/high-kick/5.png"),
          "6": require("./../fighters/kano/right/high-kick/6.png")
        },
        "high-punch": {
          "0": require("./../fighters/kano/right/high-punch/0.png"),
          "1": require("./../fighters/kano/right/high-punch/1.png"),
          "2": require("./../fighters/kano/right/high-punch/2.png"),
          "3": require("./../fighters/kano/right/high-punch/3.png"),
          "4": require("./../fighters/kano/right/high-punch/4.png"),
          "5": require("./../fighters/kano/right/high-punch/5.png"),
          "6": require("./../fighters/kano/right/high-punch/6.png"),
          "7": require("./../fighters/kano/right/high-punch/7.png")
        },
        "jumping": {
          "0": require("./../fighters/kano/right/jumping/0.png"),
          "1": require("./../fighters/kano/right/jumping/1.png"),
          "2": require("./../fighters/kano/right/jumping/2.png"),
          "3": require("./../fighters/kano/right/jumping/3.png"),
          "4": require("./../fighters/kano/right/jumping/4.png"),
          "5": require("./../fighters/kano/right/jumping/5.png")
        },
        "knock-down": {
          "0": require("./../fighters/kano/right/knock-down/0.png"),
          "1": require("./../fighters/kano/right/knock-down/1.png"),
          "2": require("./../fighters/kano/right/knock-down/2.png"),
          "3": require("./../fighters/kano/right/knock-down/3.png"),
          "4": require("./../fighters/kano/right/knock-down/4.png"),
          "5": require("./../fighters/kano/right/knock-down/5.png"),
          "6": require("./../fighters/kano/right/knock-down/6.png"),
          "7": require("./../fighters/kano/right/knock-down/7.png"),
          "8": require("./../fighters/kano/right/knock-down/8.png"),
          "9": require("./../fighters/kano/right/knock-down/9.png")
        },
        "low-kick": {
          "0": require("./../fighters/kano/right/low-kick/0.png"),
          "1": require("./../fighters/kano/right/low-kick/1.png"),
          "2": require("./../fighters/kano/right/low-kick/2.png"),
          "3": require("./../fighters/kano/right/low-kick/3.png"),
          "4": require("./../fighters/kano/right/low-kick/4.png"),
          "5": require("./../fighters/kano/right/low-kick/5.png")
        },
        "low-punch": {
          "0": require("./../fighters/kano/right/low-punch/0.png"),
          "1": require("./../fighters/kano/right/low-punch/1.png"),
          "2": require("./../fighters/kano/right/low-punch/2.png"),
          "3": require("./../fighters/kano/right/low-punch/3.png"),
          "4": require("./../fighters/kano/right/low-punch/4.png")
        },
        "spin-kick": {
          "0": require("./../fighters/kano/right/spin-kick/0.png"),
          "1": require("./../fighters/kano/right/spin-kick/1.png"),
          "2": require("./../fighters/kano/right/spin-kick/2.png"),
          "3": require("./../fighters/kano/right/spin-kick/3.png"),
          "4": require("./../fighters/kano/right/spin-kick/4.png"),
          "5": require("./../fighters/kano/right/spin-kick/5.png"),
          "6": require("./../fighters/kano/right/spin-kick/6.png"),
          "7": require("./../fighters/kano/right/spin-kick/7.png")
        },
        "squat-endure": {
          "0": require("./../fighters/kano/right/squat-endure/0.png"),
          "1": require("./../fighters/kano/right/squat-endure/1.png"),
          "2": require("./../fighters/kano/right/squat-endure/2.png")
        },
        "squat-high-kick": {
          "0": require("./../fighters/kano/right/squat-high-kick/0.png"),
          "1": require("./../fighters/kano/right/squat-high-kick/1.png"),
          "2": require("./../fighters/kano/right/squat-high-kick/2.png"),
          "3": require("./../fighters/kano/right/squat-high-kick/3.png")
        },
        "squat-low-kick": {
          "0": require("./../fighters/kano/right/squat-low-kick/0.png"),
          "1": require("./../fighters/kano/right/squat-low-kick/1.png"),
          "2": require("./../fighters/kano/right/squat-low-kick/2.png")
        },
        "squat-low-punch": {
          "0": require("./../fighters/kano/right/squat-low-punch/0.png"),
          "1": require("./../fighters/kano/right/squat-low-punch/1.png"),
          "2": require("./../fighters/kano/right/squat-low-punch/2.png")
        },
        "squating": {
          "0": require("./../fighters/kano/right/squating/0.png"),
          "1": require("./../fighters/kano/right/squating/1.png"),
          "2": require("./../fighters/kano/right/squating/2.png")
        },
        "stand": {
          "0": require("./../fighters/kano/right/stand/0.png"),
          "1": require("./../fighters/kano/right/stand/1.png"),
          "2": require("./../fighters/kano/right/stand/2.png"),
          "3": require("./../fighters/kano/right/stand/3.png"),
          "4": require("./../fighters/kano/right/stand/4.png"),
          "5": require("./../fighters/kano/right/stand/5.png"),
          "6": require("./../fighters/kano/right/stand/6.png"),
          "7": require("./../fighters/kano/right/stand/7.png"),
          "8": require("./../fighters/kano/right/stand/8.png")
        },
        "uppercut": {
          "0": require("./../fighters/kano/right/uppercut/0.png"),
          "1": require("./../fighters/kano/right/uppercut/1.png"),
          "2": require("./../fighters/kano/right/uppercut/2.png"),
          "3": require("./../fighters/kano/right/uppercut/3.png"),
          "4": require("./../fighters/kano/right/uppercut/4.png"),
          "5": require("./../fighters/kano/right/uppercut/5.png")
        },
        "stand-up": {
          "0": require("./../fighters/kano/right/stand-up/0.png"),
          "1": require("./../fighters/kano/right/stand-up/1.png"),
          "2": require("./../fighters/kano/right/stand-up/2.png")
        },
        "walking": {
          "0": require("./../fighters/kano/right/walking/0.png"),
          "1": require("./../fighters/kano/right/walking/1.png"),
          "2": require("./../fighters/kano/right/walking/2.png"),
          "3": require("./../fighters/kano/right/walking/3.png"),
          "4": require("./../fighters/kano/right/walking/4.png"),
          "5": require("./../fighters/kano/right/walking/5.png"),
          "6": require("./../fighters/kano/right/walking/6.png"),
          "7": require("./../fighters/kano/right/walking/7.png"),
          "8": require("./../fighters/kano/right/walking/8.png")
        },
        "walking-backward": {
          "0": require("./../fighters/kano/right/walking-backward/0.png"),
          "1": require("./../fighters/kano/right/walking-backward/1.png"),
          "2": require("./../fighters/kano/right/walking-backward/2.png"),
          "3": require("./../fighters/kano/right/walking-backward/3.png"),
          "4": require("./../fighters/kano/right/walking-backward/4.png"),
          "5": require("./../fighters/kano/right/walking-backward/5.png"),
          "6": require("./../fighters/kano/right/walking-backward/6.png"),
          "7": require("./../fighters/kano/right/walking-backward/7.png"),
          "8": require("./../fighters/kano/right/walking-backward/8.png")
        },
        "win": {
          "0": require("./../fighters/kano/right/win/0.png"),
          "1": require("./../fighters/kano/right/win/1.png"),
          "2": require("./../fighters/kano/right/win/2.png"),
          "3": require("./../fighters/kano/right/win/3.png"),
          "4": require("./../fighters/kano/right/win/4.png"),
          "5": require("./../fighters/kano/right/win/5.png"),
          "6": require("./../fighters/kano/right/win/6.png"),
          "7": require("./../fighters/kano/right/win/7.png"),
          "8": require("./../fighters/kano/right/win/8.png"),
          "9": require("./../fighters/kano/right/win/9.png")
        }
      }
    },
    "subzero": {
      "left": {
        "attractive-stand-up": {
          "0": require("./../fighters/subzero/left/attractive-stand-up/0.png"),
          "1": require("./../fighters/subzero/left/attractive-stand-up/1.png"),
          "2": require("./../fighters/subzero/left/attractive-stand-up/2.png"),
          "3": require("./../fighters/subzero/left/attractive-stand-up/3.png"),
          "4": require("./../fighters/subzero/left/attractive-stand-up/4.png")
        },
        "backward-jump": {
          "0": require("./../fighters/subzero/left/backward-jump/0.png"),
          "1": require("./../fighters/subzero/left/backward-jump/1.png"),
          "2": require("./../fighters/subzero/left/backward-jump/2.png"),
          "3": require("./../fighters/subzero/left/backward-jump/3.png"),
          "4": require("./../fighters/subzero/left/backward-jump/4.png"),
          "5": require("./../fighters/subzero/left/backward-jump/5.png"),
          "6": require("./../fighters/subzero/left/backward-jump/6.png"),
          "7": require("./../fighters/subzero/left/backward-jump/7.png")
        },
        "backward-jump-kick": {
          "0": require("./../fighters/subzero/left/backward-jump-kick/0.png"),
          "1": require("./../fighters/subzero/left/backward-jump-kick/1.png"),
          "2": require("./../fighters/subzero/left/backward-jump-kick/2.png")
        },
        "backward-jump-punch": {
          "0": require("./../fighters/subzero/left/backward-jump-punch/0.png"),
          "1": require("./../fighters/subzero/left/backward-jump-punch/1.png"),
          "2": require("./../fighters/subzero/left/backward-jump-punch/2.png")
        },
        "blocking": {
          "0": require("./../fighters/subzero/left/blocking/0.png"),
          "1": require("./../fighters/subzero/left/blocking/1.png"),
          "2": require("./../fighters/subzero/left/blocking/2.png")
        },
        "endure": {
          "0": require("./../fighters/subzero/left/endure/0.png"),
          "1": require("./../fighters/subzero/left/endure/1.png"),
          "2": require("./../fighters/subzero/left/endure/2.png")
        },
        "fall": {
          "0": require("./../fighters/subzero/left/fall/0.png"),
          "1": require("./../fighters/subzero/left/fall/1.png"),
          "2": require("./../fighters/subzero/left/fall/2.png"),
          "3": require("./../fighters/subzero/left/fall/3.png"),
          "4": require("./../fighters/subzero/left/fall/4.png"),
          "5": require("./../fighters/subzero/left/fall/5.png"),
          "6": require("./../fighters/subzero/left/fall/6.png")
        },
        "forward-jump": {
          "0": require("./../fighters/subzero/left/forward-jump/0.png"),
          "1": require("./../fighters/subzero/left/forward-jump/1.png"),
          "2": require("./../fighters/subzero/left/forward-jump/2.png"),
          "3": require("./../fighters/subzero/left/forward-jump/3.png"),
          "4": require("./../fighters/subzero/left/forward-jump/4.png"),
          "5": require("./../fighters/subzero/left/forward-jump/5.png"),
          "6": require("./../fighters/subzero/left/forward-jump/6.png"),
          "7": require("./../fighters/subzero/left/forward-jump/7.png")
        },
        "forward-jump-kick": {
          "0": require("./../fighters/subzero/left/forward-jump-kick/0.png"),
          "1": require("./../fighters/subzero/left/forward-jump-kick/1.png"),
          "2": require("./../fighters/subzero/left/forward-jump-kick/2.png")
        },
        "forward-jump-punch": {
          "0": require("./../fighters/subzero/left/forward-jump-punch/0.png"),
          "1": require("./../fighters/subzero/left/forward-jump-punch/1.png"),
          "2": require("./../fighters/subzero/left/forward-jump-punch/2.png")
        },
        "high-kick": {
          "0": require("./../fighters/subzero/left/high-kick/0.png"),
          "1": require("./../fighters/subzero/left/high-kick/1.png"),
          "2": require("./../fighters/subzero/left/high-kick/2.png"),
          "3": require("./../fighters/subzero/left/high-kick/3.png"),
          "4": require("./../fighters/subzero/left/high-kick/4.png"),
          "5": require("./../fighters/subzero/left/high-kick/5.png"),
          "6": require("./../fighters/subzero/left/high-kick/6.png")
        },
        "high-punch": {
          "0": require("./../fighters/subzero/left/high-punch/0.png"),
          "1": require("./../fighters/subzero/left/high-punch/1.png"),
          "2": require("./../fighters/subzero/left/high-punch/2.png"),
          "3": require("./../fighters/subzero/left/high-punch/3.png"),
          "4": require("./../fighters/subzero/left/high-punch/4.png"),
          "5": require("./../fighters/subzero/left/high-punch/5.png"),
          "6": require("./../fighters/subzero/left/high-punch/6.png"),
          "7": require("./../fighters/subzero/left/high-punch/7.png")
        },
        "jumping": {
          "0": require("./../fighters/subzero/left/jumping/0.png"),
          "1": require("./../fighters/subzero/left/jumping/1.png"),
          "2": require("./../fighters/subzero/left/jumping/2.png"),
          "3": require("./../fighters/subzero/left/jumping/3.png"),
          "4": require("./../fighters/subzero/left/jumping/4.png"),
          "5": require("./../fighters/subzero/left/jumping/5.png")
        },
        "knock-down": {
          "0": require("./../fighters/subzero/left/knock-down/0.png"),
          "1": require("./../fighters/subzero/left/knock-down/1.png"),
          "2": require("./../fighters/subzero/left/knock-down/2.png"),
          "3": require("./../fighters/subzero/left/knock-down/3.png"),
          "4": require("./../fighters/subzero/left/knock-down/4.png"),
          "5": require("./../fighters/subzero/left/knock-down/5.png"),
          "6": require("./../fighters/subzero/left/knock-down/6.png"),
          "7": require("./../fighters/subzero/left/knock-down/7.png"),
          "8": require("./../fighters/subzero/left/knock-down/8.png"),
          "9": require("./../fighters/subzero/left/knock-down/9.png")
        },
        "low-kick": {
          "0": require("./../fighters/subzero/left/low-kick/0.png"),
          "1": require("./../fighters/subzero/left/low-kick/1.png"),
          "2": require("./../fighters/subzero/left/low-kick/2.png"),
          "3": require("./../fighters/subzero/left/low-kick/3.png"),
          "4": require("./../fighters/subzero/left/low-kick/4.png"),
          "5": require("./../fighters/subzero/left/low-kick/5.png")
        },
        "low-punch": {
          "0": require("./../fighters/subzero/left/low-punch/0.png"),
          "1": require("./../fighters/subzero/left/low-punch/1.png"),
          "2": require("./../fighters/subzero/left/low-punch/2.png"),
          "3": require("./../fighters/subzero/left/low-punch/3.png"),
          "4": require("./../fighters/subzero/left/low-punch/4.png")
        },
        "spin-kick": {
          "0": require("./../fighters/subzero/left/spin-kick/0.png"),
          "1": require("./../fighters/subzero/left/spin-kick/1.png"),
          "2": require("./../fighters/subzero/left/spin-kick/2.png"),
          "3": require("./../fighters/subzero/left/spin-kick/3.png"),
          "4": require("./../fighters/subzero/left/spin-kick/4.png"),
          "5": require("./../fighters/subzero/left/spin-kick/5.png"),
          "6": require("./../fighters/subzero/left/spin-kick/6.png"),
          "7": require("./../fighters/subzero/left/spin-kick/7.png")
        },
        "squat-endure": {
          "0": require("./../fighters/subzero/left/squat-endure/0.png"),
          "1": require("./../fighters/subzero/left/squat-endure/1.png"),
          "2": require("./../fighters/subzero/left/squat-endure/2.png")
        },
        "squat-high-kick": {
          "0": require("./../fighters/subzero/left/squat-high-kick/0.png"),
          "1": require("./../fighters/subzero/left/squat-high-kick/1.png"),
          "2": require("./../fighters/subzero/left/squat-high-kick/2.png"),
          "3": require("./../fighters/subzero/left/squat-high-kick/3.png")
        },
        "squat-low-kick": {
          "0": require("./../fighters/subzero/left/squat-low-kick/0.png"),
          "1": require("./../fighters/subzero/left/squat-low-kick/1.png"),
          "2": require("./../fighters/subzero/left/squat-low-kick/2.png")
        },
        "squat-low-punch": {
          "0": require("./../fighters/subzero/left/squat-low-punch/0.png"),
          "1": require("./../fighters/subzero/left/squat-low-punch/1.png"),
          "2": require("./../fighters/subzero/left/squat-low-punch/2.png")
        },
        "squating": {
          "0": require("./../fighters/subzero/left/squating/0.png"),
          "1": require("./../fighters/subzero/left/squating/1.png"),
          "2": require("./../fighters/subzero/left/squating/2.png")
        },
        "stand": {
          "0": require("./../fighters/subzero/left/stand/0.png"),
          "1": require("./../fighters/subzero/left/stand/1.png"),
          "2": require("./../fighters/subzero/left/stand/2.png"),
          "3": require("./../fighters/subzero/left/stand/3.png"),
          "4": require("./../fighters/subzero/left/stand/4.png"),
          "5": require("./../fighters/subzero/left/stand/5.png"),
          "6": require("./../fighters/subzero/left/stand/6.png"),
          "7": require("./../fighters/subzero/left/stand/7.png"),
          "8": require("./../fighters/subzero/left/stand/8.png"),
          "9": require("./../fighters/subzero/left/stand/9.png")
        },
        "stand-up": {
          "0": require("./../fighters/subzero/left/stand-up/0.png"),
          "1": require("./../fighters/subzero/left/stand-up/1.png"),
          "2": require("./../fighters/subzero/left/stand-up/2.png")
        },
        "uppercut": {
          "0": require("./../fighters/subzero/left/uppercut/0.png"),
          "1": require("./../fighters/subzero/left/uppercut/1.png"),
          "2": require("./../fighters/subzero/left/uppercut/2.png"),
          "3": require("./../fighters/subzero/left/uppercut/3.png"),
          "4": require("./../fighters/subzero/left/uppercut/4.png")
        },
        "walking": {
          "0": require("./../fighters/subzero/left/walking/0.png"),
          "1": require("./../fighters/subzero/left/walking/1.png"),
          "2": require("./../fighters/subzero/left/walking/2.png"),
          "3": require("./../fighters/subzero/left/walking/3.png"),
          "4": require("./../fighters/subzero/left/walking/4.png"),
          "5": require("./../fighters/subzero/left/walking/5.png"),
          "6": require("./../fighters/subzero/left/walking/6.png"),
          "7": require("./../fighters/subzero/left/walking/7.png"),
          "8": require("./../fighters/subzero/left/walking/8.png")
        },
        "walking-backward": {
          "0": require("./../fighters/subzero/left/walking-backward/0.png"),
          "1": require("./../fighters/subzero/left/walking-backward/1.png"),
          "2": require("./../fighters/subzero/left/walking-backward/2.png"),
          "3": require("./../fighters/subzero/left/walking-backward/3.png"),
          "4": require("./../fighters/subzero/left/walking-backward/4.png"),
          "5": require("./../fighters/subzero/left/walking-backward/5.png"),
          "6": require("./../fighters/subzero/left/walking-backward/6.png"),
          "7": require("./../fighters/subzero/left/walking-backward/7.png"),
          "8": require("./../fighters/subzero/left/walking-backward/8.png")
        },
        "win": {
          "0": require("./../fighters/subzero/left/win/0.png"),
          "1": require("./../fighters/subzero/left/win/1.png"),
          "2": require("./../fighters/subzero/left/win/2.png"),
          "3": require("./../fighters/subzero/left/win/3.png"),
          "4": require("./../fighters/subzero/left/win/4.png"),
          "5": require("./../fighters/subzero/left/win/5.png"),
          "6": require("./../fighters/subzero/left/win/6.png"),
          "7": require("./../fighters/subzero/left/win/7.png"),
          "8": require("./../fighters/subzero/left/win/8.png"),
          "9": require("./../fighters/subzero/left/win/9.png")
        }
      },
      "right": {
        "attractive-stand-up": {
          "0": require("./../fighters/subzero/right/attractive-stand-up/0.png"),
          "1": require("./../fighters/subzero/right/attractive-stand-up/1.png"),
          "2": require("./../fighters/subzero/right/attractive-stand-up/2.png"),
          "3": require("./../fighters/subzero/right/attractive-stand-up/3.png"),
          "4": require("./../fighters/subzero/right/attractive-stand-up/4.png")
        },
        "backward-jump": {
          "0": require("./../fighters/subzero/right/backward-jump/0.png"),
          "1": require("./../fighters/subzero/right/backward-jump/1.png"),
          "2": require("./../fighters/subzero/right/backward-jump/2.png"),
          "3": require("./../fighters/subzero/right/backward-jump/3.png"),
          "4": require("./../fighters/subzero/right/backward-jump/4.png"),
          "5": require("./../fighters/subzero/right/backward-jump/5.png"),
          "6": require("./../fighters/subzero/right/backward-jump/6.png"),
          "7": require("./../fighters/subzero/right/backward-jump/7.png")
        },
        "backward-jump-kick": {
          "0": require("./../fighters/subzero/right/backward-jump-kick/0.png"),
          "1": require("./../fighters/subzero/right/backward-jump-kick/1.png"),
          "2": require("./../fighters/subzero/right/backward-jump-kick/2.png")
        },
        "backward-jump-punch": {
          "0": require("./../fighters/subzero/right/backward-jump-punch/0.png"),
          "1": require("./../fighters/subzero/right/backward-jump-punch/1.png"),
          "2": require("./../fighters/subzero/right/backward-jump-punch/2.png")
        },
        "blocking": {
          "0": require("./../fighters/subzero/right/blocking/0.png"),
          "1": require("./../fighters/subzero/right/blocking/1.png"),
          "2": require("./../fighters/subzero/right/blocking/2.png")
        },
        "endure": {
          "0": require("./../fighters/subzero/right/endure/0.png"),
          "1": require("./../fighters/subzero/right/endure/1.png"),
          "2": require("./../fighters/subzero/right/endure/2.png")
        },
        "fall": {
          "0": require("./../fighters/subzero/right/fall/0.png"),
          "1": require("./../fighters/subzero/right/fall/1.png"),
          "2": require("./../fighters/subzero/right/fall/2.png"),
          "3": require("./../fighters/subzero/right/fall/3.png"),
          "4": require("./../fighters/subzero/right/fall/4.png"),
          "5": require("./../fighters/subzero/right/fall/5.png"),
          "6": require("./../fighters/subzero/right/fall/6.png")
        },
        "forward-jump": {
          "0": require("./../fighters/subzero/right/forward-jump/0.png"),
          "1": require("./../fighters/subzero/right/forward-jump/1.png"),
          "2": require("./../fighters/subzero/right/forward-jump/2.png"),
          "3": require("./../fighters/subzero/right/forward-jump/3.png"),
          "4": require("./../fighters/subzero/right/forward-jump/4.png"),
          "5": require("./../fighters/subzero/right/forward-jump/5.png"),
          "6": require("./../fighters/subzero/right/forward-jump/6.png"),
          "7": require("./../fighters/subzero/right/forward-jump/7.png")
        },
        "forward-jump-kick": {
          "0": require("./../fighters/subzero/right/forward-jump-kick/0.png"),
          "1": require("./../fighters/subzero/right/forward-jump-kick/1.png"),
          "2": require("./../fighters/subzero/right/forward-jump-kick/2.png")
        },
        "forward-jump-punch": {
          "0": require("./../fighters/subzero/right/forward-jump-punch/0.png"),
          "1": require("./../fighters/subzero/right/forward-jump-punch/1.png"),
          "2": require("./../fighters/subzero/right/forward-jump-punch/2.png")
        },
        "high-kick": {
          "0": require("./../fighters/subzero/right/high-kick/0.png"),
          "1": require("./../fighters/subzero/right/high-kick/1.png"),
          "2": require("./../fighters/subzero/right/high-kick/2.png"),
          "3": require("./../fighters/subzero/right/high-kick/3.png"),
          "4": require("./../fighters/subzero/right/high-kick/4.png"),
          "5": require("./../fighters/subzero/right/high-kick/5.png"),
          "6": require("./../fighters/subzero/right/high-kick/6.png")
        },
        "high-punch": {
          "0": require("./../fighters/subzero/right/high-punch/0.png"),
          "1": require("./../fighters/subzero/right/high-punch/1.png"),
          "2": require("./../fighters/subzero/right/high-punch/2.png"),
          "3": require("./../fighters/subzero/right/high-punch/3.png"),
          "4": require("./../fighters/subzero/right/high-punch/4.png"),
          "5": require("./../fighters/subzero/right/high-punch/5.png"),
          "6": require("./../fighters/subzero/right/high-punch/6.png"),
          "7": require("./../fighters/subzero/right/high-punch/7.png")
        },
        "jumping": {
          "0": require("./../fighters/subzero/right/jumping/0.png"),
          "1": require("./../fighters/subzero/right/jumping/1.png"),
          "2": require("./../fighters/subzero/right/jumping/2.png"),
          "3": require("./../fighters/subzero/right/jumping/3.png"),
          "4": require("./../fighters/subzero/right/jumping/4.png"),
          "5": require("./../fighters/subzero/right/jumping/5.png")
        },
        "knock-down": {
          "0": require("./../fighters/subzero/right/knock-down/0.png"),
          "1": require("./../fighters/subzero/right/knock-down/1.png"),
          "2": require("./../fighters/subzero/right/knock-down/2.png"),
          "3": require("./../fighters/subzero/right/knock-down/3.png"),
          "4": require("./../fighters/subzero/right/knock-down/4.png"),
          "5": require("./../fighters/subzero/right/knock-down/5.png"),
          "6": require("./../fighters/subzero/right/knock-down/6.png"),
          "7": require("./../fighters/subzero/right/knock-down/7.png"),
          "8": require("./../fighters/subzero/right/knock-down/8.png"),
          "9": require("./../fighters/subzero/right/knock-down/9.png")
        },
        "low-kick": {
          "0": require("./../fighters/subzero/right/low-kick/0.png"),
          "1": require("./../fighters/subzero/right/low-kick/1.png"),
          "2": require("./../fighters/subzero/right/low-kick/2.png"),
          "3": require("./../fighters/subzero/right/low-kick/3.png"),
          "4": require("./../fighters/subzero/right/low-kick/4.png"),
          "5": require("./../fighters/subzero/right/low-kick/5.png")
        },
        "low-punch": {
          "0": require("./../fighters/subzero/right/low-punch/0.png"),
          "1": require("./../fighters/subzero/right/low-punch/1.png"),
          "2": require("./../fighters/subzero/right/low-punch/2.png"),
          "3": require("./../fighters/subzero/right/low-punch/3.png"),
          "4": require("./../fighters/subzero/right/low-punch/4.png")
        },
        "spin-kick": {
          "0": require("./../fighters/subzero/right/spin-kick/0.png"),
          "1": require("./../fighters/subzero/right/spin-kick/1.png"),
          "2": require("./../fighters/subzero/right/spin-kick/2.png"),
          "3": require("./../fighters/subzero/right/spin-kick/3.png"),
          "4": require("./../fighters/subzero/right/spin-kick/4.png"),
          "5": require("./../fighters/subzero/right/spin-kick/5.png"),
          "6": require("./../fighters/subzero/right/spin-kick/6.png"),
          "7": require("./../fighters/subzero/right/spin-kick/7.png")
        },
        "squat-endure": {
          "0": require("./../fighters/subzero/right/squat-endure/0.png"),
          "1": require("./../fighters/subzero/right/squat-endure/1.png"),
          "2": require("./../fighters/subzero/right/squat-endure/2.png")
        },
        "squat-high-kick": {
          "0": require("./../fighters/subzero/right/squat-high-kick/0.png"),
          "1": require("./../fighters/subzero/right/squat-high-kick/1.png"),
          "2": require("./../fighters/subzero/right/squat-high-kick/2.png"),
          "3": require("./../fighters/subzero/right/squat-high-kick/3.png")
        },
        "squat-low-kick": {
          "0": require("./../fighters/subzero/right/squat-low-kick/0.png"),
          "1": require("./../fighters/subzero/right/squat-low-kick/1.png"),
          "2": require("./../fighters/subzero/right/squat-low-kick/2.png")
        },
        "squat-low-punch": {
          "0": require("./../fighters/subzero/right/squat-low-punch/0.png"),
          "1": require("./../fighters/subzero/right/squat-low-punch/1.png"),
          "2": require("./../fighters/subzero/right/squat-low-punch/2.png")
        },
        "squating": {
          "0": require("./../fighters/subzero/right/squating/0.png"),
          "1": require("./../fighters/subzero/right/squating/1.png"),
          "2": require("./../fighters/subzero/right/squating/2.png")
        },
        "stand": {
          "0": require("./../fighters/subzero/right/stand/0.png"),
          "1": require("./../fighters/subzero/right/stand/1.png"),
          "2": require("./../fighters/subzero/right/stand/2.png"),
          "3": require("./../fighters/subzero/right/stand/3.png"),
          "4": require("./../fighters/subzero/right/stand/4.png"),
          "5": require("./../fighters/subzero/right/stand/5.png"),
          "6": require("./../fighters/subzero/right/stand/6.png"),
          "7": require("./../fighters/subzero/right/stand/7.png"),
          "8": require("./../fighters/subzero/right/stand/8.png")
        },
        "stand-up": {
          "0": require("./../fighters/subzero/right/stand-up/0.png"),
          "1": require("./../fighters/subzero/right/stand-up/1.png"),
          "2": require("./../fighters/subzero/right/stand-up/2.png")
        },
        "uppercut": {
          "0": require("./../fighters/subzero/right/uppercut/0.png"),
          "1": require("./../fighters/subzero/right/uppercut/1.png"),
          "2": require("./../fighters/subzero/right/uppercut/2.png"),
          "3": require("./../fighters/subzero/right/uppercut/3.png"),
          "4": require("./../fighters/subzero/right/uppercut/4.png")
        },
        "walking": {
          "0": require("./../fighters/subzero/right/walking/0.png"),
          "1": require("./../fighters/subzero/right/walking/1.png"),
          "2": require("./../fighters/subzero/right/walking/2.png"),
          "3": require("./../fighters/subzero/right/walking/3.png"),
          "4": require("./../fighters/subzero/right/walking/4.png"),
          "5": require("./../fighters/subzero/right/walking/5.png"),
          "6": require("./../fighters/subzero/right/walking/6.png"),
          "7": require("./../fighters/subzero/right/walking/7.png"),
          "8": require("./../fighters/subzero/right/walking/8.png")
        },
        "walking-backward": {
          "0": require("./../fighters/subzero/right/walking-backward/0.png"),
          "1": require("./../fighters/subzero/right/walking-backward/1.png"),
          "2": require("./../fighters/subzero/right/walking-backward/2.png"),
          "3": require("./../fighters/subzero/right/walking-backward/3.png"),
          "4": require("./../fighters/subzero/right/walking-backward/4.png"),
          "5": require("./../fighters/subzero/right/walking-backward/5.png"),
          "6": require("./../fighters/subzero/right/walking-backward/6.png"),
          "7": require("./../fighters/subzero/right/walking-backward/7.png"),
          "8": require("./../fighters/subzero/right/walking-backward/8.png")
        },
        "win": {
          "0": require("./../fighters/subzero/right/win/0.png"),
          "1": require("./../fighters/subzero/right/win/1.png"),
          "2": require("./../fighters/subzero/right/win/2.png"),
          "3": require("./../fighters/subzero/right/win/3.png"),
          "4": require("./../fighters/subzero/right/win/4.png"),
          "5": require("./../fighters/subzero/right/win/5.png"),
          "6": require("./../fighters/subzero/right/win/6.png"),
          "7": require("./../fighters/subzero/right/win/7.png"),
          "8": require("./../fighters/subzero/right/win/8.png"),
          "9": require("./../fighters/subzero/right/win/9.png")
        }
      }
    }
  }
};
},{"./../arenas/0/arena.png":"images/arenas/0/arena.png","./../arenas/1/arena.png":"images/arenas/1/arena.png","./../fighters/kano/left/attractive-stand-up/0.png":"images/fighters/kano/left/attractive-stand-up/0.png","./../fighters/kano/left/attractive-stand-up/1.png":"images/fighters/kano/left/attractive-stand-up/1.png","./../fighters/kano/left/attractive-stand-up/2.png":"images/fighters/kano/left/attractive-stand-up/2.png","./../fighters/kano/left/attractive-stand-up/3.png":"images/fighters/kano/left/attractive-stand-up/3.png","./../fighters/kano/left/backward-jump/0.png":"images/fighters/kano/left/backward-jump/0.png","./../fighters/kano/left/backward-jump/1.png":"images/fighters/kano/left/backward-jump/1.png","./../fighters/kano/left/backward-jump/2.png":"images/fighters/kano/left/backward-jump/2.png","./../fighters/kano/left/backward-jump/3.png":"images/fighters/kano/left/backward-jump/3.png","./../fighters/kano/left/backward-jump/4.png":"images/fighters/kano/left/backward-jump/4.png","./../fighters/kano/left/backward-jump/5.png":"images/fighters/kano/left/backward-jump/5.png","./../fighters/kano/left/backward-jump/6.png":"images/fighters/kano/left/backward-jump/6.png","./../fighters/kano/left/backward-jump/7.png":"images/fighters/kano/left/backward-jump/7.png","./../fighters/kano/left/backward-jump-kick/0.png":"images/fighters/kano/left/backward-jump-kick/0.png","./../fighters/kano/left/backward-jump-kick/1.png":"images/fighters/kano/left/backward-jump-kick/1.png","./../fighters/kano/left/backward-jump-kick/2.png":"images/fighters/kano/left/backward-jump-kick/2.png","./../fighters/kano/left/backward-jump-punch/0.png":"images/fighters/kano/left/backward-jump-punch/0.png","./../fighters/kano/left/backward-jump-punch/1.png":"images/fighters/kano/left/backward-jump-punch/1.png","./../fighters/kano/left/backward-jump-punch/2.png":"images/fighters/kano/left/backward-jump-punch/2.png","./../fighters/kano/left/blocking/0.png":"images/fighters/kano/left/blocking/0.png","./../fighters/kano/left/blocking/1.png":"images/fighters/kano/left/blocking/1.png","./../fighters/kano/left/blocking/2.png":"images/fighters/kano/left/blocking/2.png","./../fighters/kano/left/endure/0.png":"images/fighters/kano/left/endure/0.png","./../fighters/kano/left/endure/1.png":"images/fighters/kano/left/endure/1.png","./../fighters/kano/left/endure/2.png":"images/fighters/kano/left/endure/2.png","./../fighters/kano/left/fall/0.png":"images/fighters/kano/left/fall/0.png","./../fighters/kano/left/fall/1.png":"images/fighters/kano/left/fall/1.png","./../fighters/kano/left/fall/2.png":"images/fighters/kano/left/fall/2.png","./../fighters/kano/left/fall/3.png":"images/fighters/kano/left/fall/3.png","./../fighters/kano/left/fall/4.png":"images/fighters/kano/left/fall/4.png","./../fighters/kano/left/fall/5.png":"images/fighters/kano/left/fall/5.png","./../fighters/kano/left/fall/6.png":"images/fighters/kano/left/fall/6.png","./../fighters/kano/left/forward-jump/0.png":"images/fighters/kano/left/forward-jump/0.png","./../fighters/kano/left/forward-jump/1.png":"images/fighters/kano/left/forward-jump/1.png","./../fighters/kano/left/forward-jump/2.png":"images/fighters/kano/left/forward-jump/2.png","./../fighters/kano/left/forward-jump/3.png":"images/fighters/kano/left/forward-jump/3.png","./../fighters/kano/left/forward-jump/4.png":"images/fighters/kano/left/forward-jump/4.png","./../fighters/kano/left/forward-jump/5.png":"images/fighters/kano/left/forward-jump/5.png","./../fighters/kano/left/forward-jump/6.png":"images/fighters/kano/left/forward-jump/6.png","./../fighters/kano/left/forward-jump/7.png":"images/fighters/kano/left/forward-jump/7.png","./../fighters/kano/left/forward-jump-kick/0.png":"images/fighters/kano/left/forward-jump-kick/0.png","./../fighters/kano/left/forward-jump-kick/1.png":"images/fighters/kano/left/forward-jump-kick/1.png","./../fighters/kano/left/forward-jump-kick/2.png":"images/fighters/kano/left/forward-jump-kick/2.png","./../fighters/kano/left/forward-jump-punch/0.png":"images/fighters/kano/left/forward-jump-punch/0.png","./../fighters/kano/left/forward-jump-punch/1.png":"images/fighters/kano/left/forward-jump-punch/1.png","./../fighters/kano/left/forward-jump-punch/2.png":"images/fighters/kano/left/forward-jump-punch/2.png","./../fighters/kano/left/high-kick/0.png":"images/fighters/kano/left/high-kick/0.png","./../fighters/kano/left/high-kick/1.png":"images/fighters/kano/left/high-kick/1.png","./../fighters/kano/left/high-kick/2.png":"images/fighters/kano/left/high-kick/2.png","./../fighters/kano/left/high-kick/3.png":"images/fighters/kano/left/high-kick/3.png","./../fighters/kano/left/high-kick/4.png":"images/fighters/kano/left/high-kick/4.png","./../fighters/kano/left/high-kick/5.png":"images/fighters/kano/left/high-kick/5.png","./../fighters/kano/left/high-kick/6.png":"images/fighters/kano/left/high-kick/6.png","./../fighters/kano/left/high-punch/0.png":"images/fighters/kano/left/high-punch/0.png","./../fighters/kano/left/high-punch/1.png":"images/fighters/kano/left/high-punch/1.png","./../fighters/kano/left/high-punch/2.png":"images/fighters/kano/left/high-punch/2.png","./../fighters/kano/left/high-punch/3.png":"images/fighters/kano/left/high-punch/3.png","./../fighters/kano/left/high-punch/4.png":"images/fighters/kano/left/high-punch/4.png","./../fighters/kano/left/high-punch/5.png":"images/fighters/kano/left/high-punch/5.png","./../fighters/kano/left/high-punch/6.png":"images/fighters/kano/left/high-punch/6.png","./../fighters/kano/left/high-punch/7.png":"images/fighters/kano/left/high-punch/7.png","./../fighters/kano/left/jumping/0.png":"images/fighters/kano/left/jumping/0.png","./../fighters/kano/left/jumping/1.png":"images/fighters/kano/left/jumping/1.png","./../fighters/kano/left/jumping/2.png":"images/fighters/kano/left/jumping/2.png","./../fighters/kano/left/jumping/3.png":"images/fighters/kano/left/jumping/3.png","./../fighters/kano/left/jumping/4.png":"images/fighters/kano/left/jumping/4.png","./../fighters/kano/left/jumping/5.png":"images/fighters/kano/left/jumping/5.png","./../fighters/kano/left/knock-down/0.png":"images/fighters/kano/left/knock-down/0.png","./../fighters/kano/left/knock-down/1.png":"images/fighters/kano/left/knock-down/1.png","./../fighters/kano/left/knock-down/2.png":"images/fighters/kano/left/knock-down/2.png","./../fighters/kano/left/knock-down/3.png":"images/fighters/kano/left/knock-down/3.png","./../fighters/kano/left/knock-down/4.png":"images/fighters/kano/left/knock-down/4.png","./../fighters/kano/left/knock-down/5.png":"images/fighters/kano/left/knock-down/5.png","./../fighters/kano/left/knock-down/6.png":"images/fighters/kano/left/knock-down/6.png","./../fighters/kano/left/knock-down/7.png":"images/fighters/kano/left/knock-down/7.png","./../fighters/kano/left/knock-down/8.png":"images/fighters/kano/left/knock-down/8.png","./../fighters/kano/left/knock-down/9.png":"images/fighters/kano/left/knock-down/9.png","./../fighters/kano/left/low-kick/0.png":"images/fighters/kano/left/low-kick/0.png","./../fighters/kano/left/low-kick/1.png":"images/fighters/kano/left/low-kick/1.png","./../fighters/kano/left/low-kick/2.png":"images/fighters/kano/left/low-kick/2.png","./../fighters/kano/left/low-kick/3.png":"images/fighters/kano/left/low-kick/3.png","./../fighters/kano/left/low-kick/4.png":"images/fighters/kano/left/low-kick/4.png","./../fighters/kano/left/low-kick/5.png":"images/fighters/kano/left/low-kick/5.png","./../fighters/kano/left/low-punch/0.png":"images/fighters/kano/left/low-punch/0.png","./../fighters/kano/left/low-punch/1.png":"images/fighters/kano/left/low-punch/1.png","./../fighters/kano/left/low-punch/2.png":"images/fighters/kano/left/low-punch/2.png","./../fighters/kano/left/low-punch/3.png":"images/fighters/kano/left/low-punch/3.png","./../fighters/kano/left/low-punch/4.png":"images/fighters/kano/left/low-punch/4.png","./../fighters/kano/left/spin-kick/0.png":"images/fighters/kano/left/spin-kick/0.png","./../fighters/kano/left/spin-kick/1.png":"images/fighters/kano/left/spin-kick/1.png","./../fighters/kano/left/spin-kick/2.png":"images/fighters/kano/left/spin-kick/2.png","./../fighters/kano/left/spin-kick/3.png":"images/fighters/kano/left/spin-kick/3.png","./../fighters/kano/left/spin-kick/4.png":"images/fighters/kano/left/spin-kick/4.png","./../fighters/kano/left/spin-kick/5.png":"images/fighters/kano/left/spin-kick/5.png","./../fighters/kano/left/spin-kick/6.png":"images/fighters/kano/left/spin-kick/6.png","./../fighters/kano/left/spin-kick/7.png":"images/fighters/kano/left/spin-kick/7.png","./../fighters/kano/left/squat-endure/0.png":"images/fighters/kano/left/squat-endure/0.png","./../fighters/kano/left/squat-endure/1.png":"images/fighters/kano/left/squat-endure/1.png","./../fighters/kano/left/squat-endure/2.png":"images/fighters/kano/left/squat-endure/2.png","./../fighters/kano/left/squat-high-kick/0.png":"images/fighters/kano/left/squat-high-kick/0.png","./../fighters/kano/left/squat-high-kick/1.png":"images/fighters/kano/left/squat-high-kick/1.png","./../fighters/kano/left/squat-high-kick/2.png":"images/fighters/kano/left/squat-high-kick/2.png","./../fighters/kano/left/squat-high-kick/3.png":"images/fighters/kano/left/squat-high-kick/3.png","./../fighters/kano/left/squat-low-kick/0.png":"images/fighters/kano/left/squat-low-kick/0.png","./../fighters/kano/left/squat-low-kick/1.png":"images/fighters/kano/left/squat-low-kick/1.png","./../fighters/kano/left/squat-low-kick/2.png":"images/fighters/kano/left/squat-low-kick/2.png","./../fighters/kano/left/squat-low-punch/0.png":"images/fighters/kano/left/squat-low-punch/0.png","./../fighters/kano/left/squat-low-punch/1.png":"images/fighters/kano/left/squat-low-punch/1.png","./../fighters/kano/left/squat-low-punch/2.png":"images/fighters/kano/left/squat-low-punch/2.png","./../fighters/kano/left/squating/0.png":"images/fighters/kano/left/squating/0.png","./../fighters/kano/left/squating/1.png":"images/fighters/kano/left/squating/1.png","./../fighters/kano/left/squating/2.png":"images/fighters/kano/left/squating/2.png","./../fighters/kano/left/stand/0.png":"images/fighters/kano/left/stand/0.png","./../fighters/kano/left/stand/1.png":"images/fighters/kano/left/stand/1.png","./../fighters/kano/left/stand/2.png":"images/fighters/kano/left/stand/2.png","./../fighters/kano/left/stand/3.png":"images/fighters/kano/left/stand/3.png","./../fighters/kano/left/stand/4.png":"images/fighters/kano/left/stand/4.png","./../fighters/kano/left/stand/5.png":"images/fighters/kano/left/stand/5.png","./../fighters/kano/left/stand/6.png":"images/fighters/kano/left/stand/6.png","./../fighters/kano/left/stand/7.png":"images/fighters/kano/left/stand/7.png","./../fighters/kano/left/stand/8.png":"images/fighters/kano/left/stand/8.png","./../fighters/kano/left/stand-up/0.png":"images/fighters/kano/left/stand-up/0.png","./../fighters/kano/left/stand-up/1.png":"images/fighters/kano/left/stand-up/1.png","./../fighters/kano/left/stand-up/2.png":"images/fighters/kano/left/stand-up/2.png","./../fighters/kano/left/uppercut/0.png":"images/fighters/kano/left/uppercut/0.png","./../fighters/kano/left/uppercut/1.png":"images/fighters/kano/left/uppercut/1.png","./../fighters/kano/left/uppercut/2.png":"images/fighters/kano/left/uppercut/2.png","./../fighters/kano/left/uppercut/3.png":"images/fighters/kano/left/uppercut/3.png","./../fighters/kano/left/uppercut/4.png":"images/fighters/kano/left/uppercut/4.png","./../fighters/kano/left/uppercut/5.png":"images/fighters/kano/left/uppercut/5.png","./../fighters/kano/left/walking/0.png":"images/fighters/kano/left/walking/0.png","./../fighters/kano/left/walking/1.png":"images/fighters/kano/left/walking/1.png","./../fighters/kano/left/walking/2.png":"images/fighters/kano/left/walking/2.png","./../fighters/kano/left/walking/3.png":"images/fighters/kano/left/walking/3.png","./../fighters/kano/left/walking/4.png":"images/fighters/kano/left/walking/4.png","./../fighters/kano/left/walking/5.png":"images/fighters/kano/left/walking/5.png","./../fighters/kano/left/walking/6.png":"images/fighters/kano/left/walking/6.png","./../fighters/kano/left/walking/7.png":"images/fighters/kano/left/walking/7.png","./../fighters/kano/left/walking/8.png":"images/fighters/kano/left/walking/8.png","./../fighters/kano/left/walking-backward/0.png":"images/fighters/kano/left/walking-backward/0.png","./../fighters/kano/left/walking-backward/1.png":"images/fighters/kano/left/walking-backward/1.png","./../fighters/kano/left/walking-backward/2.png":"images/fighters/kano/left/walking-backward/2.png","./../fighters/kano/left/walking-backward/3.png":"images/fighters/kano/left/walking-backward/3.png","./../fighters/kano/left/walking-backward/4.png":"images/fighters/kano/left/walking-backward/4.png","./../fighters/kano/left/walking-backward/5.png":"images/fighters/kano/left/walking-backward/5.png","./../fighters/kano/left/walking-backward/6.png":"images/fighters/kano/left/walking-backward/6.png","./../fighters/kano/left/walking-backward/7.png":"images/fighters/kano/left/walking-backward/7.png","./../fighters/kano/left/walking-backward/8.png":"images/fighters/kano/left/walking-backward/8.png","./../fighters/kano/left/win/0.png":"images/fighters/kano/left/win/0.png","./../fighters/kano/left/win/1.png":"images/fighters/kano/left/win/1.png","./../fighters/kano/left/win/2.png":"images/fighters/kano/left/win/2.png","./../fighters/kano/left/win/3.png":"images/fighters/kano/left/win/3.png","./../fighters/kano/left/win/4.png":"images/fighters/kano/left/win/4.png","./../fighters/kano/left/win/5.png":"images/fighters/kano/left/win/5.png","./../fighters/kano/left/win/6.png":"images/fighters/kano/left/win/6.png","./../fighters/kano/left/win/7.png":"images/fighters/kano/left/win/7.png","./../fighters/kano/left/win/8.png":"images/fighters/kano/left/win/8.png","./../fighters/kano/left/win/9.png":"images/fighters/kano/left/win/9.png","./../fighters/kano/right/backward-jump/0.png":"images/fighters/kano/right/backward-jump/0.png","./../fighters/kano/right/backward-jump/1.png":"images/fighters/kano/right/backward-jump/1.png","./../fighters/kano/right/backward-jump/2.png":"images/fighters/kano/right/backward-jump/2.png","./../fighters/kano/right/backward-jump/3.png":"images/fighters/kano/right/backward-jump/3.png","./../fighters/kano/right/backward-jump/4.png":"images/fighters/kano/right/backward-jump/4.png","./../fighters/kano/right/backward-jump/5.png":"images/fighters/kano/right/backward-jump/5.png","./../fighters/kano/right/backward-jump/6.png":"images/fighters/kano/right/backward-jump/6.png","./../fighters/kano/right/backward-jump/7.png":"images/fighters/kano/right/backward-jump/7.png","./../fighters/kano/right/attractive-stand-up/0.png":"images/fighters/kano/right/attractive-stand-up/0.png","./../fighters/kano/right/attractive-stand-up/1.png":"images/fighters/kano/right/attractive-stand-up/1.png","./../fighters/kano/right/attractive-stand-up/2.png":"images/fighters/kano/right/attractive-stand-up/2.png","./../fighters/kano/right/attractive-stand-up/3.png":"images/fighters/kano/right/attractive-stand-up/3.png","./../fighters/kano/right/backward-jump-kick/0.png":"images/fighters/kano/right/backward-jump-kick/0.png","./../fighters/kano/right/backward-jump-kick/1.png":"images/fighters/kano/right/backward-jump-kick/1.png","./../fighters/kano/right/backward-jump-kick/2.png":"images/fighters/kano/right/backward-jump-kick/2.png","./../fighters/kano/right/backward-jump-punch/0.png":"images/fighters/kano/right/backward-jump-punch/0.png","./../fighters/kano/right/backward-jump-punch/1.png":"images/fighters/kano/right/backward-jump-punch/1.png","./../fighters/kano/right/backward-jump-punch/2.png":"images/fighters/kano/right/backward-jump-punch/2.png","./../fighters/kano/right/blocking/0.png":"images/fighters/kano/right/blocking/0.png","./../fighters/kano/right/blocking/1.png":"images/fighters/kano/right/blocking/1.png","./../fighters/kano/right/blocking/2.png":"images/fighters/kano/right/blocking/2.png","./../fighters/kano/right/endure/0.png":"images/fighters/kano/right/endure/0.png","./../fighters/kano/right/endure/1.png":"images/fighters/kano/right/endure/1.png","./../fighters/kano/right/endure/2.png":"images/fighters/kano/right/endure/2.png","./../fighters/kano/right/fall/0.png":"images/fighters/kano/right/fall/0.png","./../fighters/kano/right/fall/1.png":"images/fighters/kano/right/fall/1.png","./../fighters/kano/right/fall/2.png":"images/fighters/kano/right/fall/2.png","./../fighters/kano/right/fall/3.png":"images/fighters/kano/right/fall/3.png","./../fighters/kano/right/fall/4.png":"images/fighters/kano/right/fall/4.png","./../fighters/kano/right/fall/5.png":"images/fighters/kano/right/fall/5.png","./../fighters/kano/right/fall/6.png":"images/fighters/kano/right/fall/6.png","./../fighters/kano/right/forward-jump/0.png":"images/fighters/kano/right/forward-jump/0.png","./../fighters/kano/right/forward-jump/1.png":"images/fighters/kano/right/forward-jump/1.png","./../fighters/kano/right/forward-jump/2.png":"images/fighters/kano/right/forward-jump/2.png","./../fighters/kano/right/forward-jump/3.png":"images/fighters/kano/right/forward-jump/3.png","./../fighters/kano/right/forward-jump/4.png":"images/fighters/kano/right/forward-jump/4.png","./../fighters/kano/right/forward-jump/5.png":"images/fighters/kano/right/forward-jump/5.png","./../fighters/kano/right/forward-jump/6.png":"images/fighters/kano/right/forward-jump/6.png","./../fighters/kano/right/forward-jump/7.png":"images/fighters/kano/right/forward-jump/7.png","./../fighters/kano/right/forward-jump-kick/0.png":"images/fighters/kano/right/forward-jump-kick/0.png","./../fighters/kano/right/forward-jump-kick/1.png":"images/fighters/kano/right/forward-jump-kick/1.png","./../fighters/kano/right/forward-jump-kick/2.png":"images/fighters/kano/right/forward-jump-kick/2.png","./../fighters/kano/right/forward-jump-punch/0.png":"images/fighters/kano/right/forward-jump-punch/0.png","./../fighters/kano/right/forward-jump-punch/1.png":"images/fighters/kano/right/forward-jump-punch/1.png","./../fighters/kano/right/forward-jump-punch/2.png":"images/fighters/kano/right/forward-jump-punch/2.png","./../fighters/kano/right/high-kick/0.png":"images/fighters/kano/right/high-kick/0.png","./../fighters/kano/right/high-kick/1.png":"images/fighters/kano/right/high-kick/1.png","./../fighters/kano/right/high-kick/2.png":"images/fighters/kano/right/high-kick/2.png","./../fighters/kano/right/high-kick/3.png":"images/fighters/kano/right/high-kick/3.png","./../fighters/kano/right/high-kick/4.png":"images/fighters/kano/right/high-kick/4.png","./../fighters/kano/right/high-kick/5.png":"images/fighters/kano/right/high-kick/5.png","./../fighters/kano/right/high-kick/6.png":"images/fighters/kano/right/high-kick/6.png","./../fighters/kano/right/high-punch/0.png":"images/fighters/kano/right/high-punch/0.png","./../fighters/kano/right/high-punch/1.png":"images/fighters/kano/right/high-punch/1.png","./../fighters/kano/right/high-punch/2.png":"images/fighters/kano/right/high-punch/2.png","./../fighters/kano/right/high-punch/3.png":"images/fighters/kano/right/high-punch/3.png","./../fighters/kano/right/high-punch/4.png":"images/fighters/kano/right/high-punch/4.png","./../fighters/kano/right/high-punch/5.png":"images/fighters/kano/right/high-punch/5.png","./../fighters/kano/right/high-punch/6.png":"images/fighters/kano/right/high-punch/6.png","./../fighters/kano/right/high-punch/7.png":"images/fighters/kano/right/high-punch/7.png","./../fighters/kano/right/jumping/0.png":"images/fighters/kano/right/jumping/0.png","./../fighters/kano/right/jumping/1.png":"images/fighters/kano/right/jumping/1.png","./../fighters/kano/right/jumping/2.png":"images/fighters/kano/right/jumping/2.png","./../fighters/kano/right/jumping/3.png":"images/fighters/kano/right/jumping/3.png","./../fighters/kano/right/jumping/4.png":"images/fighters/kano/right/jumping/4.png","./../fighters/kano/right/jumping/5.png":"images/fighters/kano/right/jumping/5.png","./../fighters/kano/right/knock-down/0.png":"images/fighters/kano/right/knock-down/0.png","./../fighters/kano/right/knock-down/1.png":"images/fighters/kano/right/knock-down/1.png","./../fighters/kano/right/knock-down/2.png":"images/fighters/kano/right/knock-down/2.png","./../fighters/kano/right/knock-down/3.png":"images/fighters/kano/right/knock-down/3.png","./../fighters/kano/right/knock-down/4.png":"images/fighters/kano/right/knock-down/4.png","./../fighters/kano/right/knock-down/5.png":"images/fighters/kano/right/knock-down/5.png","./../fighters/kano/right/knock-down/6.png":"images/fighters/kano/right/knock-down/6.png","./../fighters/kano/right/knock-down/7.png":"images/fighters/kano/right/knock-down/7.png","./../fighters/kano/right/knock-down/8.png":"images/fighters/kano/right/knock-down/8.png","./../fighters/kano/right/knock-down/9.png":"images/fighters/kano/right/knock-down/9.png","./../fighters/kano/right/low-kick/0.png":"images/fighters/kano/right/low-kick/0.png","./../fighters/kano/right/low-kick/1.png":"images/fighters/kano/right/low-kick/1.png","./../fighters/kano/right/low-kick/2.png":"images/fighters/kano/right/low-kick/2.png","./../fighters/kano/right/low-kick/3.png":"images/fighters/kano/right/low-kick/3.png","./../fighters/kano/right/low-kick/4.png":"images/fighters/kano/right/low-kick/4.png","./../fighters/kano/right/low-kick/5.png":"images/fighters/kano/right/low-kick/5.png","./../fighters/kano/right/low-punch/0.png":"images/fighters/kano/right/low-punch/0.png","./../fighters/kano/right/low-punch/1.png":"images/fighters/kano/right/low-punch/1.png","./../fighters/kano/right/low-punch/2.png":"images/fighters/kano/right/low-punch/2.png","./../fighters/kano/right/low-punch/3.png":"images/fighters/kano/right/low-punch/3.png","./../fighters/kano/right/low-punch/4.png":"images/fighters/kano/right/low-punch/4.png","./../fighters/kano/right/spin-kick/0.png":"images/fighters/kano/right/spin-kick/0.png","./../fighters/kano/right/spin-kick/1.png":"images/fighters/kano/right/spin-kick/1.png","./../fighters/kano/right/spin-kick/2.png":"images/fighters/kano/right/spin-kick/2.png","./../fighters/kano/right/spin-kick/3.png":"images/fighters/kano/right/spin-kick/3.png","./../fighters/kano/right/spin-kick/4.png":"images/fighters/kano/right/spin-kick/4.png","./../fighters/kano/right/spin-kick/5.png":"images/fighters/kano/right/spin-kick/5.png","./../fighters/kano/right/spin-kick/6.png":"images/fighters/kano/right/spin-kick/6.png","./../fighters/kano/right/spin-kick/7.png":"images/fighters/kano/right/spin-kick/7.png","./../fighters/kano/right/squat-endure/0.png":"images/fighters/kano/right/squat-endure/0.png","./../fighters/kano/right/squat-endure/1.png":"images/fighters/kano/right/squat-endure/1.png","./../fighters/kano/right/squat-endure/2.png":"images/fighters/kano/right/squat-endure/2.png","./../fighters/kano/right/squat-high-kick/0.png":"images/fighters/kano/right/squat-high-kick/0.png","./../fighters/kano/right/squat-high-kick/1.png":"images/fighters/kano/right/squat-high-kick/1.png","./../fighters/kano/right/squat-high-kick/2.png":"images/fighters/kano/right/squat-high-kick/2.png","./../fighters/kano/right/squat-high-kick/3.png":"images/fighters/kano/right/squat-high-kick/3.png","./../fighters/kano/right/squat-low-kick/0.png":"images/fighters/kano/right/squat-low-kick/0.png","./../fighters/kano/right/squat-low-kick/1.png":"images/fighters/kano/right/squat-low-kick/1.png","./../fighters/kano/right/squat-low-kick/2.png":"images/fighters/kano/right/squat-low-kick/2.png","./../fighters/kano/right/squat-low-punch/0.png":"images/fighters/kano/right/squat-low-punch/0.png","./../fighters/kano/right/squat-low-punch/1.png":"images/fighters/kano/right/squat-low-punch/1.png","./../fighters/kano/right/squat-low-punch/2.png":"images/fighters/kano/right/squat-low-punch/2.png","./../fighters/kano/right/squating/0.png":"images/fighters/kano/right/squating/0.png","./../fighters/kano/right/squating/1.png":"images/fighters/kano/right/squating/1.png","./../fighters/kano/right/squating/2.png":"images/fighters/kano/right/squating/2.png","./../fighters/kano/right/stand/0.png":"images/fighters/kano/right/stand/0.png","./../fighters/kano/right/stand/1.png":"images/fighters/kano/right/stand/1.png","./../fighters/kano/right/stand/2.png":"images/fighters/kano/right/stand/2.png","./../fighters/kano/right/stand/3.png":"images/fighters/kano/right/stand/3.png","./../fighters/kano/right/stand/4.png":"images/fighters/kano/right/stand/4.png","./../fighters/kano/right/stand/5.png":"images/fighters/kano/right/stand/5.png","./../fighters/kano/right/stand/6.png":"images/fighters/kano/right/stand/6.png","./../fighters/kano/right/stand/7.png":"images/fighters/kano/right/stand/7.png","./../fighters/kano/right/stand/8.png":"images/fighters/kano/right/stand/8.png","./../fighters/kano/right/uppercut/0.png":"images/fighters/kano/right/uppercut/0.png","./../fighters/kano/right/uppercut/1.png":"images/fighters/kano/right/uppercut/1.png","./../fighters/kano/right/uppercut/2.png":"images/fighters/kano/right/uppercut/2.png","./../fighters/kano/right/uppercut/3.png":"images/fighters/kano/right/uppercut/3.png","./../fighters/kano/right/uppercut/4.png":"images/fighters/kano/right/uppercut/4.png","./../fighters/kano/right/uppercut/5.png":"images/fighters/kano/right/uppercut/5.png","./../fighters/kano/right/stand-up/0.png":"images/fighters/kano/right/stand-up/0.png","./../fighters/kano/right/stand-up/1.png":"images/fighters/kano/right/stand-up/1.png","./../fighters/kano/right/stand-up/2.png":"images/fighters/kano/right/stand-up/2.png","./../fighters/kano/right/walking/0.png":"images/fighters/kano/right/walking/0.png","./../fighters/kano/right/walking/1.png":"images/fighters/kano/right/walking/1.png","./../fighters/kano/right/walking/2.png":"images/fighters/kano/right/walking/2.png","./../fighters/kano/right/walking/3.png":"images/fighters/kano/right/walking/3.png","./../fighters/kano/right/walking/4.png":"images/fighters/kano/right/walking/4.png","./../fighters/kano/right/walking/5.png":"images/fighters/kano/right/walking/5.png","./../fighters/kano/right/walking/6.png":"images/fighters/kano/right/walking/6.png","./../fighters/kano/right/walking/7.png":"images/fighters/kano/right/walking/7.png","./../fighters/kano/right/walking/8.png":"images/fighters/kano/right/walking/8.png","./../fighters/kano/right/walking-backward/0.png":"images/fighters/kano/right/walking-backward/0.png","./../fighters/kano/right/walking-backward/1.png":"images/fighters/kano/right/walking-backward/1.png","./../fighters/kano/right/walking-backward/2.png":"images/fighters/kano/right/walking-backward/2.png","./../fighters/kano/right/walking-backward/3.png":"images/fighters/kano/right/walking-backward/3.png","./../fighters/kano/right/walking-backward/4.png":"images/fighters/kano/right/walking-backward/4.png","./../fighters/kano/right/walking-backward/5.png":"images/fighters/kano/right/walking-backward/5.png","./../fighters/kano/right/walking-backward/6.png":"images/fighters/kano/right/walking-backward/6.png","./../fighters/kano/right/walking-backward/7.png":"images/fighters/kano/right/walking-backward/7.png","./../fighters/kano/right/walking-backward/8.png":"images/fighters/kano/right/walking-backward/8.png","./../fighters/kano/right/win/0.png":"images/fighters/kano/right/win/0.png","./../fighters/kano/right/win/1.png":"images/fighters/kano/right/win/1.png","./../fighters/kano/right/win/2.png":"images/fighters/kano/right/win/2.png","./../fighters/kano/right/win/3.png":"images/fighters/kano/right/win/3.png","./../fighters/kano/right/win/4.png":"images/fighters/kano/right/win/4.png","./../fighters/kano/right/win/5.png":"images/fighters/kano/right/win/5.png","./../fighters/kano/right/win/6.png":"images/fighters/kano/right/win/6.png","./../fighters/kano/right/win/7.png":"images/fighters/kano/right/win/7.png","./../fighters/kano/right/win/8.png":"images/fighters/kano/right/win/8.png","./../fighters/kano/right/win/9.png":"images/fighters/kano/right/win/9.png","./../fighters/subzero/left/attractive-stand-up/0.png":"images/fighters/subzero/left/attractive-stand-up/0.png","./../fighters/subzero/left/attractive-stand-up/1.png":"images/fighters/subzero/left/attractive-stand-up/1.png","./../fighters/subzero/left/attractive-stand-up/2.png":"images/fighters/subzero/left/attractive-stand-up/2.png","./../fighters/subzero/left/attractive-stand-up/3.png":"images/fighters/subzero/left/attractive-stand-up/3.png","./../fighters/subzero/left/attractive-stand-up/4.png":"images/fighters/subzero/left/attractive-stand-up/4.png","./../fighters/subzero/left/backward-jump/0.png":"images/fighters/subzero/left/backward-jump/0.png","./../fighters/subzero/left/backward-jump/1.png":"images/fighters/subzero/left/backward-jump/1.png","./../fighters/subzero/left/backward-jump/2.png":"images/fighters/subzero/left/backward-jump/2.png","./../fighters/subzero/left/backward-jump/3.png":"images/fighters/subzero/left/backward-jump/3.png","./../fighters/subzero/left/backward-jump/4.png":"images/fighters/subzero/left/backward-jump/4.png","./../fighters/subzero/left/backward-jump/5.png":"images/fighters/subzero/left/backward-jump/5.png","./../fighters/subzero/left/backward-jump/6.png":"images/fighters/subzero/left/backward-jump/6.png","./../fighters/subzero/left/backward-jump/7.png":"images/fighters/subzero/left/backward-jump/7.png","./../fighters/subzero/left/backward-jump-kick/0.png":"images/fighters/subzero/left/backward-jump-kick/0.png","./../fighters/subzero/left/backward-jump-kick/1.png":"images/fighters/subzero/left/backward-jump-kick/1.png","./../fighters/subzero/left/backward-jump-kick/2.png":"images/fighters/subzero/left/backward-jump-kick/2.png","./../fighters/subzero/left/backward-jump-punch/0.png":"images/fighters/subzero/left/backward-jump-punch/0.png","./../fighters/subzero/left/backward-jump-punch/1.png":"images/fighters/subzero/left/backward-jump-punch/1.png","./../fighters/subzero/left/backward-jump-punch/2.png":"images/fighters/subzero/left/backward-jump-punch/2.png","./../fighters/subzero/left/blocking/0.png":"images/fighters/subzero/left/blocking/0.png","./../fighters/subzero/left/blocking/1.png":"images/fighters/subzero/left/blocking/1.png","./../fighters/subzero/left/blocking/2.png":"images/fighters/subzero/left/blocking/2.png","./../fighters/subzero/left/endure/0.png":"images/fighters/subzero/left/endure/0.png","./../fighters/subzero/left/endure/1.png":"images/fighters/subzero/left/endure/1.png","./../fighters/subzero/left/endure/2.png":"images/fighters/subzero/left/endure/2.png","./../fighters/subzero/left/fall/0.png":"images/fighters/subzero/left/fall/0.png","./../fighters/subzero/left/fall/1.png":"images/fighters/subzero/left/fall/1.png","./../fighters/subzero/left/fall/2.png":"images/fighters/subzero/left/fall/2.png","./../fighters/subzero/left/fall/3.png":"images/fighters/subzero/left/fall/3.png","./../fighters/subzero/left/fall/4.png":"images/fighters/subzero/left/fall/4.png","./../fighters/subzero/left/fall/5.png":"images/fighters/subzero/left/fall/5.png","./../fighters/subzero/left/fall/6.png":"images/fighters/subzero/left/fall/6.png","./../fighters/subzero/left/forward-jump/0.png":"images/fighters/subzero/left/forward-jump/0.png","./../fighters/subzero/left/forward-jump/1.png":"images/fighters/subzero/left/forward-jump/1.png","./../fighters/subzero/left/forward-jump/2.png":"images/fighters/subzero/left/forward-jump/2.png","./../fighters/subzero/left/forward-jump/3.png":"images/fighters/subzero/left/forward-jump/3.png","./../fighters/subzero/left/forward-jump/4.png":"images/fighters/subzero/left/forward-jump/4.png","./../fighters/subzero/left/forward-jump/5.png":"images/fighters/subzero/left/forward-jump/5.png","./../fighters/subzero/left/forward-jump/6.png":"images/fighters/subzero/left/forward-jump/6.png","./../fighters/subzero/left/forward-jump/7.png":"images/fighters/subzero/left/forward-jump/7.png","./../fighters/subzero/left/forward-jump-kick/0.png":"images/fighters/subzero/left/forward-jump-kick/0.png","./../fighters/subzero/left/forward-jump-kick/1.png":"images/fighters/subzero/left/forward-jump-kick/1.png","./../fighters/subzero/left/forward-jump-kick/2.png":"images/fighters/subzero/left/forward-jump-kick/2.png","./../fighters/subzero/left/forward-jump-punch/0.png":"images/fighters/subzero/left/forward-jump-punch/0.png","./../fighters/subzero/left/forward-jump-punch/1.png":"images/fighters/subzero/left/forward-jump-punch/1.png","./../fighters/subzero/left/forward-jump-punch/2.png":"images/fighters/subzero/left/forward-jump-punch/2.png","./../fighters/subzero/left/high-kick/0.png":"images/fighters/subzero/left/high-kick/0.png","./../fighters/subzero/left/high-kick/1.png":"images/fighters/subzero/left/high-kick/1.png","./../fighters/subzero/left/high-kick/2.png":"images/fighters/subzero/left/high-kick/2.png","./../fighters/subzero/left/high-kick/3.png":"images/fighters/subzero/left/high-kick/3.png","./../fighters/subzero/left/high-kick/4.png":"images/fighters/subzero/left/high-kick/4.png","./../fighters/subzero/left/high-kick/5.png":"images/fighters/subzero/left/high-kick/5.png","./../fighters/subzero/left/high-kick/6.png":"images/fighters/subzero/left/high-kick/6.png","./../fighters/subzero/left/high-punch/0.png":"images/fighters/subzero/left/high-punch/0.png","./../fighters/subzero/left/high-punch/1.png":"images/fighters/subzero/left/high-punch/1.png","./../fighters/subzero/left/high-punch/2.png":"images/fighters/subzero/left/high-punch/2.png","./../fighters/subzero/left/high-punch/3.png":"images/fighters/subzero/left/high-punch/3.png","./../fighters/subzero/left/high-punch/4.png":"images/fighters/subzero/left/high-punch/4.png","./../fighters/subzero/left/high-punch/5.png":"images/fighters/subzero/left/high-punch/5.png","./../fighters/subzero/left/high-punch/6.png":"images/fighters/subzero/left/high-punch/6.png","./../fighters/subzero/left/high-punch/7.png":"images/fighters/subzero/left/high-punch/7.png","./../fighters/subzero/left/jumping/0.png":"images/fighters/subzero/left/jumping/0.png","./../fighters/subzero/left/jumping/1.png":"images/fighters/subzero/left/jumping/1.png","./../fighters/subzero/left/jumping/2.png":"images/fighters/subzero/left/jumping/2.png","./../fighters/subzero/left/jumping/3.png":"images/fighters/subzero/left/jumping/3.png","./../fighters/subzero/left/jumping/4.png":"images/fighters/subzero/left/jumping/4.png","./../fighters/subzero/left/jumping/5.png":"images/fighters/subzero/left/jumping/5.png","./../fighters/subzero/left/knock-down/0.png":"images/fighters/subzero/left/knock-down/0.png","./../fighters/subzero/left/knock-down/1.png":"images/fighters/subzero/left/knock-down/1.png","./../fighters/subzero/left/knock-down/2.png":"images/fighters/subzero/left/knock-down/2.png","./../fighters/subzero/left/knock-down/3.png":"images/fighters/subzero/left/knock-down/3.png","./../fighters/subzero/left/knock-down/4.png":"images/fighters/subzero/left/knock-down/4.png","./../fighters/subzero/left/knock-down/5.png":"images/fighters/subzero/left/knock-down/5.png","./../fighters/subzero/left/knock-down/6.png":"images/fighters/subzero/left/knock-down/6.png","./../fighters/subzero/left/knock-down/7.png":"images/fighters/subzero/left/knock-down/7.png","./../fighters/subzero/left/knock-down/8.png":"images/fighters/subzero/left/knock-down/8.png","./../fighters/subzero/left/knock-down/9.png":"images/fighters/subzero/left/knock-down/9.png","./../fighters/subzero/left/low-kick/0.png":"images/fighters/subzero/left/low-kick/0.png","./../fighters/subzero/left/low-kick/1.png":"images/fighters/subzero/left/low-kick/1.png","./../fighters/subzero/left/low-kick/2.png":"images/fighters/subzero/left/low-kick/2.png","./../fighters/subzero/left/low-kick/3.png":"images/fighters/subzero/left/low-kick/3.png","./../fighters/subzero/left/low-kick/4.png":"images/fighters/subzero/left/low-kick/4.png","./../fighters/subzero/left/low-kick/5.png":"images/fighters/subzero/left/low-kick/5.png","./../fighters/subzero/left/low-punch/0.png":"images/fighters/subzero/left/low-punch/0.png","./../fighters/subzero/left/low-punch/1.png":"images/fighters/subzero/left/low-punch/1.png","./../fighters/subzero/left/low-punch/2.png":"images/fighters/subzero/left/low-punch/2.png","./../fighters/subzero/left/low-punch/3.png":"images/fighters/subzero/left/low-punch/3.png","./../fighters/subzero/left/low-punch/4.png":"images/fighters/subzero/left/low-punch/4.png","./../fighters/subzero/left/spin-kick/0.png":"images/fighters/subzero/left/spin-kick/0.png","./../fighters/subzero/left/spin-kick/1.png":"images/fighters/subzero/left/spin-kick/1.png","./../fighters/subzero/left/spin-kick/2.png":"images/fighters/subzero/left/spin-kick/2.png","./../fighters/subzero/left/spin-kick/3.png":"images/fighters/subzero/left/spin-kick/3.png","./../fighters/subzero/left/spin-kick/4.png":"images/fighters/subzero/left/spin-kick/4.png","./../fighters/subzero/left/spin-kick/5.png":"images/fighters/subzero/left/spin-kick/5.png","./../fighters/subzero/left/spin-kick/6.png":"images/fighters/subzero/left/spin-kick/6.png","./../fighters/subzero/left/spin-kick/7.png":"images/fighters/subzero/left/spin-kick/7.png","./../fighters/subzero/left/squat-endure/0.png":"images/fighters/subzero/left/squat-endure/0.png","./../fighters/subzero/left/squat-endure/1.png":"images/fighters/subzero/left/squat-endure/1.png","./../fighters/subzero/left/squat-endure/2.png":"images/fighters/subzero/left/squat-endure/2.png","./../fighters/subzero/left/squat-high-kick/0.png":"images/fighters/subzero/left/squat-high-kick/0.png","./../fighters/subzero/left/squat-high-kick/1.png":"images/fighters/subzero/left/squat-high-kick/1.png","./../fighters/subzero/left/squat-high-kick/2.png":"images/fighters/subzero/left/squat-high-kick/2.png","./../fighters/subzero/left/squat-high-kick/3.png":"images/fighters/subzero/left/squat-high-kick/3.png","./../fighters/subzero/left/squat-low-kick/0.png":"images/fighters/subzero/left/squat-low-kick/0.png","./../fighters/subzero/left/squat-low-kick/1.png":"images/fighters/subzero/left/squat-low-kick/1.png","./../fighters/subzero/left/squat-low-kick/2.png":"images/fighters/subzero/left/squat-low-kick/2.png","./../fighters/subzero/left/squat-low-punch/0.png":"images/fighters/subzero/left/squat-low-punch/0.png","./../fighters/subzero/left/squat-low-punch/1.png":"images/fighters/subzero/left/squat-low-punch/1.png","./../fighters/subzero/left/squat-low-punch/2.png":"images/fighters/subzero/left/squat-low-punch/2.png","./../fighters/subzero/left/squating/0.png":"images/fighters/subzero/left/squating/0.png","./../fighters/subzero/left/squating/1.png":"images/fighters/subzero/left/squating/1.png","./../fighters/subzero/left/squating/2.png":"images/fighters/subzero/left/squating/2.png","./../fighters/subzero/left/stand/0.png":"images/fighters/subzero/left/stand/0.png","./../fighters/subzero/left/stand/1.png":"images/fighters/subzero/left/stand/1.png","./../fighters/subzero/left/stand/2.png":"images/fighters/subzero/left/stand/2.png","./../fighters/subzero/left/stand/3.png":"images/fighters/subzero/left/stand/3.png","./../fighters/subzero/left/stand/4.png":"images/fighters/subzero/left/stand/4.png","./../fighters/subzero/left/stand/5.png":"images/fighters/subzero/left/stand/5.png","./../fighters/subzero/left/stand/6.png":"images/fighters/subzero/left/stand/6.png","./../fighters/subzero/left/stand/7.png":"images/fighters/subzero/left/stand/7.png","./../fighters/subzero/left/stand/8.png":"images/fighters/subzero/left/stand/8.png","./../fighters/subzero/left/stand/9.png":"images/fighters/subzero/left/stand/9.png","./../fighters/subzero/left/stand-up/0.png":"images/fighters/subzero/left/stand-up/0.png","./../fighters/subzero/left/stand-up/1.png":"images/fighters/subzero/left/stand-up/1.png","./../fighters/subzero/left/stand-up/2.png":"images/fighters/subzero/left/stand-up/2.png","./../fighters/subzero/left/uppercut/0.png":"images/fighters/subzero/left/uppercut/0.png","./../fighters/subzero/left/uppercut/1.png":"images/fighters/subzero/left/uppercut/1.png","./../fighters/subzero/left/uppercut/2.png":"images/fighters/subzero/left/uppercut/2.png","./../fighters/subzero/left/uppercut/3.png":"images/fighters/subzero/left/uppercut/3.png","./../fighters/subzero/left/uppercut/4.png":"images/fighters/subzero/left/uppercut/4.png","./../fighters/subzero/left/walking/0.png":"images/fighters/subzero/left/walking/0.png","./../fighters/subzero/left/walking/1.png":"images/fighters/subzero/left/walking/1.png","./../fighters/subzero/left/walking/2.png":"images/fighters/subzero/left/walking/2.png","./../fighters/subzero/left/walking/3.png":"images/fighters/subzero/left/walking/3.png","./../fighters/subzero/left/walking/4.png":"images/fighters/subzero/left/walking/4.png","./../fighters/subzero/left/walking/5.png":"images/fighters/subzero/left/walking/5.png","./../fighters/subzero/left/walking/6.png":"images/fighters/subzero/left/walking/6.png","./../fighters/subzero/left/walking/7.png":"images/fighters/subzero/left/walking/7.png","./../fighters/subzero/left/walking/8.png":"images/fighters/subzero/left/walking/8.png","./../fighters/subzero/left/walking-backward/0.png":"images/fighters/subzero/left/walking-backward/0.png","./../fighters/subzero/left/walking-backward/1.png":"images/fighters/subzero/left/walking-backward/1.png","./../fighters/subzero/left/walking-backward/2.png":"images/fighters/subzero/left/walking-backward/2.png","./../fighters/subzero/left/walking-backward/3.png":"images/fighters/subzero/left/walking-backward/3.png","./../fighters/subzero/left/walking-backward/4.png":"images/fighters/subzero/left/walking-backward/4.png","./../fighters/subzero/left/walking-backward/5.png":"images/fighters/subzero/left/walking-backward/5.png","./../fighters/subzero/left/walking-backward/6.png":"images/fighters/subzero/left/walking-backward/6.png","./../fighters/subzero/left/walking-backward/7.png":"images/fighters/subzero/left/walking-backward/7.png","./../fighters/subzero/left/walking-backward/8.png":"images/fighters/subzero/left/walking-backward/8.png","./../fighters/subzero/left/win/0.png":"images/fighters/subzero/left/win/0.png","./../fighters/subzero/left/win/1.png":"images/fighters/subzero/left/win/1.png","./../fighters/subzero/left/win/2.png":"images/fighters/subzero/left/win/2.png","./../fighters/subzero/left/win/3.png":"images/fighters/subzero/left/win/3.png","./../fighters/subzero/left/win/4.png":"images/fighters/subzero/left/win/4.png","./../fighters/subzero/left/win/5.png":"images/fighters/subzero/left/win/5.png","./../fighters/subzero/left/win/6.png":"images/fighters/subzero/left/win/6.png","./../fighters/subzero/left/win/7.png":"images/fighters/subzero/left/win/7.png","./../fighters/subzero/left/win/8.png":"images/fighters/subzero/left/win/8.png","./../fighters/subzero/left/win/9.png":"images/fighters/subzero/left/win/9.png","./../fighters/subzero/right/attractive-stand-up/0.png":"images/fighters/subzero/right/attractive-stand-up/0.png","./../fighters/subzero/right/attractive-stand-up/1.png":"images/fighters/subzero/right/attractive-stand-up/1.png","./../fighters/subzero/right/attractive-stand-up/2.png":"images/fighters/subzero/right/attractive-stand-up/2.png","./../fighters/subzero/right/attractive-stand-up/3.png":"images/fighters/subzero/right/attractive-stand-up/3.png","./../fighters/subzero/right/attractive-stand-up/4.png":"images/fighters/subzero/right/attractive-stand-up/4.png","./../fighters/subzero/right/backward-jump/0.png":"images/fighters/subzero/right/backward-jump/0.png","./../fighters/subzero/right/backward-jump/1.png":"images/fighters/subzero/right/backward-jump/1.png","./../fighters/subzero/right/backward-jump/2.png":"images/fighters/subzero/right/backward-jump/2.png","./../fighters/subzero/right/backward-jump/3.png":"images/fighters/subzero/right/backward-jump/3.png","./../fighters/subzero/right/backward-jump/4.png":"images/fighters/subzero/right/backward-jump/4.png","./../fighters/subzero/right/backward-jump/5.png":"images/fighters/subzero/right/backward-jump/5.png","./../fighters/subzero/right/backward-jump/6.png":"images/fighters/subzero/right/backward-jump/6.png","./../fighters/subzero/right/backward-jump/7.png":"images/fighters/subzero/right/backward-jump/7.png","./../fighters/subzero/right/backward-jump-kick/0.png":"images/fighters/subzero/right/backward-jump-kick/0.png","./../fighters/subzero/right/backward-jump-kick/1.png":"images/fighters/subzero/right/backward-jump-kick/1.png","./../fighters/subzero/right/backward-jump-kick/2.png":"images/fighters/subzero/right/backward-jump-kick/2.png","./../fighters/subzero/right/backward-jump-punch/0.png":"images/fighters/subzero/right/backward-jump-punch/0.png","./../fighters/subzero/right/backward-jump-punch/1.png":"images/fighters/subzero/right/backward-jump-punch/1.png","./../fighters/subzero/right/backward-jump-punch/2.png":"images/fighters/subzero/right/backward-jump-punch/2.png","./../fighters/subzero/right/blocking/0.png":"images/fighters/subzero/right/blocking/0.png","./../fighters/subzero/right/blocking/1.png":"images/fighters/subzero/right/blocking/1.png","./../fighters/subzero/right/blocking/2.png":"images/fighters/subzero/right/blocking/2.png","./../fighters/subzero/right/endure/0.png":"images/fighters/subzero/right/endure/0.png","./../fighters/subzero/right/endure/1.png":"images/fighters/subzero/right/endure/1.png","./../fighters/subzero/right/endure/2.png":"images/fighters/subzero/right/endure/2.png","./../fighters/subzero/right/fall/0.png":"images/fighters/subzero/right/fall/0.png","./../fighters/subzero/right/fall/1.png":"images/fighters/subzero/right/fall/1.png","./../fighters/subzero/right/fall/2.png":"images/fighters/subzero/right/fall/2.png","./../fighters/subzero/right/fall/3.png":"images/fighters/subzero/right/fall/3.png","./../fighters/subzero/right/fall/4.png":"images/fighters/subzero/right/fall/4.png","./../fighters/subzero/right/fall/5.png":"images/fighters/subzero/right/fall/5.png","./../fighters/subzero/right/fall/6.png":"images/fighters/subzero/right/fall/6.png","./../fighters/subzero/right/forward-jump/0.png":"images/fighters/subzero/right/forward-jump/0.png","./../fighters/subzero/right/forward-jump/1.png":"images/fighters/subzero/right/forward-jump/1.png","./../fighters/subzero/right/forward-jump/2.png":"images/fighters/subzero/right/forward-jump/2.png","./../fighters/subzero/right/forward-jump/3.png":"images/fighters/subzero/right/forward-jump/3.png","./../fighters/subzero/right/forward-jump/4.png":"images/fighters/subzero/right/forward-jump/4.png","./../fighters/subzero/right/forward-jump/5.png":"images/fighters/subzero/right/forward-jump/5.png","./../fighters/subzero/right/forward-jump/6.png":"images/fighters/subzero/right/forward-jump/6.png","./../fighters/subzero/right/forward-jump/7.png":"images/fighters/subzero/right/forward-jump/7.png","./../fighters/subzero/right/forward-jump-kick/0.png":"images/fighters/subzero/right/forward-jump-kick/0.png","./../fighters/subzero/right/forward-jump-kick/1.png":"images/fighters/subzero/right/forward-jump-kick/1.png","./../fighters/subzero/right/forward-jump-kick/2.png":"images/fighters/subzero/right/forward-jump-kick/2.png","./../fighters/subzero/right/forward-jump-punch/0.png":"images/fighters/subzero/right/forward-jump-punch/0.png","./../fighters/subzero/right/forward-jump-punch/1.png":"images/fighters/subzero/right/forward-jump-punch/1.png","./../fighters/subzero/right/forward-jump-punch/2.png":"images/fighters/subzero/right/forward-jump-punch/2.png","./../fighters/subzero/right/high-kick/0.png":"images/fighters/subzero/right/high-kick/0.png","./../fighters/subzero/right/high-kick/1.png":"images/fighters/subzero/right/high-kick/1.png","./../fighters/subzero/right/high-kick/2.png":"images/fighters/subzero/right/high-kick/2.png","./../fighters/subzero/right/high-kick/3.png":"images/fighters/subzero/right/high-kick/3.png","./../fighters/subzero/right/high-kick/4.png":"images/fighters/subzero/right/high-kick/4.png","./../fighters/subzero/right/high-kick/5.png":"images/fighters/subzero/right/high-kick/5.png","./../fighters/subzero/right/high-kick/6.png":"images/fighters/subzero/right/high-kick/6.png","./../fighters/subzero/right/high-punch/0.png":"images/fighters/subzero/right/high-punch/0.png","./../fighters/subzero/right/high-punch/1.png":"images/fighters/subzero/right/high-punch/1.png","./../fighters/subzero/right/high-punch/2.png":"images/fighters/subzero/right/high-punch/2.png","./../fighters/subzero/right/high-punch/3.png":"images/fighters/subzero/right/high-punch/3.png","./../fighters/subzero/right/high-punch/4.png":"images/fighters/subzero/right/high-punch/4.png","./../fighters/subzero/right/high-punch/5.png":"images/fighters/subzero/right/high-punch/5.png","./../fighters/subzero/right/high-punch/6.png":"images/fighters/subzero/right/high-punch/6.png","./../fighters/subzero/right/high-punch/7.png":"images/fighters/subzero/right/high-punch/7.png","./../fighters/subzero/right/jumping/0.png":"images/fighters/subzero/right/jumping/0.png","./../fighters/subzero/right/jumping/1.png":"images/fighters/subzero/right/jumping/1.png","./../fighters/subzero/right/jumping/2.png":"images/fighters/subzero/right/jumping/2.png","./../fighters/subzero/right/jumping/3.png":"images/fighters/subzero/right/jumping/3.png","./../fighters/subzero/right/jumping/4.png":"images/fighters/subzero/right/jumping/4.png","./../fighters/subzero/right/jumping/5.png":"images/fighters/subzero/right/jumping/5.png","./../fighters/subzero/right/knock-down/0.png":"images/fighters/subzero/right/knock-down/0.png","./../fighters/subzero/right/knock-down/1.png":"images/fighters/subzero/right/knock-down/1.png","./../fighters/subzero/right/knock-down/2.png":"images/fighters/subzero/right/knock-down/2.png","./../fighters/subzero/right/knock-down/3.png":"images/fighters/subzero/right/knock-down/3.png","./../fighters/subzero/right/knock-down/4.png":"images/fighters/subzero/right/knock-down/4.png","./../fighters/subzero/right/knock-down/5.png":"images/fighters/subzero/right/knock-down/5.png","./../fighters/subzero/right/knock-down/6.png":"images/fighters/subzero/right/knock-down/6.png","./../fighters/subzero/right/knock-down/7.png":"images/fighters/subzero/right/knock-down/7.png","./../fighters/subzero/right/knock-down/8.png":"images/fighters/subzero/right/knock-down/8.png","./../fighters/subzero/right/knock-down/9.png":"images/fighters/subzero/right/knock-down/9.png","./../fighters/subzero/right/low-kick/0.png":"images/fighters/subzero/right/low-kick/0.png","./../fighters/subzero/right/low-kick/1.png":"images/fighters/subzero/right/low-kick/1.png","./../fighters/subzero/right/low-kick/2.png":"images/fighters/subzero/right/low-kick/2.png","./../fighters/subzero/right/low-kick/3.png":"images/fighters/subzero/right/low-kick/3.png","./../fighters/subzero/right/low-kick/4.png":"images/fighters/subzero/right/low-kick/4.png","./../fighters/subzero/right/low-kick/5.png":"images/fighters/subzero/right/low-kick/5.png","./../fighters/subzero/right/low-punch/0.png":"images/fighters/subzero/right/low-punch/0.png","./../fighters/subzero/right/low-punch/1.png":"images/fighters/subzero/right/low-punch/1.png","./../fighters/subzero/right/low-punch/2.png":"images/fighters/subzero/right/low-punch/2.png","./../fighters/subzero/right/low-punch/3.png":"images/fighters/subzero/right/low-punch/3.png","./../fighters/subzero/right/low-punch/4.png":"images/fighters/subzero/right/low-punch/4.png","./../fighters/subzero/right/spin-kick/0.png":"images/fighters/subzero/right/spin-kick/0.png","./../fighters/subzero/right/spin-kick/1.png":"images/fighters/subzero/right/spin-kick/1.png","./../fighters/subzero/right/spin-kick/2.png":"images/fighters/subzero/right/spin-kick/2.png","./../fighters/subzero/right/spin-kick/3.png":"images/fighters/subzero/right/spin-kick/3.png","./../fighters/subzero/right/spin-kick/4.png":"images/fighters/subzero/right/spin-kick/4.png","./../fighters/subzero/right/spin-kick/5.png":"images/fighters/subzero/right/spin-kick/5.png","./../fighters/subzero/right/spin-kick/6.png":"images/fighters/subzero/right/spin-kick/6.png","./../fighters/subzero/right/spin-kick/7.png":"images/fighters/subzero/right/spin-kick/7.png","./../fighters/subzero/right/squat-endure/0.png":"images/fighters/subzero/right/squat-endure/0.png","./../fighters/subzero/right/squat-endure/1.png":"images/fighters/subzero/right/squat-endure/1.png","./../fighters/subzero/right/squat-endure/2.png":"images/fighters/subzero/right/squat-endure/2.png","./../fighters/subzero/right/squat-high-kick/0.png":"images/fighters/subzero/right/squat-high-kick/0.png","./../fighters/subzero/right/squat-high-kick/1.png":"images/fighters/subzero/right/squat-high-kick/1.png","./../fighters/subzero/right/squat-high-kick/2.png":"images/fighters/subzero/right/squat-high-kick/2.png","./../fighters/subzero/right/squat-high-kick/3.png":"images/fighters/subzero/right/squat-high-kick/3.png","./../fighters/subzero/right/squat-low-kick/0.png":"images/fighters/subzero/right/squat-low-kick/0.png","./../fighters/subzero/right/squat-low-kick/1.png":"images/fighters/subzero/right/squat-low-kick/1.png","./../fighters/subzero/right/squat-low-kick/2.png":"images/fighters/subzero/right/squat-low-kick/2.png","./../fighters/subzero/right/squat-low-punch/0.png":"images/fighters/subzero/right/squat-low-punch/0.png","./../fighters/subzero/right/squat-low-punch/1.png":"images/fighters/subzero/right/squat-low-punch/1.png","./../fighters/subzero/right/squat-low-punch/2.png":"images/fighters/subzero/right/squat-low-punch/2.png","./../fighters/subzero/right/squating/0.png":"images/fighters/subzero/right/squating/0.png","./../fighters/subzero/right/squating/1.png":"images/fighters/subzero/right/squating/1.png","./../fighters/subzero/right/squating/2.png":"images/fighters/subzero/right/squating/2.png","./../fighters/subzero/right/stand/0.png":"images/fighters/subzero/right/stand/0.png","./../fighters/subzero/right/stand/1.png":"images/fighters/subzero/right/stand/1.png","./../fighters/subzero/right/stand/2.png":"images/fighters/subzero/right/stand/2.png","./../fighters/subzero/right/stand/3.png":"images/fighters/subzero/right/stand/3.png","./../fighters/subzero/right/stand/4.png":"images/fighters/subzero/right/stand/4.png","./../fighters/subzero/right/stand/5.png":"images/fighters/subzero/right/stand/5.png","./../fighters/subzero/right/stand/6.png":"images/fighters/subzero/right/stand/6.png","./../fighters/subzero/right/stand/7.png":"images/fighters/subzero/right/stand/7.png","./../fighters/subzero/right/stand/8.png":"images/fighters/subzero/right/stand/8.png","./../fighters/subzero/right/stand-up/0.png":"images/fighters/subzero/right/stand-up/0.png","./../fighters/subzero/right/stand-up/1.png":"images/fighters/subzero/right/stand-up/1.png","./../fighters/subzero/right/stand-up/2.png":"images/fighters/subzero/right/stand-up/2.png","./../fighters/subzero/right/uppercut/0.png":"images/fighters/subzero/right/uppercut/0.png","./../fighters/subzero/right/uppercut/1.png":"images/fighters/subzero/right/uppercut/1.png","./../fighters/subzero/right/uppercut/2.png":"images/fighters/subzero/right/uppercut/2.png","./../fighters/subzero/right/uppercut/3.png":"images/fighters/subzero/right/uppercut/3.png","./../fighters/subzero/right/uppercut/4.png":"images/fighters/subzero/right/uppercut/4.png","./../fighters/subzero/right/walking/0.png":"images/fighters/subzero/right/walking/0.png","./../fighters/subzero/right/walking/1.png":"images/fighters/subzero/right/walking/1.png","./../fighters/subzero/right/walking/2.png":"images/fighters/subzero/right/walking/2.png","./../fighters/subzero/right/walking/3.png":"images/fighters/subzero/right/walking/3.png","./../fighters/subzero/right/walking/4.png":"images/fighters/subzero/right/walking/4.png","./../fighters/subzero/right/walking/5.png":"images/fighters/subzero/right/walking/5.png","./../fighters/subzero/right/walking/6.png":"images/fighters/subzero/right/walking/6.png","./../fighters/subzero/right/walking/7.png":"images/fighters/subzero/right/walking/7.png","./../fighters/subzero/right/walking/8.png":"images/fighters/subzero/right/walking/8.png","./../fighters/subzero/right/walking-backward/0.png":"images/fighters/subzero/right/walking-backward/0.png","./../fighters/subzero/right/walking-backward/1.png":"images/fighters/subzero/right/walking-backward/1.png","./../fighters/subzero/right/walking-backward/2.png":"images/fighters/subzero/right/walking-backward/2.png","./../fighters/subzero/right/walking-backward/3.png":"images/fighters/subzero/right/walking-backward/3.png","./../fighters/subzero/right/walking-backward/4.png":"images/fighters/subzero/right/walking-backward/4.png","./../fighters/subzero/right/walking-backward/5.png":"images/fighters/subzero/right/walking-backward/5.png","./../fighters/subzero/right/walking-backward/6.png":"images/fighters/subzero/right/walking-backward/6.png","./../fighters/subzero/right/walking-backward/7.png":"images/fighters/subzero/right/walking-backward/7.png","./../fighters/subzero/right/walking-backward/8.png":"images/fighters/subzero/right/walking-backward/8.png","./../fighters/subzero/right/win/0.png":"images/fighters/subzero/right/win/0.png","./../fighters/subzero/right/win/1.png":"images/fighters/subzero/right/win/1.png","./../fighters/subzero/right/win/2.png":"images/fighters/subzero/right/win/2.png","./../fighters/subzero/right/win/3.png":"images/fighters/subzero/right/win/3.png","./../fighters/subzero/right/win/4.png":"images/fighters/subzero/right/win/4.png","./../fighters/subzero/right/win/5.png":"images/fighters/subzero/right/win/5.png","./../fighters/subzero/right/win/6.png":"images/fighters/subzero/right/win/6.png","./../fighters/subzero/right/win/7.png":"images/fighters/subzero/right/win/7.png","./../fighters/subzero/right/win/8.png":"images/fighters/subzero/right/win/8.png","./../fighters/subzero/right/win/9.png":"images/fighters/subzero/right/win/9.png"}],"src/mk.js":[function(require,module,exports) {
"use strict";

var images = _interopRequireWildcard(require("../images/**/*.png"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

console.log(images);

(function () {
  var mk = {};
  mk.callbacks = {
    ATTACK: 'attack',
    GAME_END: 'game-end'
  };
  mk.config = {
    ARENAS: 'arenas',
    FIGHTERS: 'fighters',
    STEP_DURATION: 80,
    PLAYER_TOP: 230,
    BLOCK_DAMAGE: 0.2
  };
  mk.controllers = {};

  mk.controllers.Base = function (options) {
    if (!options) return;
    this._callbacks = options.callbacks || {};

    this._initializeFighters(options.fighters);

    var a = options.arena;
    this.arena = new mk.arenas.Arena({
      fighters: this.fighters,
      arena: a.arena,
      width: a.width,
      height: a.height,
      container: a.container,
      game: this
    });
  };

  mk.reset = function () {
    var game = this.game;
    if (typeof game.reset === 'function') game.reset();
    game.fighters.forEach(function (f) {
      f.getMove().stop();
    });
    game.fighters = null;
    game._opponents = null;
    game.arena.destroy();
    game.arena = null;
    game._callbacks = null;
    this.game = null;
  };

  mk.controllers.Base.prototype._initializeFighters = function (fighters) {
    this.fighters = [];
    this._opponents = {};

    for (var i = 0; i < fighters.length; i += 1) {
      this.fighters.push(new mk.fighters.Fighter({
        name: fighters[i].name,
        arena: this.arena,
        orientation: i === 0 ? mk.fighters.orientations.LEFT : mk.fighters.orientations.RIGHT,
        game: this
      }));
    }

    this._opponents[this.fighters[0].getName()] = this.fighters[1];
    this._opponents[this.fighters[1].getName()] = this.fighters[0];
  };

  mk.controllers.Base.prototype.getOpponent = function (f) {
    return this._opponents[f.getName(name)];
  };

  mk.controllers.Base.prototype.init = function (promise) {
    var _this = this;

    var current = 0;
    var total = this.fighters.length;

    var _loop = function _loop(i) {
      var f = _this.fighters[i];
      f.init(function () {
        f.setMove(mk.moves.types.STAND);
        current += 1;

        if (current === total) {
          _this.arena.init();

          _this._setFighersArena();

          _this._initialize();

          promise._initialized();
        }
      });
    };

    for (var i = 0; i < this.fighters.length; i += 1) {
      _loop(i);
    }
  };

  mk.controllers.Base.prototype._initialize = function () {
    throw '_initialize is not implemented for this controller!';
  };

  mk.controllers.Base.prototype._setFighersArena = function () {
    var f;

    for (var i = 0; i < this.fighters.length; i += 1) {
      f = this.fighters[i];
      f.setArena(this.arena);
    }

    f.setX(310); //testing
  };

  mk.controllers.Base.prototype.fighterAttacked = function (fighter, damage) {
    var opponent = this.getOpponent(fighter),
        opponentLife = opponent.getLife(),
        callback = this._callbacks[mk.callbacks.ATTACK];

    if (this._requiredDistance(fighter, opponent) && this._attackCompatible(fighter.getMove().type, opponent.getMove().type)) {
      opponent.endureAttack(damage, fighter.getMove().type);

      if (typeof callback === 'function') {
        callback.call(null, fighter, opponent, opponentLife - opponent.getLife());
      }
    }
  };

  mk.controllers.Base.prototype._attackCompatible = function (attack, opponentStand) {
    var m = mk.moves.types;

    if (opponentStand === m.SQUAT) {
      if (attack !== m.LOW_PUNCH && attack !== m.LOW_KICK) {
        return false;
      }
    }

    return true;
  };
  /**
   * Checks wheter the attacker is in the required distance to his opponent
   *
   * @private
   * @param {Fighter} attacker The fighter who attacks
   * @param {Fighter} opponent The fighter who will endure the attack
   * @return {boolean} true/false depending on the distance between the fighters
   */


  mk.controllers.Base.prototype._requiredDistance = function (attacker, opponent) {
    var fMiddle = attacker.getX() + attacker.getWidth() / 2,
        oMiddle = opponent.getX() + opponent.getWidth() / 2,
        distance = Math.abs(fMiddle - oMiddle),
        m = mk.moves.types,
        type = attacker.getMove().type,
        width = opponent.getWidth();

    if (distance <= width) {
      return true;
    }

    if (type === m.UPPERCUT && distance <= width * 1.2) {
      return true;
    }

    if ((type === m.BACKWARD_JUMP_KICK || type === m.FORWARD_JUMP_KICK || type === m.FORWARD_JUMP_PUNCH || type === m.BACKWARD_JUMP_PUNCH) && distance <= width * 1.5) {
      return true;
    }

    return false;
  };

  mk.controllers.Base.prototype.fighterDead = function (fighter) {
    var opponent = this.getOpponent(fighter),
        callback = this._callbacks[mk.callbacks.GAME_END];
    opponent.getMove().stop();
    opponent.setMove(mk.moves.types.WIN);

    if (typeof callback === 'function') {
      callback.call(null, fighter);
    }
  };

  mk.controllers.keys = {
    RIGHT: 39,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    BLOCK: 16,
    HP: 65,
    LP: 83,
    LK: 68,
    HK: 70
  };

  mk.controllers.Basic = function (options) {
    mk.controllers.Base.call(this, options);
  };

  mk.controllers.Basic.prototype = new mk.controllers.Base();

  mk.controllers.Basic.prototype._initialize = function () {
    this._player = 0;

    this._addHandlers();
  };

  mk.controllers.Basic.prototype._addHandlers = function () {
    var pressed = {},
        self = this,
        f = this.fighters[this._player];
    document.addEventListener('keydown', function (e) {
      pressed[e.keyCode] = true;

      var move = self._getMove(pressed, mk.controllers.keys, self._player);

      self._moveFighter(f, move);
    }, false);
    document.addEventListener('keyup', function (e) {
      delete pressed[e.keyCode];

      var move = self._getMove(pressed, mk.controllers.keys, self._player);

      self._moveFighter(f, move);
    }, false);
  };

  mk.controllers.Basic.prototype._moveFighter = function (f, m) {
    if (m) {
      f.setMove(m);
    }
  };

  mk.controllers.Basic.prototype._getMove = function (pressed, k, p) {
    var m = mk.moves.types;
    var f = this.fighters[p];
    var leftOrient = mk.fighters.orientations.LEFT;
    var rightOrient = mk.fighters.orientations.RIGHT;
    var orient = f.getOrientation();

    if (f.getMove().type === m.SQUAT && !pressed[k.DOWN]) {
      return m.STAND_UP;
    }

    if (f.getMove().type === m.BLOCK && !pressed[k.BLOCK]) {
      return m.STAND;
    }

    if (Object.keys(pressed).length === 0) {
      return m.STAND;
    }

    if (pressed[k.BLOCK]) {
      return m.BLOCK;
    } else if (pressed[k.LEFT]) {
      if (pressed[k.UP]) {
        return m.BACKWARD_JUMP;
      } else if (pressed[k.HK] && orient === leftOrient) {
        return m.SPIN_KICK;
      }

      return m.WALK_BACKWARD;
    } else if (pressed[k.RIGHT]) {
      if (pressed[k.UP]) {
        return m.FORWARD_JUMP;
      } else if (pressed[k.HK] && orient === rightOrient) {
        return m.SPIN_KICK;
      }

      return m.WALK;
    } else if (pressed[k.DOWN]) {
      if (pressed[k.HP]) {
        return m.UPPERCUT;
      } else if (pressed[k.LK]) {
        return m.SQUAT_LOW_KICK;
      } else if (pressed[k.HK]) {
        return m.SQUAT_HIGH_KICK;
      } else if (pressed[k.LP]) {
        return m.SQUAT_LOW_PUNCH;
      }

      return m.SQUAT;
    } else if (pressed[k.HK]) {
      if (f.getMove().type === m.FORWARD_JUMP) {
        return m.FORWARD_JUMP_KICK;
      } else if (f.getMove().type === m.BACKWARD_JUMP) {
        return m.BACKWARD_JUMP_KICK;
      }

      return m.HIGH_KICK;
    } else if (pressed[k.UP]) {
      return m.JUMP;
    } else if (pressed[k.LK]) {
      if (f.getMove().type === m.FORWARD_JUMP) {
        return m.FORWARD_JUMP_KICK;
      } else if (f.getMove().type === m.BACKWARD_JUMP) {
        return m.BACKWARD_JUMP_KICK;
      }

      return m.LOW_KICK;
    } else if (pressed[k.LP]) {
      if (f.getMove().type === m.FORWARD_JUMP) {
        return m.FORWARD_JUMP_PUNCH;
      } else if (f.getMove().type === m.BACKWARD_JUMP) {
        return m.BACKWARD_JUMP_PUNCH;
      }

      return m.LOW_PUNCH;
    } else if (pressed[k.HP]) {
      if (f.getMove().type === m.FORWARD_JUMP) {
        return m.FORWARD_JUMP_PUNCH;
      } else if (f.getMove().type === m.BACKWARD_JUMP) {
        return m.BACKWARD_JUMP_PUNCH;
      }

      return m.HIGH_PUNCH;
    }
  };

  mk.controllers.WebcamInput = function (options) {
    mk.controllers.Basic.call(this, options);
  };

  mk.controllers.WebcamInput.prototype = new mk.controllers.Basic();

  mk.controllers.WebcamInput.prototype._initialize = function () {
    this._player = 1;

    this._addHandlers();

    this._addMovementHandlers();
  };

  mk.controllers.WebcamInput.prototype._addMovementHandlers = function () {
    var f = this.fighters[0];
    window.Detect = window.Detect || {};

    window.Detect.onPunch = function () {
      f.setMove(mk.moves.types.HIGH_PUNCH);
    };

    window.Detect.onKick = function () {
      f.setMove(mk.moves.types.LOW_KICK);
    };

    window.Detect.onStand = function () {
      f.setMove(mk.moves.types.STAND);
    };
  };

  mk.controllers.keys.p1 = {
    RIGHT: 74,
    LEFT: 71,
    UP: 89,
    DOWN: 72,
    BLOCK: 16,
    HP: 65,
    LP: 83,
    LK: 68,
    HK: 70
  };
  mk.controllers.keys.p2 = {
    RIGHT: 39,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    BLOCK: 17,
    HP: 80,
    LP: 219,
    LK: 221,
    HK: 220
  };

  mk.controllers.Multiplayer = function (options) {
    mk.controllers.Basic.call(this, options);
  };

  mk.controllers.Multiplayer.prototype = new mk.controllers.Basic();

  mk.controllers.Multiplayer.prototype._initialize = function () {
    this._addHandlers();
  };

  mk.controllers.Multiplayer.prototype._addHandlers = function () {
    var pressed = {},
        self = this,
        f1 = this.fighters[0],
        f2 = this.fighters[1];
    document.addEventListener('keydown', function (e) {
      pressed[e.keyCode] = true;

      var move = self._getMove(pressed, mk.controllers.keys.p1, 0);

      self._moveFighter(f1, move);

      move = self._getMove(pressed, mk.controllers.keys.p2, 1);

      self._moveFighter(f2, move);
    }, false);
    document.addEventListener('keyup', function (e) {
      delete pressed[e.keyCode];

      var move = self._getMove(pressed, mk.controllers.keys.p1, 0);

      self._moveFighter(f1, move);

      move = self._getMove(pressed, mk.controllers.keys.p2, 1);

      self._moveFighter(f2, move);
    }, false);
  };

  mk.controllers.Multiplayer.prototype._moveFighter = function (fighter, move) {
    if (move) {
      fighter.setMove(move);
    }
  };

  mk.controllers.Network = function (options) {
    mk.controllers.Basic.call(this, options);
    this._isHost = options.isHost;
    this._gameName = options.gameName;
    this._transport = options.transport || this.Transports.socketio;
  };

  mk.callbacks.PLAYER_CONNECTED = 'player-connected';
  mk.controllers.Network.prototype = new mk.controllers.Basic();
  mk.controllers.Network.prototype.Requests = {
    CREATE_GAME: 'create-game',
    JOIN_GAME: 'join-game'
  };
  mk.controllers.Network.prototype.Responses = {
    SUCCESS: 0,
    GAME_EXISTS: 1,
    GAME_NOT_EXISTS: 2,
    GAME_FULL: 3
  };
  mk.controllers.Network.prototype.Messages = {
    EVENT: 'event',
    LIFE_UPDATE: 'life-update',
    POSITION_UPDATE: 'position-update',
    PLAYER_CONNECTED: 'player-connected'
  };
  mk.controllers.Network.prototype.Transports = {
    socketio: {}
  };

  mk.controllers.Network.prototype.Transports.socketio.init = function () {
    this._socket = io.connect();
  };

  mk.controllers.Network.prototype.Transports.socketio.emit = function () {
    this._socket.emit.apply(this._socket, arguments);
  };

  mk.controllers.Network.prototype.Transports.socketio.on = function () {
    this._socket.on.apply(this._socket, arguments);
  };

  mk.controllers.Network.prototype._createGame = function (game) {
    this._transport.emit(this.Requests.CREATE_GAME, this._gameName);

    this._addSocketHandlers();
  };

  mk.controllers.Network.prototype._addSocketHandlers = function () {
    var opponent = this.fighters[+!this._player],
        f = this.fighters[this._player],
        m = this.Messages,
        self = this;

    this._transport.on(m.EVENT, function (move) {
      opponent.setMove(move);
    });

    this._transport.on(m.LIFE_UPDATE, function (data) {
      opponent.setLife(data);
    });

    this._transport.on(m.POSITION_UPDATE, function (data) {
      opponent.setX(data.x);
      opponent.setY(data.y);
    });

    setInterval(function () {
      self._transport.emit(m.LIFE_UPDATE, f.getLife());
    }, 2000);
    setInterval(function () {
      if (!f.isJumping()) {
        self._transport.emit(m.POSITION_UPDATE, {
          x: f.getX(),
          y: f.getY()
        });
      }
    }, 500);

    if (this._isHost) {
      this._transport.on(this.Messages.PLAYER_CONNECTED, function (data) {
        var c = self._callbacks[mk.callbacks.PLAYER_CONNECTED];

        if (typeof c === 'function') {
          c();
        }
      });
    }
  };

  mk.controllers.Network.prototype._moveFighter = function (f, m) {
    if (m) {
      this._transport.emit('event', m);

      f.setMove(m);
    }
  };

  mk.controllers.Network.prototype._joinGame = function (game) {
    this._transport.emit(this.Requests.JOIN_GAME, this._gameName);

    this._addSocketHandlers();
  };

  mk.controllers.Network.prototype._initialize = function () {
    var self = this;

    if (this._isHost) {
      this._player = 1;
    } else {
      this._player = 0;
    }

    this._addHandlers();

    this._transport.init();

    this._transport.on('connect', function () {
      if (self._isHost) {
        self._createGame(self._gameName);
      } else {
        self._joinGame(self._gameName);
      }
    });

    this._transport.on('response', function (response) {
      if (response !== self.Responses.SUCCESS) {
        alert('Error while connecting to the server.');
      }
    });

    this._transport.on('disconnect', function () {
      alert('Disconnected from the server.');
    });
  };

  mk.start = function (options) {
    var type = options.gameType || 'basic';
    var promise = new mk.Promise();
    type = type.toLowerCase();

    switch (type) {
      case 'basic':
        mk.game = new mk.controllers.Basic(options);
        break;

      case 'network':
        mk.game = new mk.controllers.Network(options);
        break;

      case 'multiplayer':
        mk.game = new mk.controllers.Multiplayer(options);
        break;

      case 'webcaminput':
        mk.game = new mk.controllers.WebcamInput(options);
        break;

      default:
        mk.game = new mk.controllers.Basic(options);
    }

    mk.game.init(promise);
    return promise;
  };

  mk.Promise = function () {
    this.callbacks = [];
  };

  mk.Promise.prototype._initialized = function () {
    this.callbacks.forEach(function (c) {
      if (typeof c === 'function') {
        c();
      }
    });
  };

  mk.Promise.prototype.ready = function (callback) {
    this.callbacks.push(callback);
  };

  mk.arenas = {
    types: {
      TOWER: 0,
      THRONE_ROOM: 1
    }
  };

  mk.arenas.Arena = function (options) {
    this.width = options.width || 600;
    this.height = options.height || 400;
    this.arena = options.arena || mk.arenas.types.TOWER;
    this.fighters = options.fighters;
    this._container = options.container;
    this._game = options.game;
  };

  mk.arenas.Arena.prototype.init = function () {
    var canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;

    this._container.appendChild(canvas);

    this._context = canvas.getContext('2d');
    this._canvas = canvas;
    this.refresh();
  };

  mk.arenas.Arena.prototype.destroy = function () {
    this._container.removeChild(this._canvas);

    this._canvas = undefined;
    this._context = undefined;
    this._container = undefined;
    this._game = undefined;
    this.fighters = undefined;
    this.arena = undefined;
  };

  mk.arenas.Arena.prototype._drawArena = function () {
    var img = document.createElement('img'),
        conf = mk.config,
        self = this;

    if (this.texture) {
      this._context.drawImage(this.texture, 0, 0, this.width, this.height);
    } else {
      img.src = images[conf.ARENAS][this.arena].arena;
      img.width = this.width;
      img.height = this.height;

      img.onload = function () {
        self.texture = img;

        self._context.drawImage(img, 0, 0, self.width, self.height);
      };
    }
  };

  mk.arenas.Arena.prototype.refresh = function () {
    this._drawArena();

    var f;

    for (var i = 0; i < this.fighters.length; i += 1) {
      f = this.fighters[i];

      this._context.drawImage(f.getState(), f.getX(), f.getY());
    }
  };

  mk.arenas.Arena.prototype.moveFighter = function (fighter, pos) {
    var opponent = this._game.getOpponent(fighter);

    var op = {
      x: opponent.getX(),
      y: opponent.getY()
    };
    var isOver = pos.y + fighter.getVisibleHeight() <= op.y;

    if (pos.x <= 0) {
      pos.x = 0;
    }

    if (pos.x >= this.width - fighter.getVisibleWidth()) {
      pos.x = this.width - fighter.getVisibleWidth();
    }

    if (!isOver) {
      if (fighter.getOrientation() === mk.fighters.orientations.LEFT) {
        if (pos.x + fighter.getVisibleWidth() > op.x) {
          pos = this._synchronizeFighters(pos, fighter, opponent);
        }
      } else {
        if (pos.x < op.x + opponent.getVisibleWidth()) {
          pos = this._synchronizeFighters(pos, fighter, opponent);
        }
      }
    }

    this._setFightersOrientation(fighter, opponent);

    return pos;
  };

  mk.arenas.Arena.prototype._synchronizeFighters = function (pos, fighter, opponent) {
    if (fighter.getMove().type === mk.moves.types.FORWARD_JUMP || fighter.getMove().type === mk.moves.types.BACKWARD_JUMP) {
      pos.x = fighter.getX();
      return pos;
    }

    var diff;

    if (fighter.getOrientation() === mk.fighters.orientations.LEFT) {
      diff = Math.min(this.width - (opponent.getX() + opponent.getVisibleWidth() + fighter.getVisibleWidth()), pos.x - fighter.getX());
      pos.x = fighter.getX() + diff;

      if (diff > 0) {
        opponent.setX(opponent.getX() + diff);
      }
    } else {
      diff = Math.min(opponent.getX(), fighter.getX() - pos.x);

      if (diff > 0) {
        pos.x = fighter.getX() - diff;
        opponent.setX(opponent.getX() - diff);

        if (opponent.getX() + opponent.getWidth() > pos.x) {
          pos.x = opponent.getX() + opponent.getVisibleWidth();
        }
      } else {
        pos.x = fighter.getX();

        if (opponent.getX() + opponent.getWidth() > pos.x) {
          pos.x = opponent.getX() + opponent.getVisibleWidth();
        }
      }
    }

    return pos;
  };

  mk.arenas.Arena.prototype._setFightersOrientation = function (f1, f2) {
    if (f1.getX() < f2.getX()) {
      f1.setOrientation(mk.fighters.orientations.LEFT);
      f2.setOrientation(mk.fighters.orientations.RIGHT);
    } else {
      f1.setOrientation(mk.fighters.orientations.RIGHT);
      f2.setOrientation(mk.fighters.orientations.LEFT);
    }
  };
  /* * * * * * * * * * * * * * * * Definition of all movements * * * * * * * * * * * * * * * */


  mk.moves = {};
  mk.moves.types = {
    STAND: 'stand',
    WALK: 'walking',
    WALK_BACKWARD: 'walking-backward',
    SQUAT: 'squating',
    STAND_UP: 'stand-up',
    HIGH_KICK: 'high-kick',
    JUMP: 'jumping',
    FORWARD_JUMP: 'forward-jump',
    BACKWARD_JUMP: 'backward-jump',
    LOW_KICK: 'low-kick',
    LOW_PUNCH: 'low-punch',
    HIGH_PUNCH: 'high-punch',
    FALL: 'fall',
    WIN: 'win',
    ENDURE: 'endure',
    SQUAT_ENDURE: 'squat-endure',
    UPPERCUT: 'uppercut',
    SQUAT_LOW_KICK: 'squat-low-kick',
    SQUAT_HIGH_KICK: 'squat-high-kick',
    SQUAT_LOW_PUNCH: 'squat-low-punch',
    KNOCK_DOWN: 'knock-down',
    ATTRACTIVE_STAND_UP: 'attractive-stand-up',
    SPIN_KICK: 'spin-kick',
    BLOCK: 'blocking',
    FORWARD_JUMP_KICK: 'forward-jump-kick',
    BACKWARD_JUMP_KICK: 'backward-jump-kick',
    BACKWARD_JUMP_PUNCH: 'backward-jump-punch',
    FORWARD_JUMP_PUNCH: 'forward-jump-punch'
  };
  /**
   * Base constructor for all movements
   *
   * @constructor
   * @param {Fighter} owner Owner of the movement
   * @param {string} type Type of the movement
   * @param {number} stepDuration Duration between the movements steps
   */

  mk.moves.Move = function (owner, type, stepDuration) {
    this.owner = owner;
    this.type = type;
    this._stepDuration = stepDuration || 80;
    this._interval = -1;
    this._currentStep = 0;
    this._actionPending = [];
  };

  mk.moves.Move.prototype.go = function (step) {
    var self = this;
    if (typeof this._beforeGo === 'function') this._beforeGo();
    this._currentStep = step || 0;

    this._nextStep(this._action);

    this._interval = setInterval(function () {
      self._nextStep(self._action);
    }, this._stepDuration);
  };

  mk.moves.Move.prototype._action = function () {};

  mk.moves.Move.prototype._nextStep = function (callback) {
    var img = document.createElement('img'),
        conf = mk.config;
    img = this._steps[this.owner.getOrientation()][this._currentStep];
    this.owner.setState(img);
    callback.apply(this);
    this.owner.refresh();

    this._moveNextStep();
  };

  mk.moves.Move.prototype.init = function (callback) {
    var loaded = 0,
        self = this,
        img,
        o = mk.fighters.orientations;
    this._steps = {};
    this._steps[o.RIGHT] = [];
    this._steps[o.LEFT] = [];

    for (var i = 0; i < this._totalSteps; i += 1) {
      for (var orientation in o) {
        img = document.createElement('img');

        img.onload = function () {
          loaded += 1;

          if (loaded === self._totalSteps * 2) {
            callback.apply(self);
          }
        };

        img.src = this._getImageUrl(i, o[orientation]);

        this._steps[o[orientation]].push(img);
      }
    }

    if (typeof this.addHandlers === 'function') {
      this.addHandlers();
    }
  };

  mk.moves.Move.prototype._getImageUrl = function (id, ownerOrientation) {
    var conf = mk.config;
    return images[conf.FIGHTERS][this.owner.getName()][ownerOrientation][this.type][id];
  };

  mk.moves.Move.prototype.stop = function (callback) {
    if (typeof this._beforeStop === 'function') this._beforeStop();
    clearInterval(this._interval);

    if (typeof this._actionPending === 'function') {
      var func = this._actionPending;
      this._actionPending = null;
      func();
    }

    this._shouldStop = false;
  };

  mk.moves.CycleMove = function (options) {
    options = options || {};
    mk.moves.Move.call(this, options.owner, options.type, options.duration);
    this._totalSteps = options.steps;
  };

  mk.moves.CycleMove.prototype = new mk.moves.Move();

  mk.moves.CycleMove.prototype._moveNextStep = function () {
    this._currentStep += 1;
    this._currentStep = this._currentStep % this._totalSteps;
  };

  mk.moves.Stand = function (owner) {
    mk.moves.CycleMove.call(this, {
      owner: owner,
      type: mk.moves.types.STAND,
      steps: 9
    });
  };

  mk.moves.Stand.prototype = new mk.moves.CycleMove();

  mk.moves.Stand.prototype._beforeGo = function () {
    this.owner.setY(mk.config.PLAYER_TOP);
  };

  mk.moves.Walk = function (owner) {
    mk.moves.CycleMove.call(this, {
      owner: owner,
      type: mk.moves.types.WALK,
      steps: 9
    });
  };

  mk.moves.Walk.prototype = new mk.moves.CycleMove();

  mk.moves.Walk.prototype._action = function () {
    this.owner.setX(this.owner.getX() + 10);
    this.owner.setY(mk.config.PLAYER_TOP);
  };

  mk.moves.WalkBack = function (owner) {
    mk.moves.CycleMove.call(this, {
      owner: owner,
      type: mk.moves.types.WALK_BACKWARD,
      steps: 9
    });
  };

  mk.moves.WalkBack.prototype = new mk.moves.CycleMove();

  mk.moves.WalkBack.prototype._action = function () {
    this.owner.setX(this.owner.getX() - 10);
    this.owner.setY(mk.config.PLAYER_TOP);
  };

  mk.moves.FiniteMove = function (owner, type, duration) {
    mk.moves.Move.call(this, owner, type, duration);
    this._bottom = undefined;
  };

  mk.moves.FiniteMove.prototype = new mk.moves.Move();

  mk.moves.FiniteMove.prototype._moveNextStep = function () {
    if (this._currentStep >= this._totalSteps - 1) {
      this._currentStep = this._totalSteps - 1;
    } else {
      this._currentStep = this._currentStep + 1;
    }
  };

  mk.moves.FiniteMove.prototype._beforeGo = function () {
    this._bottom = this.owner.getBottom();
    this.owner.lock();
  };

  mk.moves.FiniteMove.prototype._beforeStop = function () {
    this.owner.unlock();
  };

  mk.moves.FiniteMove.prototype.keepDistance = function () {
    var currentBottom = this.owner.getBottom();

    if (currentBottom > this._bottom) {
      this.owner.setY(this.owner.getY() + currentBottom - this._bottom);
    }

    if (currentBottom < this._bottom) {
      this.owner.setY(this.owner.getY() - (this._bottom - currentBottom));
    }
  };

  mk.moves.Fall = function (owner) {
    mk.moves.FiniteMove.call(this, owner, mk.moves.types.FALL, 100);
    this._totalSteps = 7;
  };

  mk.moves.Fall.prototype = new mk.moves.FiniteMove();

  mk.moves.Fall.prototype._action = function () {
    this.keepDistance();
  };

  mk.moves.Win = function (owner) {
    mk.moves.FiniteMove.call(this, owner, mk.moves.types.WIN, 100);
    this._totalSteps = 10;
  };

  mk.moves.Win.prototype = new mk.moves.FiniteMove();

  mk.moves.Win.prototype._action = function () {
    this.keepDistance();
  };

  mk.moves.Win.prototype._beforeGo = function () {
    this.owner.lock();
    this.owner.setY(mk.config.PLAYER_TOP);
    this._bottom = this.owner.getBottom();
  };

  mk.moves.Squat = function (owner) {
    mk.moves.FiniteMove.call(this, owner, mk.moves.types.SQUAT, 40);
    this._totalSteps = 3;
  };

  mk.moves.Squat.prototype = new mk.moves.FiniteMove();

  mk.moves.Squat.prototype._action = function () {
    this.keepDistance();

    if (this._currentStep === 2) {
      this.stop();
    }
  };

  mk.moves.Block = function (owner) {
    mk.moves.FiniteMove.call(this, owner, mk.moves.types.BLOCK, 40);
    this._totalSteps = 3;
  };

  mk.moves.Block.prototype = new mk.moves.FiniteMove();

  mk.moves.Block.prototype._action = function () {
    this.keepDistance();

    if (this._currentStep === 2) {
      this.stop();
    }
  };

  mk.moves.StandUp = function (owner) {
    mk.moves.FiniteMove.call(this, owner, mk.moves.types.STAND_UP, 100);
    this._totalSteps = 3;
  };

  mk.moves.StandUp.prototype = new mk.moves.FiniteMove();

  mk.moves.StandUp.prototype._action = function () {
    if (this._currentStep === 2) {
      this.stop();
      this.owner.setMove(mk.moves.types.STAND);
      this.owner.setY(mk.config.PLAYER_TOP);
    }

    this.keepDistance();
  };

  mk.moves.AttractiveStandUp = function (owner) {
    mk.moves.FiniteMove.call(this, owner, mk.moves.types.ATTRACTIVE_STAND_UP, 100);
    this._totalSteps = 4;
  };

  mk.moves.AttractiveStandUp.prototype = new mk.moves.FiniteMove();

  mk.moves.AttractiveStandUp.prototype._action = function () {
    if (this._currentStep === this._totalSteps - 1) {
      this.stop();
      this.owner.setMove(mk.moves.types.STAND);
    } else {
      this.keepDistance();
    }
  };

  mk.moves.AttractiveStandUp.prototype._beforeStop = function () {
    this.owner.unlock();
    this.owner.setY(mk.config.PLAYER_TOP);
  };

  mk.moves.Endure = function (owner) {
    mk.moves.Move.call(this, owner, mk.moves.types.ENDURE);
    this._totalSteps = 3;
  };

  mk.moves.Endure.prototype = new mk.moves.Move();

  mk.moves.Endure.prototype._action = function () {
    if (this._currentStep === this._totalSteps - 1) {
      this.stop();
      this.owner.setMove(mk.moves.types.STAND);
    }
  };

  mk.moves.Endure.prototype._beforeGo = function () {
    this.owner.lock();
  };

  mk.moves.Endure.prototype._beforeStop = function () {
    this.owner.unlock();
  };

  mk.moves.Endure.prototype._moveNextStep = function () {
    this._currentStep += 1;
  };

  mk.moves.KnockDown = function (owner) {
    mk.moves.Move.call(this, owner, mk.moves.types.KNOCK_DOWN, 80);
    this._totalSteps = 10;
  };

  mk.moves.KnockDown.prototype = new mk.moves.Move();

  mk.moves.KnockDown.prototype._action = function () {
    if (this._currentStep === this._totalSteps - 1) {
      this.stop();
      this.owner.setMove(mk.moves.types.ATTRACTIVE_STAND_UP);
    } else {
      var xDisplacement = 25;

      if (this.owner.getOrientation() === mk.fighters.orientations.LEFT) {
        xDisplacement = -xDisplacement;
      }

      if (this._currentStep + 1 > (this._totalSteps - 1) / 2) {
        this.owner.setY(this.owner.getY() + 10);
        this.owner.setX(this.owner.getX() + xDisplacement);
      } else {
        this.owner.setY(this.owner.getY() + 10);
        this.owner.setX(this.owner.getX() + xDisplacement);
      }
    }
  };

  mk.moves.KnockDown.prototype._beforeGo = function () {
    this.owner.lock();
  };

  mk.moves.KnockDown.prototype._beforeStop = function () {
    this.owner.unlock();
  };

  mk.moves.KnockDown.prototype._moveNextStep = function () {
    this._currentStep += 1;
  };

  mk.moves.SquatEndure = function (owner) {
    mk.moves.Move.call(this, owner, mk.moves.types.SQUAT_ENDURE);
    this._totalSteps = 3;
  };

  mk.moves.SquatEndure.prototype = new mk.moves.Move();

  mk.moves.SquatEndure.prototype._action = function () {
    if (this._currentStep === this._totalSteps - 1) {
      this.stop();
      this.owner.setMove(mk.moves.types.SQUAT);
    }

    this.keepDistance();
  };

  mk.moves.SquatEndure.prototype._beforeGo = function () {
    this.owner.lock();
    if (this._bottom === undefined) this._bottom = this.owner.getBottom();
  };

  mk.moves.SquatEndure.prototype._beforeStop = function () {
    this.owner.unlock();
  };

  mk.moves.SquatEndure.prototype._moveNextStep = function () {
    this._currentStep += 1;
  };

  mk.moves.SquatEndure.prototype.keepDistance = function () {
    var currentBottom = this.owner.getBottom();

    if (currentBottom > this._bottom) {
      this.owner.setY(this.owner.getY() + currentBottom - this._bottom);
    }

    if (currentBottom < this._bottom) {
      this.owner.setY(this.owner.getY() - (this._bottom - currentBottom));
    }
  };

  mk.moves.Jump = function (owner) {
    mk.moves.Move.call(this, owner, mk.moves.types.JUMP, 60);
    this._totalSteps = 6;
    this._moveBack = false;
  };

  mk.moves.Jump.prototype = new mk.moves.Move();

  mk.moves.Jump.prototype._moveNextStep = function () {
    if (!this._moveBack) {
      this._currentStep += 1;
    }

    if (this._moveBack) {
      this._currentStep -= 1;

      if (this._currentStep <= 0) {
        this.stop();
        this.owner.setMove(mk.moves.types.STAND);
      }
    }

    if (this._currentStep >= this._totalSteps) {
      this._moveBack = true;
      this._currentStep -= 1;
    }
  };

  mk.moves.Jump.prototype._action = function () {
    if (!this._moveBack) {
      if (this._currentStep === 0) {
        this.owner.setY(this.owner.getY() + 20);
      } else {
        this.owner.setY(this.owner.getY() - 20);
      }
    } else {
      if (this._currentStep === this._totalSteps - 1) {
        this.owner.setY(this.owner.getY() - 20);
      } else {
        this.owner.setY(this.owner.getY() + 25);
      }
    }
  };

  mk.moves.Jump.prototype._beforeStop = function () {
    this.owner.unlock();
  };

  mk.moves.Jump.prototype._beforeGo = function () {
    this._moveBack = false;
    this.owner.lock();
  };

  mk.moves.ForwardJump = function (owner) {
    mk.moves.Move.call(this, owner, mk.moves.types.FORWARD_JUMP, 80);
    this._totalSteps = 8;
    this._ownerHeight = owner.getVisibleHeight();
  };

  mk.moves.ForwardJump.prototype = new mk.moves.Move();

  mk.moves.ForwardJump.prototype._beforeStop = function () {
    this.owner.unlock();
    this.owner.setHeight(this._ownerHeight);
  };

  mk.moves.ForwardJump.prototype._beforeGo = function () {
    this.owner.lock();
    this.owner.setHeight(this._ownerHeight / 2);
  };

  mk.moves.ForwardJump.prototype._moveNextStep = function () {
    this._currentStep += 1;

    if (this._currentStep >= this._totalSteps) {
      this.stop();
      this.owner.setMove(mk.moves.types.STAND);
    }
  };

  mk.moves.ForwardJump.prototype._action = function () {
    if (this._currentStep > (this._totalSteps - 1) / 2) {
      //Move down
      this.owner.setY(this.owner.getY() + 26);
      this.owner.setX(this.owner.getX() + 23);
    } else {
      //Move up
      this.owner.setY(this.owner.getY() - 26);
      this.owner.setX(this.owner.getX() + 23);
    }
  };

  mk.moves.BackwardJump = function (owner) {
    mk.moves.Move.call(this, owner, mk.moves.types.BACKWARD_JUMP, 80);
    this._totalSteps = 8;
    this._ownerHeight = owner.getVisibleHeight();
  };

  mk.moves.BackwardJump.prototype = new mk.moves.Move();

  mk.moves.BackwardJump.prototype._beforeStop = function () {
    this.owner.unlock();
    this.owner.setHeight(this._ownerHeight);
  };

  mk.moves.BackwardJump.prototype._beforeGo = function () {
    this.owner.lock();
    this.owner.setHeight(this._ownerHeight / 2);
  };

  mk.moves.BackwardJump.prototype._moveNextStep = function () {
    this._currentStep += 1;

    if (this._currentStep >= this._totalSteps) {
      this.stop();
      this.owner.setMove(mk.moves.types.STAND);
    }
  };

  mk.moves.BackwardJump.prototype._action = function () {
    if (this._currentStep > (this._totalSteps - 1) / 2) {
      //Move down
      this.owner.setY(this.owner.getY() + 26);
      this.owner.setX(this.owner.getX() - 23);
    } else {
      //Move up
      this.owner.setY(this.owner.getY() - 26);
      this.owner.setX(this.owner.getX() - 23);
    }
  };
  /* * * * * * * * * * * * * * Standard attacks * * * * * * * * * * * * * * * */


  mk.moves.Attack = function (options) {
    options = options || {};
    mk.moves.Move.call(this, options.owner, options.type, options.duration || 40);
    this._damage = options.damage;
    this._totalSteps = options.steps;
    this._moveBack = false;
    this._hitPassed = false;
    this._returnStand = options.returnStand || mk.moves.types.STAND;
    this._returnStandStep = options.returnStandStep || 0;
  };

  mk.moves.Attack.prototype = new mk.moves.Move();

  mk.moves.Attack.prototype._moveNextStep = function () {
    if (!this._moveBack) {
      this._currentStep += 1;
    }

    if (this._moveBack) {
      this._currentStep -= 1;

      if (this._currentStep <= 0) {
        this.stop();
        this.owner.setMove(this._returnStand, this._returnStandStep);
      }
    }

    if (this._currentStep >= this._totalSteps) {
      if (this._dontReturn) {
        this.stop();
        this.owner.setMove(this._returnStand);
      } else {
        this._moveBack = true;
        this._currentStep -= 1;
      }
    }
  };

  mk.moves.Attack.prototype._action = function () {
    this.keepDistance();

    if (!this._hitPassed && this._currentStep === Math.round(this._totalSteps / 2)) {
      this.owner.attack(this.getDamage());
      this._hitPassed = true;
    }
  };

  mk.moves.Attack.prototype.getDamage = function () {
    return this._damage;
  };

  mk.moves.Attack.prototype._beforeStop = function () {
    this.owner.unlock();
  };

  mk.moves.Attack.prototype._beforeGo = function () {
    this._moveBack = false;
    this._hitPassed = false;
    this.owner.lock();
    this._bottom = this.owner.getBottom();
  };

  mk.moves.Attack.prototype.keepDistance = function () {
    var currentBottom = this.owner.getBottom();

    if (currentBottom > this._bottom) {
      this.owner.setY(this.owner.getY() + currentBottom - this._bottom);
    }

    if (currentBottom < this._bottom) {
      this.owner.setY(this.owner.getY() - (this._bottom - currentBottom));
    }
  };

  mk.moves.HighKick = function (owner) {
    mk.moves.Attack.call(this, {
      owner: owner,
      type: mk.moves.types.HIGH_KICK,
      steps: 7,
      damage: 10
    });
  };

  mk.moves.HighKick.prototype = new mk.moves.Attack();

  mk.moves.LowKick = function (owner) {
    mk.moves.Attack.call(this, {
      owner: owner,
      type: mk.moves.types.LOW_KICK,
      steps: 6,
      damage: 25
    });
  };

  mk.moves.LowKick.prototype = new mk.moves.Attack();

  mk.moves.LowPunch = function (owner) {
    mk.moves.Attack.call(this, {
      owner: owner,
      type: mk.moves.types.LOW_PUNCH,
      steps: 5,
      damage: 5
    });
  };

  mk.moves.LowPunch.prototype = new mk.moves.Attack();

  mk.moves.HighPunch = function (owner) {
    mk.moves.Attack.call(this, {
      owner: owner,
      type: mk.moves.types.HIGH_PUNCH,
      steps: 5,
      damage: 20
    });
  };

  mk.moves.HighPunch.prototype = new mk.moves.Attack();

  mk.moves.Uppercut = function (owner) {
    mk.moves.Attack.call(this, {
      owner: owner,
      type: mk.moves.types.UPPERCUT,
      steps: 5,
      damage: 13,
      duration: 60
    });
  };

  mk.moves.Uppercut.prototype = new mk.moves.Attack();

  mk.moves.Uppercut.prototype._beforeStop = function () {
    this.owner.unlock();
    this.keepDistance();
  };

  mk.moves.Uppercut.prototype._action = function () {
    this.keepDistance();

    if (!this._hitPassed && this._currentStep === Math.round(this._totalSteps / 2)) {
      this.owner.attack(this.getDamage());
      this._hitPassed = true;
    }
  };

  mk.moves.SquatLowKick = function (owner) {
    mk.moves.Attack.call(this, {
      type: mk.moves.types.SQUAT_LOW_KICK,
      owner: owner,
      steps: 3,
      damage: 4,
      duration: 70,
      returnStand: mk.moves.types.SQUAT,
      returnStandStep: 2
    });
  };

  mk.moves.SquatLowKick.prototype = new mk.moves.Attack();

  mk.moves.SquatHighKick = function (owner) {
    mk.moves.Attack.call(this, {
      type: mk.moves.types.SQUAT_HIGH_KICK,
      owner: owner,
      steps: 4,
      damage: 6,
      duration: 70,
      returnStand: mk.moves.types.SQUAT,
      returnStandStep: 2
    });
  };

  mk.moves.SquatHighKick.prototype = new mk.moves.Attack();

  mk.moves.SquatLowPunch = function (owner) {
    mk.moves.Attack.call(this, {
      type: mk.moves.types.SQUAT_LOW_PUNCH,
      owner: owner,
      steps: 3,
      damage: 4,
      duration: 70,
      returnStand: mk.moves.types.SQUAT,
      returnStandStep: 2
    });
  };

  mk.moves.SquatLowPunch.prototype = new mk.moves.Attack();

  mk.moves.SpinKick = function (owner) {
    mk.moves.Attack.call(this, {
      owner: owner,
      type: mk.moves.types.SPIN_KICK,
      steps: 8,
      damage: 13,
      duration: 60,
      returnStand: mk.moves.types.STAND
    });
    this._dontReturn = true;
  };

  mk.moves.SpinKick.prototype = new mk.moves.Attack();

  mk.moves.JumpAttack = function (owner, type, damage, isForward) {
    mk.moves.Attack.call(this, {
      owner: owner,
      type: type,
      steps: 3,
      //to be overriden by the fighter
      damage: damage,
      duration: 80
    });
    this._offset = {
      x: -23,
      y: 26
    };

    if (isForward) {
      this._offset = {
        x: 23,
        y: 26
      };
    }

    this._totalPics = 2;
    this._counter = 0;
  };

  mk.moves.JumpAttack.prototype = new mk.moves.Attack();

  mk.moves.JumpAttack.prototype._moveNextStep = function () {
    this._currentStep += 1;
    this._counter += 1;

    if (this._totalPics <= this._currentStep) {
      this._currentStep = this._totalPics;
    }

    if (this._counter >= this._totalSteps) {
      if (this.owner.getMove().type !== mk.moves.types.WIN) {
        this.stop();
        this.owner.setMove(mk.moves.types.STAND);
        this.owner.setY(mk.config.PLAYER_TOP);
      }
    }
  };

  mk.moves.JumpAttack.prototype._action = function () {
    if (!this._hitPassed && this._currentStep === this._totalPics) {
      this.owner.attack(this.getDamage());
      this._hitPassed = true;
    }

    this.owner.setY(this.owner.getY() + this._offset.y);
    this.owner.setX(this.owner.getX() + this._offset.x);
  };

  mk.moves.JumpAttack.prototype._beforeGo = function () {
    this._hitPassed = false;
    this._counter = 0;
    this.owner.lock();
  };

  mk.moves.JumpKick = function (owner, isForward) {
    var type = mk.moves.types.BACKWARD_JUMP_KICK;

    if (isForward) {
      type = mk.moves.types.FORWARD_JUMP_KICK;
    }

    mk.moves.JumpAttack.call(this, owner, type, 10, isForward);
  };

  mk.moves.JumpKick.prototype = new mk.moves.JumpAttack();

  mk.moves.JumpPunch = function (owner, isForward) {
    var type = mk.moves.types.BACKWARD_JUMP_PUNCH;

    if (isForward) {
      type = mk.moves.types.FORWARD_JUMP_PUNCH;
    }

    mk.moves.JumpAttack.call(this, owner, type, 9, isForward);
  };

  mk.moves.JumpPunch.prototype = new mk.moves.JumpAttack();
  /* * * * * * * * * * * * * * End of the standard attacks * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * End of the movements definition * * * * * * * * * * * * * * */

  mk.fighters = {};
  mk.fighters.list = {
    subzero: true,
    kano: true
  };
  mk.fighters.orientations = {
    LEFT: 'left',
    RIGHT: 'right'
  };

  mk.fighters.Fighter = function (options) {
    var name = options.name.toLowerCase();

    if (!mk.fighters.list[name]) {
      throw 'Invalid fighter name!';
    }

    this._name = name;
    this._arena = options.arena;
    this._game = options.game;
    this._life = 100;
    this._orientation = options.orientation;
    this._width = 30;
    this._height = 60;
    this._locked = false;
    this._position = {
      x: 260,
      y: mk.config.PLAYER_TOP
    };
    this.init();
  };

  mk.fighters.Fighter.prototype.init = function (callback) {
    this.moves = {};
    this.moves[mk.moves.types.STAND] = new mk.moves.Stand(this);
    this.moves[mk.moves.types.WALK] = new mk.moves.Walk(this);
    this.moves[mk.moves.types.WALK_BACKWARD] = new mk.moves.WalkBack(this);
    this.moves[mk.moves.types.SQUAT] = new mk.moves.Squat(this);
    this.moves[mk.moves.types.BLOCK] = new mk.moves.Block(this);
    this.moves[mk.moves.types.STAND_UP] = new mk.moves.StandUp(this);
    this.moves[mk.moves.types.ATTRACTIVE_STAND_UP] = new mk.moves.AttractiveStandUp(this);
    this.moves[mk.moves.types.HIGH_KICK] = new mk.moves.HighKick(this);
    this.moves[mk.moves.types.LOW_KICK] = new mk.moves.LowKick(this);
    this.moves[mk.moves.types.SPIN_KICK] = new mk.moves.SpinKick(this);
    this.moves[mk.moves.types.LOW_PUNCH] = new mk.moves.LowPunch(this);
    this.moves[mk.moves.types.HIGH_PUNCH] = new mk.moves.HighPunch(this);
    this.moves[mk.moves.types.UPPERCUT] = new mk.moves.Uppercut(this);
    this.moves[mk.moves.types.SQUAT_LOW_KICK] = new mk.moves.SquatLowKick(this);
    this.moves[mk.moves.types.SQUAT_HIGH_KICK] = new mk.moves.SquatHighKick(this);
    this.moves[mk.moves.types.SQUAT_LOW_PUNCH] = new mk.moves.SquatLowPunch(this);
    this.moves[mk.moves.types.FALL] = new mk.moves.Fall(this);
    this.moves[mk.moves.types.KNOCK_DOWN] = new mk.moves.KnockDown(this);
    this.moves[mk.moves.types.WIN] = new mk.moves.Win(this);
    this.moves[mk.moves.types.JUMP] = new mk.moves.Jump(this);
    this.moves[mk.moves.types.FORWARD_JUMP_KICK] = new mk.moves.JumpKick(this, true);
    this.moves[mk.moves.types.BACKWARD_JUMP_KICK] = new mk.moves.JumpKick(this, false);
    this.moves[mk.moves.types.FORWARD_JUMP_PUNCH] = new mk.moves.JumpPunch(this, true);
    this.moves[mk.moves.types.BACKWARD_JUMP_PUNCH] = new mk.moves.JumpPunch(this, false);
    this.moves[mk.moves.types.ENDURE] = new mk.moves.Endure(this);
    this.moves[mk.moves.types.SQUAT_ENDURE] = new mk.moves.SquatEndure(this);
    this.moves[mk.moves.types.FORWARD_JUMP] = new mk.moves.ForwardJump(this);
    this.moves[mk.moves.types.BACKWARD_JUMP] = new mk.moves.BackwardJump(this);
    var initialized = 0;
    var total = Object.keys(this.moves).length;

    for (var move in this.moves) {
      this.moves[move].init(function () {
        initialized += 1;

        if (initialized === total) {
          if (typeof callback === 'function') {
            callback();
          }
        }
      });
    }
  };

  mk.fighters.Fighter.prototype.isJumping = function () {
    if (!this._currentMove) return false;
    var move = this._currentMove.typep;
    var m = mk.moves.types;

    if (move === m.JUMP || move === m.BACKWARD_JUMP || move === m.FORWARD_JUMP || move === m.FORWARD_JUMP_KICK || move === m.BACKWARD_JUMP_KICK || move === m.FORWARD_JUMP_PUNCH || move === m.BACKWARD_JUMP_PUNCH) {
      return true;
    }

    return false;
  };

  mk.fighters.Fighter.prototype.getName = function () {
    return this._name;
  };

  mk.fighters.Fighter.prototype.setArena = function (arena) {
    this._arena = arena;
  };

  mk.fighters.Fighter.prototype.getWidth = function () {
    if (this._currentState && this._currentState.width) {
      return this._currentState.width;
    }

    return this._width;
  };

  mk.fighters.Fighter.prototype.getVisibleWidth = function () {
    return this._width;
  };

  mk.fighters.Fighter.prototype.getVisibleHeight = function () {
    if (this._currentState && this._currentState.height) {
      return this._currentState.height;
    }

    return this._height;
  };

  mk.fighters.Fighter.prototype.getVisibleHeight = function () {
    return this._height;
  };

  mk.fighters.Fighter.prototype.setHeight = function (height) {
    this._height = height;
  };

  mk.fighters.Fighter.prototype.setWidth = function (width) {
    this._width = width;
  };

  mk.fighters.Fighter.prototype.setOrientation = function (orientation) {
    this._orientation = orientation;
  };

  mk.fighters.Fighter.prototype.getOrientation = function (orientation) {
    return this._orientation;
  };

  mk.fighters.Fighter.prototype.refresh = function () {
    if (this._arena && typeof this._arena.refresh === 'function') {
      this._arena.refresh(this);
    }
  };

  mk.fighters.Fighter.prototype.getX = function () {
    return this._position.x;
  };

  mk.fighters.Fighter.prototype.lock = function () {
    this._locked = true;
  };

  mk.fighters.Fighter.prototype.unlock = function () {
    this._locked = false;
  };

  mk.fighters.Fighter.prototype.getY = function () {
    return this._position.y;
  };

  mk.fighters.Fighter.prototype.setX = function (x) {
    this._position.x = this._arena.moveFighter(this, {
      x: x,
      y: this.getY()
    }).x;
  };

  mk.fighters.Fighter.prototype.setY = function (y) {
    this._position.y = y;
  };

  mk.fighters.Fighter.prototype.setState = function (state) {
    this._currentState = state;
  };

  mk.fighters.Fighter.prototype.getState = function () {
    return this._currentState;
  };

  mk.fighters.Fighter.prototype.attack = function (damage) {
    this._game.fighterAttacked(this, damage);
  };

  mk.fighters.Fighter.prototype.endureAttack = function (damage, attackType) {
    var m = mk.moves.types;

    if (this.getMove().type === m.BLOCK) {
      damage *= mk.config.BLOCK_DAMAGE;
    } else {
      this.unlock();

      if (this.getMove().type === m.SQUAT) {
        this.setMove(m.SQUAT_ENDURE);
      } else {
        if (attackType === m.UPPERCUT || attackType === m.SPIN_KICK) {
          this.setMove(m.KNOCK_DOWN);
        } else {
          this.setMove(m.ENDURE);
        }
      }
    }

    this.setLife(this.getLife() - damage);

    if (this.getLife() === 0) {
      this._game.fighterDead(this);

      this.unlock();
      this.setMove(mk.moves.types.FALL);
    }

    return this.getLife();
  };

  mk.fighters.Fighter.prototype.setLife = function (life) {
    this._life = Math.max(life, 0);
  };

  mk.fighters.Fighter.prototype.getLife = function () {
    return this._life;
  };

  mk.fighters.Fighter.prototype.getBottom = function () {
    var bottomY = this._currentState.height + this.getY();
    return this._arena.height - bottomY;
  };

  mk.fighters.Fighter.prototype.setMove = function (move, step) {
    step = step || 0;
    var m = mk.moves.types,
        currentMove = this._currentMove;
    if (!(move in this.moves)) throw 'This player does not has the move - ' + move;
    if (this._currentMove && this._currentMove.type === move) return;

    if (move === m.FORWARD_JUMP_KICK || move === m.BACKWARD_JUMP_KICK || move === m.FORWARD_JUMP_PUNCH || move === m.BACKWARD_JUMP_PUNCH) {
      if (currentMove._currentStep >= currentMove._totalSteps / 2) {
        this._currentMove.stop();

        this.unlock();
        this._currentMove = this.moves[move];
        this._currentMove._totalSteps = currentMove._totalSteps - currentMove._currentStep;
      }
    }

    if (this._locked && move !== m.WIN) return;
    if (this._currentMove && typeof this._currentMove.stop === 'function') this._currentMove.stop();
    this._currentMove = this.moves[move];

    this._currentMove.go(step);
  };

  mk.fighters.Fighter.prototype.getMove = function () {
    return this._currentMove;
  };

  window.mk = mk;
})();
},{"../images/**/*.png":"images/**/*.png"}],"../../../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54925" + '/');

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
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js","src/mk.js"], null)
//# sourceMappingURL=/mk.667c0c00.map