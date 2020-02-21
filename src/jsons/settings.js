export const fieldConfig = {
    type: 'form',
    options: {},
    wrapper:[
        {
            type:'div',
            options:{
                className:'row'
            },
            components:[
                {
                    type:'div',
                    options:{
                        className:'col-12'
                    },
                    node:'name'
                }
            ]
        },
        {
            type:'div',
            options:{
                className:'row'
            },
            components:[
                {
                    type:'div',
                    options:{
                        className:'col-12'
                    },
                    node:'type'
                }
            ]
        },
        {
            type:'div',
            options:{
                className:'row'
            },
            components:[
                {
                    type:'div',
                    options:{
                        className:'col-12'
                    },
                    node:'classname'
                }
            ]
        },
        {
            type:'div',
            options:{
                className:'row'
            },
            components:[
                {
                    type:'div',
                    options:{
                        className:'col-12'
                    },
                    node:'required'
                }
            ]
        },
        {
            type:'div',
            options:{
                className:'row'
            },
            components:[
                {
                    type:'div',
                    options:{
                        className:'col-12'
                    },
                    node:'fieldconfig'
                }
            ]
        }
    ],
    components: [
        {
            type: 'textfield',
            options: {
                name: 'name',
                label: 'Display Name'
            }
        },
        {
            type: 'dropdown',
            options: {
                name: 'type',
                label: 'Select Type'
            }
        },
        {
            type: 'textfield',
            options: {
                name: 'classname',
                label: 'ClassName'
            }
        },
        {
            type: 'checkbox',
            options: {
                name: 'required',
                label: 'Required'
            }
        },
        {
            type: 'textfield',
            options: {
                name: 'fieldconfig',
                label: 'Field Config',
                multiline: true
            }
        },
    ]
}