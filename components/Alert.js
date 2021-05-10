import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

export default function AlertComponent(props) {
    console.log(props);
    const [show, setShow] = useState(props.show);
    return (
        <>
        <Alert show={show} variant="success" fade={false}>
            <Alert.Heading>User Details updated successfully</Alert.Heading>
            <p>
                The required user details updated successfully
            </p>
            <hr />
            <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
                OK
            </Button>
            </div>
        </Alert>
        </>
    );

}
