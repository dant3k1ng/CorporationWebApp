import { useSelector } from "react-redux"

import { IState } from "../reducers"


export const IsUserLogged = () => {
    return useSelector((state: IState) => state.user != null);
}

export const GetLoggedUser = () => {
    return useSelector((state: IState) => state.user);
}

export const GetLoggedUserId = () => {
    return useSelector((state: IState) => state.user?.id || null);
}