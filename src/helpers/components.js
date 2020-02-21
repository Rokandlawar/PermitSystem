
export const getInitialState = (components) => {
    const state = {}
    Object.keys(components).forEach(each => {
        const { options, type } = components[each]
        const { name, initialValue } = options
        state[name] = (initialValue != '' || initialValue != undefined) ? initialValue : ''
    })
    return state
}