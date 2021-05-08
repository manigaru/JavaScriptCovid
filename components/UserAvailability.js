import { connect } from 'react-redux';
import { useEffect } from 'react';

import SlotDetails from './SlotDetails';
import { userResults } from '../store/actions/availabilityAction';

function UserAvailability(props) {
    // useEffect(() => {
    //     props.userResults({
    //         pincode: props.user.Pincode,
    //         age: props.user.Age,
    //         vaccine: props.user.PreferredVaccine
    //     })
    // })
    return (
        <div>
            <div>
                <p>Pincode: {props.user.Pincode}</p>
                <p>Age: {props.user.Age}</p>
                <p>Preferred Vaccine: {props.user.PreferredVaccine}</p>
            </div>
            <SlotDetails slots={props.slots} />
        </div>
    )
}

// function mapStateToProps(state) {
//     return {
//         slots: state.availability.userResult,
//         user: state.auth.user
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         userResults: (data) => dispatch(userResults(data))
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(UserAvailability);
export default UserAvailability;