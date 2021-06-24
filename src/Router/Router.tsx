import { Link, Route, Switch } from 'react-router-dom';

import MainPage from '../components/MainPage/MainPage';
import WIPpage from '../components/WIP/WIPpage';
import Publications from '../components/Publications/Publications';
import People from '../components/People/People';
import Administration from '../components/Administration/Administration';


const Router = () => (
    
    <div>
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path="/sides//WIP" component = {WIPpage} />
            <Route exact path="/sides/Publications" component = {Publications} />
            <Route exact path="/sides/People" component = {People} />
            <Route exact path="/sides/Administration" component = {Administration} />
            <Route exact path="/sides/Administration" component = {Administration} />
        </Switch>
    </div>
)

export default Router;