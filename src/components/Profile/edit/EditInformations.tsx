import styled from 'styled-components';

import { Information } from '../../../entities/userData';
import { Colors } from '../../../styledHelpers/Colors';

const InformationsDiv = styled.div`
img{
        width: 30px;
    }
`;

const FeeBox = styled.div``;

const Title = styled.p`
    color: ${Colors.darkGray};
`;

const FeeInput = styled.input``;

const FeeInputCheckbox = styled.input``;

interface IProps {
    informations: Information,
    onChange: (informations: Information) => void
}

function EditInformations(props: IProps) {

    const onHourlyFeeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({
            hourlyFee: event.target.value,
            hourlyFeeNegociated: event.target.checked
        });
    }

    const onHourlyFeeNegociatedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let current = props.informations;
        current.hourlyFeeNegociated = event.target.checked;
        props.onChange(current);
    }

    return (
        <InformationsDiv>
            <FeeBox>
                <Title> Panel informations </Title>
                <FeeInput value={props.informations?.hourlyFee} onChange={(e) => onHourlyFeeChange(e)} />
                <label htmlFor="negociated"> Negociated </label>
                <FeeInputCheckbox type="checkbox" id='negociated' defaultChecked={props.informations?.hourlyFeeNegociated === true} onChange={(e) => onHourlyFeeNegociatedChange(e)} />
            </FeeBox>
        </InformationsDiv>
    )
}

export default EditInformations;