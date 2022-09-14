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
  clickCount:number=0;
  isAdmin=false;

  constructor(public auth: AngularFireAuth, public firestore: FirestoreService) { }

  ngOnInit(): void {
  }

  checkIfAdmin(){
    console.log("Click Event..")
    this.isAdmin=this.clickCount>=5;
    this.clickCount++;
  }

  adminLogin(){
    this.auth.signInWithEmailAndPassword(this.username,this.password)
    .catch((err:any)=>{
      console.error(err);
      alert(err.message);
    });
  }

  login() {

  }

}
