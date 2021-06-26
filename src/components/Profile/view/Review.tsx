import styled from "styled-components";
import { DataGrid } from '@material-ui/data-grid';
import { GridColDef } from "@material-ui/data-grid";
import { useSelector } from "react-redux";

import { IState } from "../../../reducers";
import { Colors } from "../../../styledHelpers/Colors";

const Title = styled.p`
    color: ${Colors.grey};
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;
    margin-top: 25px;
    margin-bottom: 15px;
`;

const InternalReviewsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function InternalReviews() {

    const reviewsColumns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150, editable: false },
        { field: 'entity', headerName: 'Entity', width: 150, editable: false },
        { field: 'location', headerName: 'Location', width: 150, editable: false },
        { field: 'expertise', headerName: 'expertise', width: 150, editable: false },
        { field: 'date', headerName: 'date', width: 150, editable: false, type: 'date'},
    ];

    for(let i in reviewsColumns){
        reviewsColumns[i].editable = false;
    }

    const rows = useSelector((state: IState) => state.userData?.internalReviews);
    if (rows === undefined)
        return null;

    return (
        <InternalReviewsWrapper>
            <Title>Internal reviews</Title>
            <div style={{ minHeight: 220, width: '100%' }}>
                <DataGrid rows={rows} columns={reviewsColumns} hideFooter />
            </div>
        </InternalReviewsWrapper>
    );
}

export default InternalReviews;