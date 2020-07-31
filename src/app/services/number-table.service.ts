import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class NumberTableService {
  Api = "http://patovega.com/prueba_frontend";

  constructor(private http: HttpClient) {}

  getDataNumber() {
    try {
      const url = `${this.Api}/array.php`;

      return this.http.get(url);
    } catch (error) {
      console.error(error);
    }
  }
}
