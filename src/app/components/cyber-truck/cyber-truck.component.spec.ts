import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberTruckComponent } from './cyber-truck.component';

describe('CyberTruckComponent', () => {
  let component: CyberTruckComponent;
  let fixture: ComponentFixture<CyberTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberTruckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
