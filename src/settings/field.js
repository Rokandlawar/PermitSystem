import React, { Fragment, useState } from 'react'
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Form from '../components/form'
import { fieldConfig } from '../jsons/settings'

export default function AllFields() {

    const [field, setField] = useState([])

    const addFieldSettings = () => {
        setField(field.concat(fieldConfig))
    }

    return (
        <Fragment>
            <Button onClick={addFieldSettings} className='float-right' variant="contained" color="primary">
                <Tooltip title="Add">
                    <AddIcon />
                </Tooltip>
                Add Field Settings
            </Button>
            {field.map(each => {
                return Field
            })}

        </Fragment>
    )
}


const Field = (props) => {

    const [values, setValues] = useState([])

    const addField = () => {
        setValues(values.concat({}))
    }

    const addRow = () => {

    }

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                Field
                    </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Button onClick={addField} className='float-right' variant="contained" color="primary">
                    <Tooltip title="Add">
                        <AddIcon />
                    </Tooltip>
                    Add Field
                        </Button>
                <Button onClick={addRow} className='float-right' variant="contained" color="primary">
                    <Tooltip title="Add">
                        <AddIcon />
                    </Tooltip>
                    Add Row
                        </Button>
                {values.map(each => {
                    return <FieldSetting {...each} />
                })}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

const FieldSetting = (props) => {
    return (
        <Form {...(props ? props : fieldConfig)} />
    )
}