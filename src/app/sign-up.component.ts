import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    template: `
        <form (ngSubmit)="onSubmit();" [formGroup]="formSignUp">
            <input placeholder="Email" formControlName="email">
            <br><br>
            <input type="password" placeholder="Password" formControlName="password">
            <br><br>
            <button >Submit</button>
        </form>
    `,
})

export class SignUpComponent  {
    //ktao FormGroup có thể trong constructor or ngOnInit đều được
    formSignUp: FormGroup;// kbai bien formSignUp kiểu FormGroup

    constructor() {
        this.formSignUp = new FormGroup({
            email: new FormControl(), // đặt tên là email thì formControlName="email"
            password: new FormControl(),
        })
    }
    onSubmit() {
        console.log(this.formSignUp.value);
    }
}

