import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-hmenu-item',
  templateUrl: './hmenu-item.component.html',
  styleUrls: ['./hmenu-item.component.scss']
})
export class HmenuItemComponent implements OnInit {

  private _visible : boolean = true;

  constructor() { }

  @Input() path : string;
  @Input() title : string;

  get visible() : boolean {
    return this._visible;
  }

  set visible(value : boolean) {
    this._visible = value;
  }

  ngOnInit() {
  }

}
