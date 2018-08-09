import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmenuItemComponent } from './hmenu-item.component';

describe('HmenuItemComponent', () => {
  let component: HmenuItemComponent;
  let fixture: ComponentFixture<HmenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
