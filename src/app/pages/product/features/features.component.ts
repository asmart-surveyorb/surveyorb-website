import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { CtaSectionComponent } from '../../../shared/cta-section/cta-section.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CtaSectionComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {}
