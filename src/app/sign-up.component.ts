import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder ,Validators} from '@angular/forms';// sdung FormBuilder để gom nhóm lại cho ngắn gọn 

@Component({
    selector: 'app-sign-up',
    template: `
        <form (ngSubmit)="onSubmit();" [formGroup]="formSignUp">
            <input placeholder="Email" formControlName="email">
            <p *ngIf="formSignUp.get('email').invalid && formSignUp.get('email').touched">Email is required</p>
            <br><br>
            <input type="password" placeholder="Password" formControlName="password">
            <br><br>
            <div formGroupName="subjects">
                <label><input type="checkbox" name="NodeJS" formControlName="nodeJS"> NodeJS</label>
                <label><input type="checkbox" name="Angular" formControlName="angular"> Angular</label>
                <label><input type="checkbox" name="ReactJS" formControlName="reactJS"> ReactJS</label>
            </div>
            <button [disabled]="formSignUp.invalid">Submit</button>
        </form>
        <code>{{ formSignUp.controls.email.errors | json }}</code>
    `,
})

export class SignUpComponent implements OnInit{
    //ktao FormGroup có thể trong constructor or ngOnInit đều được
    formSignUp: FormGroup;// kbai bien formSignUp kiểu FormGroup

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        /*this.formSignUp = new FormGroup({
            //email: new FormControl(), // đặt tên là email thì formControlName="email"
            email: new FormControl('gvn@gmail.com'),// gán gtri mặc định cho  FormControl là input text
            password: new FormControl(),
            subjects: new FormGroup({
                nodeJS: new FormControl(true),// gán gtri mặc định cho  FormControl là checkbox
                angular: new FormControl(false),
                reactJS: new FormControl(false),
            }),
            
        })*/

        //Thay đoạn trên bằng cách sử dụng FormBuilder để viết ngắn gọn hơn 
        // k nên viết đoạn khởi tạo này trong constructor nên ta se sư dụng ngOninit
        this.formSignUp = this.fb.group({
            //email: 'gvn@gmail.com',// gán gtri mặc định cho  FormControl là input text
            email: ['',[Validators.required,gmailValidator]], // validate trường email k đc để trống
            password: '',
            subjects: this.fb.group({
                nodeJS: true,// gán gtri mặc định cho  FormControl là checkbox
                angular: false,
                reactJS: false,
            }),
            
        })
    }
    onSubmit() {
        console.log(this.formSignUp.value);
    }
}
// custom validator
function gmailValidator(formControl: FormControl) {
    if (formControl.value.includes('@gmail.com')) {
        return null;// k co lỗi
    }
    return { gmail: true }; 
}