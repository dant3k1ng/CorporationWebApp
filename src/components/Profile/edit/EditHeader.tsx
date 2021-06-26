import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { IState } from "../../../reducers";
import { setUser } from '../../../reducers/UserAction';
import { setPhoto } from '../../../reducers/PhotoAction';
import { GetLoggedUser } from "../../../helpers/User";
import { Colors } from "../../../styledHelpers/Colors";
import { Link } from "react-router-dom";


const Header = styled.div`
    width: 1380px;
    height: 140px;
    margin-top: 40px;
    padding-bottom: 20px;
    padding: 10px;
    background-color: ${Colors.white};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 1px solid ${Colors.lightgrey};
`;

const TopOptions = styled.div`
    width: 1350px;
    text-align: right;
`;

const TopHeaderOptions = styled.button`
    background-color: inherit;
    border: none;
    outline: none;
    height: 30px;

    &:hover{
        cursor: pointer;
    }
`;

const OptionIcon = styled.img`
    width: 15px;
`;

const OptionText = styled.span`
    padding-bottom: 20px;
`;

const ProfileDiv = styled.div`
    position: absolute;
    top: 135px;
    left: 400px;
    width: 1300px;
    float: left;
`;

const UserAvatar = styled.div`
    width: 65px;
    text-align: center;
    float: left;
    padding-left: 40px;

    img{
        width: 80px;
        border-radius: 50%;
    }
`;

const SeeProfile = styled.div`
    position: relative;
    left: -65px;
    top: 85px;
    color: ${Colors.deepBlue};
`;

const UserInfo = styled.div`
    text-align: left;
    float: left;
    margin-left: 30px;
    margin-top: -10px;
`;

const NameAndCompany = styled.div`
    font-weight: bold;
`;

const Address = styled.div`
    margin-top: 5px;
`;

const UserInput = styled.input`
    border: none;
    outline: none;
    background-color: inherit;
    font-weight: bold;
    padding: 1px;
`;

const StreetInput = styled.input`
    border: none;
    outline: none;
    background-color: inherit;
    padding: 1px;
`;

const Contact = styled.div`
    margin-left: 180px;
    margin-top: -30px;
`;

const ContactInput = styled.input`
    border: none;
    outline: none;
    background-color: inherit;
`;

const Actions = styled.div`
    position: absolute;
    right: 0;
    top: 5px;
    width: 200px;

    img{
        width: 20px;
    }

`;

const CloseButton = styled.button`
    position: relative;
    right: -260px;
    top: -2px;
    background-color: inherit;
    border: none;
    outline: none;

    &:hover{
        cursor: pointer;
    }
`;

const EditButton = styled.button`
    position: relative;
    right: -260px;
    background-color: inherit;
    border: none;
    outline: none;

    &:hover{
        cursor: pointer;
    }
`;

const Link1 = styled(Link)`
    text-decoration: none;
    color: ${Colors.deepBlue}
`;

const Input = styled.input`
    position: relative;
    top: -28px;
    left: 30px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${Colors.deepBlue};
`;

interface IProps {
    afterSave: Function;
}

interface IUserFromAttr {
    [key: string]: string; 
}

function EditHeader(props: IProps) {
    const dispatch = useDispatch();
    const loggedUser = GetLoggedUser();
    
    const userPhoto = useSelector((state: IState) => state.photo);
    const [photo, setUserPhoto] = useState('');
    const [formAttr, setFormAttr] = useState<IUserFromAttr>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormAttr({
            ...formAttr,
            [event.target.name]: event.target.value
        });
    }

    const getByFormAttr = (attr: string) => {
        if(attr in formAttr) {
            return formAttr[attr];
        }
        return null;
    }

    const saveUserData = () => {
        if(loggedUser !== null){
            let tmpUser = Object.assign({}, loggedUser);
            tmpUser.name = getByFormAttr('user-name') || loggedUser.name;
            tmpUser.company.name = getByFormAttr('company-name') || loggedUser?.company?.name;
            tmpUser.address.city = getByFormAttr('address-city') || loggedUser?.address?.city;
            tmpUser.address.street = getByFormAttr('address-street') || loggedUser?.address?.street;
            tmpUser.email = getByFormAttr('emial') || loggedUser.email;
            tmpUser.phone = getByFormAttr('phone') || loggedUser.phone;

            if(photo !== ""){
                let tmpUserPhoto = Object.assign({}, userPhoto);
                tmpUserPhoto.thumbnailUrl = photo;
                dispatch(setPhoto(tmpUserPhoto));
            }

            dispatch(setUser(tmpUser))
        }

        props.afterSave();
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files !== null && event.target.files.length > 0) {
            const file = URL.createObjectURL(event.target.files[0]);
            setUserPhoto(file);
        }
    }

    return (
        <Header>
            <TopOptions>            
                <TopHeaderOptions> <OptionIcon src='/media/icons/message.png' alt="photo"/> <OptionText> Message </OptionText> </TopHeaderOptions>
                <TopHeaderOptions> <OptionIcon src='/media/icons/file.png' alt="photo"/> <OptionText> Create a request </OptionText> </TopHeaderOptions>
                <TopHeaderOptions> <OptionIcon src='/media/icons/portfolio.png' alt="photo"/> <OptionText> Add to a cluster </OptionText> </TopHeaderOptions>
            </TopOptions>
            <ProfileDiv>
                <UserAvatar>
                    <img src={photo === "" ? userPhoto?.thumbnailUrl : photo} alt="photo"/>
                    <Input type="file" accept="image/*" onChange={(e) => handleImageChange(e)} />
                </UserAvatar>
                <SeeProfile>
                    <Link1 to='/profile'> See profile </Link1>
                </SeeProfile>
                <UserInfo>
                    <NameAndCompany>
                        <UserInput name='user-name' value={getByFormAttr('user-name') || loggedUser?.name } onChange={(e) => handleChange(e)} /> <br/>
                        <UserInput name='company-name' value={getByFormAttr('company-name') || loggedUser?.company?.name} onChange={(e) => handleChange(e)} /> <br/>
                    </NameAndCompany>
                    <Address>
                        <StreetInput name='address-city' value={getByFormAttr('address-city') || loggedUser?.address.city} onChange={(e) => handleChange(e)} /> <br/>
                        <StreetInput name='address-street' value={getByFormAttr('address-street') || loggedUser?.address.street} onChange={(e) => handleChange(e)} />
                    </Address>
                    <Contact>
                        <ContactInput name='email' value={getByFormAttr('email') || loggedUser?.email} onChange={(e) => handleChange(e)} /> <br/>
                        <ContactInput name='phone' value={getByFormAttr('phone') || loggedUser?.phone} onChange={(e) => handleChange(e)} />
                    </Contact>
                    <Actions>
                        <CloseButton onClick={() => props.afterSave()}>
                            <img src='/media/icons/close.png' alt="photo"/>
                        </CloseButton> <br/>
                        <EditButton onClick={() => saveUserData()}>
                            <img src='/media/icons/pencil.png' alt="photo"/>
                        </EditButton>
                    </Actions>
                </UserInfo>
            </ProfileDiv>
        </Header>
    )
}

export default EditHeader;