import { useSelector } from "react-redux";
import styled from "styled-components";

import { ItemKeyValue } from "../../../entities/userData";
import { IState } from "../../../reducers";
import { Colors } from "../../../styledHelpers/Colors";

const Title = styled.p`
    color: ${Colors.grey};
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;
    margin-top: 25px;
    margin-bottom: 15px;
`;
const TagBox = styled.div``;
const Text = styled.p`
    color: ${Colors.darkGray};
    margin-left: 15px;
    margin-bottom: 20px;
`;

function Services() {

    const userData = useSelector((state: IState) => state.userData);

    const items: JSX.Element[] = [];
    const services: ItemKeyValue = (userData?.services !== null && userData?.services !== undefined ? userData.services : {})
    for (let key in services) {
        let val = services[key];
        items.push(<Text key={key}>{val}</Text>);
    }

    return (
        <>
        <TagBox>
            <Title>Services and projects</Title>
            {items}
        </TagBox>
        <hr/>
        </>
    );
}

export default Services;