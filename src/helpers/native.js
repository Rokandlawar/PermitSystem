import React from 'react'

export const DIV = (props) => {
    const { options, children } = props
    return < div {...options}>
        {children}
    </div >
}
