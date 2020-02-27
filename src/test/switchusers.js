import React, { Fragment, useEffect } from "react"
import useForm from '../components/form'
import SwitchUsersConfig from './switchusersconfig'
import CustomMultiSelect from './CustomMultiSelect'

const SwitchUsers = () => {
    const [fieldValues, layout] = useForm({
        ...SwitchUsersConfig
    })
    useEffect(() => {

    }, [])

    return (
        <Fragment>
            {layout}
        </Fragment>
    )
}

export default SwitchUsers


{/* <Form {...SwitchUsersConfig}
addComponents={
    { custommultiselect: <CustomMultiSelect></CustomMultiSelect> }
}
addLayout={
    {
        group: [{
            order: 2,
            components: ['custommultiselect']
        }]
    }
}

/> */}