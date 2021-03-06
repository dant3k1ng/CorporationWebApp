import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { IState } from '../../reducers/index';
import { Link } from 'react-router-dom'; 


const Wrapper = styled.div`
    float: left;
`;

const InnerWrapper = styled.div`
    width: 350px;
    height: 100vh;
    float: left;
    padding-top: 40px;
`;

const UserProfile = styled.div`
    width: 90%;
    min-height: 300px;
    background-color: ${Colors.white};
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 0px 15px -10px #000000;
`;

const ProfilePhoto = styled.div`
    width: 100%;
    height: 65%;
    text-align: center;
    padding: 5px;
    border-bottom: 2px solid ${Colors.lightgrey};
`;

const YourProfile = styled.div`
    width: 100%;
    padding: 5px;
    font-weight: 600;
    font-size: ${fontSize[22]};
`;

const CustomImg = styled.img`
    width: 28px;
    float: left;
    padding-right: 10px;
`;

const Text = styled.div`
    float: left;
    font-size: 24px;
    padding-top: 3px;
`;

const H1 = styled.h1`
    font-size: ${fontSize[24]};
    color: ${Colors.deepBlue};
`;

const H3 = styled.h3`
    font-size: ${fontSize[16]};
    color: ${Colors.grey};
    margin-top: 8px;
`;

const Tabs = styled.div`
    width: 100%;
    height: auto;
    padding-top: 20px;
    padding-left: 30px;
    font-size: ${fontSize[24]};
`;

const YourProfileDiv = styled.div`
    width: 100%;
    padding: 7px;
    margin-top: 10px;
`;

const AddImg = styled.img`
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 10px 5px 10px;
    float: right;
    margin-right: 25px;
    margin-top: -5px;
    width: 20px;
`;

const ProfileImg = styled.img`
    width: 100px;
    height: 100px;
    margin-top: 15px;
    margin-bottom: 10px;
    border-radius: 50%;
`;

const TabsDiv = styled.div`
    height: 25px;
    margin-left: 5px;
`;

const Link1 = styled(Link)`
    text-decoration: none;
    color: ${Colors.deepBlue};
`;

const Link2 = styled(Link)`
    text-decoration: none;
    color: ${Colors.black};
`;

export default function LeftMenu() {
    const user = useSelector((state: IState) => state.user);
    const photo = useSelector((state: IState) => state.photo);

    return (
        <Wrapper>
            <InnerWrapper>
                <UserProfile>
                    <ProfilePhoto>
                        <Link1 to="/profile">
                            <ProfileImg src={photo?.thumbnailUrl} alt='photo'/>
                            <H1> {user?.name} </H1>
                            <H3> {user?.company.name} </H3>
                        </Link1>
                    </ProfilePhoto>
                    
                    <YourProfile>
                        <YourProfileDiv> 
                            <CustomImg src="/media/icons/network.png" /> Your Network 
                            <Link1 to=""> <AddImg src="/media/icons/user-plus.png"/> </Link1>
                        </YourProfileDiv> 
                        <YourProfileDiv> 
                            <CustomImg src="/media/icons/publications.png" /> Your Publications 
                            <Link1 to=""> <AddImg src="/media/icons/plus.png"/> </Link1>
                        </YourProfileDiv> 
                    </YourProfile>
                </UserProfile>
                <Tabs>
                    <TabsDiv> <Link2 to="/wip"> <CustomImg src="/media/icons/publications.png"/> <Text> Publications </Text> </Link2> </TabsDiv> <br/>
                    <TabsDiv> <Link2 to="/wip"> <CustomImg src="/media/icons/ecosystem.png"/> <Text> Ecosystem </Text> </Link2> </TabsDiv> <br/>
                    <TabsDiv> <Link2 to="/entities"> <CustomImg src="/media/icons/entities.png"/> <Text> Entities </Text> </Link2> </TabsDiv> 
                </Tabs>
            </InnerWrapper>
        </Wrapper>
    )
};