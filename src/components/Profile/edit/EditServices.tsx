import { useState } from "react";
import styled from "styled-components";

import { ItemKeyValue } from "../../../entities/userData";

const ServicesDiv = styled.div`
img{
        width: 30px;
    }
`;

const ServicesBox = styled.input``;

const EditButton = styled.button`
img{
        width: 30px;
    }
`;

const InputBox = styled.div`
img{
        width: 30px;
    }
`;

const Box = styled.div`
img{
        width: 30px;
    }
`;

const Title = styled.p``;

const TagBox = styled.div`
img{
        width: 30px;
    }
`;

interface IProps {
    items: ItemKeyValue,
    onChange: (items: ItemKeyValue) => void
}

function EditServices(props: IProps) {
    const [focusedId, setFocusedId] = useState("");
    const itemsToShow: JSX.Element[] = [];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({ ...props.items, [event.target.id]: event.target.value });
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

        props.onChange({ ...props.items, [newId]: "" });
        setFocusedId(newId);
    }

    for(let itemKey in props.items) {
        let value = props.items[itemKey];

        itemsToShow.push(
            <ServicesDiv key={itemKey} onClick={() => setFocusedId(itemKey)}>
                <ServicesBox id={itemKey} value={value} onChange={(e) => handleChange(e)} />
                {
                    focusedId === itemKey ? (
                        <EditButton onClick={() => handleDelete(itemKey)}>
                            <img src='/media/icons/close.png' alt='photo'/>
                        </EditButton>
                    ) : null
                }
            </ServicesDiv>
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
            <Title> Services and projects </Title>
            <TagBox>
                {itemsToShow}
            </TagBox>
        </Box>
    )
}

export default EditServices;