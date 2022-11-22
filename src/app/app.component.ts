import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngularApp';
  name = 'jay agravat';
  salary = 123.456;
  spi = 0.20;
  MyDate = new Date();
  person = { name : 'arjun', job :'DIET' };

  image = 'https://darshan.ac.in/U01/Faculty-Photo/5---21-06-2021-10-50-15.jpg' ;

  changeImage(){
    this.image = 'https://darshan.ac.in/U01/Faculty-Photo/9---20-06-2021-10-41-42.jpg' ;
  }
}
