import Head from 'next/head';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import UserAvailability from '../components/UserAvailability';
import { userResults } from '../store/actions/availabilityAction';
import SignUp from '../components/SignUp';

function Home(props) {
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
  let loadScreen = props.user ? <UserAvailability user={props.user}/> : <SignUp/>
  return (
    <div className="container">
      <Head>
        <title>Covid19 Vaccine Notifier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {loadScreen}
      </main>
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
  console.log(prevProps.user, nextProps.user);
  if(prevProps.user != null) {
    if((prevProps.user.Pincode == nextProps.user.Pincode) && (prevProps.user.Age == nextProps.user.Age) && (prevProps.user.PreferredVaccine == nextProps.user.PreferredVaccine)) {
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

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home, areEqual));
