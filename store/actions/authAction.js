import axios from 'axios'

//load user
export const registerUser = (data) => async dispatch => {
    try {

        data.age = parseInt(data.age) // Had to. Couldnt find a better solution

        let config = {
            method: 'POST',
            url: 'http://vaccine-notifier-api.agarwal.work/api/register',
            data: data,
        }

        let user = await (await axios(config)).data;
        await dispatch({
            type: 'SIGNUP_SUCCESS',
            result: user
        })

    } catch (error) {
        await dispatch({
            type: 'SIGNUP_ERROR',
            error: error
        })
    }
}

export const loginUser = (data) => async dispatch => {
    try {

        let config = {
            method: 'POST',
            url: 'http://vaccine-notifier-api.agarwal.work/api/login',
            data: data,
        }

        let user = await (await axios(config)).data;

        if (user.token) {
            axios.defaults.headers.common['Authorization'] = user.token
        } else {
            throw new Error("Token not found")
        }

        await dispatch({
            type: 'LOGIN_SUCCESS',
            result: user
        })

    } catch (error) {
        await dispatch({
            type: 'LOGIN_ERROR',
            error: error
        })
    }
}