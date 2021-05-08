import axios from 'axios'

//sign up user
export const registerUser = (data) => async dispatch => {
    try {

        data.age = parseInt(data.age);

        let config = {
            method: 'POST',
            url: 'http://vaccine-notifier-api.agarwal.work/api/auth/register',
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

//sign in user and load user
export const loginUser = (data) => async dispatch => {
    try {
        //sign in user
        let config = {
            method: 'POST',
            url: 'http://vaccine-notifier-api.agarwal.work/api/auth/login',
            data: data,
        }

        let user = await (await axios(config)).data;

        if (user.Token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${user.Token}`
        } else {
            throw new Error("Token not found")
        }
        //store jwt token in local storage
        localStorage.setItem('token', user.Token);

        //load user using token
        let userConfig = {
            method: 'GET',
            url: 'http://vaccine-notifier-api.agarwal.work/api/auth/user',
        }

        let userData = await (await axios(userConfig)).data;
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

//load user
export const loadUser = (data) => async dispatch => {
    try {
        //load user using token
        let userConfig = {
            method: 'GET',
            url: 'http://vaccine-notifier-api.agarwal.work/api/auth/user',
            headers: {
                'Authorization': `Bearer ${data}`
            }
        }

        let userData = await (await axios(userConfig)).data;
        await dispatch({
            type: 'SIGNIN_SUCCESS',
            user: userData
        })
    } catch(error) {
        console.log(error);
        await dispatch({
            type: 'SIGNIN_ERROR',
            error: error
        })
    }
}