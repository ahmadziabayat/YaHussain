import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionMissionValueComponent } from './vision-mission-value.component';

describe('VisionMissionValueComponent', () => {
  let component: VisionMissionValueComponent;
  let fixture: ComponentFixture<VisionMissionValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisionMissionValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionMissionValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
