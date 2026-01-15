import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { CtaSectionComponent } from '../../../shared/cta-section/cta-section.component';

@Component({
  selector: 'app-employee-experience',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CtaSectionComponent],
  templateUrl: './employee-experience.component.html',
  styleUrl: './employee-experience.component.scss'
})
export class EmployeeExperienceComponent {}
