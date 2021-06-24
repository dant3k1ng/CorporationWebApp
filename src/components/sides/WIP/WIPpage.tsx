import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

import MainLayout from '../../../Layout/MainLayout';

const Content = styled.div` 
    margin-top:50px;
    width: 100%;
    height: 100vh;
    font-size: 24px;
    color: ${Colors.grey};
    text-align: center;
    background-color: ${Colors.bgGrey};
`;

function WIPpage() {
    return (
        <MainLayout>
            <Content>
                Work in progress. Please be patient.
            </Content>
        </MainLayout>
    )
}

export default WIPpage;