import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    
`;

const InnerWrapper = styled.div`
    width: 1200px;
    background: ${Colors.white}
`;

export const MainWrapper : FC = () => {
    return (
        <Wrapper>
        </Wrapper>
    )
};