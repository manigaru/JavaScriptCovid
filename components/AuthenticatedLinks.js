import LogOut from './LogOut';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Nav } from 'react-bootstrap';

export default function AuthenticatedLinks(props) {
    const router = useRouter();
    return (
        <>
            <Nav.Item>
                <Link href="/userDetails">
                    <a className={"nav-link " +(router.pathname == "/userDetails" ? "active" : "")}>
                        {props.name}
                    </a> 
                </Link>
            </Nav.Item>
            <LogOut/>
        </>
    )
}
