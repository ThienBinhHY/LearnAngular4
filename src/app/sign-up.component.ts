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
            <div formGroupName="subjects">
                <label><input type="checkbox" name="NodeJS" formControlName="nodeJS"> NodeJS</label>
                <label><input type="checkbox" name="Angular" formControlName="angular"> Angular</label>
                <label><input type="checkbox" name="ReactJS" formControlName="reactJS"> ReactJS</label>
            </div>
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
            subjects: new FormGroup({
                nodeJS: new FormControl(),
                angular: new FormControl(),
                reactJS: new FormControl(),
            }),
            
        })
    }
    onSubmit() {
        console.log(this.formSignUp.value);
    }
}

