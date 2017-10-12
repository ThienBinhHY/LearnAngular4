import { Component } from '@angular/core';

@Component({
    // template: '<h3>QuyDao</h3>',//chỉ là 1 đoạn html
    templateUrl: './word.component.html',// gọi 1 file html 
    selector: 'app-word', // html tag do mình tự tạo ra,có thẻ đóng mở như bình thường,tên băt đầu là app-name_selector
    styleUrls: ['./word.component.css'],
    /*styles: [`
        p {
            color:blue
        },
        h3 {
            color:green
        }
    `]*/ //style nội tuyến 
})

export class WordComponent {
    en = 'Hello';
    vn = 'Xin chao';
    imageUrl = 'https://angular.io/assets/images/logos/angular/shield-large.svg';
    forgot = false;

    toggleForgot() {
        this.forgot = !this.forgot;
    }
}