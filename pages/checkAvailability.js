import React, { useState } from 'react';
import { connect } from 'react-redux';
import { pincodeResults } from '../store/actions/availabilityAction';
import SlotDetails from '../components/SlotDetails';

function checkAvailability(props) {
    const [pincode, setPincode] = useState("");
    const [age, setAge] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(pincode, age);
        props.pincodeResults({pincode, age});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Pincode</label>
                <input type = "text" value = {pincode} onChange = {e => setPincode(e.target.value)} required/>
                <label>Age</label>
                <input type = "number" value = {age} onChange = {e => setAge(e.target.value)} required />
                <input type="submit" value="Submit"/>
            </form>
            <SlotDetails slots={props.slots}/>
        </div>
    )
    
}
function mapStateToProps(state) {
    return {
        slots: state.availability.result
    }
}

function mapDispatchToProps (dispatch) {
    return {
        pincodeResults: (pincode) => dispatch(pincodeResults(pincode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(checkAvailability);