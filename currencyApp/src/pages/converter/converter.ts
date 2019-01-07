import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CurrencyProvider } from '../../providers/currency/currency';
import { DateTimeProvider } from '../../providers/dateTime/dateTime';

@Component({
  selector: 'page-converter',
  templateUrl: 'converter.html',
  providers: [CurrencyProvider, DateTimeProvider]
})
export class ConverterPage {
  exchangeRate: number;
  currencies: Array<{ name: string, value: number }>;
  currencyFrom: string;
  currencyTo: string;
  currencyChange: Function;
  getKeys: Function;
  getRates: Function;
  fromValue: number;
  toValue: number;
  inputToOutput: Function;

  constructor(public navCtrl: NavController, public currencyProvider: CurrencyProvider, public dateTimeProvider: DateTimeProvider) {
    this.fromValue = 1;
    this.currencies = [];
    this.currencyFrom = "USD";
    this.currencyTo = "TRY";

    this.getKeys = function(){
      currencyProvider.getCurrencyKeys().then((response: string[])=>{
        this.currencies = response;
      });
    };

    this.getRates = function(){
      return new Promise( (res, rej) =>{
        currencyProvider.getRateOf(this.currencyFrom, this.currencyTo).then((response: number) => {
          this.exchangeRate = response;
        });
        res(true);
      });
    };

    this.inputToOutput = function(){
      if(this.fromValue){
        this.toValue = (this.fromValue / this.exchangeRate).toPrecision(3);
      }
    };

    this.currencyChange = function(){
      this.getRates().then((response: boolean) => {
        if(response){
          this.inputToOutput();
        }
      });
    };

    //TODO: get kısımları düzenlenecek
    //TODO: change eventleri bağlanacak
    this.getKeys();
    this.getRates().then((response: boolean) => {
      if(response){
        this.inputToOutput();
      }
    });
  }

}
