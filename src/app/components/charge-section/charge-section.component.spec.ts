import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeSectionComponent } from './charge-section.component';

describe('ChargeSectionComponent', () => {
  let component: ChargeSectionComponent;
  let fixture: ComponentFixture<ChargeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
