import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirestoreService } from '../services/firestore.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
   step = 1;

  constructor() {}

  ngOnInit(): void {
  }

  validate():boolean{
    return false;
  }

  next(){
    if(this.validate())this.step++;
  }

  previous(){
    this.step--;
  }


}
