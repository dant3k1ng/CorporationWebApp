import { UserData } from "../entities/userData";




interface IUserDataReducerAction {
    type: string;
    serData: UserData|null;
  }
  
  const ReduceUserData = (state = null, action: IUserDataReducerAction) => {
    switch (action.type) {
      case 'setUserData': return action.serData;
      default: return state;
    }
  }
  
  export default ReduceUserData;