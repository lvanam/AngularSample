import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-new-angular';
  public alist : string[] = ["ab", "cv", "de"];
  subTitile = "my-child-input";
  parentCounter = 0;
  StockPrice = 0;

   constructor(){
     this.alist = ["ab", "cv", "de"];
   }

   ngOnInit() {
  }

  displayCounter(count) {
    this.parentCounter = count;
    console.log(this.parentCounter);
  }

  getUpdateStock(stock){
    this.StockPrice = stock;
  }
}
