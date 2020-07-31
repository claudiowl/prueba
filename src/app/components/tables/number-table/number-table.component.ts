import { Component, OnInit } from '@angular/core';
import { NumberTableService } from 'src/app/services/number-table.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-number-table',
  templateUrl: './number-table.component.html',
  styleUrls: ['./number-table.component.css']
})
export class NumberTableComponent implements OnInit {
  numbers = [];
  numberFilter = [];
  numberSort = [];
  firstPosition:number;
  lastPosition:number;
  loading=true;


  constructor(private _tableService: NumberTableService,  private spinner: NgxSpinnerService ) {}

  ngOnInit() {
    this.getTable();
  }

  getTable() {

    this.spinner.show();
    this.loading=true;

    this._tableService.getDataNumber().subscribe((data) => {

  
      this.numbers = data["data"];

      const result = {};
      
     
      for (let i = 0; i < this.numbers.length; i++) {
        result[this.numbers[i]] = (result[this.numbers[i]] || 0) + 1;
        this.numberFilter = Object.keys(result).map((key) => ({
          number: key,
          ocurrency: result[key] - 1,
        }));
      }

      this.firstPosition=this.numberFilter[0].number;
      this.lastPosition=this.numberFilter[this.numberFilter.length - 1].number;
     
      this.spinner.hide();
      this.loading=false;
    });
  }

  getDuplicateArrayElements(arr) {

    var sorted_arr = arr.slice().sort();

    var results = [];
    
    for (var i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] === sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }


  restart() {
    this.getTable();
    this.bubbleSort();
    console.log("daskh");
  }

  bubbleSort() {

    this.numberSort = this.numberFilter.map(a => a.number);

    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < this.numberSort.length; i += 1) {
        if (this.numberSort[i - 1] > this.numberSort[i]) {
          done = false;
          var tmp = this.numberSort[i - 1];
          this.numberSort[i - 1] = this.numberSort[i];
          this.numberSort[i] = tmp;
        }
      }
    }

    return this.numberSort;
  }
}
