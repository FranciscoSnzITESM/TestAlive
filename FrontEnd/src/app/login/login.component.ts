import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ScreenSize } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail = "";
  pswd = "";
  showWrongMailAlert = false;
  innerWidth = window.innerWidth;
  
  @Output() loginEvent = new EventEmitter<boolean>();

  constructor(private http: HttpClient, public screenSize: ScreenSize) { }

  ngOnInit(): void { }
  onLogin(){
    this.showWrongMailAlert = false;
    let header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.pswd
    });
    const response = this.http.get("http://localhost:3000/login/" + this.mail, {headers: header}).toPromise();
    response.then(res =>{
      this.screenSize.userInfo = res;
      this.loginEvent.emit(true);
      console.log(res);
    })
    .catch(err => {
      if(err.status !== 404){
        console.log(err.response);
      }
      else{
        this.showWrongMailAlert = true;
      }
    });
  }
}
