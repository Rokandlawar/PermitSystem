import React, { useState } from "react";
import TextField from '@material-ui/core/TextField'

export default function (props) {
    const { value, handleFieldValue, opts } = props
    const { options } = opts
    const { label, name, fullWidth } = options
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