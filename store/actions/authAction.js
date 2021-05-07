import axios from 'axios'

//load user
export const registerUser = (data) => async dispatch => {
    try {

        data.age = parseInt(data.age);

        let config = {
            method: 'POST',
            url: 'http://vaccine-notifier-api.agarwal.work/api/register',
            data: data,
        }

        await (await axios(config)).data;
        await dispatch({
            type: 'SIGNUP_SUCCESS',
            userRegistered: true
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

        if (user.Token) {
            axios.defaults.headers.common['Authorization'] = user.Token
        } else {
            throw new Error("Token not found")
        }

        let config1 = {
            method: 'GET',
            url: 'http://vaccine-notifier-api.agarwal.work/api/user',
        }

        let userData = await (await axios(config1)).data;
        console.log(userData);
        await dispatch({
            type: 'SIGNIN_SUCCESS',
            user: userData
        })

    } catch (error) {
        await dispatch({
            type: 'SIGNIN_ERROR',
            error: error
        })
    }
}