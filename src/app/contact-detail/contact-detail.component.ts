import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  id = '';
  name = '';
  phoneNumber = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.name = params.get('name');
      this.phoneNumber = params.get('phoneNumber');

      /*const id = params.get('id');
      const name = params.get('name');
      const phoneNumber = params.get('phoneNumber');*/ // neu viet the nay thi chi hien thi ở template ở tai trang này 
      console.log(this.id);
    });
  }

}
