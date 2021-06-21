import { IPhoto } from '../entities/Photo';

export const setPhoto = (userPhoto: IPhoto|null = null) => {
    return {
        type: 'setPhoto',
        userPhoto: userPhoto
    }
}