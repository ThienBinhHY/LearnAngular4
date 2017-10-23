import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = '';
  isHighLight = false;
  //biến sử dụng ngStyle
  evenStyle = {
    color: 'red',
    fontSize: '40px'
  }
  oddStyle = {
    color: 'black',
    fontSize: '20px'
  }
  // sử dụng ngClass
  currentStyle = { circle: !this.isHighLight, square: this.isHighLight}
  
  constructor() { }

  ngOnInit() {
  }

  showEvent(event) {
    console.log(event);
    this.name = event.target.value;
  }

}
