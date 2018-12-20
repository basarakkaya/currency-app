import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CurrencyProvider } from '../../providers/currency/currency';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CurrencyProvider]
})
export class HomePage {
  currencies: Array<{ name: string, rate: number }>;
  baseCurrency: string;
  keys: string[];
  currencyChange: Function;
  getRates: Function;
  date: string;
  dateChange: Function;

  constructor(public navCtrl: NavController, public http: HttpClient, public currencyProvider: CurrencyProvider) {
    let date = new Date();
    this.baseCurrency = "TRY";
    this.currencies = [];
    this.date = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
    this.getRates = function(){
      currencyProvider.getCurrencyRates(this.baseCurrency, this.date).then((response:{name: string; rate:number;}[]) => {
        this.currencies = response;
      });
    }
    this.currencyChange = function(c){
      this.baseCurrency = c;
      this.getRates();
    }
    this.dateChange = function(d){
      this.date=d;
      this.getRates();
    }

    currencyProvider.getCurrencyKeys().then((response:string[]) => {
      this.keys = response;
    });

    this.getRates();
  }
}
