import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LetterTableService {

  Api = "http://patovega.com/prueba_frontend";
  
  constructor(private http: HttpClient) {}

  getDataDictionary() {
    try {

      const url = `${this.Api}/dict.php`;
      return this.http.get(url);

    } catch (error) {

      console.error(error);
      
    }
  }
}
