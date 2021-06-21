import styled from "styled-components";
import { compose, createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { TopNav } from '../src/components/TopNav/TopNav';
import { Colors } from './styledHelpers/Colors';
import { LatestPublications } from '../src/components/MainWrapper/LatestPublications';
import LeftMenu from '../src/components/LeftMenu/LeftMenu';
import Workplace from './components/MainWrapper/Workspace';
import AppReducers from "./reducers";
import Div from './Data';
import ResumeDiv  from '../src/components/MainWrapper/Resume';
import React, { useState } from "react";
import Selector, { Items } from "./components/MainWrapper/Selector";
import Search from './components/MainWrapper/Search';



const Content = styled.div`
`;

const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`;

const WorkHeader = styled.div`
    width: 1300px;
    float: left;
    margin-top: 30px;
`;

const WorkTitle = styled.div`
    width: 600px;
    height: 21px;
    padding-top: 48px;
    padding-left: 20px;
    font-size: 20px;
    color: ${Colors.grey};
    font-weight: bold;
    float: left;
`;


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(AppReducers, composeEnhancers());

function App() {
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
            <Provider store={store}>
            <Wrapper>
                <Div/>
                <TopNav/>
                <LeftMenu/>
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
            </Wrapper>
            </Provider>
        );

};


export default App;

/*

let items = useSelector((state: IState) => state.workplace);
    
    if (items == null) {
        items = [];
    }

    const itemsCount = items.length;

    if (itemsCount === 0) {
        return null;
    }

*/