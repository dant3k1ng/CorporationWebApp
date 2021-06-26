import { useSelector } from "react-redux"; 
import styled from "styled-components";

import { IState } from "../../../reducers";
import { Colors } from "../../../styledHelpers/Colors";

const Tag = styled.div``;

const Title = styled.p`
    color: ${Colors.grey};
    font-size: 20px;
    font-weight: bold;
`;

const SubTitle = styled.p`
    color: ${Colors.grey};
    padding-top:15px;
    padding-left: 25px;
`;

const TagBox = styled.div`
    margin-left: 15px;
`;


const Text = styled.p`
    padding-top:10px;
    padding-left: 25px;
`;

function Informations() {

    const userDataInformations = useSelector((state: IState) => state.userData?.informations);

    const hourlyFeeNegociated = userDataInformations?.hourlyFeeNegociated;
    const hourlyFeeText = userDataInformations?.hourlyFee + (hourlyFeeNegociated ? " (Negociated)" : "");

    return (

        <Tag>
            <TagBox>
                <Title>Panel informations</Title>
                <SubTitle> Hourly Fee </SubTitle>
                <Text>{hourlyFeeText}</Text>
            </TagBox>
        </Tag>

    );
}

export default Informations;