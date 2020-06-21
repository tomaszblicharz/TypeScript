// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/pacman.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Pacman =
/** @class */
function () {
  function Pacman(game) {
    var _this = this;

    this.image = document.querySelector(".pacman");
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.game = game;
    this.position = {
      x: 241,
      y: 481
    };
    this.speed = {
      x: 0,
      y: 0
    };
    this.size = 35;
    document.querySelector(".btnStart").addEventListener("click", function () {
      return _this.startMoveBall();
    });
  }

  Pacman.prototype.draw = function (ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
  };

  Pacman.prototype.startMoveBall = function () {
    var _this = this;

    document.addEventListener("keydown", function (e) {
      switch (e.keyCode) {
        case 37:
          _this.speed = {
            x: -1.3,
            y: 0
          }; // console.log("lewo")

          break;

        case 38:
          _this.speed = {
            x: 0,
            y: -1.3
          }; // console.log("góra")

          break;

        case 39:
          _this.speed = {
            x: 1.3,
            y: 0
          }; // console.log("prawo")

          break;

        case 40:
          _this.speed = {
            x: 0,
            y: 1.3
          }; // console.log("dół")

          break;
      } // console.log(e.keyCode)

    }); // document.addEventListener("keyup", e => {
    //     switch (e.keyCode) {
    //         case 37:
    //             this.stop()
    //             break;
    //         case 38:
    //             this.stop()
    //             break;
    //         case 39:
    //             this.stop()
    //             break;
    //         case 40:
    //             this.stop()
    //             break;
    //     }
    //     // console.log(e.keyCode)
    // })
  }; // stop() {
  //     this.speed = {
  //         x: 0,
  //         y: 0
  //     };
  // }


  Pacman.prototype.update = function () {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  };

  return Pacman;
}();

exports.default = Pacman;
},{}],"../src/collisionBall.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkBall = void 0;

function checkBall(pacman, ball) {
  var leftPacman = pacman.position.x;
  var topPacman = pacman.position.y;
  var bottomPacman = pacman.position.y + pacman.size;
  var rightPacman = pacman.position.x + pacman.size;
  var leftBall = ball.position.x;
  var topBall = ball.position.y;
  var bottomBall = ball.position.y + ball.size;
  var rightBall = ball.position.x + ball.size;

  if (leftPacman > leftBall && rightPacman < rightBall && topPacman > topBall && bottomPacman < bottomBall) {
    return true;
  } else {
    return false;
  }
}

exports.checkBall = checkBall;
},{}],"../src/ball.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var collisionBall_1 = require("./collisionBall");

var Ball =
/** @class */
function () {
  function Ball(game, position) {
    this.image = document.querySelector(".goldenHole");
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.game = game;
    this.size = 40;
    this.position = position;
    this.flagDeletion = false;
    this.collisionWithBall = false;
  }

  Ball.prototype.draw = function (ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
  };

  Ball.prototype.update = function () {
    if (collisionBall_1.checkBall(this.game.pacman, this)) {
      this.flagDeletion = true;
    }

    if (collisionBall_1.checkBall(this.game.monster, this)) {
      this.game.wall.collisionWithWall = false;
      console.log(this.game.wall.collisionWithWall);
    }

    if (this.flagDeletion) {
      this.game.listBall = this.game.listBall.filter(function (object) {
        return !object.flagDeletion;
      });
    }
  };

  return Ball;
}();

exports.default = Ball;
},{"./collisionBall":"../src/collisionBall.ts"}],"../src/collisionWall.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkWall = void 0;

function checkWall(wall, gameObiect) {
  // let leftPacman = pacman.position.x;
  // let topPacman = pacman.position.y;
  // let bottomPacman = pacman.position.y + pacman.size;
  // let rightPacman = pacman.position.x + pacman.size;
  var topObiect = gameObiect.position.y;
  var bottomObiect = gameObiect.position.y + gameObiect.size;
  var leftObiect = gameObiect.position.x;
  var rightObiect = gameObiect.position.x + gameObiect.size;
  var topWall = wall.position.y;
  var bottomWall = wall.position.y + wall.size;
  var leftWall = wall.position.x;
  var rightWall = wall.position.x + wall.size;

  if (bottomObiect >= topWall && topObiect <= bottomWall && rightObiect >= leftWall && leftObiect <= rightWall) {
    return true;
  } else {
    return false;
  }
}

exports.checkWall = checkWall;
},{}],"../src/wall.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var collisionWall_1 = require("./collisionWall");

var Wall =
/** @class */
function () {
  function Wall(game, position) {
    this.image = document.querySelector(".imgwall");
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.game = game;
    this.position = position;
    this.size = 40;
    this.collisionWithWall = false;
  }

  Wall.prototype.draw = function (ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
  };

  Wall.prototype.update = function () {
    if (collisionWall_1.checkWall(this.game.pacman, this)) {
      this.game.pacman.position.x -= this.game.pacman.speed.x;
      this.game.pacman.position.y -= this.game.pacman.speed.y;
      this.game.pacman.speed.x = 0;
      this.game.pacman.speed.y = 0;
    }

    if (collisionWall_1.checkWall(this.game.monster, this) && this.collisionWithWall === false) {
      this.game.monster.clearSpeed();
      this.collisionWithWall = true;
      console.log("d");
    }

    if (this.collisionWithWall === true) {
      // this.game.monster.speed.x = -0.1;
      this.game.monster.randomSpeed();
      this.collisionWithWall = false;
      console.log("ss");
    } // this.game.monster.randomSpeed()
    // if (this.game.monster.position.x + this.game.monster.size > this.size || this.game.monster.position.x < 0) {
    // }
    //  else if (this.game.monster.position.y + this.game.monster.size > this.size || this.game.monster.position.y < 0) {
    //     this.game.monster.speed = 1
    // }
    // }

  };

  return Wall;
}();

exports.default = Wall;
},{"./collisionWall":"../src/collisionWall.ts"}],"../src/monster.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var startMoveMonster = false;

var Monster =
/** @class */
function () {
  function Monster(game) {
    this.collisionWithBall = false;
    this.image = document.querySelector(".monster");
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.game = game;
    this.position = {
      x: 241,
      y: 242
    };
    this.speed = {
      x: 0.1,
      y: 0
    };
    this.size = 30; // this.randomSpeed()

    document.querySelector(".btnStart").addEventListener("click", function () {
      return startMoveMonster = true;
    });
  }

  Monster.prototype.draw = function (ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
  };

  Monster.prototype.randomSpeed = function () {
    if (startMoveMonster) {
      var speed = [{
        x: 0.4,
        y: 0
      }, {
        x: 0,
        y: 0.4
      }, {
        x: -0.4,
        y: 0
      }, {
        x: 0,
        y: -0.4
      }];
      this.speed = speed[Math.floor(Math.random() * speed.length)];
    }
  };

  Monster.prototype.clearSpeed = function () {
    this.speed = {
      x: 0,
      y: 0
    };
    this.game.wall.collisionWithWall = true;
  };

  Monster.prototype.update = function () {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y; // if ((this.game.ball.collisionWithBall = true)) {
    //   this.randomSpeed();
    // } else if ((this.game.ball.collisionWithBall = false)) {
    //   this.speed = {
    //     x: 0,
    //     y: 0,
    //   };
    // }
    // this.game.monster.speed.x = -this.game.monster.speed.x
    // this.game.monster.speed.y = -this.game.monster.speed.y
    // if (this.position.x + this.size > this.game.wall.size || this.position.x < 0) {
    // if (this.game.monster.position.x + this.game.monster.size > this.size || this.game.monster.position.x < 0) {
    //     this.game.monster.speed.x = 0
    // }
    // //wall on Top or bottom
    // if (this.game.monster.position.y + this.game.monster.size > this.size || this.game.monster.position.y < 0) {
    //     this.game.monster.speed.y = 0
    // }
    // switch (checkWall) {
    //     case 37:
    //         // console.log("lewo")
    //         break;
    //     case 38:
    //         this.speed = {
    //             x: 0,
    //             y: -1.3
    //         };
    //         // console.log("góra")
    //         break;
    //     case 39:
    //         this.speed = {
    //             x: 1.3,
    //             y: 0
    //         };
    //         // console.log("prawo")
    //         break;
    //     case 40:
    //         this.speed = {
    //             x: 0,
    //             y: 1.3
    //         };
    //         // console.log("dół")
    //         break;
  };

  return Monster;
}();

exports.default = Monster; //     }
// }
},{}],"../src/collisionMonster.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkMonster = void 0;

function checkMonster(pacman, monster) {
  var topPacman = pacman.position.y;
  var bottomPacman = pacman.position.y + pacman.size;
  var leftPacman = pacman.position.x;
  var rightPacman = pacman.position.x + pacman.size;
  var topMonster = monster.position.y;
  var bottomMonster = monster.position.y + monster.size;
  var leftMonster = monster.position.x;
  var rightMonster = monster.position.x + monster.size;

  if (bottomPacman >= topMonster && topPacman <= bottomMonster && rightPacman >= leftMonster && leftPacman <= rightMonster) {
    return true;
  } else {
    return false;
  }
}

exports.checkMonster = checkMonster;
},{}],"../src/game.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var pacman_1 = __importDefault(require("./pacman"));

var ball_1 = __importDefault(require("./ball"));

var wall_1 = __importDefault(require("./wall"));

var monster_1 = __importDefault(require("./monster"));

var collisionMonster_1 = require("./collisionMonster");

var GAMESTATE = {
  GAMEOVER: false,
  WINNER: false,
  RUNNING: 2
};

var Game =
/** @class */
function () {
  function Game(gameWidth, gameHeight, position) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth; // this.game = game;

    this.position = position;
    this.listWall = [];
    this.listBall = [];
    this.gameObjects = [];
  }

  Game.prototype.startGame = function () {
    // this.gamestate = GAMESTATE.RUNNING;
    var _this = this;

    this.pacman = new pacman_1.default(this);
    this.ball = new ball_1.default(this, this.position);
    this.wall = new wall_1.default(this, this.position);
    this.monster = new monster_1.default(this);
    this.gameObjects = [this.monster, this.pacman];
    this.board = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1], [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1], [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1], [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1], [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1], [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1], [1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
    this.board.forEach(function (row, index) {
      row.forEach(function (col, index2) {
        if (col === 1) {
          var position = {
            x: index2 * 40,
            y: index * 40
          };

          _this.listWall.push(new wall_1.default(_this, position));
        } else {
          var position = {
            x: index2 * 40,
            y: index * 40
          };

          _this.listBall.push(new ball_1.default(_this, position));
        }
      });
    });
  };

  Game.prototype.draw = function (ctx) {
    this.listBall.forEach(function (object) {
      return object.draw(ctx);
    });
    this.listWall.forEach(function (object) {
      return object.draw(ctx);
    });
    this.gameObjects.forEach(function (object) {
      return object.draw(ctx);
    });

    if (GAMESTATE.GAMEOVER) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.font = "40px classic";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
    }

    if (GAMESTATE.WINNER) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.font = "40px classic";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("WINNER", this.gameWidth / 2, this.gameHeight / 2);
    }
  };

  Game.prototype.update = function () {
    this.listBall.forEach(function (object) {
      return object.update();
    });
    this.listWall.forEach(function (object) {
      return object.update();
    });
    this.gameObjects.forEach(function (object) {
      return object.update();
    });

    if (collisionMonster_1.checkMonster(this.monster, this.pacman)) {
      GAMESTATE.GAMEOVER = true;
    }

    if (this.listBall.length === 0) {
      GAMESTATE.WINNER = true;
      console.log(GAMESTATE.WINNER);
    }
  };

  return Game;
}();

exports.default = Game;
},{"./pacman":"../src/pacman.ts","./ball":"../src/ball.ts","./wall":"../src/wall.ts","./monster":"../src/monster.ts","./collisionMonster":"../src/collisionMonster.ts"}],"../src/main.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var game_1 = __importDefault(require("./game"));

document.addEventListener("DOMContentLoaded", appStart);
var game_width = 560,
    game_height = 600;
var canvas, ctx, game, position;

function appStart() {
  canvas = document.querySelector(".gameArea");
  ctx = canvas.getContext("2d");
  game = new game_1.default(game_width, game_height, position);
  game.startGame();
  gameLoop();
}

function gameLoop() {
  ctx.clearRect(0, 0, game_width, game_height);
  game.update();
  game.draw(ctx);
  requestAnimationFrame(gameLoop);
}
},{"./game":"../src/game.ts"}],"C:/Users/Tomasz/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50144" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["C:/Users/Tomasz/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/main.ts"], null)
//# sourceMappingURL=/main.62d00c9e.js.map