import { Layout } from '../helpers/Layout';

interface ILayoutReducerAction {
    type: string;
    layout: Layout;
}

const setLayout = (state = Layout.default, action: ILayoutReducerAction) => {
    switch (action.type) {
      case 'setLayout': return action.layout;
      default: return state;
    }
  }
  
  export default setLayout;