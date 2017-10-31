import { Component } from '@angular/core';
import { SignInService } from './sign-in.service';

@Component({
    selector: 'app-sign-in',
    template: `
        <h3>
            <a href="https://angular.io/guide/forms" target="_blank">Tìm hiểu về Form</a>
        </h3>
        <p>template variable formSignIn kie ngForm để lấy ra các giá trị trong form</p>
        <form (ngSubmit)="onSubmit(formSignIn);" #formSignIn="ngForm">
            <input placeholder="Email" ngModel  #txtEmail="ngModel" name="email" required email>
            <h4>kiem tra xem txtEmail có lỗi hay k . có lỗi rồi thì kiểm tra xem có lỗi required hay k . nếu có thì show ra text ở thẻ p</h4>
            <p *ngIf="txtEmail.touched && txtEmail.errors?.required">
                Email is required
            </p>
            <p *ngIf="txtEmail.touched && txtEmail.errors?.email">
                Email is not valid
            </p>
            <br><br>
            <input type="password" placeholder="Password" ngModel #txtPassword="ngModel" name="password" minlength="6" pattern="[a-z]*">
            <br><br>
            <div ngModelGroup="subjects">
                <label><input type="checkbox" [ngModel]="true" name="NodeJS"> NodeJS</label>
                <label><input type="checkbox" [ngModel]="false" name="Angular"> Angular</label>
                <label><input type="checkbox" [ngModel]="false" name="ReactJS"> ReactJS</label>
            </div>
            <br><br>
            <button [disabled]="formSignIn.invalid" class="btn btn-primary">Submit</button>
        </form>
        <p>{{ txtEmail.errors | json }}</p>
        <p>{{ txtPassword.errors | json }}</p>
        <p>{{ formSignIn.value | json }}</p>
    `,
    providers: [SignInService]
})

export class SignInComponent {
    constructor(private signInService: SignInService) { }
    onSubmit(formSignIn) {
        this.signInService.sendPost(formSignIn.value)
            .then(result => console.log(result))
            .catch(err => console.log(err));
        console.log(formSignIn);
    }
}
