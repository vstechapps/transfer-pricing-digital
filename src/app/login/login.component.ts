import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


import { FirestoreService } from '../services/firestore.service';
import { Validation } from '../shared/models';
import { Validations } from '../shared/validations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  userid:string="";
  password:string="";

  validations:Validation[]=[];
  touched:boolean=false;
  validated:boolean=false;
  errors:any={};

  constructor(public auth: AngularFireAuth, public firestore: FirestoreService) { }

  ngOnInit(): void {
    this.loadValidation();
  }

  loadValidation(){
    this.validated=false;
    this.touched=false;
    this.errors={};
    this.validations=Validations.filter(i=>["userid","password"].includes(i.ctrl));
  }

  login() {
    this.touched = true;
    if (!this.validate()) return;
    this.auth.signInWithEmailAndPassword(this.userid, this.password)
      .then((value)=>{
        console.log("User Login Success ",value);
        this.firestore.toast.success(this.userid,"User Login Success");
      })
      .catch((err: any) => {
        console.error(err);
        this.handleError(err.code);
      });

  }

  handleError(code:string){
    switch(code){
      case "auth/user-not-found":
        this.firestore.toast.error("User not Registered, Please register "+this.userid,"Login Error");
        break;
      case "auth/wrong-password":
        this.firestore.toast.error("Invalid Password, Please use forgot password","Login Error");
        break;
      default:
        this.firestore.toast.error("Unable to login "+this.userid,"Login Error")
        break;
    }
  }

  

  validate(){
    let errs:any={};
    let validated=true;
    if(!this.touched)return;
    this.validations.forEach(v=>{
      for(var c in v.chcks){
        if(eval(v.chcks[c].chck)){
          validated=false;
          errs[v.ctrl]=v.chcks[c].msg;
          break;
        }
      }
    });
    this.validated=validated;
    this.errors=errs;
    return validated;
  }

}
