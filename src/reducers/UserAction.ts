import { IUser } from '../entities/User';

export const setUser = ( user: IUser|null = null ) => {
    return {
        type: 'setUser',
        user: user
    }
}

export const logout = () => {
    return {
        type: 'setUser',
        user: null
    }
}