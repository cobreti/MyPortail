import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmenuComponent } from './hmenu.component';

describe('HmenuComponent', () => {
  let component: HmenuComponent;
  let fixture: ComponentFixture<HmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
