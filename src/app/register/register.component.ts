import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  types:string[]=["company","consultant"];
  type:string | null="";
  state_city_map={};
  states:string[]=[];

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map=>{
      this.type=map.get("type");
      if(this.type!=null && !this.types.includes(this.type))this.router.navigate(["home"]);
    });
  }

}
