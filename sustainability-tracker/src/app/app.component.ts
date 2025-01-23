import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SustainabilityActionsComponent } from './sustainability-actions/sustainability-actions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SustainabilityActionsComponent],
  template: `
    <h1>Sustainability Action Tracker</h1>
    <app-sustainability-actions></app-sustainability-actions>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sustainability-tracker';
}
