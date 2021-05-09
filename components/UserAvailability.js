import { connect } from 'react-redux';
import { useEffect } from 'react';

import SlotDetails from './SlotDetails';
import { userResults } from '../store/actions/availabilityAction';

function UserAvailability(props) {
    useEffect(() => {
        if(props.user) {
          console.log("storing user results");
          props.userResults({
              pincode: props.user.Pincode,
              age: props.user.Age,
              vaccine: props.user.PreferredVaccine
          })
        }
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
        user: state.auth.user,
        slots: state.availability.userResult
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        userResults: (data) => dispatch(userResults(data))
    }
  }
  
  function areEqual(prevProps, nextProps) {
    console.log(prevProps, nextProps);
    if(prevProps.user != null) {
      if((prevProps.user.Pincode == nextProps.user.Pincode) && (prevProps.user.Age == nextProps.user.Age) && (prevProps.user.PreferredVaccine == nextProps.user.PreferredVaccine) && (prevProps.slots != undefined && nextProps.slots != undefined && prevProps.slots.length == nextProps.slots.length)) {
        console.log("same");
        return true;
      } else {
        console.log("not same");
        return false;
      }
    } else {
      if(prevProps.user == nextProps.user) {
        console.log("same");
        return true;
      } else {
        console.log("not same");
        false;
      }
    }
    
  }
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(UserAvailability, areEqual));
