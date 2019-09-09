import { Component,Input,  Output, EventEmitter } from '@angular/core'


@Component({
    selector : 'update-data',
    template :`
    <button class='btn btn-primary' (click)="stockvalueChanged()">Update stock</button>
    `
})

export class UpdateComponent {
    @Output() valueChange  = new EventEmitter();
    @Output() stockvalueChange = new EventEmitter();

    Counter = 0;
    updateStockvalue = 1;

    valueChanged(){
        this.Counter = this.Counter + 1;
        this.valueChange.emit(this.Counter);
    }

    stockvalueChanged(){
        this.updateStockvalue = this.updateStockvalue * 2;
        this.stockvalueChange.emit(this.updateStockvalue);
    }
}