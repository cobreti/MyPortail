import { Component } from '@angular/core';
import { environment } from '../environments/environment';

console.log(environment);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
