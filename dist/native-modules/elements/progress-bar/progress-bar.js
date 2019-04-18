var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable } from 'aurelia-framework';
var ProgressBar = (function () {
    function ProgressBar() {
        this.theme = 'primary';
        this.styleClass = '';
        this.height = 20;
        this.progress = 0;
        this.step = 10;
        this.timer = false;
        this.timerInterval = 2500;
        this.onComplete = null;
        this.showValue = true;
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
                    if (_this.onComplete) {
                        _this.onComplete();
                    }
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
        this.showValue = this.showValue + '' == "true";
        this.timer = this.timer + '' == "true";
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
        bindable,
        __metadata("design:type", String)
    ], ProgressBar.prototype, "theme", void 0);
    __decorate([
        bindable,
        __metadata("design:type", String)
    ], ProgressBar.prototype, "styleClass", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Number)
    ], ProgressBar.prototype, "height", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Number)
    ], ProgressBar.prototype, "progress", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Number)
    ], ProgressBar.prototype, "step", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Boolean)
    ], ProgressBar.prototype, "timer", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Number)
    ], ProgressBar.prototype, "timerInterval", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Object)
    ], ProgressBar.prototype, "onComplete", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Boolean)
    ], ProgressBar.prototype, "showValue", void 0);
    return ProgressBar;
}());
export { ProgressBar };
