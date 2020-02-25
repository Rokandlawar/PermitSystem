import React, { Fragment } from "react"
import Form from '../components/form'
import SwitchUsersConfig from './switchusersconfig'
import CustomMultiSelect from './CustomMultiSelect'

const SwitchUsers = () => {
    return (
        <Fragment>
            <Form {...SwitchUsersConfig}
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

            />
        </Fragment>
    )
}

export default SwitchUsers