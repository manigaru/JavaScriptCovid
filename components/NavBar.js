import {Navbar, Nav} from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="w-100 fixed-top d-flex">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="ml-auto">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link href="/checkAvailability" active={router.pathname == "/checkAvailability" ? true : false} > Check Availability </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/signin" active={router.pathname == "/signin" ? true : false}> Sign In </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/signup" active={router.pathname == "/signup" ? true : false}> Sign Up </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
