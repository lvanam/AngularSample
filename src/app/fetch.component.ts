import { Component,Input } from '@angular/core';

@Component({
  selector: 'fetch-data',
  template : ` {{subTitile}}
    <table>
    <th>Records</th>
    <tbody>
    <tr *ngFor = "let ab of childlist">
        <td>{{ab}}</td>
    </tr>
    </tbody>
    </table>
  `
})
export class FetchComponent {
   @Input() childlist  : string[];
   @Input() subTitile : string;
   constructor(){
     
   }
}
