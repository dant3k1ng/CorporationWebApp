import styled from 'styled-components';

import MainLayout from '../../Layout/MainLayout';
import { Colors } from '../../styledHelpers/Colors';
import Selector, { Items } from '../../components/MainWrapper/Selector';
import Search from '../MainWrapper/Search';

const EntitiesDiv = styled.div`
    width: 1400px;
    min-height: 90vh;
    background-color: ${Colors.white};
    margin-left: 400px;
    margin-top: 40px;
`;

const Options = styled.div`
    width: 100%;;
`;

const Title = styled.div`
    color: ${Colors.darkGray};
    font-size: 22px;
    padding-top: 30px;
    margin-left: 15px;
    float: left;
    font-weight: bold;
`;

const Button = styled.button`
    border: none;
    outline: none;
    background-color: inherit;
    float: left;
    margin-top: 33px;
    margin-left: 10px;

    &:hover {
        cursor: pointer;
    }
`;

const LayoutOptions = styled.div`
    float: right;
    margin-right: 70px;
    margin-top: 15px;
    width: 120px;
    height: 50px;
    background-color: #d6d7f5;
    padding-top: 3px;
    border-radius: 5px;
    text-align: center;

    img{
        float: left;
        width: 35px;
        margin-left: 10px;
        margin-top: 3px;
    }
`;

const Text = styled.p`
    padding-top: 15px;
    font-weight: bold;
`;

const FiltersDiv = styled.div`
    position: relative;
    width: 500px;
    height: 50px;
    top: 75px;
`;

const SelectInput = styled.select`
    border: none;
    outline: 1px solid #d4e2ec;
    background-color: #d4e2ec;
    font-size: 15px;
    text-align: center;
    color: ${Colors.deepBlue};
    font-weight: 600;
    width: 85px;
    padding: 2px 10px 2px 20px;
    margin-left: -120px;
    margin-top: 10px;
`;

const Sort = styled.div`
    position: absolute;
    width: 50px;
    top: 13px;
    left: 120px;
    color: ${Colors.grey};
    font-size: 14px;
    border-left: 1px solid ${Colors.grey};
    padding-left: 10px;

    img{
        width: 20px;
        float: left;
    }
    &:hover{
        cursor: pointer;
    }
`;

const SortTetx = styled.p`
    float: left;
    margin-top: 3px;
`;

const Filters = styled.div`
    position: absolute;
    width: 60px;
    top: 13px;
    left: 200px;
    color: ${Colors.grey};
    font-size: 14px;
    border-right: 1px solid ${Colors.grey};
    padding-right: 10px;

    img{
        width: 20px;
        float: left;
    }
    &:hover{
        cursor: pointer;
    }
`;

const FiltersTetx = styled.p`
    float: left;
    margin-top: 3px;
`;

const InputDiv = styled.div`
    z-index: 200;
    position: relative;
    right: -170px;
`;

const Fullscreen = styled.div`
    position: absolute;
    width: 20px;
    top: 13px;
    left: 280px;
    color: ${Colors.grey};
    font-size: 14px;
    border-right: 1px solid ${Colors.grey};
    padding-right: 10px;

    img{
        width: 20px;
        float: left;
    }
    &:hover{
        cursor: pointer;
    }
`;

const Share = styled.div`
    position: absolute;
    width: 100px;
    top: 13px;
    left: 320px;
    color: ${Colors.grey};
    font-size: 14px;

    img{
        width: 20px;
        margin-right: 5px;
        float: left;
    }
    &:hover{
        cursor: pointer;
    }
`;

const ShareTetx = styled.p`
    float: left;
    margin-top: 3px;
`;

const Content = styled.div`
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
`;

const ItemBox = styled.div`
    width: calc(100%/4.2);
    height: 150px;
    box-shadow: 0px 3px 8px 0px #969595be;
    border-radius:3px;
    float: left;
    margin: 5px;
`;

const ItemPhoto = styled.div`
    background-image: url('/media/logo.png');
    background-size: 85%;
    background-position: center;
    background-repeat: no-repeat;
    width: 35%;
    height: 80%;
    margin-top: 5%;
    border-right: 1px solid ${Colors.lightgrey};
    float: left;
`;

const ItemContent = styled.div`
    float: left;
    height: 100%;
    width:60%;
    padding: 10px 5px 10px 5px;
`;

const ItemTitle = styled.p`
    color: ${Colors.deepBlue};
    font-weight: bold;
`;

const ItemText = styled.span`
    color: ${Colors.grey};
`;

function EntitiesPage() {

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let val = Object.values(Items).includes(e.target.value as Items) ? e.target.value as Items : Items.All;
        setSelectedValue(val);
    }

    return (
        <MainLayout>
            <EntitiesDiv>
                <Options>
                    <Title> Entities </Title>
                    <Button>
                        <img src='/media/icons/cog.png' />
                    </Button>
                    <LayoutOptions>
                        <img src='/media/icons/mosaic.png' /> <Text> Mosaic </Text>
                    </LayoutOptions> 
                    <FiltersDiv>
                        <SelectInput>
                            <option value="all"> All </option>
                            <option value="my"> My </option>
                        </SelectInput>
                        <Sort> <img src='/media/icons/sort.png' /> <SortTetx> Sort </SortTetx> </Sort>
                        <Filters> <img src='/media/icons/filters.png' /> <FiltersTetx> Filters </FiltersTetx> </Filters>
                        <Fullscreen> <img src='/media/icons/fullscreen.png' /> </Fullscreen>
                        <Share> <img src='/media/icons/share.png' /> <ShareTetx> Share </ShareTetx> </Share>
                    </FiltersDiv>
                    <InputDiv>
                        <Selector onChange={selectChangeHandler}/>
                        <Search inputChangeHandler={inputChangeHandler} placeholder="Filter by title..."/>
                    </InputDiv>
                </Options>
                <Content>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> ABC genetic company </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> Subsid Corp Ltd </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> World company SAS </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> Subsid Corp Ltd </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> World company SAS </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> Subsid Corp Ltd </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> World company SAS </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> Subsid Corp Ltd </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> World company SAS </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> Subsid Corp Ltd </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> World company SAS </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> Subsid Corp Ltd </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> World company SAS </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> Subsid Corp Ltd </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> World company SAS </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>
                    <ItemBox>
                        <ItemPhoto/>
                        <ItemContent>
                            <ItemTitle> Subsid Corp Ltd </ItemTitle> <br/><br/><br/>
                            <ItemText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </ItemText>
                        </ItemContent>
                    </ItemBox>

                </Content>
            </EntitiesDiv>
        </MainLayout>
    )
}

export default EntitiesPage;

function setInputText(text: string) {
    throw new Error('Function not implemented.');
}
function setSelectedValue(val: any) {
    throw new Error('Function not implemented.');
}

