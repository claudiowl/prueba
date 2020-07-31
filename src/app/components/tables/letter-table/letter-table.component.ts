import { Component, OnInit } from "@angular/core";
import { LetterTableService } from "src/app/services/letter-table.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-letter-table",
  templateUrl: "./letter-table.component.html",
  styleUrls: ["./letter-table.component.css"],
})
export class LetterTableComponent implements OnInit {
  paragraphs = [];
  alphabet = [];
  alphabex = [];
  final = [];
  loading = true;

  constructor(
    private _letterService: LetterTableService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getTable();
  }

  getTable() {
    this.spinner.show();
    this.loading = true;

    this._letterService.getDataDictionary().subscribe((data) => {
      let temp = JSON.parse(JSON.stringify(data));

      this.paragraphs = JSON.parse(temp["data"]);

      this.paragraphs.map((x) => {
        let lista = this.getFrequency(x.paragraph);

        x.number = this.getValues(x["number"]);
        let paragraphsResult = Object.assign({}, lista, x);

        this.final.push(paragraphsResult);
      });

    
      this.spinner.hide();
      this.loading = false;
    });
  }

  getFrequency(string) {
    var frequency = {};
    for (var i = 0; i < string.length; i++) {
      var character = string.charAt(i).toLowerCase().replace(" ", "");

      if (/^[a-zA-Z]+$/.test(character)) {
        if (frequency[character]) {
          frequency[character]++;
        } else {
          frequency[character] = 1;
        }
      }
    }
    this.alphabex.push(frequency);

    return frequency;
  }

  getAlphabet() {
    this.alphabet = [...String.fromCharCode(...Array(123).keys()).slice(97)];
  }

  getValues(number: number) {
    let numberString = number.toString();

    if (numberString.includes(",")) {
      let temp = numberString.split(",").map(Number);

      let total = temp.reduce((sum, value) => sum + Math.abs(value), 0);
      return total;
    } else {
      return Math.abs(number);
    }
  }

  restart() {
    this.paragraphs = [];
    this.alphabet = [];
    this.alphabex = [];
    this.final = [];

    this.getTable();
  }
}
