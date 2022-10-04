import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseDataService } from '../services/base-data.service';

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

  state:string="";
  city:string="";

  constructor(private route:ActivatedRoute,private router:Router, private baseData:BaseDataService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map=>{
      this.type=map.get("type");
      if(this.type!=null && !this.types.includes(this.type))this.router.navigate(["home"]);
    });
    this.load();
  }

  load(){
    this.baseData.getStateCityMap().then(res=>{
      this.state_city_map=res;
      this.states=Object.keys(this.state_city_map);
    });
  }

}
