import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CurrencyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface ApiObject{
  base ?: string
  date ?: string
  rates ?: string
}

@Injectable()
export class CurrencyProvider {

  constructor(public http: HttpClient) { }

  getCurrencyKeys() {
    return new Promise((res, rej) => {
      let url = "https://api.exchangeratesapi.io/latest",
      keys:{}[];
        this.http.get(url).toPromise().then(
          (response:ApiObject) => {
          console.log(response);
          keys = Object.keys(response.rates);
          res(keys);
      });
    });
  }

  getCurrencyRates(base){
    return new Promise((res, rej) => {
      let url = "https://api.exchangeratesapi.io/latest?base=" + base,
      rates;
        this.http.get(url).toPromise().then(
          (response:ApiObject) => {
          console.log(response);
          rates = response.rates;
          res(rates);
        });
    });
  }
}
