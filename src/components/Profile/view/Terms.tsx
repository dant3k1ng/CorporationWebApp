import { useSelector } from "react-redux";
import styled from "styled-components";

import { Attachment } from "../../../entities/userData";
import { IState } from "../../../reducers";
import { Colors } from "../../../styledHelpers/Colors";

const Tag = styled.div``;
const Title = styled.p`
    color: ${Colors.grey};
    padding-top:15px;
    padding-left: 35px;
`;
const TagBox = styled.div``;
const DataBox = styled.div`
    width: 500px;
    height: 200px;
    background-color: ${Colors.darkGray};
`;
const Text = styled.span``;


function Terms() {

    const userData = useSelector((state: IState) => state.userData);

    const items: JSX.Element[] = [];
    const terms: Attachment = (userData?.terms !== null && userData?.terms !== undefined ? userData.terms : {})
    for (let key in terms) {
        const file = terms[key];
        const fileName = file !== null ? file.name : "";
        const isImage = file !== null && file.type.split('/')[0] === 'image';
        const fileUrl = isImage ? URL.createObjectURL(file) : "";

        items.push(
            <Tag key={key}>
                {isImage && fileUrl !== "" ? <img src={fileUrl} alt="photo"/> : null}
                <DataBox>
                    <Text>{fileName}</Text>
                </DataBox>
            </Tag>
        );
    }

    return (
        <TagBox>
            <Title>Terms and conditions</Title>
            {items}
        </TagBox>
    );
}

export default Terms;