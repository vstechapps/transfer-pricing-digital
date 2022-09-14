import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  editing: boolean = false;

  constructor(public firestore: FirestoreService, public toaster: ToastrService) {

  }

  ngOnInit(): void {
  }


  update() {
    let user:any=this.firestore.user;
    this.firestore.userRef.doc(this.firestore.user?.id).set(user);
  }

}
