import {bindable} from 'aurelia-framework';

export class ProgressBar {
  // progress bar theme | default => 'primary'
  @bindable public theme: string = 'primary';
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
  // progress bar onComplete | default => null
  @bindable public onComplete: any = null;
  // progress bar showValue | default => true
  @bindable public showValue: boolean = true;

  // interval reference
  private intervalRef: any = null;
  // themes
  private themes: any = {
    primary: 'progress-bar-primary',
    secondary: 'progress-bar-secondary',
    default: 'progress-bar-default',
    success: 'progress-bar-success',
    info: 'progress-bar-info',
    warning: 'progress-bar-warning',
    danger: 'progress-bar-danger'
  };

  /**
   * check initial states of the component
   */
  created() {
    // run dirty checker
    this.dirtyChecker();
  }

  /**
   * Handle binding process
   */
  bind() {
    // check external timer => TRUE | FALSE
    if (this.timer) {
      this.intervalRef = setInterval(() => {
        if (this.progress < 100) {
          this.progress += this.step;
        } else {
          // call `onComplete` callback method
          if (this.onComplete) {
            this.onComplete();
          }
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
   * Handle unbind event to clear states
   */
  unbind() {
    this.progress = 0;
  }

  /**
   * Dirty Checker
   */
  dirtyChecker() {
    this.height = parseInt(this.height + '');
    this.progress = parseInt(this.progress + '');
    this.step = parseInt(this.step + '');
    this.timerInterval = parseInt(this.timerInterval + '');
    this.showValue = this.showValue + '' == "true";
    this.timer = this.timer + '' == "true";
    // theme checker
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
