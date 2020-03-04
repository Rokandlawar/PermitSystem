export const getInitialState = (components) => {
    const state = {}
    Object.keys(components).forEach(each => {
        const { name, initialValue, type } = components[each]
        state[name] = initialValue && (initialValue != '' || initialValue != undefined) ? initialValue : ''
    })
    return state
}

export const groupByType = (values) => {
    return values.reduce((accum, each) => {
        const { type, ...otherProps } = each
        if (accum[type]) {
            accum[type].push(otherProps)
        }
        else {
            accum[type] = []
            accum[type].push(otherProps)
        }
        return accum
    }, {})
}