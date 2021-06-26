import { UserData } from '../entities/userData';

export const setUserData = (userData: UserData|null = null) => {
    return{
        type: 'setUserData',
        userData: userData
    };
}