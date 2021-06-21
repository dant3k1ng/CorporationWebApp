import { IWorkplace } from '../entities/Workplace';

export const setWorkplace = (workplace: IWorkplace[]|null = null) => {
    return {
        type: 'setWorkplace',
        workplace: workplace
    }
}