export interface IUserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string
}

export interface IUserCompany {
    name: string;
    phrase: string;
    bs: string
}

export interface IUser {
    id: number;
    name: string;
    lastname: string;
    email: string;
    address: IUserAddress;
    phone: string;
    website: string;
    company: IUserCompany
}