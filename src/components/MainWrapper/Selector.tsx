import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const SelectBox = styled.div`
    width: 100px;
    float: right;
    margin-top: 35px;
    font-size: 20px;
`;

const Select = styled.select`
  border: 1px solid ${Colors.bgGrey};
  outline: 1px solid ${Colors.bgGrey};
  background-color: ${Colors.bgGrey};
  margin-left: 10px;
  font-size: 15px;
  text-align: center;
  color: ${Colors.deepBlue};
  font-weight: 600;
`;

const Option = styled.option`
  border: 1px solid ${Colors.bgGrey};
  outline: 1px solid ${Colors.bgGrey};
  background-color: ${Colors.bgGrey};
`;


interface IProps {
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

export enum Items {
    All = 'all',
    My = 'my'
}

const Selector = (props: IProps) => {
    return (
        <SelectBox>
            <Select>
                <Option value={0} hidden disabled> Followed </Option>
                <Option value={Items.All}> All </Option>
                <Option value={Items.My}> My </Option>
            </Select>
        </SelectBox>
    );
}

export default Selector;