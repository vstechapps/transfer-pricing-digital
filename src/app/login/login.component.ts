import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  username:string="";
  password:string="";

  constructor(public auth: AngularFireAuth, public firestore: FirestoreService) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.signInWithEmailAndPassword(this.username,this.password)
    .catch((err:any)=>{
      console.error(err);
      alert(err.message);
    });
  }

}
