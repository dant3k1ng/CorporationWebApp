import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { GridRowsProp } from "@material-ui/data-grid";


import { IState } from '../../reducers';
import { setUserData } from '../../reducers/UserDataAction';
import { Colors } from '../../styledHelpers/Colors';
import MainLayout from '../../Layout/MainLayout';
import EditHeader from './edit/EditHeader';
import EditExpertise from './edit/EditExpertise';
import EditInformations from './edit/EditInformations';
import EditServices from './edit/EditServices';
import EditTerms from './edit/EditTerms';
import EditProposals from './edit/EditProposals';
import EditReview from './edit/EditReviews';
import EditFees from './edit/EditFees';
import General from './view/General';
import Informations from './view/Informations';
import Services from './view/Services';
import Terms from './view/Terms';
import Proposals from './view/Proposals';
import Review from './view/Review';
import Fees from './view/Fees';
import { Attachment, Information, ItemKeyValue } from '../../entities/userData';


const ProfileDiv = styled.div`
    min-height: 80vh;
    width: 1400px;
    margin-left: 400px;
    background-color: ${Colors.white};
`;

const GeneralInfo = styled.div`

    img{
        width: 20px;
    }
`;

const SaveButton = styled.button`
    position: relative;
    left: 1325px;
    top: 20px;
    background-color: inherit;
    border: none;
    outline: none;

    &:hover{
        cursor: pointer;
    }
`;

const EditButton = styled.button`
    position: relative;
    left: 1355px;
    top: 20px;
    background-color: inherit;
    border: none;
    outline: none;

    &:hover{
        cursor: pointer;
    }
`;

function UserProfile() {
    const dispatch = useDispatch();
    const userData = useSelector((state: IState) => state.UserData);

    const [editProfileInformationMode, setProfileInformation] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const globalExpertises = useSelector((state: IState) => state.UserData?.expertise)
    const globalAdmission = useSelector((state: IState) => state.UserData?.admission)
    const globalCounties = useSelector((state: IState) => state.UserData?.counties)
    const globalSpecialties = useSelector((state: IState) => state.UserData?.specialties)
    const globalInformations = useSelector((state: IState) => state.UserData?.informations)
    const globalServices = useSelector((state: IState) => state.UserData?.services)
    const globalTerms = useSelector((state: IState) => state.UserData?.terms)
    const globalProposals = useSelector((state: IState) => state.UserData?.proposals)
    const globalInternalReviews = useSelector((state: IState) => state.UserData?.internalReviews)
    const globalFees = useSelector((state: IState) => state.UserData?.fees)

    const [expertises, setExpertises] = useState<ItemKeyValue>({});
    const [specialties, setSpecialties] = useState<ItemKeyValue>({});
    const [admissions, setAdmissions] = useState<ItemKeyValue>({});
    const [counties, setCounties] = useState<ItemKeyValue>({});
    const [informations, setInformations] = useState<Information>({});
    const [services, setServices] = useState<ItemKeyValue>({});
    const [terms, setTerms] = useState<Attachment>({});
    const [proposals, setProposals] = useState<GridRowsProp>([]);
    const [internalReviews, setInternalReviews] = useState<GridRowsProp>([]);
    const [fees, setFees] = useState<GridRowsProp>([]);

    useEffect(() => {
        if (globalExpertises !== null && globalExpertises !== undefined) {
            setExpertises(globalExpertises);
        }
    }, [globalExpertises])

    useEffect(() => {
        if (globalAdmission !== null && globalAdmission !== undefined) {
            setAdmissions(globalAdmission);
        }
    }, [globalAdmission])

    useEffect(() => {
        if (globalCounties !== null && globalCounties !== undefined) {
            setCounties(globalCounties);
        }
    }, [globalCounties])

    useEffect(() => {
        if (globalSpecialties !== null && globalSpecialties !== undefined) {
            setSpecialties(globalSpecialties);
        }
    }, [globalSpecialties])

    useEffect(() => {
        if (globalInformations !== null && globalInformations !== undefined) {
            setInformations(globalInformations);
        }
    }, [globalInformations])

    useEffect(() => {
        if (globalServices !== null && globalServices !== undefined) {
            setServices(globalServices);
        }
    }, [globalServices])

    useEffect(() => {
        if (globalTerms !== null && globalTerms !== undefined) {
            setTerms(globalTerms);
        }
    }, [globalTerms])

    useEffect(() => {
        if (globalProposals !== null && globalProposals !== undefined) {
            setProposals(globalProposals);
        }
    }, [globalProposals])

    useEffect(() => {
        if (globalInternalReviews !== null && globalInternalReviews !== undefined) {
            setInternalReviews(globalInternalReviews);
        }
    }, [globalInternalReviews])

    useEffect(() => {
        if (globalFees !== null && globalFees !== undefined) {
            setFees(globalFees);
        }
    }, [globalFees])

    const saveDataAndClose = () => {
        if(userData !== null) {
            dispatch(setUserData({
                expertise: expertises,
                specialties: specialties,
                admission: admissions,
                counties: counties,
                informations: informations,
                terms: terms,
                services: services,
                proposals: proposals,
                internalReviews: internalReviews,
                fees: fees,
            }));
        }

        setEditMode(false)
    }

    return (
        <MainLayout>
            <ProfileDiv>
                {
                    editProfileInformationMode ? (
                        <EditHeader afterSave={() => setProfileInformation(false)} /> 
                    ) : (
                        <EditHeader afterSave={() => setProfileInformation(true)} /> 
                    )
                }
                {
                <GeneralInfo>
                    {
                        editMode
                            ?(
                                <>
                                    <SaveButton onClick={() => saveDataAndClose()}> <img src='/media/icons/save.png' alt="photo"/> </SaveButton>
                                    <SaveButton onClick={() => setEditMode(false)}> <img src='/media/icons/close.png' alt="photo"/> </SaveButton>
                                </>
                            ): <EditButton onClick={() => setEditMode(true)}> <img src='/media/icons/pencil.png' alt="photo"/>  </EditButton>
                    }
                </GeneralInfo>
                }
                {
                    editMode ? (
                                <>
                                    <>
                                        <EditExpertise title="Expertise" items={expertises} onChange={setExpertises} />
                                        <EditExpertise title="Specialties" items={specialties} onChange={setSpecialties} />
                                        <EditExpertise title="Admission to practice law" items={admissions} onChange={setAdmissions} />
                                        <EditExpertise title="Counties" items={counties} onChange={setCounties} />
                                    </>
                                    <EditInformations informations={informations} onChange={setInformations} />
                                    <EditServices items={services} onChange={setServices} />
                                    <EditTerms items={terms} onChange={setTerms} />
                                    <EditProposals items={proposals} onChange={setProposals} />
                                    <EditReview items={internalReviews} onChange={setInternalReviews} />
                                    <EditFees items={fees} onChange={setFees} />
                                </>
                    ) : (
                        <>
                            <General />
                            <Informations />
                            <Services />
                            <Terms />
                            <Proposals />
                            <Review />
                            <Fees />
                        </>
                    )
                }
            </ProfileDiv>
        </MainLayout>
    );
}

export default UserProfile;