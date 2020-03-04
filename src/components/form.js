import React, { useReducer, useEffect, useRef, useState } from 'react';
import { layoutTypes } from '../layout/types'
import { handleActionsToEffects } from '../effects/effects'
import { createRequest, requestApi } from '../helpers/rest'
import { groupByType } from '../helpers/components'

function handleFieldChange(state, action) {
    const { type, updates } = action
    switch (type) {
        case 'init':
            const { values } = action
            return { ...state, ...values }
        case 'update':
            const { name, value } = action
            return { ...state, [name]: value }
        case 'updates':
            let newstate = { ...state }
            if (updates) {
                updates.forEach(each => {
                    const { key, value } = each
                    newstate[key] = { ...newstate[key], ...value }
                })
            }
            return newstate
    }
}

function handlePropsChange(state, action) {
    const { type, updates } = action
    if (type === 'updates') {
        let newstate = { ...state }
        if (updates) {
            updates.forEach(each => {
                const { key, value } = each
                newstate[key] = { ...newstate[key], ...value }
            })
        }
        return newstate
    }
}

export default function useForm(props) {
    const { components, layout, values, effects, actions, mapActionsToEffects, extraProps, sharedProps, dispatchSharedValueChange } = props
    const { crud } = extraProps || {}
    const { layoutType } = layout

    const [fieldsLayout, setFieldsLayout] = useState(layout)
    const [fieldsProps, dispatchPropsChange] = useReducer(
        handlePropsChange,
        components
    )

    const [fieldValues, dispatchValueChange] = useReducer(
        handleFieldChange,
        values
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
            const dispatchType = groupByType(results)
            const { prop, value, layout } = dispatchType
            if (prop) {
                dispatchPropsChange({
                    type: 'updates',
                    updates: prop
                })
            }
            if (value) {
                dispatchValueChange({
                    type: 'updates',
                    updates: value
                })
            }
            if (layout) {
                dispatchPropsChange({
                    type: 'updates',
                    updates: layout
                })
            }
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
        dispatchValueChange({
            type: 'update',
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

    const addons = {
        handleFieldValue: handleFieldValue
    }

    const addonsByName = {}

    return [
        <form>
            {layoutType && layoutTypes[layoutType] ?
                layoutTypes[layoutType]({
                    layout: fieldsLayout,
                    fields: fieldsProps,
                    fieldValues: fieldValues,
                    addons: addons,
                    addonsByName: addonsByName
                }) :
                layoutTypes.default({
                    layout: fieldsLayout,
                    fields: fieldsProps,
                    fieldValues: fieldValues,
                    addons: addons,
                    addonsByName: addonsByName
                })
            }
        </form>,
        fieldValues
    ]


}
