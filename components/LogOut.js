import { connect } from 'react-redux';
import { Nav, Button} from 'react-bootstrap';
import { logOut } from '../store/actions/authAction';

function LogOut(props) {
    const handleClick = () => {
        props.logOut();
    }
    return (
        <Nav.Item className="ml-lg-2">
            <Button onClick={handleClick}>Log Out</Button>
        </Nav.Item>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(LogOut);