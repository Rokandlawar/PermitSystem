import React, { Fragment, useEffect } from "react"
import useForm from '../components/form'
import useContainer from '../components/container'
import switchusersconfig from './switchusersconfig'
import switchusersgridconfig from './switchusersgridconfig'
import CustomMultiSelect from './CustomMultiSelect'
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import TextField from '@material-ui/core/TextField'
import textbox from "../components/textbox"

const SwitchUsers = () => {
    // const [layout] = useContainer({
    //     ...switchusersgridconfig
    // })

    const [layout, fieldValues, setCustomFields] = useForm({
        ...switchusersconfig
    })

    const checking = (name) => {
        console.log(name)
    }

    useEffect(() => {
        setCustomFields(
            {
                layout: {
                    group: [
                        {
                            order: 0,
                            position: 2,
                            components: ['custommulitselect1']
                        },
                        {
                            order: 5,
                            type: 'div',
                            className: 'row',
                            components: ['custommulitselect2']
                        }
                    ],
                    custommulitselect1: {
                        order: 0,
                        type: 'div',
                        className: 'col-4',
                        sub: {
                            type: 'div',
                            className: 'col-4',
                            //onChange: checking
                        }
                    },
                    custommulitselect2: {
                        order: 5,
                        type: 'div',
                        className: 'col-4',
                        sub: {
                            type: 'div',
                            className: 'col-4',
                        }
                    }
                },
                components: {
                    custommulitselect1: {
                        name: 'custommulitselect1',
                        type: TextField,
                        custom: true,
                        label:'custommulitselect1',
                        //onChange: checking

                    },
                    custommulitselect2: {
                        name: 'custommulitselect2',
                        type: TextField,
                        custom: true,
                         label:'custommulitselect2',

                        //onChange: checking

                    }
                }
            }
        )
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