import { useState } from "react";
import styled from 'styled-components';

import { Attachment } from "../../../entities/userData";

const TermsDiv = styled.div`


`;
const TermsBox = styled.div`


`;
const FileName = styled.div`


`;
const InputTag = styled.input`

`;
const EditButton = styled.button`
img{
        width: 30px;
    }
`;
const InputBox = styled.div`

`;
const Box = styled.div`

`;

const Title = styled.p``;

const TagBox = styled.div`

`;

interface IProps {
    items: Attachment;
    onChange: (items: Attachment) => void;
}

function EditTerms(props: IProps) {

    const [focusedId, setFocusedId] = useState("");
    const itemsToShow: JSX.Element[] = [];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files !== null && event.target.files.length > 0)
            props.onChange({ ...props.items, [event.target.id]: event.target.files[0] });
    }

    const handleDelete = (id: string) => {
        let state = { ...props.items };

        if(id in state)
            delete state[id];

        props.onChange(state);
    }

    const randomString = () => {
        return String(Date.now());
    }

    const handleAdd = () => {
        let newId = randomString();
        
        props.onChange({ ...props.items, [newId]: null });
        setFocusedId(newId)
    }

    for(let itemKey in props.items) {
        const file = props.items[itemKey];
        const fileName = file !== null ? file.name : "";
        const isImage = file !== null && file.type.split('/')[0] === 'image';
        const fileUrl = isImage ? URL.createObjectURL(file) : "";

        itemsToShow.push(
            <TermsDiv key={itemKey} onClick={() => setFocusedId(itemKey)}>
                {isImage && fileUrl !== "" ? <img src={fileUrl} alt="photo"/> : null}
                <TermsBox>
                    <FileName> {fileName === "" ? "Select file" : fileName} </FileName>
                    <InputTag id={itemKey} type="file" onChange={(e) => handleChange(e)} />
                </TermsBox>
                {
                    focusedId === itemKey ? (
                        <EditButton onClick={() => handleDelete(itemKey)}>
                            <img src='/media/icons/close.png' alt="photo"/>
                        </EditButton>
                    ) : null
                }
            </TermsDiv>
        );
    }

    itemsToShow.push(
        <InputBox key={"key-" + randomString()}>
            <EditButton onClick={() => handleAdd()}>
                add
            </EditButton>
        </InputBox> 
    )

    return (
        <Box>
            <Title> Terms and conditions </Title>
            <TagBox>
                {itemsToShow}
            </TagBox>
        </Box>
    )
}

export default EditTerms;