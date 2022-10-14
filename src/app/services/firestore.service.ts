import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  public user?:User;
  private users?:AngularFirestoreCollection<User>;
  public UserUpdateEvent=new EventEmitter<User>();

  constructor(public firestore: AngularFirestore,public auth: AngularFireAuth,public toast:ToastrService) {
    this.users = this.firestore.collection("users");
    this.toast.toastrConfig.timeOut=20000;
    this.onAuthStateChanged();
  }

  onAuthStateChanged(){
    this.auth.authState.subscribe((u:any)=>{
      console.log("FirestoreService: Auth State Changed ",u);
      this.users?.doc(u.email).get().subscribe((a)=>{
        this.user=a.data();
        console.log("FirestoreService: User Updated ",this.user);
        this.UserUpdateEvent.emit(this.user);
      });
    });
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
          this.toast.error("Unable to register User","Registration Error");
        });
      },(reason)=>{
        console.error("FirestoreService",reason);
        this.handleRegisterError(reason.code,user);
      });
  
    
  }

  handleRegisterError(code:string,user:User){
    switch(code){
      case "auth/email-already-in-use":
        this.toast.error(user.id+" is already registered in our system.","Registration Error")
        break;
      default:
        this.toast.error("Unable to register "+user.id+" "+code,"Registration Error");
        break;
    }
  }

  


  
}
