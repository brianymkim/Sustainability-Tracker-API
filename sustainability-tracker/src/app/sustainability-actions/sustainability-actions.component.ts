import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface SustainabilityAction {
  id: number;
  action: string;
  date: string;
  points: number;
}

@Component({
  selector: 'app-sustainability-actions',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './sustainability-actions.component.html',
  styleUrls: ['./sustainability-actions.component.css']
})
export class SustainabilityActionsComponent implements OnInit {
  actions: SustainabilityAction[] = [];
  newAction: SustainabilityAction = { id: 0, action: '', date: '', points: 0 };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchActions();
  }

  fetchActions() {
    this.http.get<SustainabilityAction[]>('http://localhost:3000/api/actions').subscribe(
      (data) => {
        this.actions = data;
      },
      (error) => {
        console.error('Error fetching actions:', error);
      }
    );
  }

  addAction() {
    this.http.post<SustainabilityAction>('http://localhost:3000/api/actions', this.newAction).subscribe(
      (data) => {
        this.actions.push(data);
        this.newAction = { id: 0, action: '', date: '', points: 0 };
      },
      (error) => {
        console.error('Error adding action:', error);
      }
    );
  }
}
