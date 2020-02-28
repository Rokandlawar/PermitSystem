import React, { useReducer, useEffect, useRef, useState } from 'react';
import { layoutTypes } from '../layout/types'
import { handleActionsToEffects } from '../effects/effects'

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

function handleSharedValues(state, action) {
    const { type, name, value } = action
    if (type === 'update') {
        return { ...state, [name]: value }

    }
}


export default function useContainer(props) {
    const { components, layout, sharedProps, mapSharedProps, effects, actions, mapActionsToEffects, extraProps } = props
    const { layoutType } = layout

    const [fieldsLayout, setFieldsLayout] = useState(layout)
    const [fieldsProps, dispatchPropsChange] = useReducer(
        handlePropsChange,
        components
    )

    const [sharedValues, dispatchSharedValueChange] = useReducer(
        handleSharedValues,
        sharedProps
    )


    useEffect(() => {
        if (mapActionsToEffects && mapActionsToEffects['init']) {
            handleActionsToEffects({
                mapCurrentActionsToEffects: mapActionsToEffects['init'],
                fieldValues: null,
                actions: actions,
                effects: effects,
                dispatchPropsChange: dispatchPropsChange
            })
        }
    }, [])

    const addons = {
        dispatchSharedValueChange: dispatchSharedValueChange
    }

    const addonsByName = {
        ...Object.keys(mapSharedProps).reduce((sum, componentName) => {
            return {
                ...sum, [componentName]: mapSharedProps[componentName].reduce((accum, fieldName) => {
                    return { ...accum, [fieldName]: sharedValues[fieldName] }
                }, {})
            }
        }, {})
    }

    return [
        <div>
            {layoutType && layoutTypes[layoutType] ?
                layoutTypes[layoutType]({
                    layout: fieldsLayout,
                    fields: fieldsProps,
                    fieldValues: null,
                    addons: addons,
                    addonsByName: addonsByName
                }) :
                layoutTypes.default({
                    layout: fieldsLayout,
                    fields: fieldsProps,
                    fieldValues: null,
                    addons: addons,
                    addonsByName: addonsByName
                })
            }
        </div>
    ]


}

