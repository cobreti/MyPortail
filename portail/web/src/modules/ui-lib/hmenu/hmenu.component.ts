import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList
} from '@angular/core';
import {HmenuItemComponent} from "../hmenu-item/hmenu-item.component";

@Component({
  selector: 'ui-hmenu',
  templateUrl: './hmenu.component.html',
  styleUrls: ['./hmenu.component.scss']
})
export class HmenuComponent implements OnInit, AfterContentInit {

  @ContentChildren(HmenuComponent)
  private _subMenus : QueryList<HmenuComponent>;

  @ContentChildren(HmenuItemComponent)
  private _menuItems : QueryList<HmenuItemComponent>;

  private _selectedMenus = [];
  private _itemsVisible : boolean = true;

  constructor() { }

  @Input() outlet : string;
  @Input() title : string;

  @Output() selected = new EventEmitter<HmenuComponent>();

  get selectedMenus() : Array<HmenuComponent> {
    return this._selectedMenus;
  }

  get itemsVisible() : boolean {
    return this._itemsVisible;
  }

  set itemsVisible(value : boolean) {
    this._itemsVisible = value;
    this._menuItems.forEach(item => item.visible = value);
  }

  parent : HmenuComponent;

  ngOnInit() {
  }

  ngAfterContentInit() {

    this._subMenus.forEach((menu) => {
      if (menu !== this) {
        menu.parent = this;
        menu.itemsVisible = false;
        menu.selected.subscribe(this.onSubmenuSelected.bind(this));
      }
    });
  }

  onTitleClicked() {
    this.selected.emit(this);
  }

  onSubmenuSelected(menu) {
    this.itemsVisible = false;
    this._selectedMenus.push(menu);
    menu.itemsVisible = true;
  }
}
