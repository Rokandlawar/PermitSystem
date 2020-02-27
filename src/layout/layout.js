import React, { Fragment, useState, useEffect } from 'react'
import fieldTypes from '../helpers/fieldtypes'
import { DIV } from '../helpers/native'
import fieldtypes from '../helpers/fieldtypes'

const types = {
    div: DIV
}

export const createLayout = ({ layout, fields, values, addons, addonsByName }) => {
    const { group } = layout
    return group.map((each, index) => {
        const { order, type, components, ...otherProps } = each
        return <div {...otherProps} key={order || index}>
            {components.map((name, index) => {
                const { order, sub, ...otherLayoutProps } = layout[name]
                if (fields[name]) {
                    const { type, key, order, ...otherFieldProps } = fields[name]
                    const EachComp = fieldtypes[type]
                    if (sub) {
                        const { type, ...otherProps } = sub
                        return <div {...otherProps} key={key || index}>
                            <EachComp {...otherFieldProps} value={values[name]} {...addons} {...addonsByName[name]} />
                        </div>
                    }
                    else {
                        return <EachComp key={key || index} {...fields[name]} value={values[name]} {...addons} {...addonsByName[name]} />
                    }
                }
                else return null

            })}
        </div>
    })

}