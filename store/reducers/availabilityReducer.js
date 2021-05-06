import checkAvailability from "../../pages/checkAvailability";

const initialState = {}

const availabilityReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHECK_BY_PINCODE':
            return {
                result: action.result
            }
        case 'CHECK_BY_DISTRICT':
            return {
                result: action.result
            }
        case 'CHECK_ERROR':
            return {
                error: action.error
            }
        default:
            return state
    }
}

export default availabilityReducer;