export interface User{
    id:string;
    password:string;
    role:string;
}

export interface Consultant extends User{
    firstName:string;
    lastName:string;
    mail:string;
    contact:string;
    address:Address;
}

export interface Company extends User{
    name:string;
    mail:string;
    contact:string;
    address:Address;
}

export interface Address{
    address:string;
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