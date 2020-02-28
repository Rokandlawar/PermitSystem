import switchusersconfig from './switchusersconfig'

const AdminConfig = 'http://development.delasoft.com:8443/UPA-adminconfig'
const Admin = 'http://development.delasoft.com:8443/UPA-admin'
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
    sharedProps: {
        countys: '',
        users: '',
        roles: '',
        futureWorkFlows: false,
        currentlyAssigneds: false
    },
    mapSharedProps: {
        switchusersgrid:['countys','users','roles']
    },
    "components": {
        switchuserssettings: switchusersconfig,
        switchusersgrid: {
            type: 'grid',
            name: 'switchusersgrid'
        }
    }
}

export default switchusersgrid

