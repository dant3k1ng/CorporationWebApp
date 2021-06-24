import React, { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import { useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom'; 

import UserProfile  from './UserProfile';
import Logout from "./Logout"
import { Colors } from '../../styledHelpers/Colors';


const WrapperDropdown = styled.div`
    float: left;
    width: 15%;
    margin: 10px;
    padding-left: 30px;
`;

const Img = styled.img`
    float: left;
    width: 35px;
    padding-left: 5px;
`;

const CustomTxt = styled.div`
    float: left;
    width: 85%;
    font-size: 20px;
    padding-top: 10px;
    padding-left: 10px;
    font-weight: 600;
`;

const ImgArrow = styled.img`
    float: right;
    width: 20px;
    position: absolute;
    top: 35px;
`;

const MenuImg = styled.img`
    width: 28px;
    float: left;
    margin-right: 8px;
`;

const MenuOption = styled.div`
    float: left;
    font-size: 24px;
    width: 100%;
    height: 50px;
`;

const CompanyDiv = styled.div`
    width: 101%;
    height: 550px;
    border-bottom: 1px solid #2424243d;
    overflow-y: scroll;
    overflow-x: none;
`;

const DropdownBox = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 360px;
    height: 810px;
    padding: 10px;
    top: 80px;
    background-color: #ffffff;
    border: 1px solid #0000003e;
    border-top: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 200;
`;

const Filter = styled.input`
    width: 305px;
    height: 40px;
    margin-left: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border-color: #61616163;
    text-indent: 5px;
    font-size: 18px;
`;

const H3 = styled.h3`
    color: #969696;
    font-weight: bolder;
`;

const P = styled.p`
    float: left;
    margin-top: 5px;
`;

const AccountDiv = styled.div`
    width: 101%;
    height: 200px;

`;

const HeadWrapper = styled.div`
    width: 350px;
`;

const Link1 = styled(Link)`
    text-decoration: none;
    color: ${Colors.black}
`;


export const ExpendedMenu: FC = () => {
        const [wrapperRef, dropdownOpen, toogleDropdown] = useDropdown();
        
        const [inputText, setInputText] = useState("");
        const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            const text = e.target.value;
            setInputText(text);
        }

        return (
            <WrapperDropdown>
                <div ref={wrapperRef}>
                    <HeadWrapper onClick={toogleDropdown}>
                        <Img src="./media/icons/house2.png"/> 
                        <CustomTxt> Home </CustomTxt>
                        <ImgArrow src="./media/icons/arrow-down.png"/>
                    </HeadWrapper>
                    {dropdownOpen &&
                        <DropdownBox>
                            <Router>
                            <CompanyDiv>
                                <Filter placeholder="Filter..." type='text' value={inputText} onChange={inputHandler}/>
                                
                                <H3> Platform </H3> <br/>
                                
                                {   'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                                    <MenuOption> <Link1 to="/"> <MenuImg src="./media/icons/house2.png"/> <P> Home </P> </Link1> </MenuOption>
                                }
                                {   'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                                    <MenuOption> <Link1 to="/sides/publications"> <MenuImg src="./media/icons/publications.png"/> <P> Publications </P> </Link1> </MenuOption>
                                }
                                {   'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                                    <MenuOption> <Link1 to="/sides/people"> <MenuImg src="./media/icons/people.png"/> <P> People </P> </Link1> </MenuOption>
                                }
                                {   'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                                    <MenuOption> <Link1 to=""> <MenuImg src="./media/icons/entities2.png"/> <P> Entities </P> </Link1> </MenuOption>
                                }
                                {   'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                                    <MenuOption> <Link1 to="/sides/administration"> <MenuImg src="./media/icons/administration.png"/> <P> Administration </P> </Link1> </MenuOption>
                                }

                                <H3> Workspaces </H3> <br/>

                                {   'Clinet contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                                    <MenuOption> <Link1 to=""> <MenuImg src="../media/icons/contract.png"/> <P> Client contract </P> </Link1> </MenuOption>
                                }
                                {   'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                                    <MenuOption> <Link1 to=""> <MenuImg src="../media/icons/contract.png"/> <P> Supplier contract </P> </Link1> </MenuOption>
                                }
                                {   'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                                    <MenuOption> <Link1 to=""> <MenuImg src="../media/icons/entities2.png"/> <P> Corporate </P> </Link1> </MenuOption>
                                }
                                {   'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                                    <MenuOption> <Link1 to=""> <MenuImg src="../media/icons/book.png"/> <P> Group Norms </P> </Link1> </MenuOption>
                                }
                                {   'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                                    <MenuOption> <Link1 to=""> <MenuImg src="../media/icons/contract.png"/> <P> Real estate contracts </P> </Link1> </MenuOption>
                                }

                            </CompanyDiv>
                            <AccountDiv>
                               <br/> <H3> Account </H3> <br/>
                               
                                <UserProfile filteredText = {inputText} />
                                <MenuOption> <Link1 to=""> <MenuImg src="../media/icons/privacy.png"/> Privacy </Link1> </MenuOption>
                                <MenuOption> <Link1 to=""> <MenuImg src="../media/icons/settings.png"/> Settings </Link1> </MenuOption>
                               
                               <Logout/>
                            </AccountDiv>
                            </Router>
                        </DropdownBox>
                    }
                </div>
            </WrapperDropdown>
        );
};