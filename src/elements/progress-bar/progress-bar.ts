import {bindable} from 'aurelia-framework';

export class ProgressBar {
  // progress bar styleClass | default => null
  @bindable public styleClass: string = '';

  // progress bar height | default => 20px
  @bindable public height: number = 20;

  // progress bar progress | default => 0
  @bindable public progress: number = 0;

  // progress bar step value | default => 10
  @bindable public step: number = 10;

  // progress bar timer | default => false
  @bindable public timer: boolean = false;

  // progress bar timerInterval | default => 2.5s
  @bindable public timerInterval: number = 2500;

  // interval reference
  private intervalRef: any = null;

  /**
   * Invoke element life-cycle
   */
  created() {
    // run dirty checker
    this.dirtyChecker();
    // check external timer => TRUE | FALSE
    if (this.timer) {
      this.intervalRef = setInterval(() => {
        if (this.progress < 100) {
          this.progress += this.step;
        } else {
          this.clearTimer();
        }
      }, this.timerInterval);
    }
  }

  /**
   * Handle clearTimer when detaching from the DOM
   */
  detached() {
    if (this.timer) {
      this.clearTimer();
    }
  }

  /**
   * Dirty Checker
   */
  dirtyChecker() {
    this.height = parseInt(this.height + '');
    this.progress = parseInt(this.progress + '');
    this.step = parseInt(this.step + '');
    this.timerInterval = parseInt(this.timerInterval + '');
  }

  /**
   * Clear the timer
   */
  clearTimer() {
    if (this.intervalRef) {
      console.debug('progress-bar timer cleared');
      clearInterval(this.intervalRef);
    }
  }
}
