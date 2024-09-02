import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelYSectionComponent } from './model-ysection.component';

describe('ModelYSectionComponent', () => {
  let component: ModelYSectionComponent;
  let fixture: ComponentFixture<ModelYSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelYSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelYSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
