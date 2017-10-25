import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <button (click)="addForParent();" class="btn btn-primary"> + </button>
        <button (click)="subForParent();" class="btn btn-danger">  - </button>
    `
})

export class ChildComponent { 
    //khai bao kieu boolean để addForParent() và subForParent() phai truyền vào kiểu boolen k thì sẽ thông báo lỗi
    @Output() myClick = new EventEmitter<boolean>();
    //btn add (+)
    addForParent(){
        this.myClick.emit(true);
    }
    //btn sub (-)
    subForParent(){
        this.myClick.emit(false);
    }
}
