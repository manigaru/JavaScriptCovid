import axios from 'axios'

//load user
export const registerUser = (data) => async dispatch => {
    try {
        let config = {
            method: 'POST',
            url: 'http://vaccine-notifier-api.agarwal.work/register',
            data: data
        }

        let user = await (await axios(config)).data.user;
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