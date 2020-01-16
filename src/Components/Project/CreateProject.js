import React, { Component } from 'react'
import {connect } from 'react-redux'
import { createProject } from '../../Store/Actions/ProjectsActions';

class CreateProject extends Component {
    state = {
        title: "",
        content: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const empty = Object.keys(this.state).map((key, index) => {
            return this.state[key] === ""
        });
        const unique = Array.from(new Set(empty))

        if(!unique[0] && !unique[1]){
            // create project
            this.props.createProject(this.state);
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
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="formTitle gray-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field send-form">
                        <button className="btn pink lignten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}


export default connect(null, mapDispatchToProps)(CreateProject)