import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../shared/models';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  user?:User;
  menu:Menu[]=[];
  
  constructor(public firestore: FirestoreService, public router: Router) {


  }

  ngOnInit(): void {
    this.loadMenu();
    this.firestore.UserUpdateEvent.subscribe(u=>{
      this.user=u;
      this.loadMenu();
    });

  }

  loadMenu(){

  }

  
}
export interface Menu{
  name?:string;
  icon?:string;
  link?:string;
  active?:string;
  label?:string;


}
