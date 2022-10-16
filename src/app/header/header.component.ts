import { Component, HostListener, OnInit } from '@angular/core';
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
  contentScreenHeight=800;
  
  constructor(public firestore: FirestoreService, public router: Router) {
    this.contentScreenHeight = (window.innerHeight - 110) ;

  }

  ngOnInit(): void {
    this.loadMenu();
    this.firestore.UserUpdateEvent.subscribe(u=>{
      this.user=u;
      this.loadMenu();
    });

  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.contentScreenHeight = (window.innerHeight - 110);
  }

  loadMenu(){
    let m:Menu[]=[];
    if(this.user == undefined){
      m.push({name:'Home',link:'/home',class:'active-link'});
      m.push({name:'Our Services',link:'/our-services',class:'active-link'});
      m.push({name:'Our Workflow',link:'/workflow',class:'active-link'});
      m.push({name:'FAQ',link:'/faq',class:'active-link'});
      m.push({name:'Login',link:'/login',class:'active-link'});
      m.push({name:'Contact',link:'/contact-us',class:'active-link',});
    }else{
      m.push({name:'Dashboard',link:'/dashboard',class:'active-link'});
      m.push({name:'My Profile',link:'/profile',class:'active-link'});
      m.push({name:'My Orders',link:'/orders',class:'active-link'});
      m.push({name:'Logout',link:'/login',class:'active-link'});
    }
    this.menu=m;

  }

  
}
export interface Menu{
  name?:string;
  icon?:string;
  link?:string;
  class?:string;
  click?:string;

}
