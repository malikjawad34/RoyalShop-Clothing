import { userActionType } from './action.type';

export const setCurrentUser = user => ({
    type: userActionType.setCurrentuser,
    payload: user
});

//export default setCurrentUser;