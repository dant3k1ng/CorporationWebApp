import styled from 'styled-components';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useSelector } from "react-redux";

import { H2 } from '../../styledHelpers/Components';
import { IWorkplace } from '../../entities/Workplace';
import { IState } from '../../reducers';
import WorkplaceCard from './WorkplaceCard';

const Workspace = styled.div`
    width: 1320px;
    height: 300px;
    float: left;
    margin-top: 30px;
`;

function Workplace() {

    let items = useSelector((state: IState) => state.workplace);
    if (items == null) {
        items = [];
    }

    const itemsCount = items.length;

    if (itemsCount === 0) {
        return null;
    }

    return(
        <Workspace>
                <H2> Workspace </H2>
                
                <Carousel
                    plugins={[
                        {
                        resolve: slidesToShowPlugin,
                        options: {
                        numberOfSlides: 4.2
                        }
                        },
                    ]}
                    >

                    {
                        items.map((item: IWorkplace) => (
                            <WorkplaceCard workplace={item} />
                        ))
                    }
                </Carousel>
            
        </Workspace>
    )
}

export default Workplace;

/*
const CardLogo = styled.img`
    width: 40px;
    height: auto;
    border-radius: 3px;
    background-color: ${ Colors.white };
    text-align: center;
    padding: 18px;
    position: relative;
    top: -35px;
    left: 10px;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
`;

const CardContent = styled.div`
    width: 300px;
    height: 175px;
    background-color: ${ Colors.white };
    margin-top: 100px;
`;

const H3 = styled.h3`
    margin-left: 100px;
    margin-top: -70px;
    font-weight: bold;
`;

const Card = styled.div`
    position: relative;
    width: 300px;
    height: 225px;
    border-radius: 3px;
    background-color: ${ Colors.white };
    background-image: url('media/contract.jpg');
    background-repeat: no-repeat;
    background-attachment: auto;
    background-size: 100%;
    background-position: top;
`;

const SuplierCard = styled.div`
    width: 300px;
    height: 225px;
    border-radius: 3px;
    margin-left: 30px;
    background-color: ${ Colors.white };
    background-image: url('media/contract.jpg');
    background-repeat: no-repeat;
    background-attachment: auto;
    background-size: 100%;
    background-position: top;
`;

const CorporateCard = styled.div`
    width: 300px;
    height: 225px;
    border-radius: 3px;
    margin-left: 35px;
    background-color: ${ Colors.white };
    background-image: url('media/office.jpg');
    background-repeat: no-repeat;
    background-attachment: auto;
    background-size: 100%;
    background-position: top;
`;

const GroupCard = styled.div`
    width: 300px;
    height: 225px;
    border-radius: 3px;
    margin-left: 35px;
    background-color: ${ Colors.white };
    background-image: url('media/books.jpg');
    background-repeat: no-repeat;
    background-attachment: auto;
    background-size: 100%;
    background-position: top;
`;

const CardData = styled.div`

`;

const Img = styled.img `
    width: 30px;
    height: 30px;
`;



<SuplierCard> 
                        <CardContent>
                            <CardLogo src="media/icons/contract.png"/>
                            <H3> Suplier Contract </H3>
                            <CardData>
                                    
                                </CardData>
                        </CardContent>
                    </SuplierCard>
                    
                    <CorporateCard>
                        <CardContent>
                            <CardLogo src="media/icons/entities2.png"/>
                            <H3> Corporate </H3>
                            <CardData>
                                    
                            </CardData>
                        </CardContent>
                    </CorporateCard>
                    
                    <GroupCard>  
                        <CardContent>
                            <CardLogo src="media/icons/book.png"/>
                            <H3> Group names </H3>
                        </CardContent>
                    </GroupCard>

*/
