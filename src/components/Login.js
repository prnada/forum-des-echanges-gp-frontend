import './static/css/style.css';
import './static/css/css2.css';
import Footer from "./Footer";
import Header from "./Header";
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <img class="wave" src="img/wave.svg" />
            <div class="container">
                <div class="img">
                    <img src="img/authentication.svg" />
                </div>
                <div class="login-container">
                    <form action="login.html">
                        <h2>Enter</h2>
                        <p>Welcome back !</p>
                        <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Username</h5>
                                <input class="input" type="text" />
                            </div>
                        </div>
                        <div class="input-div two">
                            <div class="i">
                                <i class="fas fa-key"></i>
                            </div>
                            <div>
                                <h5>Passowrd</h5>
                                <input class="input" type="password" />
                            </div>
                        </div>
                        <input type="submit" class="btn" value="Enter" />
                        <div class="account">
                            <p>Don't have an account ?</p>
                            <Link to="/register" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;