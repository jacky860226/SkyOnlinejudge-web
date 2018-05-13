import { Component } from '@angular/core';
import {enableProdMode} from '@angular/core';

import { FooterComponent } from './footer/footer.component';

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jinkela';
}
