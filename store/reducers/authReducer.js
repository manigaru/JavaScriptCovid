const intialState = {
    user: null,
    userRegistered: false,
    authError: null
};

const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'SIGNIN_ERROR':
            return {
                ...state,
                authError: action.error.message
            }

        case 'SIGNIN_SUCCESS':
            return {
                ...state,
                user: action.user,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            return {
                state,
                authError: null,
                // user: null,
                // userRegistered: false,
            }
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                userRegistered: action.userRegistered,
                authError: null
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.error.message
            }

        default:
            return state

    }
}

export default authReducer;