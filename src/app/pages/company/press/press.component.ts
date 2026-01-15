import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-press',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './press.component.html',
  styleUrl: './press.component.scss'
})
export class PressComponent {}
