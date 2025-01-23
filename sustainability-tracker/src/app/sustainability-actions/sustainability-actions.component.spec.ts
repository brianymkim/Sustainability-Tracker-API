import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabilityActionsComponent } from './sustainability-actions.component';

describe('SustainabilityActionsComponent', () => {
  let component: SustainabilityActionsComponent;
  let fixture: ComponentFixture<SustainabilityActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SustainabilityActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SustainabilityActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
