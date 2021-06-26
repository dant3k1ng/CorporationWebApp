import styled from "styled-components";
import { IWorkplace } from "../../entities/Workplace";
import { Colors } from "../../styledHelpers/Colors";


const HeaderDiv = styled.div`
box-shadow: 0px 5px 10px -3px #c9c7c7bc;
`;

const Header = styled.div`
background-image: url('/media/workplace-bg.jpg');
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 100%;
height: 200px;
`;

const HeaderBottom = styled.div`
width: 100%;
height: 100px;
background-color: ${Colors.white};
margin-top: 100px;
`;

const DescriptionIcon = styled.img`
    width: 90px;
    height: 90px;
    float: left;
    margin-top: -70px;
    margin-left: 20px;
`;

const Settings = styled.div`
width: 50px;
height: 20px;
position: relative;
text-align: center;
left: 1350px;
top: -90px;
img{
    width: 23px;
}
&:hover{
    cursor: pointer;
}
`;

const Title = styled.p`
    color: ${Colors.black};
    font-size: 24px;
    float: left;
    margin-top: -80px;
    margin-left: 40px;
`;

const Description = styled.span`
    color: ${Colors.darkGray};
    float: left;
    margin-top: -40px;
    margin-left: 140px;
`;

const InfoDiv = styled.div`
width: 100%;
height: 400px;
`;

const Text = styled.div`
margin-top: 20px;
padding-left: 20px;
color: ${Colors.darkGray};
font-size: 22px;
`;

const Content = styled.div`

`;

const ItemsDiv = styled.div`
width: 100%;
height: 200px;
`;

const ItemBox = styled.div`
display: flex;
flex-direction: column;
background-color: ${Colors.white};
border-radius: 4px;
padding: 14px 10px;
margin-left: 15px;
margin-top: 10px;
float: left;
width: 422px;
box-shadow: 0px 0px 5px 0px #a3a3a3bd;
`;

const ItemTitle = styled.span`
font-size: 1.2rem;
padding: 14px 0;
`;

const ItemDescription = styled.span`
    font-size: 0.92rem;
    color: ${Colors.deepBlue};
`;

const ItemIcon = styled.img`
    width: 50px;

& {
color: ${Colors.deepBlue};
}
`;

interface IProps {
    workplace: IWorkplace;
}

function WorkplaceContent(props: IProps) {

    return (
        <>
            <HeaderDiv>
                    <Header>
                    </Header>
                    <HeaderBottom>
                        <Settings> <img src='/media/icons/cog.png' /> </Settings>
                        <DescriptionIcon src={props.workplace?.image} alt="photo"/>
                        <Title> {props.workplace?.title} </Title> <br/> <br/>
                        <Description> {props.workplace?.description} </Description>
                    </HeaderBottom>
                </HeaderDiv>
                <ItemsDiv>
                    <InfoDiv>
                        <Text> Start working on corporate matters </Text>
                        <Content>
                        <ItemBox>
                            <ItemIcon src={props.workplace?.image } alt="icon"/>
                                <ItemTitle>Explore your <b>entities</b></ItemTitle>
                                <ItemDescription>Take a few minutes to look at the most important elements and specificities of your entities.</ItemDescription>
                        </ItemBox>
                        <ItemBox>
                            <ItemIcon src={props.workplace?.image} alt="icon"/>
                                <ItemTitle>Structure the <b>owership</b></ItemTitle>
                                <ItemDescription>Get a clear view of the owership by looking at the relations between individuals and entities.</ItemDescription>
                        </ItemBox>
                        <ItemBox>
                            <ItemIcon src={props.workplace?.image} alt="icon"/>
                                <ItemTitle>Define the <b>calendar</b></ItemTitle>
                                <ItemDescription>Prepare future events by creating detailed plans around the life of your entity.</ItemDescription>
                        </ItemBox>
                        </Content>
                    </InfoDiv>
                </ItemsDiv>
            </>
        )
}

export default WorkplaceContent;