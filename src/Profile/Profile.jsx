import React from 'react'
import { IconButton, Avatar } from "@material-ui/core";
import profilepic from '../profile.jpg'


export default function Profile(props) {
    return (
        <div style={{ padding: '32px' }}>
            <div >
                <IconButton>
                    <Avatar
                        src={profilepic}
                        style={{
                            margin: "10px",
                            width: "100px",
                            height: "100px",
                        }}
                    />
                </IconButton>
            </div>
            <h1>
                {props.displayName}
            </h1>
            <h2>
                {props.profilefields.email}
            </h2>
            <h1>
                {props.profilefields.phoneWork}
            </h1>

        </div >

    )
}