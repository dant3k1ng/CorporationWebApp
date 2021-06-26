import { UserData } from '../entities/userData';

export const setUserData = (serData: UserData|null = null) => {
    return{
        type: 'setUserData',
        serData: serData
    };
}