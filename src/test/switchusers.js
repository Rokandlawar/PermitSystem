import React, { Fragment } from "react"
import Form from '../components/form'
import SwitchUsersConfig from './switchusersconfig'

const SwitchUsers = () => {
    return (
        <Fragment>
            <Form {...SwitchUsersConfig} />
        </Fragment>
    )
}

export default SwitchUsers