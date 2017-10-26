import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable() //same component

export class IpService {
    constructor(private http: Http) {} //variable is http type is Http

    getIp() {
        return this.http.get('http://ip.jsontest.com/')
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson.ip);
    }
}
