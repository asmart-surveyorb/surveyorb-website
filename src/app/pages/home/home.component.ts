import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CtaSectionComponent } from '../../shared/cta-section/cta-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CtaSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly activeTab = signal('ai-insights');
  
  setActiveTab(tabId: string): void {
    this.activeTab.set(tabId);
  }
}
