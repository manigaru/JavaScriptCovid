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