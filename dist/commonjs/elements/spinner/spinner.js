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
var Spinner = (function () {
    function Spinner() {
        this.type = 'S1';
        this.styleClass = '';
        this.size = 40;
        this.color = 'black';
        this.spinnerTypes = {
            S1: "spinner-1",
            S2: "spinner-2",
            S3: "spinner-3",
            S4: "spinner-4",
            S5: "spinner-5",
            S6: "spinner-6",
            S7: "spinner-7",
            S8: "spinner-8",
            S9: "spinner-9",
            S10: "spinner-10",
            S11: "spinner-11",
            S12: "spinner-12",
            S13: "spinner-13",
            S14: "spinner-14",
        };
        this.selectedSpinnerType = this.spinnerTypes.S1;
    }
    Spinner.prototype.created = function () {
        this.dirtyChecker();
    };
    Spinner.prototype.dirtyChecker = function () {
        this.size = parseInt(this.size + '');
        switch (this.type) {
            case "S1":
                this.selectedSpinnerType = this.spinnerTypes.S1;
                break;
            case "S2":
                this.selectedSpinnerType = this.spinnerTypes.S2;
                break;
            case "S3":
                this.selectedSpinnerType = this.spinnerTypes.S3;
                break;
            case "S4":
                this.selectedSpinnerType = this.spinnerTypes.S4;
                break;
            case "S5":
                this.selectedSpinnerType = this.spinnerTypes.S5;
                break;
            case "S6":
                this.selectedSpinnerType = this.spinnerTypes.S6;
                break;
            case "S7":
                this.selectedSpinnerType = this.spinnerTypes.S7;
                break;
            case "S8":
                this.selectedSpinnerType = this.spinnerTypes.S8;
                break;
            case "S9":
                this.selectedSpinnerType = this.spinnerTypes.S9;
                break;
            case "S10":
                this.selectedSpinnerType = this.spinnerTypes.S10;
                break;
            case "S11":
                this.selectedSpinnerType = this.spinnerTypes.S11;
                break;
            case "S12":
                this.selectedSpinnerType = this.spinnerTypes.S12;
                break;
            case "S13":
                this.selectedSpinnerType = this.spinnerTypes.S13;
                break;
            case "S14":
                this.selectedSpinnerType = this.spinnerTypes.S14;
                break;
            default:
                this.selectedSpinnerType = this.spinnerTypes.S1;
                break;
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], Spinner.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], Spinner.prototype, "styleClass", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Number)
    ], Spinner.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], Spinner.prototype, "color", void 0);
    return Spinner;
}());
exports.Spinner = Spinner;
