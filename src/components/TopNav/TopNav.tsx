import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';
import { ExpendedMenu } from './ExpendedMenu';


const InnerWrapper = styled.div`
    width: 100%;
    height: 70px;
    background: ${Colors.white};
`;

const LogoWrapper = styled.div`
    width: 10%; 
    margin-bottom: 10px;
    margin-top: 5px;
    margin-left: 10px;
`;

const LogoImg = styled.img`
    float: left;
    max-width: 50px;
`;

const ImgDiv = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${Colors.lightgrey};
    border-radius: 50%;
    float: left;
    text-align: center;
    line-height: 70px;
    margin-left: 12px;
`;

const Notification1 = styled.div`
    width: 30px;
    height: 20px;
    background-color: ${Colors.deepBlue};
    color: ${Colors.white};
    border-radius: 30px;
    line-height: 17px;
    font-size: 10px;
    position: absolute;
    top: 2px;
    right: 37px;
`;

const Notification2 = styled.div`
    width: 30px;
    height: 20px;
    background-color: ${Colors.deepBlue};
    color: ${Colors.white};
    border-radius: 30px;
    line-height: 20px;
    font-size: 10px;
    position: absolute;
    top: 2px;
    right: 105px;
`;

const ImgDiv2 = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    float: left;
    text-align: center;
    line-height: 70px;
`;

const CustomImg = styled.img`
    width: 30px;
`;

const InputWrapper = styled.div`
    width: 40%;
    max-height: 65px;
    float: left;
    border: 1px solid ${Colors.lightgrey};
    border-radius: 5px;
    text-align: center;
    align-items: center;
    margin-left: 200px;
`;

const CustomInput = styled.input`
    border: none;
    width: 90%;
    height: 30px;
    text-align: center;
    font-size: 18px;
    padding-top: 10px;
`;

const IconsWrapper = styled.div`
    width: 12%;
    float: right;
    position: absolute;
    right: 0px;
`;

export const TopNav: FC = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <LogoWrapper>
                    <LogoImg src="media/logo.png" alt="logo" />
                </LogoWrapper>
                <ExpendedMenu />
                <InputWrapper>
                    <CustomInput type="text" placeholder="Search Legalcluster" />
                    <CustomImg src="media/icons/search.png" alt="search icon" />
                </InputWrapper>
                <IconsWrapper>
                    <ImgDiv2>
                        <CustomImg src="media/icons/house.png" alt="house icon"/>
                    </ImgDiv2>
                    <ImgDiv>
                        <CustomImg src="media/icons/comments.png" alt="comments icon"/>
                        <Notification1>
                            3
                        </Notification1>
                    </ImgDiv>
                    <ImgDiv>
                        <CustomImg src="media/icons/bell.png" alt="bell icon"/>
                        <Notification2>
                            3
                        </Notification2>
                    </ImgDiv>
                </IconsWrapper>
            </InnerWrapper>
        </Wrapper>
    )
};