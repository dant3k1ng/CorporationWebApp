import styled from "styled-components";
import { useSelector } from "react-redux";

import { ItemKeyValue } from "../../../entities/userData";
import { IState } from "../../../reducers";
import { Colors } from "../../../styledHelpers/Colors";

const Tag = styled.div`
    color: ${Colors.deepBlue};
    background-color: rgb(230, 240, 243);
    padding: 4px 12px;
    border-radius: 4px;
    font-weight: 900;
    margin-right: 4px;
`;
const Title = styled.p`
    color: ${Colors.grey};
    font-weight: bold;
`;
const TagBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5px 0;
    margin-bottom: 4px;
`;

function General() {

    const userData = useSelector((state: IState) => state.UserData);

    const expertiseItems: JSX.Element[] = [];
    const expertises: ItemKeyValue = (userData?.expertise !== null && userData?.expertise !== undefined ? userData.expertise : {})
    
    for(let key in expertises) {
        let val = expertises[key];
        expertiseItems.push(<Tag key={key}>{val}</Tag>);
    }
    

    const specialtieItems: JSX.Element[] = [];
    const specialties: ItemKeyValue = (userData?.specialties !== null && userData?.specialties !== undefined ? userData.specialties : {})
    
    for(let key in specialties) {
        let val = specialties[key];
        specialtieItems.push(<Tag key={key}>{val}</Tag>);
    }
    

    const admissionItems: JSX.Element[] = [];
    const admissions: ItemKeyValue = (userData?.admission !== null && userData?.admission !== undefined ? userData.admission : {})
    
    for(let key in admissions) {
        let val = admissions[key];
        admissionItems.push(<Tag key={key}>{val}</Tag>);
    }
    

    const countieItems: JSX.Element[] = [];
    const counties: ItemKeyValue = (userData?.counties !== null && userData?.counties !== undefined ? userData.counties : {})
    
    for(let key in counties) {
        let val = counties[key];
        countieItems.push(<Tag key={key}>{val}</Tag>);
    }
    
    return (
        <div>
            <Title>Expertise</Title>
            <TagBox>{expertiseItems}</TagBox>
            <Title>Specialties</Title>
            <TagBox>{specialtieItems}</TagBox>
            <Title>Admission to practice law</Title>
            <TagBox>{admissionItems}</TagBox>
            <Title>Counties</Title>
            <TagBox>{countieItems}</TagBox>
        </div>
    );
}

export default General;