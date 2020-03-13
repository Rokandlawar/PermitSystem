import React, { Fragment, useEffect } from "react"
import useSections from '../components/sections'
import useContainer from '../components/container'
import sectionsswitchusersconfig from './sectionsswitchusersconfig'
import switchusersgridconfig from './switchusersgridconfig'
import CustomMultiSelect from './CustomMultiSelect'
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import TextField from '@material-ui/core/TextField'
import textbox from "../components/textbox"

const SwitchUsers = () => {

    const [layout, fieldValues, setCustomFields] = useSections({
        ...sectionsswitchusersconfig
    })

    return (
        <Fragment>
            {layout}
        </Fragment>
    )
}

export default SwitchUsers

