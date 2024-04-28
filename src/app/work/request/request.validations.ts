import { Validation } from "../../shared/models";

export const RequestValidations:Validation[]=[
    {
        "ctrl":"parentEntityName",
        "chcks":[
            {
                "chck":"this.request.parentEntityName==null || this.request.parentEntityName==''",
                "msg":"Parent Entity Name is required"
            },
            {
                "chck":"this.request.parentEntityName.length<3",
                "msg":"Parent Entity Name should have min 3 characters"
            }
        ]
    },{
        "ctrl":"parentEntityCountry",
        "chcks":[
            {
                "chck":"this.request.parentEntityCountry==null || this.request.parentEntityCountry==''",
                "msg":"Parent Entity Country is required"
            }
        ]
    },{
        "ctrl":"childEntityName",
        "chcks":[
            {
                "chck":"this.request.childEntityName==null || this.request.childEntityName==''",
                "msg":"Local Entity Name is required"
            }
        ]
    },{
        "ctrl":"employeeCount",
        "chcks":[
            {
                "chck":"this.request.employeeCount==0",
                "msg":"Employee Count is required"
            }
        ]
    },{
        "ctrl":"totalRevenue",
        "chcks":[
            {
                "chck":"this.request.totalRevenue==0",
                "msg":"Enter the total revenue of the company"
            }
        ]
    },{
        "ctrl":"earningsBeforeIncomeTax",
        "chcks":[
            {
                "chck":"this.request.earningsBeforeIncomeTax==0",
                "msg":"Enter earnings before income tax"
            }
        ]
    },{
        "ctrl":"incomeTaxPaid",
        "chcks":[
            {
                "chck":"this.request.incomeTaxPaid==0",
                "msg":"Enter income tax paid"
            }
        ]
    },{
        "ctrl":"totalEmployeeExpense",
        "chcks":[
            {
                "chck":"this.request.totalEmployeeExpense==0",
                "msg":"Enter total employee expense"
            }
        ]
    },{
        "ctrl":"tangibleAssetValue",
        "chcks":[
            {
                "chck":"this.request.tangibleAssetValue==0",
                "msg":"Enter Tangible Asset Value"
            }
        ]
    },{
        "ctrl":"interCompanyPayments",
        "chcks":[
            {
                "chck":"this.request.interCompanyPayments==0",
                "msg":"Enter value of InterCompanyPayments"
            }
        ]
    }
];
