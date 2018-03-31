import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { InicioPage } from '../inicio/inicio';
import { FormPage } from '../form/form';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InicioPage;
  tab2Root = AboutPage;
  tab3Root = FormPage;

  constructor() {

  }
}
