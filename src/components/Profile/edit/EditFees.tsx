import { DataGrid, GridEditCellPropsParams, GridRowsProp } from '@material-ui/data-grid';
import { GridColDef } from "@material-ui/data-grid";
import styled from 'styled-components';

const FeesDiv = styled.div`
img{
        width: 30px;
    }
`;
const Title = styled.p``;

interface IProps {
    items: GridRowsProp,
    onChange: (items: GridRowsProp) => void
}

function EditFees(props: IProps) {

    const feesColumns: GridColDef[] = [
        { field: 'year', headerName: 'Year', width: 150, editable: false },
        { field: 'cost_center', headerName: 'Cost center', width: 150, editable: false },
        { field: 'total_amount', headerName: 'Location', width: 150, editable: false },
        { field: 'law_firm', headerName: 'expertise', width: 150, editable: false },
    ];

    for(let i in feesColumns) {
        feesColumns[i].editable = true;
    }

    const handleChange = (params: GridEditCellPropsParams) => {
        const items = [ ...props.items ];
        const idToUpdate = params.id;
        const newValue = params.props.value;
        const field = params.field;

        for(let key in items) {
            let attr = items[key];

            if(idToUpdate === attr.id)
                attr[field] = newValue;
        }
        props.onChange(items);
    }

    return (
        <FeesDiv>
            <Title> Internal reviews </Title>
            <div style={{ minHeight: 360, width: '100%' }}>
                <DataGrid rows={props.items} columns={feesColumns} hideFooter onEditCellChangeCommitted={(params) => handleChange(params)} />
            </div>
        </FeesDiv>
    )

}

export default EditFees;