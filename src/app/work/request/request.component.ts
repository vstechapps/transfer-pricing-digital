import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestInfo } from 'src/app/shared/models';
import { BaseDataService } from '../../services/base-data.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.less']
})
export class RequestComponent implements OnInit {
  type = "";
  year = "";
  company = "";
  step = 1;
  request: RequestInfo = new RequestInfo();
  errors:any={};
  

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.type = params['type'];
      this.year = params['year'];
    });
  }

  validate():boolean{
    return true;
  }

  next(){
    if(this.validate())this.step++;
  }

  previous(){
    this.step--;
  }


}
