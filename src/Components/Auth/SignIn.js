import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../Store/Actions/AuthActions'

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const empty = Object.keys(this.state).map((key, index) => {
            return this.state[key] === ""
        });
        const unique = Array.from(new Set(empty))

        if(!unique[0] && !unique[1]){
            // create project
            this.props.signIn(this.state);
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
        const { authError } = this.props;
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="formTitle gray-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field send-form">
                        <button className="btn pink lignten-1 z-depth-0">Login</button>
                        <div className="error red-text center">
                            {authError ? <p>{authError}</p> : ""}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
