import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const defaults = {
    transformProps: {
        label: 'Name',
        value: 'Id'
    }
}

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default function RadioButtonsGroup(props) {
    const { value, handleFieldValue, extraProps, shareProps, ...otherProps } = props
    const { label, helperText, items, name, fullWidth } = otherProps
    const { transformProps } = extraProps || {}
    const classes = useStyles();

    return (
        <div>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">{label}</FormLabel>

                <RadioGroup value={value} onChange={handleFieldValue}>
                    {
                        items && items.map((each, index) => {
                            const { label, value } = transformProps ? transformProps : defaults.transformProps
                            const name = each[label]
                            const key = each[value]
                            return <FormControlLabel
                                key={key}
                                value={key}
                                control={<Radio color="primary" />}
                                label={name}
                                labelPlacement="start"
                            />
                        })
                    }
                </RadioGroup>
            </FormControl>
        </div>
    );
}