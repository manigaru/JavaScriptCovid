import { connect } from 'react-redux';
import { useEffect } from 'react';

function UserAvailability(props) {
    useEffect(() => {
        props.userResults({
            pincode: props.user.Pincode,
            age: props.user.age,
            vaccine: props.user.PreferredVaccine
        })
    })
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
        user: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userResults: (data) => dispatch(userResults(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAvailability);