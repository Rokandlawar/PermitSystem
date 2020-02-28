import React, { Fragment, useEffect } from "react"
import useForm from '../components/form'
import useContainer from '../components/container'
import switchusersconfig from './switchusersconfig'
import switchusersgridconfig from './switchusersgridconfig'
import CustomMultiSelect from './CustomMultiSelect'

const SwitchUsers = () => {
    const [layout] = useContainer({
        ...switchusersgridconfig
    })

    // const [fieldValues, layout] = useForm({
    //     ...switchusersconfig
    // })

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