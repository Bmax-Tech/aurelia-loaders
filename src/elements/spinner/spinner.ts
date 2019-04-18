import {bindable} from 'aurelia-framework';

export class Spinner {
  // spinner type | default => 'S1'
  @bindable public type: string = 'S1';
  // spinner styleClass | default => null
  @bindable public styleClass: string = '';
  // spinner size | default => 40
  @bindable public size: number = 40;
  // spinner color | default => 'black'
  @bindable public color: string = 'black';

  // spinner types
  private spinnerTypes: any = {
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
  // selected spinner type
  public selectedSpinnerType: string = this.spinnerTypes.S1;

  /**
   * Invoke element life-cycle
   */
  created() {
    this.dirtyChecker();
  }

  /**
   * Dirty Checker
   */
  dirtyChecker() {
    this.size = parseInt(this.size + '');
    // spinner type checker
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
  }
}
