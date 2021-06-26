import { DataGrid, GridEditCellPropsParams, GridRowsProp } from '@material-ui/data-grid';
import { GridColDef } from "@material-ui/data-grid";
import styled from 'styled-components';

const ReviewDiv = styled.div`
img{
        width: 30px;
    }
`;
const Title = styled.p``;

interface IProps {
    items: GridRowsProp,
    onChange: (items: GridRowsProp) => void
}

function EditReview(props: IProps) {

    const reviewsColumns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150, editable: false },
        { field: 'entity', headerName: 'Entity', width: 150, editable: false },
        { field: 'location', headerName: 'Location', width: 150, editable: false },
        { field: 'expertise', headerName: 'expertise', width: 150, editable: false },
        { field: 'date', headerName: 'date', width: 150, editable: false, type: 'date'},
    ];

    for(let i in reviewsColumns) {
        reviewsColumns[i].editable = true;
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
        <ReviewDiv>
            <Title> Internal reviews </Title>
            <div style={{ minHeight: 220, width: '100%' }}>
                <DataGrid rows={props.items} columns={reviewsColumns} hideFooter onEditCellChangeCommitted={(params) => handleChange(params)} />
            </div>
        </ReviewDiv>
    )
}

export default EditReview;