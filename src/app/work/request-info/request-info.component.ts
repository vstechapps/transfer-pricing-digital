import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RequestInfo, Validation } from 'src/app/shared/models';
import { RequestValidations } from '../request/request.validations';

@Component({
  selector: 'app-request-info',
  templateUrl: './request-info.component.html',
  styleUrls: ['./request-info.component.less']
})
export class RequestInfoComponent implements OnInit, OnChanges {

  validations:Validation[]=[];
  touched:boolean=false;

  errors:any={};

  @Input()
  validated:boolean=false;
  
  @Input()
  request:any;

  constructor() {
   }
  ngOnChanges(): void {
    this.validate();
  }

  ngOnInit(): void {
    this.loadValidation();
  }

  
  loadValidation(){
    this.validated=false;
    this.touched=false;
    this.errors={};
    this.validations=
    RequestValidations.filter(i=>["parentEntityName","parentEntityCountry","childEntityName","employeeCount","totalRevenue",
    "earningsBeforeIncomeTax","incomeTaxPaid","totalEmployeeExpense","tangibleAssetValue","interCompanyPayments"].includes(i.ctrl));
    
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
