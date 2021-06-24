import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

import MainLayout from '../../../Layout/MainLayout';

const Content = styled.div`
    width: 100%;
    height: 100vh;
    font-size: 50px;
    color: ${Colors.grey};
    text-align: center;
    background-color: ${Colors.bgGrey};
`;

const H1 = styled.h1`
    font-size: 24px;
    color: ${Colors.grey}
`;

function Administration() {
    return (
        <MainLayout>
            <Content>
                <H1> Administration </H1>

                Work in progress. Please be patient
            </Content>
        </MainLayout>
    )
}

export default Administration;