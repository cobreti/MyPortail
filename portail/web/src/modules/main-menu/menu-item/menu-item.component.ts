import {AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, QueryList} from '@angular/core';
import {Output} from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit, AfterContentInit {

  @ContentChildren(MenuItemComponent)
  private _menuItems : QueryList<MenuItemComponent>;

  private _outlet : string;

  constructor() {
    this.enabled = true;
  }

  @Input() path : string;
  @Input() title : string;

  @Output() selected = new EventEmitter<MenuItemComponent>();

  get outlet() : string {
    return this._outlet;
  }

  set outlet(value : string) {
    this._outlet = value;
  }

  enabled : boolean;
  showSubmenu : boolean;
  showTitle : boolean;

  ngOnInit() {
    this.enabled = true;
    this.showTitle = true;
    this.showSubmenu = false;
  }

  ngAfterContentInit() {
    this._menuItems.forEach((item) => {
      item.enabled = false;
    })
  }

  onClicked() {
    if (this._menuItems.length > 0) {
      this.selected.next(this);
    }
  }
}
