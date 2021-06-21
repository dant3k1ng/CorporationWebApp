import { IWorkplace } from '../entities/Workplace';

interface IWorkplaceRecudeAction {
    type: string;
    workplace: IWorkplace[]|null;
}

const setWorkplace = (state = null, action: IWorkplaceRecudeAction) => {
    switch (action.type) {
        case 'setWorkplace': return action.workplace;
        default: return state;
    }
}

export default setWorkplace;