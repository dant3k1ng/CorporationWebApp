import styled from 'styled-components';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useSelector } from "react-redux";

import { IWorkplace } from '../../entities/Workplace';
import { IState } from '../../reducers';
import WorkplaceCard from './WorkplaceCard';
import { Colors } from '../../styledHelpers/Colors';

const Workspace = styled.div`
    position: relative;
    top: -480px;
    left: 380px;
    width: 1340px;
    height: 300px;
`;

const H2 = styled.h2`
    position: absolute;
    top: 525px;
    font-size: 20px;
    color: ${Colors.grey};
    font-weight: bold;
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