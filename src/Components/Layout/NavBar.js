import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignednInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';


const Navbar = () => {
    return (
        <nav className="nav-wapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo"> Mario Plan </Link>
                <SignInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    console.log(state.firebase.auth.isEmpty)
    return {
    }
}

export default connect(mapStateToProps)(Navbar)