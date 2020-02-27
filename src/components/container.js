import React, { useReducer, useEffect, useRef, useState } from 'react';
import { layoutTypes } from '../layout/types'
import { handleActionsToEffects } from '../effects/effects'
import { getInitialState } from '../helpers/components'
import { createRequest, requestApi } from '../helpers/rest'

function handleFieldChange(state, action) {
    switch (action.type) {
        case 'init':
            const { values } = action
            return { ...state, ...values }
        case 'update':
            const { name, value } = action
            return { ...state, [name]: value }
    }
}

function handlePropsChange(state, action) {
    const { type, updates } = action
    if (type === 'update') {
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



const useContainer = (props) => {
    const { components, layout, values, effects, actions, mapActionsToEffects, extraProps } = props
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
            handleActionsToEffects({
                current: null,
                mapCurrentActionsToEffects: mapActionsToEffects['init'],
                fieldValues: fieldValues,
                actions: actions,
                effects: effects,
                dispatchPropsChange: dispatchPropsChange
            })
        }
    }, [])


    const handleFieldValue = (e) => {
        const { name, value, checked } = e.target
        if (mapActionsToEffects[name]) {
            handleActionsToEffects({
                current: { name: name, value: value },
                mapCurrentActionsToEffects: mapActionsToEffects[name],
                fieldValues: fieldValues,
                actions: actions,
                effects: effects,
                dispatchPropsChange: dispatchPropsChange
            })
        }
        dispatchValueChange({
            type: 'update',
            name: name,
            value: handleValue(name, value, checked)
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
        fieldValues,
        <div>
            {layoutType && layoutTypes[layoutType] ?
                layoutTypes[layoutType]({
                    layout: fieldsLayout,
                    fields: fieldsProps,
                    values: fieldValues,
                    addons: addons,
                    addonsByName: addonsByName
                }) :
                layoutTypes.default({
                    layout: fieldsLayout,
                    fields: fieldsProps,
                    values: fieldValues,
                    addons: addons,
                    addonsByName: addonsByName
                })
            }
        </div>
    ]


}

export default useContainer
