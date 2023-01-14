import { Validation } from "../../shared/models";

export const RequestValidations:Validation[]=[
    {
        "ctrl":"parentEntityName",
        "chcks":[
            {
                "chck":"this.parentEntityName==null || this.parentEntityName==''",
                "msg":"Parent Entity Name is required"
            },
            {
                "chck":"this.parentEntityName.length<3",
                "msg":"Parent Entity Name should have min 3 characters"
            }
        ]
    },{
        "ctrl":"parentEntityCountry",
        "chcks":[
            {
                "chck":"this.parentEntityCountry==null || this.parentEntityCountry==''",
                "msg":"Parent Entity Country is required"
            }
        ]
    },{
        "ctrl":"childEntityName",
        "chcks":[
            {
                "chck":"this.childEntityName==null || this.childEntityName==''",
                "msg":"Local Entity Name is required"
            }
        ]
    },{
        "ctrl":"employeeCount",
        "chcks":[
            {
                "chck":"this.employeeCount==0",
                "msg":"Employee Count is required"
            }
        ]
    },{
        "ctrl":"totalRevenue",
        "chcks":[
            {
                "chck":"this.totalRevenue==0",
                "msg":"Enter the total revenue of the company"
            }
        ]
    },{
        "ctrl":"earningsBeforeIncomeTax",
        "chcks":[
            {
                "chck":"this.earningsBeforeIncomeTax==0",
                "msg":"Enter earnings before income tax"
            }
        ]
    },{
        "ctrl":"incomeTaxPaid",
        "chcks":[
            {
                "chck":"this.incomeTaxPaid==0",
                "msg":"Enter income tax paid"
            }
        ]
    },{
        "ctrl":"totalEmployeeExpense",
        "chcks":[
            {
                "chck":"this.totalEmployeeExpense==0",
                "msg":"Enter total employee expense"
            }
        ]
    },{
        "ctrl":"tangibleAssetValue",
        "chcks":[
            {
                "chck":"this.tangibleAssetValue==0",
                "msg":"Enter Tangible Asset Value"
            }
        ]
    },{
        "ctrl":"interCompanyPayments",
        "chcks":[
            {
                "chck":"this.interCompanyPayments==0",
                "msg":"Enter value of InterCompanyPayments"
            }
        ]
    }
];
