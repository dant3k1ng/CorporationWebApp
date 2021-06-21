import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../reducers';

import { Colors } from '../../styledHelpers/Colors';
import { H2 } from '../../styledHelpers/Components';

const LatestPubs = styled.div`
    float: left;
    width: 71%;
    height: 400px;
    background-color: ${Colors.white};
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    box-shadow: 0px 0px 15px -10px #000000;
`;

const ImagePost = styled.div`
    float: left;
    height: 400px;
    width: 30%;
    background-image: url("media/publications.png");
    background-attachment: auto;
    background-size: cover;
`;

const ImagePostTxt = styled.div`
    background: linear-gradient(0deg, rgb(72, 100, 131) 0%, rgba(72, 100, 131,0.7189250700280112) 22%, rgba(72, 100, 131,0.18671218487394958) 80%, rgba(72, 100, 131,0.0));
    height: 150px;
    font-size: 18px;
    text-align: left;
    color: ${Colors.white};
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 250px;
`;

const Span = styled.span`
    color: ${Colors.darkGray};
    font-size: 14px;
    float : left;
`;

const Span2 = styled.span`
    color: #1f1f1f;
    font-size: 14px;
    float : left;
    margin-left: 10px;
`;

const SpanLight = styled.span`
    color: ${Colors.white};
    font-size: 14px;
    float : left;
`;

const SpanLight2 = styled.span`
    color: ${Colors.white};
    font-size: 14px;
    float : left;
    margin-left: 10px;
`;

const MorePubs = styled.div`
    float: left;
    width: 70%;
    height: 400px;
`;

const Publication = styled.div`
    width: 90%;
    height: 100px;
    font-size: 17px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    text-align: left;
    color: ${Colors.darkGray};
`;

const PublicationPhoto = styled.img`
    height: 100px;
    width: 130px;
    float: left;
    padding-right: 10px;
    filter: grayscale(20%);
    transform: rotateY(180%);
`;

const H3 = styled.h3`
    color: ${Colors.deepBlue};
    font-size: 14px;
    margin-left: 20px;
    margin-top: 10px;
    font-weight: 550;
`;

const Img = styled.img`
    width: 25px;
    height: 25px;
    border-radius:50%;
    margin-top: -5px;
    margin-left: 10px;
    float : left;
`;

export const LatestPublications : FC = () => {

    const user = useSelector((state: IState) => state.user);
    const photo = useSelector((state: IState) => state.photo);
    
    return (
        <LatestPubs>
            <ImagePost>
                <ImagePostTxt>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies, 
                    ante quis placerat interdum, neque urna ornare ipsum, nec venenatis diam velit eget tortor. <br/><br/>
                    <SpanLight> 7 jan. 2021 </SpanLight>
                    <Img src={photo?.thumbnailUrl} alt="photo" />
                    <SpanLight2> {user?.name} </SpanLight2>
                </ImagePostTxt>
            </ImagePost>
            <MorePubs>
                <H2> Latest Publications </H2>
                
                <Publication>
                    <PublicationPhoto src="media/man.jpg"/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies, 
                    ante quis placerat interdum, neque urna ornare ipsum, nec venenatis diam velit eget tortor. <br/><br/>
                    <Span> 7 jan. 2021 </Span>
                    <Img src={photo?.thumbnailUrl} alt="photo" />
                    <Span2> {user?.name} </Span2>
                </Publication>
                <Publication>
                    <PublicationPhoto src="media/man.jpg"/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies, 
                    ante quis placerat interdum, neque urna ornare ipsum, nec venenatis diam velit eget tortor. <br/><br/>
                    <Span> 7 jan. 2021 </Span>
                    <Img src={photo?.thumbnailUrl} alt="photo" />
                    <Span2> {user?.name} </Span2>
                </Publication>
                <Publication>
                    <PublicationPhoto src="media/man.jpg"/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies, 
                    ante quis placerat interdum, neque urna ornare ipsum, nec venenatis diam velit eget tortor. <br/><br/>
                    <Span> 7 jan. 2021 </Span>
                    <Img src={photo?.thumbnailUrl} alt="photo" />
                    <Span2> {user?.name} </Span2>
                </Publication>

                <H3> See more publications </H3>
            </MorePubs>
        </LatestPubs>
    )
};