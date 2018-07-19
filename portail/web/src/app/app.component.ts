import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import {TranslateService} from "@ngx-translate/core";

console.log(environment);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
