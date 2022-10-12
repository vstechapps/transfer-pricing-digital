import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  public user?:User;
  

  constructor(public firestore: AngularFirestore,public auth: AngularFireAuth,public toast:ToastrService) {
    this.toast.toastrConfig.timeOut=20000;
  }

  register(user:User){
    if(!user.password)return;
      this.auth.createUserWithEmailAndPassword(user.email,user.password)
      .then((value)=>{
        user.password="";
        this.firestore.collection("users").doc(user.email).set(user).then((success)=>{
          this.toast.success(user.email,"User Registration Success")
          this.user=user;
        },(err)=>{
          console.error("FirestoreService",err);
          this.toast.error("Unable to register User","Error");
        });
      },(reason)=>{
        console.error("FirestoreService",reason);
        this.handleRegisterError(reason.code,user);
      });
  
    
  }

  handleRegisterError(code:string,user:User){
    switch(code){
      case "auth/email-already-in-use":
        this.toast.error(user.id+" is already registered in our system.","Error")
        break;
      default:
        this.toast.error("Unable to register "+user.id+" "+code,"Error");
        break;
    }

  }

  


  
}
