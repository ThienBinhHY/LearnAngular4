import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = Date.now(); //new Date(2015,7,25);
  person = {name: 'Quý Đào', age: 24}
  // sử dụng AsyncPipe
  // address = '265 Cau Giay';
  // nhưng nếu lấy trên server về thì n có kiểu như sau 
  address = Promise.resolve('265 Cầu Giấy - Hà Nội');

  constructor() { }

  ngOnInit() {
  }

}
