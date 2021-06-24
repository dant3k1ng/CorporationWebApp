import styled from 'styled-components';
import Selector, { Items } from "../MainWrapper/Selector";

import { LatestPublications } from '../MainWrapper/LatestPublications';
import Workplace from '../MainWrapper/Workspace';
import ResumeDiv  from '../MainWrapper/Resume';
import Search from '../MainWrapper/Search';
import { Colors } from '../../styledHelpers/Colors';
import { useState } from 'react';
import MainLayout from '../../Layout/MainLayout';

const Content = styled.div`
`;

const WorkHeader = styled.div`
    position: relative;
    top: -220px;
    left: 400px;
    width: 1320px;
    float: left;
    margin-top: 30px;
`;

const WorkTitle = styled.div`
    width: 600px;
    height: 21px;
    padding-top: 30px;
    font-size: 20px;
    color: ${Colors.grey};
    font-weight: bold;
    float: left;
`;

function MainPage() {

    const [inputText, setInputText] = useState("");
    const [selectValue, setSelectValue] = useState(Items.All);

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let val = Object.values(Items).includes(e.target.value as Items) ? e.target.value as Items : Items.All;
        setSelectValue(val);
    }

    return(
        <MainLayout>
            <Content>
            <LatestPublications/>
                <Workplace />
                <WorkHeader>
                    <WorkTitle> Resume Your work </WorkTitle>
                    <Selector onChange = {selectChangeHandler}/>
                    <Search inputChangeHandler={inputChangeHandler} placeholder="Filter by title..." />
                </WorkHeader>
                <ResumeDiv filteredText={inputText} filteredType={selectValue} />
            </Content>
        </MainLayout>
    )

}

export default MainPage;