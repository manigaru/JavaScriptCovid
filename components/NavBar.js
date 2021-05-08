import {Navbar, Nav} from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavBar() {
    const router = useRouter();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="w-100 fixed-top d-flex">
                <Link href="/">
                    <a className="navbar-brand">
                        Covid19 Vaccine Notifier 
                    </a>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="ml-auto">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Link href="/checkAvailability"> 
                                <a className={"nav-link " +(router.pathname == "/checkAvailability" ? "active" : "")}>
                                    Check Availability 
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/signin">
                                <a className={"nav-link " +(router.pathname == "/signin" ? "active" : "")}>
                                    Sign In
                                </a> 
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/signup">
                                <a className={"nav-link " +(router.pathname == "/signup" ? "active" : "")}>
                                    Sign Up
                                </a> 
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <style jsx>{`
            `}</style>
        </div>
    )
}
