import { Component, OnInit } from '@angular/core';
import { ScreenSize } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nombre = "Nombre"
  apellidoP = "Apellido"
  apellidoM = "Apellido2"
  constructor(public screenSize: ScreenSize) {
    if(screenSize.userInfo){
      this.nombre = screenSize.userInfo.nombre;
      this.apellidoP = screenSize.userInfo.apellidop;
      this.apellidoM = screenSize.userInfo.apellidom;
    }
  }

  ngOnInit(): void {
  }
}
