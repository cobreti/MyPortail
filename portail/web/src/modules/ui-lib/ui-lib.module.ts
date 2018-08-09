import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HmenuComponent } from './hmenu/hmenu.component';
import { HmenuItemComponent } from './hmenu-item/hmenu-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HmenuComponent,
    HmenuItemComponent
  ],
  declarations: [HmenuComponent, HmenuItemComponent]
})
export class UiLibModule { }
