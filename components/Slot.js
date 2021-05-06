import {Container, Row, Col} from 'react-bootstrap';

function Session(props) {
    return (
        <div className="session flex-shrink-0 p-2 mx-2">
            <div>{props.date}</div>
            <div>Capacity: {props.available_capacity}</div>
            <div>{props.vaccine}</div>

            <style jsx>{`
                .session {
                    background-color: var(--light);
                    border-radius: 0.5rem;
                }
            `}</style>
        </div>
    )
}
export default function Slot(props) {

    return (
        <Row className="d-flex flex-row col-xs-12 py-3 justify-content-between">
            <Col xs={6} md={4} className="center-location d-flex flex-column justify-content-center align-items-center"  style={{border: "2px solid var(--primary)", borderRadius: "0.5rem"}}>
                <Row className="col-xs-10 w-100 p-1" style={{fontWeight:"500"}}>{props.name}</Row>
                <Row className="col-xs-10 w-100 p-1">{props.address}</Row>
            </Col>
            <Col className="overflow-auto d-flex flex-row" xs={5} md={7} >
                {
                    props.sessions && props.sessions.map((s, key) => {
                        return (
                            <Session key={key} {...s}/>
                        )
                    })
                }
            </Col>
        </Row>
    )
}

