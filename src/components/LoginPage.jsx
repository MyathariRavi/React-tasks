import React, { Component } from 'react'
import './login-styles.css'
// import './login-pstyles.css'
class LoginPage extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="card-block">
                    <div className="title">
                        <h2>Login Page</h2>

                    </div>
                    <hr />
                    <form action="" method="post">
                        <div className="input-pegs">
                            <label htmlFor="unORmail">Username or Email</label>
                            <input type="text" name="" id="unORmail" placeholder="Please enter your Username or Email here..." required />
                        </div>
                        <div className="input-pegs">
                            <label htmlFor="">Password</label>
                            <input type="password" name="" id="" placeholder="Please your Password here..." required />
                            <p className="fp-text">Forgot your password..
                             <span><a href="http://">Reset password</a></span>
                             </p>

                        </div>
                        <button className="btn" type="submit"> LogIn </button>

                        <h6 className="su-text">Don't have Account yet.. <span><a href="http://">Click Here to Sign Up</a></span></h6>
                    </form>
                </div>


            </div>
        );
    }
}

export default LoginPage;