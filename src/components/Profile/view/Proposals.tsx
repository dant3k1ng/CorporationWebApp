import styled from "styled-components";
import { useSelector } from "react-redux";
import { DataGrid, GridColDef } from '@material-ui/data-grid';

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

const ProposalsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function Proposals() {

    const proposalsColumns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150, editable: false },
        { field: 'entity', headerName: 'Entity', width: 150, editable: false },
        { field: 'location', headerName: 'Location', width: 150, editable: false },
        { field: 'expertise', headerName: 'expertise', width: 150, editable: false },
        { field: 'date', headerName: 'date', width: 150, editable: false, type: 'date'},
        { field: 'firm', headerName: 'firm', width: 150, editable: false },
    ];


    for(let i in proposalsColumns){
        proposalsColumns[i].editable = false;
    }

    const rows = useSelector((state: IState) => state.userData?.proposals);
    if (rows === undefined)
        return null;

    return (
        <ProposalsWrapper>
            <Title>Proposals</Title>
            <div style={{ minHeight: 214, width: '100%' }}>
                <DataGrid rows={rows} columns={proposalsColumns} hideFooter />
            </div>
        </ProposalsWrapper>
    );
}

export default Proposals;