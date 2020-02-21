import React, { useState } from "react"
import { createRequest, requestApi } from '../helpers/rest'

export const handleActionsToEffects = ({ current, mapCurrentActionsToEffects, fieldValues, actions, effects }) => {
    const { check, run } = mapCurrentActionsToEffects
    const val = check.every(each => {
        handleRules(actions[each], fieldValues)
    })
    if (val) {
        run.forEach(each => {
            handleEffects(each)
        })
    }
}

export const handleEffects = (fieldEffects) => {
    fieldEffects.forEach(each => {
        const { type, name } = each
        switch (type) {
            case 'load':
                handleLoad()
            case 'enable':
                handleEnable()
            case 'disable':
                handleDisable()
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

export const handleLoad = async ({ name }) => {
    await createRequest(requestApi())
}

export const handleEnable = ({ name }) => {

}

export const handleDisable = ({ name }) => {

}

export const handleFieldProps = (name, fieldProps) => {

}
