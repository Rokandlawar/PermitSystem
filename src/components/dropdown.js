import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const defaults = {
    transformProps: {
        label: 'Name',
        value: 'Id'
    }
}
export default function (props) {
    const { value, handleFieldValue, opts } = props
    const { options } = opts
    const { label, helperText, items, name, fullWidth, transformProps } = options
    return (
        <FormControl fullWidth={fullWidth ? fullWidth : true}>
            <InputLabel>{label}</InputLabel>
            <Select
                value={value}
                onChange={handleFieldValue}
                inputProps={{
                    name: name
                }}
            >
                {
                    items && items.map(each => {
                        const { label, value } = transformProps ? transformProps : defaults.transformProps
                        const name = each[label]
                        const key = each[value]
                        return <MenuItem value={key}>{name}</MenuItem>
                    })
                }

            </Select>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    )
}