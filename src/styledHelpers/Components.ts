import styled from 'styled-components';
import { Colors } from '../styledHelpers/Colors';

export const Wrapper = styled.div`
    background: white;
    height: 70px;
    display: flex;
    justify-content: center;
    padding: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.6);
`;
export const H2 = styled.h2`
    font-size: 20px;
    color: ${Colors.grey};
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const Interspace = styled.div`
    float: left;
    margin-top: 45px;
    width: 8px;
    height: 8px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 5px;
    background-color: #3f3f3f87;
`;