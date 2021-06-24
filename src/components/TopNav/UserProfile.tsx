import { useSelector } from "react-redux";
import { IState } from '../../reducers';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { Link } from 'react-router-dom'; 

const Profile = styled.div`
    width: 100%;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-bottom: 10px;
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    float: left;
    object-fit: flex;
    margin-right: 10px;
`;

const Text = styled.p`
    float: left;
`;

const H3 = styled.h3`
    color: ${Colors.deepBlue};
`;

const Link1 = styled(Link)`
    text-decoration: none;
    color: ${Colors.deepBlue}
`;

interface IProps{
    filteredText: string;
}

function UserProfile(props: IProps) {
    const user = useSelector((state: IState) => state?.user?.name);
    const photo = useSelector((state: IState) => state?.photo);
    
    return (
        <Profile>
            <Img src={photo?.thumbnailUrl} alt="user" />
            <Text> {user} </Text> <br/>
            <H3> <Link1 to=""> See profile </Link1> </H3>
        </Profile>
    )
}

export default UserProfile;