export class App {
  public show: boolean = false;
  public startProgress: boolean = false;

  start(){
    this.show = !this.show;
  }

  clicked() {
    // eslint-disable-next-line no-alert
    alert('A primary button click or a touch');
  }
}
