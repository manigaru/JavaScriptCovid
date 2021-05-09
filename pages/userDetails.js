import { Form, Button, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function UserDetails(props) {
    const router = useRouter();
    useEffect(() => {
        if(!props.user) {
            router.push('/');
        }
    })
    const [formState, setFormState] = useState({
        name: props.user ? props.user.Name : null,
        email: props.user ? props.user.Email : null,
        pincode: props.user ? props.user.Pincode : null,
        age: props.user ? props.user.Age : null,
        preferredVaccine: props.user ? props.user.PreferredVaccine : null
    })

    const onChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="d-flex justify-content-center mb-5">
            <Form onSubmit={handleSubmit} className="col-xs-12 col-md-8 col-lg-6">
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="name"
                            type="text"
                            value={formState.name}
                            readOnly
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="email"
                            type="email"
                            value={formState.email}
                            readOnly
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="age"
                            type="number"
                            min="1"
                            placeholder="Age"
                            value={formState.age}
                            onChange={onChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            Please enter your age.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Pincode</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="pincode"
                            pattern="[0-9]{6}"
                            maxLength="6"
                            type="text"
                            placeholder="Pincode"
                            value={formState.pincode}
                            onChange={onChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            Please enter your pincode.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <fieldset>
                    <Form.Group>
                        <Form.Label>
                            Preferred vaccine
                        </Form.Label>
                        <Form.Check
                            type="radio"
                            label="Any"
                            name="preferredVaccine"
                            id="any"
                            value="ANY"
                            checked={formState.preferredVaccine == "ANY"}
                            onChange={onChange}
                        />
                        <Form.Check
                            type="radio"
                            label="Covishield"
                            name="preferredVaccine"
                            value="COVISHIELD"
                            id="covishield"
                            checked={formState.preferredVaccine == "COVISHIELD"}
                            onChange={onChange}
                        />
                        <Form.Check
                            type="radio"
                            label="Covaxin"
                            name="preferredVaccine"
                            value="COVAXIN"
                            id="covaxin"
                            checked={formState.preferredVaccine == "COVAXIN"}
                            onChange={onChange}
                        />
                    </Form.Group>
                </fieldset>

                <Button type="submit">Save Changes</Button>
                <Button className="ml-3" variant="outline-primary">Cancel</Button>
            </Form>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}
export default connect(mapStateToProps)(UserDetails);