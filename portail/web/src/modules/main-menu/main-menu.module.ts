import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MainMenuComponent,
    MenuItemComponent
  ],
  declarations: [MainMenuComponent, MenuItemComponent]
})
export class MainMenuModule { }
