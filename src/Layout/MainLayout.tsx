import styled from 'styled-components';

import LeftMenu from '../components/LeftMenu/LeftMenu';
import { TopNav } from '../components/TopNav/TopNav';

const MainPageLayout = styled.div`
    width: 100%;
    height: 100%;
`;

export const ContentWrapper = styled.div`
    width: 1200px;
`;

interface IProps {
    children: JSX.Element
} 

const MainLayout = ({children}: IProps) => {
    return (
        <MainPageLayout>
            <TopNav/>
            <LeftMenu/>
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </MainPageLayout>
    )
}

export default MainLayout;