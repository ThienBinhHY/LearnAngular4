import { SubComponent } from './sub.component';
import { Component, ViewChild  } from '@angular/core';//import ViewChild để sử dụng

@Component({
    selector: 'app-parent',
    template: `
        <h3> {{value}} </h3>
        <app-child (myClick) = "changeValue($event);"></app-child><br><br>
        
        <app-sub></app-sub>
        <button class="btn btn-warning" (click) = "changeForSub();"> Tăng (view sub Component)</button>
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
    // sự kiện ở sub component
    @ViewChild(SubComponent) //gọi view mà mình sử dụng vào
    mySub : SubComponent // gán biến vào view mà mình sử dụng
    changeForSub(){
        this.mySub.value_view  = this.mySub.value_view + this.mySub.value_view;
    }
}
