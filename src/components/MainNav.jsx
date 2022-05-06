import React, { Component } from 'react'
import './main-nav-styles.css'
import { Link } from 'react-router-dom'
class MainNav extends Component {
    state = {}
    render() {
        return (

            <div className="topnav" id="myTopnav">
                <Link to='/Home' className="active">Home</Link>
                <Link to='/news'>News</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Log In</Link>
                <Link to='/hg' className="icon" onclick="myFunction()">
                    <i className="fa fa-bars"></i>
                </Link>
            </div>
        );
    }
}

export default MainNav;