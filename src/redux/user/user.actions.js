import UserActionsTypes from './user.types';

const setCurrentUser = (user) => ({
  type: UserActionsTypes.SET_CURRENT_USER,
  payload: user,
});

export default setCurrentUser;
