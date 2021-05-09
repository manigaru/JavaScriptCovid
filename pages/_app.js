import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';
import Layout from '../components/Layout';
import { authLoaded, loadUser } from '../store/actions/authAction';
import { Spinner } from 'react-bootstrap';

class MyApp extends App {

    componentDidMount() {
        if(localStorage.getItem('token')) {
            store.dispatch(loadUser(localStorage.getItem('token')));
            store.dispatch(authLoaded());
        }
    }
    render() {
        const {Component, pageProps} = this.props;
        return (
            <Provider store = {store}>
                <Layout>
                    <Component {...pageProps}></Component>
                </Layout>
            </Provider>
        )
    }
}

const makeStore = ()=> store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);