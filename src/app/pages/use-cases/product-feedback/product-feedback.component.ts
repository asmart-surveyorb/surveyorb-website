import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { CtaSectionComponent } from '../../../shared/cta-section/cta-section.component';

@Component({
  selector: 'app-product-feedback',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CtaSectionComponent],
  templateUrl: './product-feedback.component.html',
  styleUrl: './product-feedback.component.scss'
})
export class ProductFeedbackComponent {}
