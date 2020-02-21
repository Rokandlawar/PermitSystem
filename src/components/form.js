import React, { useReducer, useEffect, useRef, useState } from 'react';
import { layoutTypes } from '../layout/types'
import { handleActionsToEffects } from '../effects/effects'
import { getInitialState } from '../helpers/components'
import { createRequest, requestApi } from '../helpers/rest'

const resp = [{ "Id": 122, "Number": 6, "Initials": "DE", "Name": "DE", "Region": "DE", "Status": "I", "Contact": { "ContactPerson": null, "ContactType": null, "AddressType": null, "AddressLine1": null, "AddressLine2": null, "City": null, "State": null, "Zip": null, "Phone": null, "Fax": null, "Email": null, "IsPrimary": null, "CreatedBy": 0, "CreatedOn": "0001-01-01T00:00:00", "UpdatedBy": null, "UpdatedOn": null }, "RoleSites": null, "CreatedBy": 1, "CreatedOn": "2019-12-17T19:09:25.5163784", "UpdatedBy": null, "UpdatedOn": null }, { "Id": 123, "Number": 7, "Initials": "UPASITE", "Name": "UPASite", "Region": "UPA SIte", "Status": "A", "Contact": { "ContactPerson": null, "ContactType": null, "AddressType": null, "AddressLine1": null, "AddressLine2": null, "City": null, "State": null, "Zip": null, "Phone": null, "Fax": null, "Email": null, "IsPrimary": null, "CreatedBy": 0, "CreatedOn": "0001-01-01T00:00:00", "UpdatedBy": null, "UpdatedOn": null }, "RoleSites": null, "CreatedBy": 1, "CreatedOn": "2019-12-17T20:24:36.9906798", "UpdatedBy": 12876, "UpdatedOn": "2020-01-23T09:29:07.4653685" }, { "Id": 141, "Number": 232, "Initials": "CE", "Name": "Castle", "Region": "New Castle", "Status": "A", "Contact": { "ContactPerson": null, "ContactType": null, "AddressType": null, "AddressLine1": null, "AddressLine2": null, "City": null, "State": null, "Zip": null, "Phone": null, "Fax": null, "Email": null, "IsPrimary": null, "CreatedBy": 0, "CreatedOn": "0001-01-01T00:00:00", "UpdatedBy": null, "UpdatedOn": null }, "RoleSites": null, "CreatedBy": 12876, "CreatedOn": "2020-01-14T13:36:05.37044", "UpdatedBy": 12876, "UpdatedOn": "2020-01-23T09:23:47.8971871" }, { "Id": 144, "Number": 32, "Initials": "NY", "Name": "New York", "Region": "New Castle", "Status": "I", "Contact": { "ContactPerson": null, "ContactType": null, "AddressType": null, "AddressLine1": null, "AddressLine2": null, "City": null, "State": null, "Zip": null, "Phone": null, "Fax": null, "Email": null, "IsPrimary": null, "CreatedBy": 0, "CreatedOn": "0001-01-01T00:00:00", "UpdatedBy": null, "UpdatedOn": null }, "RoleSites": null, "CreatedBy": 12876, "CreatedOn": "2020-01-17T14:01:26.6518622", "UpdatedBy": 12876, "UpdatedOn": "2020-01-29T10:01:10.1456996" }]

function handleFieldChange(state, action) {
    if (action.type === 'update') {
        const { name, value } = action
        return { ...state, [name]: value }
    }
}

function handlePropsChange(state, action) {
    const { type, name } = action
    if (type === 'load') {
        const { options } = state[name]
        const { crud } = options
        const { read } = crud
        const items = []
        // Promise.all(read.map(each => requestApi(createRequest(each)))).then(res => {
        //     items = res[0]
        // })
        return {
            ...state, [name]: { ...state[name], options: { ...state[name].options, items: resp } }
        }
    }
}



export default function (props) {
    const { components, layout, effects, actions, mapActionsToEffects, extraProps } = props
    const { crud } = extraProps
    const { layoutType } = layout

    const [fieldsLayout, setFieldsLayout] = useState(layout)
    const [fieldsProps, setFieldsProps] = useState(components)

    const [fieldValues, dispatchValueChange] = useReducer(
        handleFieldChange,
        getInitialState(components)
    )


    const handleFieldValue = (e) => {
        const { name, value, checked } = e.target
        if (mapActionsToEffects[name]) {
            handleActionsToEffects({
                current: { name: name, value: value },
                mapCurrentActionsToEffects: mapActionsToEffects[name],
                fieldValues: fieldValues,
                actions: actions,
                effects: effects
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

    return (
        <form>
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
        </form>
    )
}

