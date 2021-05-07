import { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { loginUser } from '../store/actions/authAction';

function SignIn(props) {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    })

    const onChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.loginUser(formState);
    }

    return (
        <div className="d-flex justify-content-center">
            <Form onSubmit={handleSubmit} className="col-xs-12 col-md-8 col-lg-6">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formState.email}
                        onChange={onChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formState.password}
                        onChange={onChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        token: state.auth.result
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: (data) => dispatch(loginUser(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);