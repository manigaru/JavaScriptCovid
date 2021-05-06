import { Form, Button, Col, InputGroup } from 'react-bootstrap';
import { useState } from 'react';

export default function SignUp(props) {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        pincode: "",
        age: "",
        preferredVaccine: "ANY"
    })

    const onChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log(formState)
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
                            required
                            type="text"
                            placeholder="Enter Name"
                            value={formState.name}
                            onChange={onChange}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            Please provide a valid name.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="email"
                            required
                            type="email"
                            placeholder="Enter Email"
                            value={formState.email}
                            onChange={onChange}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={formState.password}
                            onChange={onChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            Please enter your password.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={formState.confirmPassword}
                            onChange={onChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            Please enter your password.
                        </Form.Control.Feedback>
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
                            Please enter your age.
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

                <Button type="submit">Register</Button>
            </Form>
        </div>
    )
}
