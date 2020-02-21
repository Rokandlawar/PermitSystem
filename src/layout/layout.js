import React, { Fragment, useState, useEffect } from 'react'
import fieldTypes from '../helpers/fieldtypes'
import { DIV } from '../helpers/native'
import fieldtypes from '../helpers/fieldtypes'

const types = {
    div: DIV
}

export const createLayout = ({ layout, fields, values, addons, addonsByName }) => {
    const { group, ...otherProps } = layout
    return group.map(each => {
        const { order, type, options, components } = each
        return <div {...options}>
            {components.map(name => {
                const { order, sub } = layout[name]
                if (fields[name]) {
                    const { type } = name
                    const EachComp = fieldtypes[type]
                    if (sub) {
                        const { type, options } = sub
                        return <div {...options}>
                            <EachComp {...fields[name]} value={values[name]} {...addons} {...(addonsByName[name] ? addonsByName : null)} />
                        </div>
                    }
                    else {
                        <EachComp {...fields[name]} value={values[name]} {...addons} {...(addonsByName[name] ? addonsByName : null)} />
                    }
                }
                else return null

            })}
        </div>
    })

}