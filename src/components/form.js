import React, { useReducer, useEffect, useRef, useState } from 'react';
import { layoutTypes } from '../layout/types'
import { handleActionsToEffects } from '../effects/effects'
import { createRequest, requestApi } from '../helpers/rest'
import { groupByType } from '../helpers/components'
import Dropdown from './dropdown'
import TextField from './textbox'
import Checkbox from './checkbox'
import Button from './button'


const fieldTypes = {
    dropdown: Dropdown,
    textfield: TextField,
    checkbox: Checkbox,
    button: Button
}

function handleFieldChange(state, action) {
    const { type, ...otherProps } = action
    if (type === 'init') {
        const { values } = otherProps
        return { ...state, fieldValues: { ...values } }
    }
    if (type === 'value') {
        const { name, value } = otherProps
        return { ...state, fieldValues: { ...state.fieldValues, [name]: value } }
    }
    if (type === 'prop') {
        const { name, value } = otherProps
        return { ...state, fieldProps: { ...state.fieldProps, [name]: { ...state.fieldProps[name], ...value } } }
    }
    if (type === 'updates') {
        let newstate = { ...state }
        const { updates } = otherProps
        const { prop, value, layout } = updates
        if (prop) {
            prop.forEach(each => {
                const { key, result } = each
                newstate = { ...newstate, fieldProps: { ...newstate.fieldProps, [key]: { ...newstate.fieldProps[key], ...result } } }
            })
        }
        if (value) {
            value.forEach(each => {
                const { key, result } = each
                newstate = { ...newstate, fieldValues: { ...newstate.fieldValues, [key]: result.value } }
            })

        }
        if (layout) {
        }
        return newstate
    }

    if (type === 'customfields') {
        const { layout, components } = otherProps
        const { group, ...othersLayout } = layout
        return {
            ...state, fieldProps: { ...state.fieldProps, ...components }, fieldsLayout: {
                ...state.fieldsLayout, ...othersLayout,
                group: state.fieldsLayout.group.concat(group).reduce((acc, current) => {
                    const x = acc.find(item => item.order === current.order);
                    if (!x) {
                        return acc.concat([current]);
                    } else {
                        const { position, components } = current
                        x.components.splice(position, 0, ...components)
                        return acc;
                    }
                }, [])
            }
        }

    }


}


export default function useForm(props) {
    const { components, layout, values, effects, actions, mapActionsToEffects, extraProps, sharedProps, dispatchSharedValueChange } = props
    const { crud } = extraProps || {}
    const { layoutType } = layout

    const [fields, dispatchFieldsChange] = useReducer(
        handleFieldChange,
        { fieldValues: values, fieldProps: components, fieldsLayout: layout }
    )


    useEffect(() => {
        const { read } = crud || {}
        read && Promise.all(read.map(each => requestApi(createRequest(each)))).then(results => {
            handleFieldChange({
                type: 'init',
                values: results
            })
        })
        if (mapActionsToEffects['init']) {
            handleEffectUpdates(
                handleActionsToEffects({
                    mapCurrentActionsToEffects: mapActionsToEffects['init'],
                    fieldValues: fieldValues,
                    actions: actions,
                    effects: effects
                })
            )
        }
    }, [])

    const handleEffectUpdates = (res) => {
        Promise.all(res).then(results => {
            dispatchFieldsChange({
                type: 'updates',
                updates: groupByType(results)
            })
        })
    }


    const handleFieldValue = (e) => {
        const { name, value, checked } = e.target
        if (mapActionsToEffects.change[name]) {
            handleEffectUpdates(
                handleActionsToEffects({
                    mapCurrentActionsToEffects: mapActionsToEffects.change[name],
                    fieldValues: { ...fieldValues, [name]: value },
                    actions: actions,
                    effects: effects
                })
            )
        }

        const val = handleValue(name, value, checked)
        dispatchFieldsChange({
            type: 'value',
            name: name,
            value: val
        })

        dispatchSharedValueChange && sharedProps[name] && dispatchSharedValueChange({
            type: 'update',
            name: sharedProps[name],
            value: val
        })
    }

    const handleValue = (name, value, checked) => {
        const { type } = components[name]
        switch (type) {
            case 'checkbox':
                return checked
            default:
                return value
        }
    }


    function setCustomFields(customprops) {
        dispatchFieldsChange({
            type: 'customfields',
            ...customprops
        })
    }


    const componentsCreation = (props, values) => {
        const fieldNames = Object.keys(props)
        return fieldNames.reduce((accum, each) => {
            const { type, custom, ...otherProps } = props[each]
            const EachComp = custom ? type : fieldTypes[type]
            accum[each] = <EachComp value={values[each]} {...otherProps} handleFieldValue={handleFieldValue} />
            return accum
        }, {})
    }

    const { fieldValues, fieldProps, fieldsLayout } = fields
    return [
        <form>
            {layoutType && layoutTypes[layoutType] ?
                layoutTypes[layoutType]({
                    layout: fieldsLayout,
                    fields: componentsCreation(fieldProps, fieldValues)
                }) :
                layoutTypes.default({
                    layout: fieldsLayout,
                    fields: componentsCreation(fieldProps, fieldValues)
                })
            }
        </form>,
        fieldValues,
        setCustomFields
    ]

}
