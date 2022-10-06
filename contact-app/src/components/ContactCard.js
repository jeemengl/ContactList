import React from "react";
import {Link} from "react-router-dom"

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    console.log(props.contact)
    return (
        <div className="item">
            <div className="content">
    
                <Link to={{pathname:`/contact/${id}`}} state={{contact: props.contact}}>
                    <div className="header">{props.contact.name}</div>
                    <div>{props.contact.email}</div>
                </Link>

                <i className="trash alternate outline icon" 
                style={{color:"red", marginTop:"7px", marginLeft:"10px"}} 
                onClick={() => props.clickHandler(props.contact.id)}></i>
               

                <Link to={`/edit/${id}`} state={{contact: props.contact}}>
                    <i className="edit alternate outline icon blue" 
                    style={{color:"red", marginTop:"7px", marginLeft:"10px"}}></i>
                </Link>
           </div>
        </div>
    )
}

export default ContactCard;