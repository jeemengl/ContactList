import React from "react";
import { useLocation, Link } from "react-router-dom"

const ContactDetail = (props) => {
    const location = useLocation();
    const contactDetail = location.state.contact;
    return (
        <div className="ui horizontal divider" style={{paddingTop: 50}}>
            <div className="ui card centered">
                <div className='content'>
                    <div className="header">{contactDetail.name}</div>
                    <div className="description">{contactDetail.email}</div>
                </div>
            </div>
            <div>
                <Link to="/"><button className="ui button blue">Back to Contact List</button></Link>

            </div>
        </div>
    )
}

export default ContactDetail;