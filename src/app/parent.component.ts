import { Component, ViewChild } from '@angular/core';
// import { ChildComponent } from './child.component';

@Component({
    selector: 'app-parent',
    template: `
        <h3> {{value}} </h3>
        <app-child (myClick) = "changeValue($event);"></app-child>
    `
})

export class ParentComponent {
    value = 0;
    changeValue(issAdd: boolean){
        if(issAdd){
            this.value = this.value + 1;
        }else{
            this.value = this.value - 1;
        }
    	
    }
}
