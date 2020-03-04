import React, { Fragment, useState, useEffect } from 'react'
import fieldTypes from '../helpers/fieldtypes'
import { DIV } from '../helpers/native'
import useForm from '../components/form'
import useContainer from '../components/container'

const types = {
    div: DIV
}

export const createLayout = ({ layout, fields }) => {
    const { group } = layout
    return group.map((each, index) => {
        const { order, type, components, ...otherProps } = each
        return <div {...otherProps} key={order || index}>
            {components.map((name, index) => {
                const { order, sub, ...otherLayoutProps } = layout[name]
                if (fields) {
                    if (sub) {
                        const { type, key, ...otherProps } = sub
                        return <div {...otherProps} key={key || index}>
                            {fields[name]}
                        </div>
                    }
                    else {
                        return fields[name]
                    }
                }
                else return null
            })}
        </div>
    })

}