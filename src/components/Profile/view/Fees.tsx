import { useSelector } from "react-redux";
import styled from "styled-components";
import { DataGrid } from '@material-ui/data-grid';
import { GridColDef } from "@material-ui/data-grid";

import { IState } from "../../../reducers";

const FeesWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.p``;

function Fees() {

    const feesColumns: GridColDef[] = [
        { field: 'year', headerName: 'Year', width: 150, editable: false },
        { field: 'cost_center', headerName: 'Cost center', width: 150, editable: false },
        { field: 'total_amount', headerName: 'Location', width: 150, editable: false },
        { field: 'law_firm', headerName: 'expertise', width: 150, editable: false },
    ];

    for(let i in feesColumns){
        feesColumns[i].editable = false;
    }

    const rows = useSelector((state: IState) => state.UserData?.fees);
    if (rows === undefined)
        return null;

    return (
        <FeesWrapper>
            <Title>Amount of fess</Title>
            <div style={{ minHeight: 360, width: '100%' }}>
                <DataGrid rows={rows} columns={feesColumns} hideFooter />
            </div>
        </FeesWrapper>
    );
}

export default Fees;