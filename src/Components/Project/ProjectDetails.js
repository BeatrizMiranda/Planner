import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex nisi, vel obcaecati non, sit voluptate doloribus nihil numquam sequi unde. Eius ad illum, error neque animi repellendus vitae nesciunt?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by: Someone</div>
                    <div className="date">2nm September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails

