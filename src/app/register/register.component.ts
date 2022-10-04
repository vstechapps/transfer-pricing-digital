import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseDataService } from '../services/base-data.service';
import { Validation, Validations } from './register.validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  types:string[]=["company","consultant"];
  type:string | null="";
  state_city_map:any;
  states:string[]=[];
  cities:string[]=[];
  industries:string[]=[];

  companyname:string="";
  firstname:string="";
  lastname:string="";
  industry:string="";
  address:string="";
  country:string="INDIA";
  state:string="";
  city:string="";
  pincode:string="";
  userid:string="";
  contact:string="";
  password:string="";
  cpassword:string="";


  validations:Validation[]=[];
  touched:boolean=false;
  validated:boolean=false;
  errors:any={};

  constructor(private route:ActivatedRoute,private router:Router, private baseData:BaseDataService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map=>{
      this.type=map.get("type");
      if(this.type!=null && !this.types.includes(this.type))this.router.navigate(["home"]);
      this.loadValidation();
    });
    this.load();
    
  }

  load(){
    this.baseData.getStateCityMap().then(res=>{
      this.state_city_map=res;
      this.states=Object.keys(this.state_city_map);
    });
    this.baseData.getIndustries().then(res=>{
      this.industries = res;
    });
    
  }
 
  loadValidation(){
    this.validated=false;
    this.touched=false;
    this.errors={};
    this.validations=this.type==this.types[0]?
    Validations.filter(i=>["address","country","state","city","pincode","contact","userid","password","cpassword","companyname","industry"].includes(i.ctrl)):
    Validations.filter(i=>["address","country","state","city","pincode","contact","userid","password","cpassword","firstname","lastname"].includes(i.ctrl));
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

  register(){
    this.touched=true;
    if(this.validate()){
      alert("Validation for Register user success");
    }
  }

}
