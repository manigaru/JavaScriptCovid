import {Form, Button, Col, InputGroup} from 'react-bootstrap';
import { useState } from 'react';

export default function SignUp() {

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
                        maxlength="6"
                        type="text"
                        placeholder="Pincode"
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
                        Preffered vaccine
                    </Form.Label>

                    <Form.Check
                        type="radio"
                        label="Any"
                        name="vaccine"
                        id="any"
                        value="any"
                        checked
                    />
                    <Form.Check
                        type="radio"
                        label="Covishield"
                        name="vaccine"
                        value="covishield"
                        id="covishield"
                    />
                    <Form.Check
                        type="radio"
                        label="Covaxin"
                        name="vaccine"
                        value="covaxin"
                        id="covaxin"
                    />
                    </Form.Group>
                </fieldset>

                <Button type="submit">Register</Button>
            </Form>
        </div>
    )
}
