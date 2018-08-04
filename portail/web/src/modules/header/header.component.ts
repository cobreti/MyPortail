import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, UrlSegment } from '@angular/router';

@Component({
  selector: 'portail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _currentPath : string;

  constructor(private _router : Router) {
  }

  ngOnInit() {
    this._router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this._currentPath = val.url;
      }
    });
  }

  public get currentPath() : string {
    return this._currentPath;
  }

}
