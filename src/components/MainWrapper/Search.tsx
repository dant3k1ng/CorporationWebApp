import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const InputBox = styled.div`
    float: right;
    width: 200px;
    margin-top: 30px;
`;

const Input = styled.input`
    border: 1px solid ${Colors.lightgrey};
    border-radius: 4px;
    width: 199px;
    height: 30px;
    text-indent: 5px;
    color: ${Colors.grey};
`;

const SearchIcon = styled.img`
    position: relative;
    top: -26px;
    right: -175px;
    &hover{
        cursor: pointer;
    }
`;  


interface IProps {
    inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> | undefined;
    placeholder?: string;
}



const Search = (props: IProps) => {
    return (
        <InputBox>
            <Input onChange={props.inputChangeHandler} type='text' placeholder={props?.placeholder}/>
            <SearchIcon src='media/icons/search.png'/>
            
        </InputBox>
    )
}

export default Search;