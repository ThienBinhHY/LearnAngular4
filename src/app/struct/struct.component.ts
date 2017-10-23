import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {
  isShow = true;
  //sử dụng ngFor đơn giản 
  arrSubjects = ['Angular','Nodejs','React'];
  constructor() { }

  ngOnInit() {
  }

  clickToggle(){
    this.isShow = !this.isShow;
  }
}
