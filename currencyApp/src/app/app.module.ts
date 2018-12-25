import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CashPage } from '../pages/cash/cash';
import { CryptoPage } from '../pages/crypto/crypto';
import { ConverterPage } from '../pages/converter/converter';
import { OptionsPage } from '../pages/options/options';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CurrencyProvider } from '../providers/currency/currency';

@NgModule({
  declarations: [
    MyApp,
    CashPage,
    CryptoPage,
    ConverterPage,
    OptionsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CashPage,
    CryptoPage,
    ConverterPage,
    OptionsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CurrencyProvider
  ]
})
export class AppModule {}
