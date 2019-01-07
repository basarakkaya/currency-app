import { Component } from '@angular/core';

import { CashPage } from '../cash/cash';
import { CryptoPage } from '../crypto/crypto';
import { ConverterPage } from '../converter/converter';
import { OptionsPage } from '../options/options';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabCash = CashPage;
  tabCrypto = CryptoPage;
  tabConverter = ConverterPage;
  tabOptions = OptionsPage;
  constructor() {

  }
}
