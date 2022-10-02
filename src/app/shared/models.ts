export interface User{
    id:string;
    password:string;
    role:string;
}

export interface Company extends User{
    id:string;
    name:string;
    mail:string;
    contact:string;
    address:Address;

}

export interface Address{
    city:string;
    state:string;
    country:string;
    pincode:string;
}

export enum Role{
    USER="USER",
    ADMIN="ADMIN",
    COMPANY="COMPANY",
    CONSULTANT="CONSULTANT"
}