import {Navbar, Nav} from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavBar() {
    const router = useRouter();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="w-100 fixed-top d-flex">
                <Link href="/">
                    <a>
                        Covid19 Vaccine Notifier 
                    </a>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="ml-auto">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link active={router.pathname == "/checkAvailability" ? true : false}>
                                <Link href="/checkAvailability"> 
                                    Check Availability 
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link href="/signin">
                                    Sign In 
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link href="/signup">
                                    Sign Up 
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <style jsx>{`
            `}</style>
        </div>
    )
}
