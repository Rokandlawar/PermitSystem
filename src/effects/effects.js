import React, { useState } from "react"
import { createRequest, requestApi } from '../helpers/rest'

export const handleActionsToEffects = ({ current, mapCurrentActionsToEffects, fieldValues, actions, effects, dispatchPropsChange }) => {
    const { check, run } = mapCurrentActionsToEffects
    const val = check ? check.every(each => {
        handleRules(actions[each], fieldValues)
    }) : true
    if (val) {
        const allPromises = run.map(each => {
            return handleEffects(effects[each])
        })
        allPromises.forEach(each => {
            Promise.all(each).then(results => {
                dispatchPropsChange({
                    type: 'update',
                    updates: results
                })
            })
        })
    }
}

export const handleEffects = (fieldEffects) => {
    return fieldEffects.map(each => {
        const { type, name, read } = each
        switch (type) {
            case 'load':
                return handleLoad(read).then(res => {
                    return {
                        key: name,
                        value: res
                    }
                })
            case 'enable':
                return {
                    key: name,
                    value: handleEnable()
                }
            case 'disable':
                return {
                    key: name,
                    value: handleDisable()
                }
        }
    })

}

export const handleRules = (fieldRules, fieldValues) => {
    const { condition, rules } = fieldRules
    switch (condition) {
        case 'AND':
            rules.every(each => {
                const { condition, rules } = each
                if (rules) return handleRules(each, fieldValues)
                else return fieldValues[each]
            })
        case 'OR':
            rules.some(each => {
                const { condition, rules } = each
                if (rules) return handleRules(each, fieldValues)
                else return fieldValues[each]
            })
    }

}

export const handleLoad = (read) => {
    return Promise.all(read.map(each => requestApi(createRequest(each)))).then(results => {
        console.log(results)
        return read.reduce((sum, current, index) => {
            const { saveAs } = current
            return { ...sum, [saveAs.key]: results[index] }
        }, {})
    })
}

export const handleEnable = () => {

}

export const handleDisable = () => {

}

