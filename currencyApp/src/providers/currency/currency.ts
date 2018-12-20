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
          keys = Object.keys(response.rates);
          res(keys);
      });
    });
  }

  getCurrencyRates(base, date){
    return new Promise((res, rej) => {
      let url = "https://api.exchangeratesapi.io/" + date + "?base=" + base,
      rates = [];
        this.http.get(url).toPromise().then(
          (response:ApiObject) => {
          Object.keys(response.rates).forEach(cKey => {
            rates.push({
              "name": cKey,
              "rate": (1 / response.rates[cKey]).toPrecision(3)
            });
          });
          res(rates);
        });
    });
  }
}
