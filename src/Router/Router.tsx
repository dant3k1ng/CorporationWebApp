import { Route, Switch } from 'react-router-dom';

import MainPage from '../components/MainPage/MainPage';
import WIPpage from '../components/sides/WIP/WIPpage';
import Publications from '../components/sides/Publications/Publications';
import People from '../components/sides/People/People';
import Administration from '../components/sides/Administration/Administration';


const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path="/sides//WIP" component = {WIPpage} />
            <Route exact path="/sides/Publications" component = {Publications} />
            <Route exact path="/sides/People" component = {People} />
            <Route exact path="/sides/Administration" component = {Administration} />
        </Switch>
    </main>
)

export default Router;
