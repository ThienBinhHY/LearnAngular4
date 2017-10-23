import { Component, ViewChild } from '@angular/core';
// import { ChildComponent } from './child.component';

@Component({
    selector: 'app-parent',
    template: `
        <h3> {{value}} </h3>
        <app-child (myClick) = "value = value + 1"></app-child>
    `
})

export class ParentComponent {
    value = 0;
}
