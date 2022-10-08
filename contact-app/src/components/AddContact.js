import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

const AddContact = (props) => {

    const [state, setState] = useState({})
    const navigate = useNavigate()
    const add = (e) => {
        e.preventDefault();
        if(state.name === undefined || state.email === undefined || JSON.stringify(state) === "{}"){
            alert("both fields")
            return
        }

        props.addContactHandler(state);
        setState({})
        navigate("/");
    }

    return (
        <div className="ui main" style={{paddingTop: 50}}>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit= {add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={state.name || ''} onChange={(e) => setState({...state, name: e.target.value})}></input>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" value={state.email || ''} onChange={(e) => setState({...state, email: e.target.value})}></input>
                </div>
                <button className="ui button blue">Submit</button>
            </form>
        </div>
    )
}

export default AddContact; 