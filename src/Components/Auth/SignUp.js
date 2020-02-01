import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../Store/Actions/AuthActions'
class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const empty = Object.keys(this.state).map((key, index) => {
            return this.state[key] === ""
        });
        const unique = Array.from(new Set(empty))

        if(!unique[0] && !unique[1]){
            // create project
            console.log(this.state);
            this.props.signUp(this.state);
        } else {
            // has empty inputs
            Object.keys(this.state).map((key, index) => {
                if(this.state[key] === ""){
                    document.getElementById(key).parentElement.classList.add("error")
                }
                return true;
            });
        }
    }
    handleChange = (e) => {
        document.getElementById(e.target.id).parentElement.classList.remove("error");
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        const { auth, authError } = this.props       
        if(auth.uid) return <Redirect to='/'/>
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="formTitle gray-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field send-form">
                        <button className="btn pink lignten-1 z-depth-0">Sign Up</button>
                        <div className="red-text center error">
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
