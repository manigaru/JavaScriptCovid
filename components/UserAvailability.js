import { connect } from 'react-redux';
import { useEffect } from 'react';

import SlotDetails from './SlotDetails';
import { userResults } from '../store/actions/availabilityAction';

function UserAvailability(props) {
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

function mapStateToProps(state) {
    return {
        slots: state.availability.userResult,
    }
}

export default connect(mapStateToProps)(UserAvailability);
