import { Component } from '@angular/core';

@Component({
    selector: 'app-sub',
    template: `
        <h3>Tìm hiểu về ViewChild</h3>
        <h4>Giá trị ở view child : {{value_view}}</h4>
    `
})

export class SubComponent { 
    value_view = 2;

}
