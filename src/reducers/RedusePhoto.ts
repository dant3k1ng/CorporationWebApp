import { IPhoto } from '../entities/Photo';

interface IUserReducerAction {
    type: string;
    userPhoto: IPhoto|null
}

const setPhoto = (state = null, action: IUserReducerAction) => {
    switch (action.type) {
        case 'setPhoto': return action.userPhoto;
        default: return state;
    }
}

export default setPhoto;