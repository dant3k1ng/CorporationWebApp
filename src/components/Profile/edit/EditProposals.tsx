import { DataGrid, GridColDef, GridEditCellPropsParams, GridRowsProp } from '@material-ui/data-grid';
import styled from 'styled-components';

const ProposalsDiv = styled.div`
img{
        width: 30px;
    }
`;
const Title = styled.p``;


interface IProps {
    items: GridRowsProp,
    onChange: (items: GridRowsProp) => void
}

const proposalsColumns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 150, editable: false },
    { field: 'entity', headerName: 'Entity', width: 150, editable: false },
    { field: 'location', headerName: 'Location', width: 150, editable: false },
    { field: 'expertise', headerName: 'expertise', width: 150, editable: false },
    { field: 'date', headerName: 'date', width: 150, editable: false, type: 'date'},
    { field: 'firm', headerName: 'firm', width: 150, editable: false },
];

function EditProposals(props: IProps) {

    for(let i in proposalsColumns) {
        proposalsColumns[i].editable = true;
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
        <ProposalsDiv>
            <Title> Proposals </Title>
            <div style={{ minHeight: 214, width: '100%' }}>
                <DataGrid rows={props.items} columns={proposalsColumns} hideFooter onEditCellChangeCommitted={(params) => handleChange(params)} />
            </div>
        </ProposalsDiv>
    )
}

export default EditProposals;