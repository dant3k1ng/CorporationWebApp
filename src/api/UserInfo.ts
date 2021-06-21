export interface IUserAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface IUserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUser {
    id: number;
    name: string;
    adress: IUserAddress;
    phonenumber: string;
    website: string;
    company: IUserCompany;
}

export const getUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users/1");
}