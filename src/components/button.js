import React from 'react';
import Button from '@material-ui/core/Button';


export default function Buttons(props) {
    const { value, handleFieldValue, extraProps, shareProps, ...otherProps } = props
    const { label, ...otherOptions } = otherProps
    return (
        <Button {...otherOptions}>
            {label}
        </Button>


    );
}