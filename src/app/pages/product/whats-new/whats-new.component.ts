import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-whats-new',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './whats-new.component.html',
  styleUrl: './whats-new.component.scss'
})
export class WhatsNewComponent {}
