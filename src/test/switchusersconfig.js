const AdminConfig = 'http://development.delasoft.com:8443/UPA-adminconfig'
const Admin = 'http://development.delasoft.com:8443/UPA-admin'
const switchusersconfig = {
    "type": "form",
    "key": "switchusers",
    "name": "switchuserssettings",
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
            },
            {
                order: 2,
                type: 'div',
                className: 'row',
                components: ['switchuserbtn']
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
        },
        switchuserbtn: {
            order: 5,
            type: 'div',
            className: 'col-4',
            sub: {
                type: 'div',
                className: 'col-4'
            }
        }
    },
    values: {
        county: '',
        user: '',
        role: '',
        futureworkflow: false,
        currentlyassigned: false
    },
    sharedProps: {
        'county': 'countys',
        'user': 'users',
        'role': 'roles',
        'futureworkflow': 'futureworkflows',
        'currentlyassigned': 'currentlyassigneds'
    },
    "components": {
        county: {
            "type": "dropdown",
            "key": "county",
            "label": "Select County",
            "name": "county",
            extraProps: {
                transformProps: {
                    label: 'Name',
                    value: 'Id'
                }
            }

        },
        user: {
            "type": "dropdown",
            "key": "user",
            "label": "Select User",
            "name": "user",
            extraProps: {
                transformProps: {
                    label: 'name',
                    value: 'id'
                }
            }
        },
        role: {
            "type": "dropdown",
            "key": "role",
            "label": "Select role",
            name: "role",
            extraProps: {
                transformProps: {
                    label: 'name',
                    value: 'id'
                }
            }
        },
        switchuserbtn: {
            "type": "button",
            "key": "switchuserbtn",
            "label": "Switch User",
            name: "switchuserbtn",
            variant: "contained",
            color: "primary",
            disabled: true
        },
        currentlyassigned: {
            "type": "checkbox",
            "key": "currentlyassigned",
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
            'county': {
                run: [2]
            },
            'user': {
                run: [3]
            },
            'role': {
                run: [4]
            },
            'currentlyassigned': {
                check: [8],
                run: [5]
            },
            'futureworkflow': {
                check: [8],
                run: [5]
            }
        },
        click: {
            'switchuserbtn': {
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
                name: 'currentlyassigned'
            }
        ],
        7: [
            {
                type: 'click',
                name: 'switchuserbtn'
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
                                name: 'currentlyassigned'
                            },
                            {
                                name: 'futureworkflow'
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
                name: 'user',
                "read": [
                    {
                        url: `${Admin}/api/UPAUsers/UsersBySiteId/{siteid}`,
                        type: 'get',
                        matchProps: [{
                            name: 'county',
                            key: 'siteid'
                        }],
                        saveAs: {
                            key: 'items'
                        }
                    }
                ]
            }
        ],
        3: [
            {
                type: 'load',
                name: 'role',
                "read": [
                    {
                        url: `${Admin}/api/UPARoles/UserRoles/{userId}`,
                        type: 'get',
                        matchProps: [{
                            name: 'user',
                            key: 'userId'
                        }],
                        saveAs: {
                            key: 'items'
                        }
                    }
                ]
            }
        ],
        4: [
            {
                type: 'enable',
                name: 'switchuserbtn',
                enable: {
                    disabled: false
                }
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
                name: 'switchuserbtn'
            }
        ],
    }
}

export default switchusersconfig

