import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getUser } from './api/User';
import { setUser } from './reducers/UserAction';
import { getWorkplaces } from './api/Workplace';
import { setWorkplace } from "./reducers/WorkplaceAction";
import { getPhoto } from './api/Photo';
import { setPhoto } from './reducers/PhotoAction';

const Div = styled.div`

`;


function AppBootstrap() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getData() {
            const user = await getUser().then(response => response.json())
            .then(data => {
                dispatch(setUser(data));
                return data;
            });
            
            if ("id" in user){
                getPhoto(user.id).then(response => response.json())
                .then(data => {
                    dispatch(setPhoto(data));
                });
            }
        }

        getData();
    });

    useEffect(() => {
        getWorkplaces().then(response => {
            dispatch(setWorkplace(response))
        })
    });

    return <Div/>; 
}

export default AppBootstrap;
