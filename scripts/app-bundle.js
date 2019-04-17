var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/progress-bar/progress-bar',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProgressBar = (function () {
        function ProgressBar() {
            this.styleClass = '';
            this.height = 20;
            this.progress = 0;
            this.step = 10;
            this.timer = false;
            this.timerInterval = 2500;
            this.intervalRef = null;
        }
        ProgressBar.prototype.created = function () {
            var _this = this;
            this.dirtyChecker();
            if (this.timer) {
                this.intervalRef = setInterval(function () {
                    if (_this.progress < 100) {
                        _this.progress += _this.step;
                    }
                    else {
                        _this.clearTimer();
                    }
                }, this.timerInterval);
            }
        };
        ProgressBar.prototype.detached = function () {
            if (this.timer) {
                this.clearTimer();
            }
        };
        ProgressBar.prototype.dirtyChecker = function () {
            this.height = parseInt(this.height + '');
            this.progress = parseInt(this.progress + '');
            this.step = parseInt(this.step + '');
            this.timerInterval = parseInt(this.timerInterval + '');
        };
        ProgressBar.prototype.clearTimer = function () {
            if (this.intervalRef) {
                console.debug('progress-bar timer cleared');
                clearInterval(this.intervalRef);
            }
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], ProgressBar.prototype, "styleClass", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], ProgressBar.prototype, "height", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], ProgressBar.prototype, "progress", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], ProgressBar.prototype, "step", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], ProgressBar.prototype, "timer", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], ProgressBar.prototype, "timerInterval", void 0);
        return ProgressBar;
    }());
    exports.ProgressBar = ProgressBar;
});
;
define('text!__dot_dot__/src/elements/progress-bar/progress-bar.css',[],function(){return ".aurelia-progress-bar-blue{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;width:100%;height:20px;background-color:#f5f5f5;border-radius:3px;-webkit-box-shadow:0 2px 3px rgba(0,0,0,.5) inset;box-shadow:inset 0 2px 3px rgba(0,0,0,.5);color:#4169e1;position:relative;margin:0 0 1.5em}.aurelia-progress-bar-blue::-webkit-progress-bar{background-color:#f5f5f5;border-radius:3px;-webkit-box-shadow:0 2px 3px rgba(0,0,0,.5) inset;box-shadow:inset 0 2px 3px rgba(0,0,0,.5)}.aurelia-progress-bar-blue::-webkit-progress-value{position:relative;background-size:35px 20px,100% 100%,100% 100%;border-radius:3px;-webkit-animation:animate-stripes 5s linear infinite;animation:animate-stripes 5s linear infinite}@-webkit-keyframes animate-stripes{to{background-position:-100px 0}}@keyframes animate-stripes{to{background-position:-100px 0}}.aurelia-progress-bar-blue span{background-color:#4169e1;border-radius:3px;display:block;text-indent:-9999px}.aurelia-progress-bar-blue::-webkit-progress-value{background-image:-webkit-linear-gradient(135deg,transparent,transparent 33%,rgba(0,0,0,.1) 0,rgba(0,0,0,.1) 66%,transparent 0),-webkit-linear-gradient(top,hsla(0,0%,100%,.25),rgba(0,0,0,.2)),-webkit-linear-gradient(left,#09c,#09c)}.aurelia-progress-bar-blue::-moz-progress-bar{background-image:-moz-linear-gradient(135deg,transparent,transparent 33%,rgba(0,0,0,.1) 33%,rgba(0,0,0,.1) 66%,transparent 66%),-moz-linear-gradient(top,hsla(0,0%,100%,.25),rgba(0,0,0,.2)),-moz-linear-gradient(left,#09c,#09c)}";});;
define('text!__dot_dot__/src/elements/progress-bar/progress-bar.html',[],function(){return "<template><require from=./progress-bar.scss></require><progress max=100 value=\"${progress}\" class=aurelia-progress-bar-blue class.bind=\"styleClass ? styleClass : ''\" style=\"height: ${height}px\"><div class=aurelia-progress-bar><span style=\"width: ${progress}%\">${progress}%</span></div></progress></template>";});;
define('__dot_dot__/src/index',["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            aurelia_pal_1.PLATFORM.moduleName('./elements/progress-bar/progress-bar'),
        ]);
    }
    exports.configure = configure;
});
;
define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'from Aurelia!';
        }
        App.prototype.clicked = function () {
            alert('A primary button click or a touch');
        };
        return App;
    }());
    exports.App = App;
});
;
define('text!app.html',[],function(){return "<template><progress-bar progress=0 timer=true timer-interval=500></progress-bar></template>";});;
define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});
;
define('main',["require", "exports", "./environment", "core-js/stable"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        aurelia.use.developmentLogging(environment_1.default.debug ? 'debug' : 'warn');
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=app-bundle.js.map