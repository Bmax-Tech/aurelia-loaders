"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
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
