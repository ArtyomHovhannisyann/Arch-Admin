import React, { useState } from 'react';
import AdminLogIn from "../pages/Form/AdminLogIn"

export default function Main() {
    const [isLogIned , setISLogIned] = useState(true)
    return (
        <div className = "main">
            {isLogIned && <AdminLogIn changeLogInState = {setISLogIned}/>}
            Main
        </div>
    )
}
