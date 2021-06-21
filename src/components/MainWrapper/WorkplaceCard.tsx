import styled from "styled-components";

import { IWorkplace } from "../../entities/Workplace";
import { Colors } from "../../styledHelpers/Colors";

const Card = styled.div`
    position: relative;
    width: 340px;
    height: 250px;
    margin: 0px 30px 0px 30px;
`;

const Img = styled.img`
    width: 300px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const CardLogo = styled.img`
    width: 40px;
    height: auto;
    border-radius: 3px;
    background-color: ${ Colors.white };
    text-align: center;
    padding: 18px;
    position: absolute;
    top: 80px;
    left: 10px;
    box-shadow: 0px 1px 5px 0px #000000bf;
`;

const H3 = styled.h3`
    font-weight: bold;
    position: absolute;
    top: 118px;
    left: 100px;
`;

const CardContent = styled.div`
    width: 300px;
    height: 120px;
    position: absolute;
    margin-top: -90px;
    background-color: ${ Colors.white };
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0px 3px 5px 0px #40404058;
`;

const Type = styled.p`
    float: left;
    font-size: 16px;
    color: ${Colors.grey};
    margin-top: 63px;
    margin-left: 20px;
`;

const TypeIcon = styled.img`
    width: 20px;
    float: left;
    margin-right: 10px;
    margin-top: -3px;
`;

const Interspace = styled.div`
    float: left;
    margin-top: 69px;
    width: 4px;
    height: 4px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 5px;
    background-color: #3f3f3f87;
`;

const UserCount = styled.p`
    float: left;
    font-size: 16px;
    color: ${Colors.grey};
    margin-top: 63px;
    margin-left: 10px;
`;

const UserCountIcon = styled.img`
    width: 20px;
    float: left;
    margin-right: 10px;
`;

const LastUpdate = styled.p`
    color: ${Colors.grey};
    margin-top: 80px;
    margin-left: 10px;
`;

interface IProps {
    workplace: IWorkplace;
}

function WorkplaceCard(props: IProps) {

    return (
        <Card>
            <Img src={props.workplace.backgroundImageUrl} />
            <CardContent>
                <Type>
                    <TypeIcon src={props.workplace.image}/>
                    {props.workplace.type}
                </Type>
                <Interspace> . </Interspace>
                <UserCount>
                    <UserCountIcon src='media/icons/people.png' />
                    {props.workplace.userCount} users
                </UserCount> <br/>
                <LastUpdate>
                    Last updated {props.workplace.lastUpdate}
                </LastUpdate>
            </CardContent>
            <H3> {props.workplace.title} </H3>
            <CardLogo src={props.workplace.image}/>
        </Card>
    )
}

export default WorkplaceCard;