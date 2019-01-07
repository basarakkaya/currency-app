import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CurrencyProvider } from '../../providers/currency/currency';
import { DateTimeProvider } from '../../providers/dateTime/dateTime';

@Component({
  selector: 'page-cash',
  templateUrl: 'cash.html',
  providers: [CurrencyProvider, DateTimeProvider]
})
export class CashPage {
  currencies: Array<{ name: string, value: number }>;
  baseCurrency: string;
  keys: string[];
  currencyChange: Function;
  getRates: Function;
  date: string;
  today: string;
  dateChange: Function;

  constructor(public navCtrl: NavController, public currencyProvider: CurrencyProvider, public dateTimeProvider: DateTimeProvider) {
    let date = new Date(),
    today = date.getFullYear()+"-"+(date.getMonth() + 1)+"-"+date.getDate();
    this.baseCurrency = "TRY";
    this.currencies = [];
    this.today =dateTimeProvider.validateDate(today);
    this.date = this.today;
    this.getRates = function(){
      currencyProvider.getCurrencyRates(this.baseCurrency, this.date).then((response:{name: string; value:number;}[]) => {
        this.currencies = response;
      });
    };
    this.currencyChange = function(c){
      this.baseCurrency = c;
      this.getRates();
    };
    this.dateChange = function(d){
      this.date = dateTimeProvider.validateDate(d);
      this.getRates();
    };

    /*currencyProvider.getCurrencyKeys().then((response:string[]) => {
      this.keys = response;
    });*/

    this.getRates();
  }
}
