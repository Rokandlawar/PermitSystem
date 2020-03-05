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
    
    // if (type === 'custom') {
    //     let newstate = { ...state }
    //     const { layout, components } = otherProps
    //     const { group, ...othersLayout } = layout

    //     newstate = { ...newstate, fieldProps: { ...newstate.fieldProps, ...components } }
    //     return newstate
    //     const newgroup = [...group,...state.fieldsLayout.group]
    //     return {
    //         ...state, fieldProps: { ...state.fieldProps, ...components }, fieldsLayout: {
    //             ...state.fieldsLayout, ...othersLayout,
    //             group: state.fieldsLayout.group.reduce((accum, e) => {
    //                 group.forEach(each => {
    //                     const { position, order, ...compProps } = each
    //                     if (position) {
    //                         newstate.layout.group = newstate.layout.group.map(each => {
    //                             if (each.order === order) {

    //                             }
    //                             else return each
    //                         })
    //                     }
    //                     else {
    //                         accum.push(each)
    //                     }
    //                 })

    //                 return accum

    //             }, [])
    //         }
    //     }
    // }

    return state
}


export default function useForm(props) {
    const { components, layout, values, effects, actions, mapActionsToEffects, extraProps, sharedProps, dispatchSharedValueChange } = props
    const { crud } = extraProps || {}
    const { layoutType } = layout

    const [fields, dispatchFieldsChange] = useReducer(
        handleFieldChange,
        { fieldValues: values, fieldProps: components, fieldsLayout: layout }
    )

    const [fieldNames, setFieldNames] = useState(() => Object.keys(components))

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


    const setCustomFields = (props) => {
        const { layout, components } = props
        dispatchFieldsChange({
            type: 'custom',
            custom: props
        })
    }


    const componentsCreation = (fieldNames, props, values) => {
        return fieldNames.reduce((accum, each) => {
            const { type, ...otherProps } = props[each]
            const EachComp = fieldTypes[type]
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
                    fields: componentsCreation(fieldNames, fieldProps, fieldValues)
                }) :
                layoutTypes.default({
                    layout: fieldsLayout,
                    fields: componentsCreation(fieldNames, fieldProps, fieldValues)
                })
            }
        </form>,
        fieldValues,
        setCustomFields
    ]

}
