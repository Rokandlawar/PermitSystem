import React, { Fragment, useState, useEffect } from 'react'
import fieldTypes from '../helpers/fieldtypes'
import { DIV } from '../helpers/native'
import fieldtypes from '../helpers/fieldtypes'
import useForm from '../components/form'
import useContainer from '../components/container'

const types = {
    div: DIV
}

export const createLayout = ({ layout, fields, fieldValues, addons, addonsByName }) => {
    const { group } = layout
    return group.map((each, index) => {
        const { order, type, components, ...otherProps } = each
        return <div {...otherProps} key={order || index}>
            {components.map((name, index) => {
                const { order, sub, ...otherLayoutProps } = layout[name]
                if (fields[name]) {
                    const { type, key, order, ...otherFieldProps } = fields[name]
                    //console.log(fieldtypes)
                    let EachComp = null
                    switch (type) {
                        case 'form':
                            EachComp = useForm({ ...otherFieldProps, ...addons, ...addonsByName[name] })[0]
                            break;
                        case 'container':
                            EachComp = useContainer({ ...otherFieldProps, ...addons, ...addonsByName[name] })[0]
                            break;
                        default:
                            const Comp = fieldTypes[type]
                            EachComp = <Comp type={type} {...otherFieldProps} value={fieldValues ? fieldValues[name] : ''} {...addons} {...addonsByName[name]} />

                    }
                    if (sub) {
                        const { type, ...otherProps } = sub
                        return <div {...otherProps} key={key || index}>
                            {EachComp}
                        </div>
                    }
                    else {
                        return EachComp
                    }
                }
                else return null

            })}
        </div>
    })

}