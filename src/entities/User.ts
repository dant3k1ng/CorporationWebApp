export interface IUserAdress {
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
    address: string;
    phoneNumber: string;
    website: string;
    company: IUserCompany
}