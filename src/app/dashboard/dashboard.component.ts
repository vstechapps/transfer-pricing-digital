import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  
  constructor(public firestore: FirestoreService) {
  }

  ngOnInit(): void {
  }


}
