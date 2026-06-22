import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramServiceComponent } from './program-service.component';

describe('ProgramServiceComponent', () => {
  let component: ProgramServiceComponent;
  let fixture: ComponentFixture<ProgramServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
