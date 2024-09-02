import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ChargeSectionComponent } from './components/charge-section/charge-section.component';
import { ModelYSectionComponent } from './components/model-ysection/model-ysection.component';
import { Model3Component } from './components/model3/model3.component';
import { ModelSComponent } from './components/model-s/model-s.component';
import { PowerWallComponent } from './components/power-wall/power-wall.component';
import { CyberTruckComponent } from './components/cyber-truck/cyber-truck.component';
import { ModelXComponent } from './components/model-x/model-x.component';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponent,
    HeroSectionComponent,
    ChargeSectionComponent,
    ModelYSectionComponent,
    Model3Component,
    ModelSComponent,
    PowerWallComponent,
    CyberTruckComponent,
    ModelXComponent,
    RouterLinkWithHref,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tesla-clone';
}
