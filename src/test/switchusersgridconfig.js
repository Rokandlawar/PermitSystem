const AdminConfig = 'http://development.delasoft.com:8443/UPA-adminconfig'
const Admin = 'http://development.delasoft.com:8443/UPA-admin'
import switchusersconfig from './switchusersconfig'
const switchusersgrid = {
    "type": "container",
    "key": "container",
    "name": "container",
    layout: {
        group: [
            {
                order: 0,
                type: 'div',
                className: 'row',
                components: ['switchuserssettings']
            },
            {
                order: 1,
                type: 'div',
                className: 'row',
                components: ['switchusersgrid']
            }
        ],
        switchuserssettings: {
            type: 'div',
            className: 'col-4',
            sub: {
                type: 'div',
                className: 'col-4',
            }
        },
        switchusersgrid: {
            type: 'div',
            className: 'col-4',
            sub: {
                type: 'div',
                className: 'col-4'
            }
        }
    },
    values: {
        switchuserssettings: {},
        switchusersgrid: []
    },
    "components": {
        switchuserssettings: switchusersconfig,
        switchusersgrid:{
            type:'grid',
            name:'switchusersgrid'
        }
    },
    sharedProps:{
        
    },
    mapActionsToEffects: {
        init: {
            run: [1]
        },
        change: {
            'county': [2],
            'user': [3],
            'role': [4],
            'currentlyAssigned': {
                check: [8],
                run: [5]
            },
            'futureWorkflow': {
                check: [8],
                run: [5]
            }
        },
        click: {
            'switchUser': {
                check: [7],
                run: [7]
            }
        }
    },
    actions: {
        1: [
            {
                type: 'init'
            }
        ],
        2: [
            {
                type: 'change',
                name: 'county'
            }
        ],
        3: [
            {
                type: 'change',
                name: 'user'
            }
        ],
        4: [
            {
                type: 'change',
                name: 'role'
            }
        ],
        5: [
            {
                type: 'change',
                name: 'futureWorkFlow'
            }
        ],
        6: [
            {
                type: 'change',
                name: 'currentlyAssigned'
            }
        ],
        7: [
            {
                type: 'click',
                name: 'switchUser'
            }
        ],
        8: [
            {
                condition: 'AND',
                rules: [
                    {
                        name: 'county'
                    },
                    {
                        name: 'user'
                    },
                    {
                        name: 'role'
                    },
                    {
                        condition: 'OR',
                        rules: [
                            {
                                name: 'currentlyAssigned'
                            },
                            {
                                name: 'futureWorkflow'
                            }
                        ]
                    }

                ]
            }
        ]
    },
    effects: {
        1: [
            {
                type: 'load',
                name: 'county',
                "read": [
                    {
                        url: `${Admin}/api/Sites/All/Active`,
                        type: 'get',
                        saveAs: {
                            key: 'items'
                        }
                    }
                ]
            },
        ],
        2: [
            {
                type: 'load',
                name: 'user'
            }
        ],
        3: [
            {
                type: 'load',
                name: 'role'
            }
        ],
        4: [
            {
                type: 'enable',
                name: 'switchUser'
            }
        ],
        5: [
            {
                type: 'load',
                name: 'grid'
            }
        ],
        6: [
            {
                type: 'load',
                name: 'grid'
            }
        ],
        7: [
            {
                type: 'open',
                name: 'switchUser'
            }
        ],
    }
}

export default switchusersgrid

