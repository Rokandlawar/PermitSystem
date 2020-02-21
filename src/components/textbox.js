import React, { useState } from "react";
import TextField from '@material-ui/core/TextField'

export default function (props) {
    const { value, handleFieldValue, extraProps, shareProps, ...otherProps } = props
    const { label, name, fullWidth } = otherProps
    return (
        <TextField
            value={value}
            label={label}
            onChange={handleFieldValue}
            name={name}
            fullWidth={fullWidth ? fullWidth : true}
        />
    )
}