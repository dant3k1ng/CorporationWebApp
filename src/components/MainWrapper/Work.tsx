import styled from "styled-components";

import { IComment } from "../../entities/Comment";
import { IPhoto } from "../../entities/Photo";
import { IUser } from "../../entities/User";
import { Colors } from '../../styledHelpers/Colors';
import { Interspace } from '../../styledHelpers/Components';
import { Items } from "./Selector";


const Card = styled.div`
    width: 1300px;
    height: 120px;
    background-color: ${Colors.white};
    padding: 20px 15px 20px 15px;
    margin-bottom: 25px;
    border-radius: 5px;
    box-shadow: 0px 3px 5px 0px #40404058;
`;

const Title = styled.p`
    color: ${Colors.deepBlue};
    font-size: 20px;
    padding-bottom: 20px;
`;

const Body = styled.span`
    text-align: justify;
    padding-top: 10px;
`;

const Img = styled.img`
    width: 25px;
    float: left;
    margin-top: -5px;
    margin-right: 7px;
`;

const CorpDiv = styled.div`
    float : left;
    margin-top: 30px;
    padding-top: 10px;
    color: ${Colors.grey};
`;

const EntityDiv = styled.div`
    float : left;
    margin-top: 30px;
    padding-top: 10px;
    color: ${Colors.grey};
`;

const Icon = styled.img`
    width: 15px;
    float: left;
    margin-right: 7px;
`;

const LastUpdate = styled.div`
    margin-left: 5px;
    margin-top: 40px;
    float: left;
    color: ${Colors.grey};
`;

interface IProps{
    comment: IComment;
    photo: IPhoto | null;
    user: IUser | null;

    
}

export default function Work(props: IProps) {
    return (
        <Card>
            <Title> {props.comment.name} </Title>
            <Body> {props.comment.body} </Body> <br/>
            <CorpDiv>
                <Img src={props.photo?.thumbnailUrl}/> Subsid. corp.
            </CorpDiv>
            <Interspace> . </Interspace>
            <EntityDiv> 
                <Icon src="media/icons/entities2.png"/> Corporate
            </EntityDiv>
            <Interspace> . </Interspace>
            <LastUpdate>Updated 3 days ago by {props.user?.name} </LastUpdate>
        </Card>
    )
}