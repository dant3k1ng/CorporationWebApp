import { Route, Switch } from 'react-router-dom';

import MainPage from '../components/MainPage/MainPage';
import Publications from '../components/Publications/Publications';
import People from '../components/People/People';
import Administration from '../components/Administration/Administration';
import UserProfile from '../components/Profile/UserProfile';
import WorkplacePage from '../components/Workspaces/Workspace';
import EntitiesPage from '../components/EntitiesPage/Entities';
import WIP from '../components/WIPpage/WIPpage';


const Router = () => (
    
    <div>
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path="/publications" component = {Publications} />
            <Route exact path="/people" component = {People} />
            <Route exact path="/administration" component = {Administration} />
            <Route exact path="/profile" component = {UserProfile} />
            <Route exact path="/workplace/:id" component = {WorkplacePage} />
            <Route exact path="/entities" component = {EntitiesPage} />
            <Route exact path="/wip" component = {WIP} />
        </Switch>
    </div>
)

export default Router;