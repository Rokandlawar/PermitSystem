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
    const { value, handleFieldValue, extraProps, shareProps, ...otherProps } = props
    const { label, helperText, items, name, fullWidth } = otherProps
    const { transformProps } = extraProps
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
                    items && items.map((each, index) => {
                        const { label, value } = transformProps ? transformProps : defaults.transformProps
                        const name = each[label]
                        const key = each[value]
                        return <MenuItem value={key || index}>{name}</MenuItem>
                    })
                }

            </Select>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    )
}