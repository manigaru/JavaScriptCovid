const intialState = {};

const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: action.error.message
            }

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            return {
                state,
                authError: null
            }
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
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