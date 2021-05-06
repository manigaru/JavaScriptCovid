import Navbar from './NavBar';

export default function Layout(props) {
    return (
        <div>
            <Navbar/>
            <div className="container mt-5 pt-5">
                {props.children}
            </div>
        </div>
    )
}
