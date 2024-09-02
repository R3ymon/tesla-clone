import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSComponent } from './model-s.component';

describe('ModelSComponent', () => {
  let component: ModelSComponent;
  let fixture: ComponentFixture<ModelSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
