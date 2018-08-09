import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Router, NavigationEnd, UrlSegment } from '@angular/router';
import {MenuItem} from "../main-menu/menuItem";
import {MainMenuComponent} from "../main-menu/main-menu.component";

@Component({
  selector: 'portail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild(MainMenuComponent)
  private mainMenu : MainMenuComponent;

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

  ngAfterViewInit() {
  }

  public get currentPath() : string {
    return this._currentPath;
  }

}
