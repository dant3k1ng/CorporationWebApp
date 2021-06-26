import { useSelector } from "react-redux"; 
import styled from "styled-components";

import { IState } from "../../../reducers";

const Tag = styled.div``;
const Title = styled.p``;
const TagBox = styled.div``;
const Text = styled.p``;

function Informations() {

    const userDataInformations = useSelector((state: IState) => state.UserData?.informations);

    const hourlyFeeNegociated = userDataInformations?.hourlyFeeNegociated;
    const hourlyFeeText = userDataInformations?.hourlyFee + (hourlyFeeNegociated ? " (Negociated)" : "");

    return (
        <Tag>
            <TagBox>
                <Title>Panel informations</Title>
                <Text>{hourlyFeeText}</Text>
            </TagBox>
        </Tag>
    );
}

export default Informations;