export const Validations:Validation[]=[
    {
        "ctrl":"companyname",
        "chcks":[
            {
                "chck":"this.companyname!=null && this.companyname!=''",
                "msg":"Company Name is required"
            }
        ]
    },{
        "ctrl":"firstname",
        "chcks":[
            {
                "chck":"this.firstname!=null && this.firstname!=''",
                "msg":"First Name is required"
            }
        ]
    },{
        "ctrl":"lastname",
        "chcks":[
            {
                "chck":"this.lastname!=null && this.lastname!=''",
                "msg":"Last Name is required"
            }
        ]
    },{
        "ctrl":"industry",
        "chcks":[
            {
                "chck":"this.industry!=null && this.industry!=''",
                "msg":"Industry is required"
            }
        ]
    },{
        "ctrl":"address",
        "chcks":[
            {
                "chck":"this.address!=null && this.address!=''",
                "msg":"Address is required"
            }
        ]
    },{
        "ctrl":"country",
        "chcks":[
            {
                "chck":"this.country!=null && this.country!=''",
                "msg":"Country is required"
            }
        ]
    },{
        "ctrl":"state",
        "chcks":[
            {
                "chck":"this.state!=null && this.state!=''",
                "msg":"State is required"
            }
        ]
    },{
        "ctrl":"city",
        "chcks":[
            {
                "chck":"this.city!=null && this.city!=''",
                "msg":"City is required"
            }
        ]
    },{
        "ctrl":"pincode",
        "chcks":[
            {
                "chck":"this.pincode!=null && this.pincode!=''",
                "msg":"Company Name is required"
            }
        ]
    },{
        "ctrl":"userid",
        "chcks":[
            {
                "chck":"this.userid!=null && this.userid!=''",
                "msg":"User ID is required"
            }
        ]
    },{
        "ctrl":"contact",
        "chcks":[
            {
                "chck":"this.contact!=null && this.contact!=''",
                "msg":"Contact Number is required"
            }
        ]
    },{
        "ctrl":"password",
        "chcks":[
            {
                "chck":"this.password!=null && this.password!=''",
                "msg":"Password is required"
            }
        ]
    },{
        "ctrl":"cpassword",
        "chcks":[
            {
                "chck":"this.cpassword!=null && this.cpassword!=''",
                "msg":"Confirm password is required"
            },{
                "chck":"this.cpassword!=this.password",
                "msg":"Confirm password does not match with password"
            }
        ]
    }
];

export interface Validation{
    ctrl:string,
    chcks:Condition[]
}

export interface Condition{
    chck:string,
    msg:string
    
}