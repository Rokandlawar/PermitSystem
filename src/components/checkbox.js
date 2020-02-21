import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText'
export default function (props) {
    const { value, handleFieldValue, extraProps, shareProps, ...otherProps  } = props
    const { name, label, helperText, fullWidth } = otherProps
    console.log('checkbox vlaue',value)
    return (
        <FormControl fullWidth={fullWidth ? fullWidth : true}>
            <FormGroup >
                <FormControlLabel
                    control={<Checkbox
                        checked={value}
                        onChange={handleFieldValue}
                        name={name}
                    />}
                    label={label}
                />
            </FormGroup >
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    )
}