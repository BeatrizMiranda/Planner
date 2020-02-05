import React from 'react'
import moment from 'moment'

const Notification = (props) => {
    const {notifications} = props;
    return (
        <section>
            <div className="section">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Notifications</span>
                        <ul className="notifications">
                            {
                                notifications && notifications.map(not => {
                                    return (
                                        <li key={not.id} >
                                            <span className="pink-text">{not.user} </span>
                                            <span>{not.content}</span>
                                            <div className="grey-text note-date">{moment(not.time.toDate()).fromNow()}</div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Notification