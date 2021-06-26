import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getWorkplace } from "../../api/Workplace";
import { IWorkplace } from "../../entities/Workplace";
import { GetLoggedUserId } from "../../helpers/User";
import { Items } from "../MainWrapper/Selector";
import { Colors } from "../../styledHelpers/Colors";
import MainLayout from "../../Layout/MainLayout";
import ResumeDiv from '../MainWrapper/Resume';
import Selector from '../MainWrapper/Selector';
import Search from '../MainWrapper/Search';
import WorkplaceContent from "./WorkplaceContent";

const WorkplaceDiv = styled.div`
    width: 1400px;
    height: 280vh;
    background-color: ${Colors.white};
    margin-left: 400px;
    margin-top: 40px;
    margin-bottom: 40px;
    padding-bottom: 40px;
    border-radius: 5px;
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

const ResumeWork = styled.div`
    position: relative;
    left: -350px;
    top: -1000px;
`;

interface IRouteParams {
    id: string;
}

function WorkplacePage() {

    const loggedUserId = GetLoggedUserId();
    const params = useParams<IRouteParams>();
    const [inputText, setInputText] = useState("");
    const [workplace, setWorplace] = useState<IWorkplace | null>(null);
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


    return workplace !== null ?
       
        <MainLayout>
            <WorkplaceDiv>
                <WorkplaceContent workplace={workplace}/>
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
                <ResumeWork>
                    <ResumeDiv  filteredText={inputText} filteredType={selectValue} loggedUserId={loggedUserId} />
                </ResumeWork>
            </WorkplaceDiv>
        </MainLayout> : <> </>
}

export default WorkplacePage;