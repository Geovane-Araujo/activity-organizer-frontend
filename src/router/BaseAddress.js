
export class BaseAddress{
  url = ''
  constructor(){
    if(window.location.host.indexOf("localhost") > -1){
      this.url = 'http://localhost:5000/'
    } else {
      this.url = 'https://myorganizer.ga/api/'
    }
  }
}