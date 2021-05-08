import Head from 'next/head';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import UserAvailability from '../components/UserAvailability';
import { userResults } from '../store/actions/availabilityAction';
import SignUp from '../components/SignUp';

function Home(props) {
  useEffect(() => {
    if(props.user) {
      props.userResults({
          pincode: props.user.Pincode,
          age: props.user.Age,
          vaccine: props.user.PreferredVaccine
      })
    }
  })
  let loadScreen = props.user ? <UserAvailability slots={props.slots} user={props.user}/> : <SignUp/>
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
  if(prevProps.user == nextProps.user && prevProps.slots == nextProps.slots) {
    return true;
  } else {
    return false;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home, areEqual));
