import { IUser } from '../entities/User';

interface IUserReduceAction {
    type: string;
    user: IUser|null;
}

const setUser = (state = null, action: IUserReduceAction) => {
    switch (action.type) {
        case 'setUser': return action.user;
        default: return state;
    }
}

export default setUser;