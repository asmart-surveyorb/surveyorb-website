import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Survey Orb');
  
  // Active tab for showcase section
  protected readonly activeTab = signal('ai-insights');
  
  setActiveTab(tabId: string): void {
    this.activeTab.set(tabId);
  }
}
