import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {MenuItem} from './menuItem';
import {MenuItemComponent} from "./menu-item/menu-item.component";

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ContentChildren(MenuItemComponent)
  private _menuItems : QueryList<MenuItemComponent>;

  constructor() { }

  @Input() outlet : string;
  @Input() title : string;

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {

    this._menuItems.forEach((item) => {
      item.outlet = this.outlet;
      item.enabled = true;

      item.selected.subscribe((item) => {
        console.log(item);
      });
    });
  }
}
