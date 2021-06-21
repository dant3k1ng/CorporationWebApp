import React from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

import { Colors } from '../../styledHelpers/Colors';
import { IComment } from '../../entities/Comment';
import { IPhoto } from '../../entities/Photo';
import { IUser } from '../../entities/User';
import { getComments } from '../../api/Comments';
import { getUsers } from '../../api/User';
import { getPhotos} from '../../api/Photo';
import { filter, filterByUser } from '../../helpers/Filter';
import { Items } from './Selector';
import Work from './Work';

const ResumeWork = styled.div`
    float: left;
    width: 70%;
    margin-bottom: 30px;
`;

const ItemDiv = styled.div``;

const Pagination = styled(ReactPaginate)``;

const PaginationBox = styled.div`
    .pagination{
        display: flex;
        justify-content: center;
        color: ${Colors.deepBlue};
    }

    .pagination ul{
        display: inline-block;
    }

    .pagination li {
        display: inline-block;
        text-align: center;
        padding: 0px 10px 0px 10px;
    }

    .pagination li.active {
        color: ${Colors.black};
    }

    a:hover{
        cursor: pointer;
    }
`;

interface IProps{
    filteredText: string;
    filteredType: Items;
    loggedUserId?: number|null
}

interface IState {
    comment: IComment[] | [];
    photo: IPhoto[] | [];
    user: IUser[] | [];
    perPage: number;
    offset: number;
}

export default class ResumeDiv extends React.Component<IProps, IState> {
    
    constructor(props: IProps) {
        super(props);

        this.state = {
            comment: [],
            photo: [],
            user: [],
            perPage: 10,
            offset: 0
        };
    }

    async componentDidMount() {
        const [user, photo, comment] = await Promise.all([
            getUsers().then(response => response.json()).then(data => data),
            getPhotos().then(response => response.json()).then(data => data),
            getComments().then(response => response.json()).then(data => data),
        ]);

        this.setState({
            user: user,
            photo: photo,
            comment: comment,
        });
    }
    
    render() {
        const items: JSX.Element[] = [];
        let filteredItems = filter(this.state.comment, 'name', this.props.filteredText);
        filteredItems = filterByUser(filteredItems, 'postId', this.props.filteredType, this.props.loggedUserId);

        const itemPerPage = this.state.perPage;
        const offset = this.state.offset;
        const total = filteredItems.length;
        const pageCount = Math.ceil(total / itemPerPage);

        let handleClick = (data: { selected: number }) => {
            let selected = data.selected;
            let offsetToSet = Math.ceil(selected * itemPerPage);
            this.setState({ offset: offsetToSet});
        }

        const itemsToTake = filteredItems.slice(offset, itemPerPage + offset);
        itemsToTake.forEach((comment: IComment) => {
            items.push(<Work key={comment.id} comment={comment} photo={this.getPhoto(comment.postId)} user={this.getUser(comment.postId)} />);
        });
        
        return (
            <ResumeWork>
                <ItemDiv>
                    {items}
                </ItemDiv>
                <PaginationBox>
                    <Pagination
                        previousLabel={'PREVIOUS'}
                        nextLabel={'NEXT'}
                        breakLabel={'...'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handleClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    
                    />
                </PaginationBox>
            </ResumeWork>
        )
    }

    getUser(userId: number) {
        const user = this.state.user;

        for(let i = 0; i < user.length; i++){
            if(user[i].id === userId)
                return user[i]; 
        }

        return null;
    }

    getPhoto(userId: number) {
        const photo = this.state.photo;

        for(let i = 0; i < photo.length; i++){
            if(photo[i].id === userId)
                return photo[i]; 
        }


        return null;
    }

};