import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerWallComponent } from './power-wall.component';

describe('PowerWallComponent', () => {
  let component: PowerWallComponent;
  let fixture: ComponentFixture<PowerWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerWallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
