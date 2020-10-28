import UserActionTypes from './user.types';

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (loginInfo) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: loginInfo
});

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});
export const signInFailure = (errorMessage) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: errorMessage
});
