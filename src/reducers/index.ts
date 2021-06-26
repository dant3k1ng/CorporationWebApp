import { IUser } from '../entities/User';
import { IWorkplace } from '../entities/Workplace';
import {IPhoto} from '../entities/Photo';
import { Layout } from '../helpers/Layout';
import UserReducer from './ReduceUser';
import ReducePhoto from './RedusePhoto';
import WorkplaceReducer from './WorkplaceReducers';
import LayoutReducer from './LayoutReducers';
import { UserData } from '../entities/userData';
import ReduceUserData from "./ReduceUserData";
import { combineReducers } from '@reduxjs/toolkit';


export interface IState {
    user: IUser|null,
    userData: UserData|null;
    photo: IPhoto|null,
    workplace: IWorkplace[]|null,
    layout: Layout
}

const reducers = {
    user: UserReducer,
    userData: ReduceUserData,
    photo: ReducePhoto,
    workplace: WorkplaceReducer,
    layout: LayoutReducer
}

export default combineReducers(reducers);