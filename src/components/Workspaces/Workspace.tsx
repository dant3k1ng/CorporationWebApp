import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getWorkplace } from "../../api/Workplace";
import { IWorkplace } from "../../entities/Workplace";
import { GetLoggedUserId } from "../../helpers/User";
import { Items } from "../MainWrapper/Selector";
import { Colors } from "../../styledHelpers/Colors";
import MainLayout from "../../Layout/MainLayout";
import ResumeDiv from '../MainWrapper/Work';
import Selector from '../MainWrapper/Selector';
import Search from '../MainWrapper/Search';

const WorkplaceDiv = styled.div`
    width: 1400px;
    min-height: 80vh;
    background-color: ${Colors.white};
    margin-left: 400px;
    margin-top: 40px;
    padding-bottom: 40px;
    border-radius: 5px;
`;

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
    width: 80px;
    float: left;
`;

const Title = styled.p`
    color: ${Colors.black};
    font-size: 24px;
    float: left;
`;

const Description = styled.span`
    color: ${Colors.darkGray};
    float: left;
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
    box-shadow: 0px 0px 10px 0px #868686be;
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
  font-size: 2.1rem;

  & {
    color: ${Colors.deepBlue};
  }
`;

const Options = styled.div`
    width: 100%;
    height: 200px;
`;

const OptionsTop = styled.div`
    width: 98%;
    height: 80px;
    color: ${Colors.darkGray};
`;

const OptionsTopTxt = styled.div`
    font-size: 20px;
    margin-top: 35px;
    padding-left: 20px;
    width: 800px;
    float: left;
`;

const OptionsBottom = styled.div`
    width: 100%;
    height: 80px;
    img{
        width: 20px;
        margin-right: 10px;
    }
`;

const SearchInput = styled(Search)`
    float: left;
    margin-right: 20px;
`;

const SelectInput = styled(Selector)`
    float: left;
`;

const All = styled.button`
    border: 0.1px solid #6b31d6;
    border-radius: 3px;
    background-color: #bfb0db;
    color: #6b31d6;
    font-size: 19px;
    padding: 8px 20px 8px 20px;
    display: flex;
    float: left;
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
    margin-left: 20px;
    &:hover {
        cursor: pointer;
    }
`;

const SAS = styled.button`
    border: 0.1px solid #409e11;
    border-radius: 3px;
    background-color: #bee7aa;
    color: #409e11;
    font-size: inherit;
    height: max-content;
    padding: 8px 20px 8px 20px;
    display: flex;
    float: left;
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
    &:hover {
        cursor: pointer;
    }
`;

const SARL = styled.button`
    border: 0.1px solid #2bacb8;
    border-radius: 3px;
    background-color: #c5e8eb;
    color: #2bacb8;
    font-size: inherit;
    height: max-content;
    padding: 8px 20px 8px 20px;
    display: flex;
    float: left;
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
    &:hover {
        cursor: pointer;
    }
`;

const SecBuissnes = styled.button`
    border: 0.1px solid #b4a34d;
    border-radius: 3px;
    background-color: #e7ddad;
    color: #b4a34d;
    font-size: inherit;
    height: max-content;
    padding: 8px 20px 8px 20px;
    display: flex;
    float: left;
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
    &:hover {
        cursor: pointer;
    }
`;

const Com = styled.button`
    border: 0.1px solid #676469;
    border-radius: 3px;
    background-color: #b7b3bb;
    color: #676469;
    font-size: inherit;
    height: max-content;
    padding: 8px 20px 8px 20px;
    display: flex;
    float: left;
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
    &:hover {
        cursor: pointer;
    }
`;

const POA = styled.button`
    border: 0.1px solid #7c7979;
    border-radius: 3px;
    background-color: #cecece;
    color: #7c7979;
    font-size: inherit;
    height: max-content;
    padding: 8px 20px 8px 20px;
    display: flex;
    float: left;
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
    &:hover {
        cursor: pointer;
    }
`;

const Survey = styled.button`
    border: 0.1px solid #9c9797;
    border-radius: 3px;
    background-color: #e7e7e7;
    color: #9c9797;
    font-size: inherit;
    height: max-content;
    padding: 8px 20px 8px 20px;
    display: flex;
    float: left;
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
    &:hover {
        cursor: pointer;
    }
`;

const More = styled.button`
    border: 0.1px solid #b4b0b0;
    border-radius: 3px;
    background-color: #f5f5f5;
    color: #000000;
    font-size: 18px;
    height: max-content;
    padding: 8px 20px 8px 20px;
    display: flex;
    float: left;
    flex-direction: row;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;

interface IRouteParams {
    id: string;
}

interface IProps {
    workplace: IWorkplace;
}

function WorkplacePage(props: IProps) {

    const loggedUserId = GetLoggedUserId();
    const params = useParams<IRouteParams>();
    const [inputText, setInputText] = useState("");
    const [workspace, setWorplace] = useState<IWorkplace | null>(null);
    const [selectValue, setSelectedValue] = useState(Items.All);

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let val = Object.values(Items).includes(e.target.value as Items) ? e.target.value as Items : Items.All;
        setSelectedValue(val);
    }

    useEffect(() => {
        getWorkplace(Number(params.id))
            .then(data => setWorplace(data))
    }, [params.id])

    return (
        <MainLayout>
            <WorkplaceDiv>
                <HeaderDiv>
                    <Header>
                    </Header>
                    <HeaderBottom>
                        <DescriptionIcon src={props.workplace?.image} alt="photo"/>
                        <Title> {props.workplace?.title} title </Title> <br/> <br/>
                        <Description> {props.workplace?.description} description </Description>
                    </HeaderBottom>
                </HeaderDiv>
                <ItemsDiv>
                    <InfoDiv>
                        <Text> Start working on corporate matters </Text>
                        <Content>
                        <ItemBox>
                            <ItemIcon src={props.workplace?.image} alt="icon"/>
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
                <Options>
                    <OptionsTop>
                        <OptionsTopTxt> Latest updates </OptionsTopTxt>
                        <SelectInput onChange={selectChangeHandler}/>
                        <SearchInput inputChangeHandler={inputChangeHandler} placeholder="Filter by title..."/>
                    </OptionsTop>
                    <OptionsBottom>
                        <All> All </All>
                        <SAS> <img src='/media/icons/entities.svg' alt="entities"/> SAS </SAS>
                        <SARL> <img src='/media/icons/entities.svg' alt="entities"/> SARL </SARL>
                        <SecBuissnes> <img src='/media/icons/entities.svg' alt="entities"/> Secondary buisness </SecBuissnes>
                        <Com> <img src='/media/icons/chat.png' alt="chat"/> Communities </Com>
                        <POA> <img src='/media/icons/contract.png' alt="contract"/> POA </POA>
                        <Survey> <img src='/media/icons/survey.png' alt="survey"/> Survey </Survey>
                        <More> ... </More>
                    </OptionsBottom>
                </Options>
                
            </WorkplaceDiv>
        </MainLayout>
    )
}

export default WorkplacePage;

/* <ResumeDiv filteredText={inputText} filteredType={selectValue} /> */