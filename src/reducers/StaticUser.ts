import { UserData } from '../entities/userData';

interface IStaticUserData {
    type: string,
    UserData: 'UserData'
}

const setUserData = (state = null, action: IStaticUserData) => {
    switch(action.type) {
        case 'setUserData': return action.UserData;
        default: return state;
    }
}

export default setUserData;