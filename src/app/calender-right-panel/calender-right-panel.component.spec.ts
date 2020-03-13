import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderRightPanelComponent } from './calender-right-panel.component';

describe('CalenderRightPanelComponent', () => {
  let component: CalenderRightPanelComponent;
  let fixture: ComponentFixture<CalenderRightPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderRightPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
