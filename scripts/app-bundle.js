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
            this.theme = 'primary';
            this.styleClass = '';
            this.height = 20;
            this.progress = 0;
            this.step = 10;
            this.timer = false;
            this.timerInterval = 2500;
            this.intervalRef = null;
            this.themes = {
                primary: 'progress-bar-primary',
                secondary: 'progress-bar-secondary',
                default: 'progress-bar-default',
                success: 'progress-bar-success',
                info: 'progress-bar-info',
                warning: 'progress-bar-warning',
                danger: 'progress-bar-danger'
            };
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
            switch (this.theme) {
                case 'primary':
                    this.theme = this.themes.primary;
                    break;
                case 'secondary':
                    this.theme = this.themes.secondary;
                    break;
                case 'success':
                    this.theme = this.themes.success;
                    break;
                case 'info':
                    this.theme = this.themes.info;
                    break;
                case 'warning':
                    this.theme = this.themes.warning;
                    break;
                case 'danger':
                    this.theme = this.themes.danger;
                    break;
                default:
                    this.theme = this.themes.default;
                    break;
            }
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
        ], ProgressBar.prototype, "theme", void 0);
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
define('text!__dot_dot__/src/elements/progress-bar/progress-bar.css',[],function(){return ".aurelia-progress-bar-container{--brand-default:#b0bec5;--brand-primary:#2196f3;--brand-secondary:#323a45;--brand-success:#64dd17;--brand-warning:#ffd600;--brand-info:#29b6f6;--brand-danger:#ef1c1c;--bg-light-gray:#f5f5f5;--border-radius:10px;background-color:var(--bg-light-gray);border-radius:var(--border-radius);-webkit-box-shadow:none;box-shadow:none;text-align:center;color:#fff;text-shadow:0 0 10px #000}.progress-xs{height:5px}.progress-sm{height:10px}.progress-lg{height:25px}.vertical{position:relative;width:20px;height:200px;display:inline-block;margin-right:10px}.progress-xs{width:5px;margin-top:5px}.progress-sm{width:10px;margin-top:5px}.progress-lg{width:30px}.text-left{text-align:left}.text-left>span{margin-left:10px}.text-right{text-align:right}.text-right>span{margin-right:10px}@-webkit-keyframes progress-bar-stripes{0%{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{0%{background-position:40px 0}to{background-position:0 0}}.aurelia-progress-bar{background-color:var(--brand-primary);-webkit-box-shadow:none;box-shadow:none;font-size:14px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;font-weight:700;border-radius:var(--border-radius);-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.aurelia-progress-bar-striped>.aurelia-progress-bar{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:40px 40px}.progress-bar-primary{background-color:var(--brand-primary)}.progress-bar-secondary{background-color:var(--brand-secondary)}.progress-bar-default{background-color:var(--brand-default)}.progress-bar-success{background-color:var(--brand-success)}.progress-bar-info{background-color:var(--brand-info)}.progress-bar-warning{background-color:var(--brand-warning)}.progress-bar-danger{background-color:var(--brand-danger)}";});;
define('text!__dot_dot__/src/elements/progress-bar/progress-bar.html',[],function(){return "<template><require from=./progress-bar.css></require><div class=\"aurelia-progress-bar-container aurelia-progress-bar-striped\" class.bind=\"styleClass ? styleClass : ''\" style=\"height: ${height}px\"><div style=\"width: ${progress}%;height: ${height}px\" class=aurelia-progress-bar class.bind=theme> ${progress}%</div></div></template>";});;
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
define('text!app.html',[],function(){return "<template><progress-bar progress=0 timer=true timer-interval=50 step=1></progress-bar></template>";});;
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