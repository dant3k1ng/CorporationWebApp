import { useSelector } from "react-redux";
import styled from "styled-components";

import { ItemKeyValue } from "../../../entities/userData";
import { IState } from "../../../reducers";

const Title = styled.p``;
const TagBox = styled.div``;
const Text = styled.p``;

function Services() {

    const userData = useSelector((state: IState) => state.UserData);

    const items: JSX.Element[] = [];
    const services: ItemKeyValue = (userData?.services !== null && userData?.services !== undefined ? userData.services : {})
    for (let key in services) {
        let val = services[key];
        items.push(<Text key={key}>{val}</Text>);
    }

    return (
        <TagBox>
            <Title>Services and projects</Title>
            {items}
        </TagBox>
    );
}

export default Services;