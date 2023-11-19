export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT,
});
export const loginUser = (userData) => (dispatch) => {
  const user = {
    email: userData.email, 
  };
  dispatch(loginSuccess(user));
};