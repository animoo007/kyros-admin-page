import React, { useState } from 'react'
import Profile from './Profile/Profile'
import Form from './Form/Form'
import Dashoard from './Dashboard/Dashboard'


export default function CommonWrapper() {
    const [profilefields, setProfileFields] = useState({
        "firstname": "",
        "lastname": "",
        "displayname": "Adam Leviene",
        "email": "adamlevien@kyro.us",
        "phoneWork": "",
        "phoneHome": "",
        "location": ""
    })
    const [displayName, setDisplayName] = useState("Adam Leviene")
    const checkwatch = (initialFields) => {
        setProfileFields(initialFields)
    }
    const displayChange = (dpName) => {
        setDisplayName(dpName)
        console.log(dpName)
    }
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "20%" }}>
                <Dashoard />
            </div>
            <div style={{ width: "60%" }}>
                <Form checkwatch={checkwatch} displayNameChange={displayChange} />
            </div>
            <div style={{ width: "20%" }}>
                <Profile profilefields={profilefields} displayName={displayName} />
            </div>

        </div>
    )
}