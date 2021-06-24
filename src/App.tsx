import styled from "styled-components";
import { compose, createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import AppReducers from "./reducers";
import Div from './Data';
import Router from './Router/Router';


const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`;

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(AppReducers, composeEnhancers());

function App() {
        
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Wrapper>
                    <Div />
                    <Router />
                </Wrapper>
            </BrowserRouter>
        </Provider>
    )

}

export default App;