import { Component, OnInit } from '@angular/core';
import { IpService } from './ip.service';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-ip',
    template: '<h3>{{ ip }}</h3>',
})

export class IpComponent implements OnInit{
    ip: String;
    /*constructor(private http: Http) {
        this.http.get('http://ip.jsontest.com/')
            .toPromise()
            .then(res => res.json())
            .then(resJson => this.ip = resJson.ip)
            .catch(err => console.log(err));
    }*/

    constructor( private ipService : IpService) {}

    ngOnInit(): void {
        this.ipService.getIp()
        .then(ip => this.ip = ip)
        .catch(err => console.log(err))
    }
}
