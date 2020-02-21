
export const getInitialState = (components) => {
    const state = {}
    Object.keys(components).forEach(each => {
        const { name, initialValue, type } = components[each]
        state[name] = initialValue && (initialValue != '' || initialValue != undefined) ? initialValue : ''
    })
    return state
}