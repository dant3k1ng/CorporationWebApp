import { GridRowsProp } from "@material-ui/data-grid";

export interface ItemKeyValue {
    [key: string]: string;
}

export interface Attachment {
    [key: string]: File | null;
}

export interface Information
{
    hourlyFee?: string;
    hourlyFeeNegociated?: boolean;
}

//

export interface UserData {
    expertise: ItemKeyValue;
    specialties: ItemKeyValue;
    admission: ItemKeyValue;
    counties: ItemKeyValue;
    //
    informations: Information;
    terms: Attachment;
    services: ItemKeyValue;
    //
    proposals: GridRowsProp;
    internalReviews: GridRowsProp;
    fees: GridRowsProp;
}