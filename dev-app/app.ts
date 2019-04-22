export class App {
  public show: boolean = false;
  public startProgress: boolean = false;

  start(){
    setTimeout(()=>{
      this.show = !this.show;
      console.log("start");
    }, 10000);
  }

  clicked() {
    // eslint-disable-next-line no-alert
    alert('A primary button click or a touch');
  }
}
