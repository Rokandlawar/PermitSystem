const AdminConfig = 'http://development.delasoft.com:8443/UPA-adminconfig'
const Admin = 'http://development.delasoft.com:8443/UPA-admin'
const switchusers = {
    "type": "switchusers",
    "key": "switchusers",
    "name": "switchusers",
    // extraProps: {
    //     "crud": {
    //         "read": [{
    //             //"url": "http://localhost:9001/api/SitePermitTypes",
    //             "url": `${AdminConfig}/api/SitePermitTypes/{routeid}`,
    //             type: 'get',
    //             "routeProps": [{
    //                 "name": "routeid"
    //             }]
    //         }],
    //         "update": [{
    //             //"url": "http://localhost:9001/api/SitePermitTypes/Update"
    //             "url": `${AdminConfig}/api/SitePermitTypes/Update`,
    //             type: 'put'
    //         }]
    //     }
    // },
    layout: {
        group: [
            {
                order: 0,
                type: 'div',
                className: 'row',
                components: ['county', 'user', 'role']

            },
            {
                order: 1,
                type: 'div',
                className: 'row',
                components: ['currentlyassigned', 'futureworkflow']
            }
        ],

        county: {
            order: 0,
            type: 'div',
            className: 'col-4',
            sub: {
                type: 'div',
                className: 'col-4',
            }
        },
        user: {
            order: 1,
            type: 'div',
            className: 'col-4',
            sub: {
                type: 'div',
                className: 'col-4'
            }
        },
        role: {
            order: 2,
            type: 'div',
            className: 'col-4',
            sub: {
                type: 'div',
                className: 'col-4',
            }
        },
        currentlyassigned: {
            order: 3,
            type: 'div',
            className: 'col-4',
            sub: {
                type: 'div',
                className: 'col-4'
            }
        },
        futureworkflow: {
            order: 4,
            type: 'div',
            className: 'col-4',
            sub: {
                type: 'div',
                className: 'col-4'
            }
        }
    },
    "components": {
        county: {
            "type": "dropdown",
            "key": "county",
            order: 0,
            "label": "Select County",
            "name": "county",
            extraProps: {
                "crud": {
                    "read": [{
                        // "url": `${Admin}/api/Sites/All`,
                        type: 'get'
                    }]
                },
                transformProps: {
                    label: 'Name',
                    value: 'Id'
                }
            }

        },
        user: {
            "type": "dropdown",
            "key": "user",
            order: 1,
            "label": "Select User",
            "name": "user"
        },
        role: {
            "type": "dropdown",
            "key": "role",
            order: 2,
            "label": "Select role",
            name: "role"
        },
        switchuser: {
            "type": "button",
            "key": "futureworkflow",
            order: 3,
            "label": "Future Workflow",
            name: "futureworkflow",
            extraProps: {
                initialvalue: 'N'
            }
        },
        currentlyassigned: {
            "type": "checkbox",
            "key": "currentlyassigned",
            order: 4,
            "label": "Currently Assigned",
            name: "currentlyassigned",
            extraProps: {
                initialvalue: 'N',
                transformProps: {
                    'true': "Y",
                    'false': "N",
                    "Y": true,
                    "N": false
                }
            }

        },
        futureworkflow: {
            "type": "checkbox",
            "key": "futureworkflow",
            order: 5,
            "label": "Future Workflow",
            name: "futureworkflow",
            extraProps: {
                initialvalue: 'N',
                transformProps: {
                    'true': "Y",
                    'false': "N",
                    "Y": true,
                    "N": false
                }
            }

        },
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
                        saveAs:{
                            key:'items'
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

export default switchusers

