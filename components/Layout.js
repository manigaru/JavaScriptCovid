import Spinner from './Spinner';
import { connect } from 'react-redux';

import Navbar from './NavBar';

 function Layout(props) {
    if(props.initialAuthLoaded) {
        return (
            <div>
                <Navbar/>
                <div className="container mt-5 pt-5">
                    {props.children}
                </div>
            </div>
        )
    } else {
        return (
            <Spinner/>
        )
    }
}

function mapStateToProps(state) {
    return {
        initialAuthLoaded: state.auth.initialAuthLoaded
    }
}
export default connect(mapStateToProps)(Layout);