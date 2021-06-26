import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { ItemKeyValue } from '../../../entities/userData';
import { Colors } from '../../../styledHelpers/Colors';


const InputBox = styled.div`
img{
        width: 30px;
    }
`;

const TagInput = styled.input` `;

const EditButton = styled.button`
    border: none;
    outline: none;
    background-color: inherit;

    img{
        width: 20px;
    }
`;

const Title = styled.p`
    color: ${Colors.darkGray};
`;

const Container = styled.div`

`;

interface IProps {
    title: string;
    items: ItemKeyValue;
    onChange: (items: ItemKeyValue) => void;
}

function EditMain(props: IProps) {

    const [focusedId, setFocusedId] = useState('');
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

        props.onChange({ ...props.items, [newId]: ''});
        setFocusedId(newId);
    }

    for(let itemKey in props.items) {
        let value = props.items[itemKey];

        itemsToShow.push(
            <InputBox key={itemKey} onClick={() => setFocusedId(itemKey)}>
                <TagInput key={itemKey} value={value} onChange={(e) => handleChange(e)}/>
                {
                    focusedId === itemKey ? (
                        <EditButton onClick={() => handleDelete(itemKey)}>
                            <img src='/media/icons/close.png' alt="photo"/>
                        </EditButton>
                    ) : null
                }
            </InputBox>
        );
    }

    itemsToShow.push(
        <InputBox key={"key-" + randomString()}>
            <EditButton onClick={() =>handleAdd()}>
                <img src='/media/icons/save.png' alt="photo"/>
            </EditButton>
        </InputBox>
    )

    return (
        <div>
            <Title> {props.title} </Title>
            <Container>
                { itemsToShow }
            </Container>
        </div>
    );
}

export default EditMain;