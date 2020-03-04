import React, { useState } from "react"
import { createRequest, requestApi } from '../helpers/rest'

export const handleActionsToEffects = ({ mapCurrentActionsToEffects, fieldValues, actions, effects }) => {
    const { check, run } = mapCurrentActionsToEffects
    const val = check ? check.every(each => {
        handleRules(actions[each], fieldValues)
    }) : true
    if (val) {
        return run.map(each => {
            return handleEffects(effects[each], fieldValues)
        }).reduce((accum, each) => {
            return accum.concat(each)
        }, [])
    }
}

export const handleEffects = (fieldEffects, fieldValues) => {
    return fieldEffects.map(each => {
        const { type, name, read, enable, disable, show, hide } = each
        switch (type) {
            case 'load':
                return handleLoad(read, fieldValues).then(res => {
                    return {
                        key: name,
                        type: 'prop',
                        value: res
                    }
                })
            case 'enable':
                return {
                    key: name,
                    type: 'prop',
                    value: handleEnable(enable)
                }
            case 'disable':
                return {
                    key: name,
                    type: 'prop',
                    value: handleDisable(disable)
                }
            case 'show':
                return {
                    key: name,
                    type: 'layout',
                    value: handleShow()
                }
            case 'clear':
                return {
                    key: name,
                    type: 'value',
                    value: { value: null }
                }
            case 'clearItems':
                return {
                    key: name,
                    type: 'prop',
                    value: { items: [] }
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

export const handleLoad = (read, fieldValues) => {
    return Promise.all(read.map(each => requestApi(createRequest(each, fieldValues)))).then(results => {
        console.log(results)
        return read.reduce((sum, current, index) => {
            const { saveAs } = current
            return { ...sum, [saveAs.key]: results[index] }
        }, {})
    })
}

export const handleEnable = (enable) => {
    return enable
}

export const handleDisable = (disable) => {
    return disable
}


export const handleShow = () => {

}
