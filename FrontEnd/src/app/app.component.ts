import { Component, HostListener } from '@angular/core';
import { ScreenSize } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
  userLoggedIn = false;
  constructor(private screenSize: ScreenSize){

  }
  setLogin($event: boolean){
    this.userLoggedIn = $event;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {        
    this.screenSize.setScreenSize(window.innerWidth);
  }
}
