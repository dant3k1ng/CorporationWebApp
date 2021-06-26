import { useSelector } from "react-redux";
import styled from "styled-components";
import { DataGrid, GridColDef } from '@material-ui/data-grid';

import { IState } from "../../../reducers/index";
import { Colors } from "../../../styledHelpers/Colors";

const FeesWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.p`
    color: ${Colors.grey};
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;
    margin-top: 25px;
    margin-bottom: 15px;
`;

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

    const rows = useSelector((state: IState) => state.userData?.fees);
    if (rows === undefined)
        return null;

    return (
        <FeesWrapper>
            <Title>Amount of fess</Title>
            <div style={{ minHeight: 360, width: '100%' }}>
                <DataGrid rows={rows} columns={feesColumns} hideFooter/>
            </div>
        </FeesWrapper>
    );
}

export default Fees;