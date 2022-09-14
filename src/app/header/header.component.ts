import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  
  title:string="Transfer Pricing Digital";
  constructor(public auth: AngularFireAuth, public firestore: FirestoreService, public router: Router) {


  }

  ngOnInit(): void {

  }

  
}
