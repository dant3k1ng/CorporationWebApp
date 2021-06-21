import { useDispatch } from "react-redux";
import styled from "styled-components";

import { logout } from '../../reducers/UserAction';


const LogoutDiv = styled.div`
    border-top: 1px solid #a8a8a8;
    width: 100%;
    text-align: center;
    font-size: 20px;
    margin-top: 120px;
    padding-top: 15px;
    &:hover{
        cursor: pointer;
    }
`;

const LogoutImg = styled.img`
    width: 20px;
`;

function Logout() {

    const dispatch = useDispatch();

        return (
            <LogoutDiv onClick={() => dispatch(logout())}>
                <LogoutImg src="../media/icons/logout.png"/>  Logout
            </LogoutDiv>
        )
}

export default Logout;