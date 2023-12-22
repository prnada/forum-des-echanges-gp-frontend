import './static/css/style.css';
import './static/css/css2.css';
import Footer from "./Footer";
import Header from "./Header";
import SideBar from './SideBar';
const Register = () => {
    return (
        <>
            <img class="wave" src="img/wave.svg" />
            <div class="container">
                <div class="img">
                    <img src="img/login-mobile.svg" />
                </div>
                <div class="login-container">
                    <form action="index.html">
                        <h2>Register</h2>
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
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h5>E-mail</h5>
                                <input class="input" type="email" />
                            </div>
                        </div>
                        <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-key"></i>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input class="input" type="password" />
                            </div>
                        </div>
                        <div class="input-div two">
                            <div class="i">
                                <i class="fas fa-key"></i>
                            </div>
                            <div>
                                <h5>Confirm password</h5>
                                <input class="input" type="password" />
                            </div>
                        </div>
                        <div class="terms">
                            <input type="checkbox" />
                            <a id="action-modal">terms of use.</a>
                        </div>
                        <div class="btn-container">
                            <a href="sucess.html" class="btn-action">Register</a>
                        </div>
                        <div class="account">
                            <p>You have an account ?</p>
                            <a href="index.html">Enter</a>
                        </div>
                        <div id="modal-terms" class="modal">/
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Register;