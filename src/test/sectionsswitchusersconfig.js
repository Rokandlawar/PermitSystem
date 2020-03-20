const AdminConfig = 'http://development.delasoft.com:8443/UPA-adminconfig'
const Admin = 'http://development.delasoft.com:8443/UPA-admin'
const switchusersconfig = {
    "type": "sectons",
    "key": "switchusers",
    "name": "switchuserssettings",
    sections: {
        type: 'stepper',
        sectionNames: ['Header', 'Site', 'Highway', 'Standards', 'SafetyAndOps'],
        steps: ['Header', 'Site', 'Highway', 'Standards', 'SafetyAndOps']
    },
    layout: {
        Header: {
            group: [
                {
                    order: 0,
                    type: 'div',
                    className: 'row',
                    components: ['LandUseAdt']

                }
            ],
            LandUseAdt: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }

            }
        },
        Site: {
            group: [
                {
                    order: 0,
                    type: 'div',
                    className: 'row',
                    components: ['LikeToDo', 'QuestionComments']

                },
                {
                    order: 1,
                    type: 'div',
                    className: 'row',
                    components: ['RecordId', 'RecordStatus', 'ProcessType']
                },
                {
                    order: 2,
                    type: 'div',
                    className: 'row',
                    components: ['InquiryType', 'PermitSpecialist', 'InquiryStatus', 'InquiryTypeReason']
                },
                {
                    order: 3,
                    type: 'div',
                    className: 'row',
                    components: ['PropertyAddress', 'PropertyCity', 'PropertyState', 'PropertyZip']
                }

            ],
            LikeToDo: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }

            },
            QuestionComments: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            RecordId: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            RecordStatus: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            ProcessType: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            InquiryType: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            PermitSpecialist: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }

            },
            InquiryStatus: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            InquiryTypeReason: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            PropertyAddress: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            PropertyCity: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            PropertyState: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            PropertyZip: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            }
        },
        Highway: {
            group: [
                {
                    order: 0,
                    type: 'div',
                    className: 'row',
                    components: ['HighwayAADT', 'UrbalRural', 'HighwayClass', 'FederalFunctionalClass']

                },
                {
                    order: 1,
                    type: 'div',
                    className: 'row',
                    components: ['PostedSpeed', 'Redevelopment', 'HighwaySubClass', 'OneWayConfiguration']
                },
                {
                    order: 2,
                    type: 'div',
                    className: 'row',
                    components: ['DesignSpeed', 'MPO', 'HighwaySegmentDesignation']
                },
                {
                    order: 3,
                    type: 'div',
                    className: 'row',
                    components: ['UCR']
                }

            ],
            HighwayAADT: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            UrbalRural: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            HighwayClass: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            FederalFunctionalClass: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            PostedSpeed: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            Redevelopment: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            HighwaySubClass: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            OneWayConfiguration: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            DesignSpeed: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            MPO: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            HighwaySegmentDesignation: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            UCR: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            }
        },
        Standards: {
            group: [
                {
                    order: 0,
                    type: 'div',
                    className: 'row',
                    components: ['AccessStandards', 'RestrictedArea', 'SpacingDistanceRight', 'SpacingStandard']

                },
                {
                    order: 1,
                    type: 'div',
                    className: 'row',
                    components: ['romp', 'NOofLanesCrossed', 'SpacingDistanceLeft', 'InterchangeSpacingStandard']
                },
                {
                    order: 2,
                    type: 'div',
                    className: 'row',
                    components: ['RompDistance', 'NoofLanes', 'BlockSpacingDistance', 'SightDistanceStandard']
                },
                {
                    order: 3,
                    type: 'div',
                    className: 'row',
                    components: ['mainlinecrossing', 'laneconfig', 'measuredISDR', 'ChannelizationStandard']
                },
                {
                    order: 4,
                    type: 'div',
                    className: 'row',
                    components: ['PreAssessmentAction', 'TIAVolumeThresolds', 'MeasuredISDL', 'ISDDS', 'ISDPS']
                }


            ],
            AccessStandards: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            RestrictedArea: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            SpacingDistanceRight: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            SpacingStandard: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            romp: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            NOofLanesCrossed: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            SpacingDistanceLeft: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            InterchangeSpacingStandard: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            RompDistance: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            NoofLanes: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            BlockSpacingDistance: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            SightDistanceStandard: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            mainlinecrossing: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            laneconfig: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            measuredISDR: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            ChannelizationStandard: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            PreAssessmentAction: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            TIAVolumeThresolds: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            MeasuredISDL: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            ISDDS: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            ISDPS: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            }
        },
        SafetyAndOps: {
            group: [
                {
                    order: 0,
                    type: 'div',
                    className: 'row',
                    components: ['QueuingImpedesTurns', 'StateCrashRate']

                },
                {
                    order: 1,
                    type: 'div',
                    className: 'row',
                    components: ['LeftTurnConflicts', 'LocalisedCrashRate']
                },
                {
                    order: 2,
                    type: 'div',
                    className: 'row',
                    components: ['SeperationDistanceInadequate', 'GreaterThan20']
                },
                {
                    order: 3,
                    type: 'div',
                    className: 'row',
                    components: ['WeavingDistanceInsufficient', 'Spissite95']
                },
                {
                    order: 4,
                    type: 'div',
                    className: 'row',
                    components: ['SafetyOperationsConcerns']
                }


            ],
            QueuingImpedesTurns: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            StateCrashRate: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            LeftTurnConflicts: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            LocalisedCrashRate: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            SeperationDistanceInadequate: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            GreaterThan20: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            WeavingDistanceInsufficient: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            Spissite95: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
            SafetyOperationsConcerns: {
                order: 0,
                type: 'div',
                className: 'col-4',
                sub: {
                    type: 'div',
                    className: 'col-4',
                }
            },
        },


    },
    values: {
        'LandUseAdt': 0,
        'LikeToDo': '',
        'QuestionComments': '',
        'RecordId': '',
        'RecordStatus': '',
        'ProcessType': '',
        'InquiryType': '',
        'PermitSpecialist': '',
        'InquiryStatus': '',
        'InquiryTypeReason': '',
        'PropertyAddress': '',
        'PropertyCity': '',
        'PropertyState': '',
        'PropertyZip': '',
        'HighwayAADT': '',
        'UrbalRural': '',
        'HighwayClass': '',
        'FederalFunctionalClass': '',
        'PostedSpeed': '',
        'Redevelopment': '',
        'HighwaySubClass': '',
        'OneWayConfiguration': '',
        'DesignSpeed': '',
        'MPO': '',
        'HighwaySegmentDesignation': '',
        'UCR': '',
        'AccessStandards': '',
        'RestrictedArea': '',
        'SpacingDistanceRight': '',
        'SpacingStandard': '',
        'romp': '',
        'NOofLanesCrossed': '',
        'SpacingDistanceLeft': '',
        'InterchangeSpacingStandard': '',
        'RompDistance': '',
        'NoofLanes': '',
        'BlockSpacingDistance': '',
        'SightDistanceStandard': '',
        'mainlinecrossing': '',
        'laneconfig': '',
        'measuredISDR': '',
        'ChannelizationStandard': '',
        'PreAssessmentAction': false,
        'TIAVolumeThresolds': '',
        'MeasuredISDL': '',
        'ISDDS': '',
        'ISDPS': '',
        'QueuingImpedesTurns': '',
        'StateCrashRate': '',
        'LeftTurnConflicts': '',
        'LocalisedCrashRate': '',
        'SeperationDistanceInadequate': '',
        'GreaterThan20': '',
        'WeavingDistanceInsufficient': '',
        'Spissite95': '',
        'SafetyOperationsConcerns': ''
    },
    sharedProps: {
        'county3': 'countys',
        'user3': 'users',
        'role3': 'roles',
        'futureworkflow3': 'futureworkflows',
        'currentlyassigned3': 'currentlyassigneds'
    },
    "components": {
        LandUseAdt: {
            "type": "textfield",
            "key": "LandUseAdt",
            "label": "Land Use Adt",
            "name": "LandUseAdt"
        },
        LikeToDo: {
            "type": "dropdown",
            "key": "LikeToDo",
            "label": "What would you like to do",
            "name": "LikeToDo",
            extraProps: {
                transformProps: {
                    label: 'Name',
                    value: 'Id'
                }
            }

        },
        QuestionComments: {
            "type": "textfield",
            "key": "QuestionComments",
            "label": "Question Comments",
            "name": "user",
            multiline: true,
            rows: 10,
        },
        RecordId: {
            "type": "textfield",
            "key": "RecordId",
            "label": "Related Ames Record Id",
            name: "RecordId"
        },
        RecordStatus: {
            "type": "textfield",
            "key": "RecordStatus",
            "label": "Ames Record Status",
            name: "RecordStatus"
        },
        ProcessType: {
            "type": "textfield",
            "key": "ProcessType",
            "label": "Process Type",
            name: "ProcessType"
        },
        InquiryType: {
            "type": "textfield",
            "key": "InquiryType",
            "label": "Inquiry Type",
            name: "InquiryType"
        },
        PermitSpecialist: {
            "type": "dropdown",
            "key": "county",
            "label": "Permit Specialist",
            "name": "PermitSpecialist",
            extraProps: {
                transformProps: {
                    label: 'Name',
                    value: 'Id'
                }
            }

        },
        InquiryStatus: {
            "type": "dropdown",
            "key": "InquiryStatus",
            "label": "Inquiry Status",
            "name": "InquiryStatus",
            extraProps: {
                transformProps: {
                    label: 'name',
                    value: 'id'
                }
            }
        },
        InquiryTypeReason: {
            "type": "dropdown",
            "key": "InquiryTypeReason",
            "label": "Inquiry Type Reason",
            name: "InquiryTypeReason",
            extraProps: {
                transformProps: {
                    label: 'name',
                    value: 'id'
                }
            }
        },
        PropertyAddress: {
            "type": "textfield",
            "key": "PropertyAddress",
            "label": "Property Address",
            "name": "PropertyAddress"
        },
        PropertyCity: {
            "type": "textfield",
            "key": "PropertyCity",
            "label": "Property City",
            "name": "PropertyCity"
        },
        PropertyState: {
            "type": "textfield",
            "key": "PropertyState",
            "label": "Property State",
            "name": "PropertyState"
        },
        PropertyZip: {
            "type": "textfield",
            "key": "PropertyZip",
            "label": "Property Zip",
            "name": "PropertyZip"
        },
        HighwayAADT: {
            "type": "textfield",
            "key": "HighwayAADT",
            "label": "Highway AADT",
            "name": "HighwayAADT"
        },
        UrbalRural: {
            "type": "radiogroup",
            "key": "UrbalRural",
            "label": "Urbal Rural",
            name: "UrbalRural"
        },
        HighwayClass: {
            "type": "dropdown",
            "key": "HighwayClass",
            "label": "Highway Class",
            "name": "HighwayClass",
            extraProps: {
                transformProps: {
                    label: 'name',
                    value: 'id'
                }
            }
        },
        FederalFunctionalClass: {
            "type": "dropdown",
            "key": "FederalFunctionalClass",
            "label": "Federal Functional Class",
            "name": "FederalFunctionalClass",
            extraProps: {
                transformProps: {
                    label: 'name',
                    value: 'id'
                }
            }
        },
        PostedSpeed: {
            "type": "textfield",
            "key": "PostedSpeed",
            "label": "Posted Speed",
            "name": "PostedSpeed"
        },
        Redevelopment: {
            "type": "radiogroup",
            "key": "Redevelopment",
            "label": "Redevelopment",
            name: "Redevelopment"
        },
        HighwaySubClass: {
            "type": "dropdown",
            "key": "HighwaySubClass",
            "label": "Highway SubClass",
            "name": "HighwaySubClass",
            extraProps: {
                transformProps: {
                    label: 'name',
                    value: 'id'
                }
            }
        },
        OneWayConfiguration: {
            "type": "dropdown",
            "key": "OneWayConfiguration",
            "label": "OneWay Configuration",
            "name": "OneWayConfiguration",
            extraProps: {
                transformProps: {
                    label: 'name',
                    value: 'id'
                }
            }
        },
        DesignSpeed: {
            "type": "textfield",
            "key": "DesignSpeed",
            "label": "Design Speed",
            "name": "DesignSpeed"
        },
        MPO: {
            "type": "radiogroup",
            "key": "MPO",
            "label": "MPO",
            name: "MPO"
        },
        HighwaySegmentDesignation: {
            "type": "dropdown",
            "key": "HighwaySegmentDesignation",
            "label": "Highway Segment Designation",
            "name": "HighwaySegmentDesignation",
            extraProps: {
                transformProps: {
                    label: 'name',
                    value: 'id'
                }
            }
        },
        UCR: {
            "type": "radiogroup",
            "key": "UCR",
            "label": "UCR",
            name: "UCR"
        },
        AccessStandards: {
            "type": "dropdown",
            "key": "AccessStandards",
            "label": "Access Standards",
            "name": "AccessStandards",
            extraProps: {
                transformProps: {
                    label: 'name',
                    value: 'id'
                }
            }
        },
        RestrictedArea: {
            "type": "radiogroup",
            "key": "RestrictedArea",
            "label": "Restricted Area",
            name: "RestrictedArea"
        },
        SpacingDistanceRight: {
            "type": "textfield",
            "key": "SpacingDistanceRight",
            "label": "Spacing Distance Right",
            "name": "HighwaySubClass"
        },
        SpacingStandard: {
            "type": "textfield",
            "key": "SpacingStandard",
            "label": "Spacing Standard",
            "name": "SpacingStandard"
        },
        romp: {
            "type": "radiogroup",
            "key": "romp",
            "label": "romp?",
            name: "romp"
        },
        NOofLanesCrossed: {
            "type": "dropdown",
            "key": "NOofLanesCrossed",
            "label": "NO of Lanes Crossed",
            "name": "NOofLanesCrossed"
        },
        SpacingDistanceLeft: {
            "type": "textfield",
            "key": "SpacingDistanceLeft",
            "label": "Spacing Distance Left",
            "name": "SpacingDistanceLeft"
        },
        InterchangeSpacingStandard: {
            "type": "textfield",
            "key": "InterchangeSpacingStandard",
            "label": "Interchange Spacing Standard",
            "name": "InterchangeSpacingStandard"
        },
        RompDistance: {
            "type": "textfield",
            "key": "RompDistance",
            "label": "Romp Distance",
            "name": "RompDistance"
        },
        NoofLanes: {
            "type": "textfield",
            "key": "NoofLanes",
            "label": "No of Lanes",
            "name": "NoofLanes"
        },
        BlockSpacingDistance: {
            "type": "textfield",
            "key": "BlockSpacingDistance",
            "label": "Block Spacing Distance",
            "name": "BlockSpacingDistance"
        },
        SightDistanceStandard: {
            "type": "textfield",
            "key": "SightDistanceStandard",
            "label": "Sight Distance Standard",
            "name": "SightDistanceStandard"
        },
        mainlinecrossing: {
            "type": "radiogroup",
            "key": "mainlinecrossing",
            "label": "Mainline/crossing",
            name: "mainlinecrossing"
        },
        laneconfig: {
            "type": "textfield",
            "key": "laneconfig",
            "label": "Lane Config",
            "name": "laneconfig"
        },
        measuredISDR: {
            "type": "textfield",
            "key": "measuredISDR",
            "label": "Measured ISD R",
            "name": "measuredISDR"
        },
        ChannelizationStandard: {
            "type": "radiogroup",
            "key": "ChannelizationStandard",
            "label": "Channelization Standard",
            "name": "ChannelizationStandard"
        },
        PreAssessmentAction: {
            "type": "checkbox",
            "key": "PreAssessmentAction",
            "label": "PreAssessmentAction",
            "name": "PreAssessmentAction"
        },
        TIAVolumeThresolds: {
            "type": "radiogroup",
            "key": "TIAVolumeThresolds",
            "label": "TIA Volume Thresolds",
            "name": "TIAVolumeThresolds",
            items: [
                {
                    name: 'Yes',
                    value: 'Y'
                },
                {
                    name: 'NO',
                    value: 'N'
                }
            ],
            extraProps: {
                transformProps: {
                    label: 'name',
                    value: 'value'
                }
            }
        },
        MeasuredISDL: {
            "type": "textfield",
            "key": "MeasuredISDL",
            "label": "Measured ISDL",
            "name": "MeasuredISDL"
        },
        ISDDS: {
            "type": "textfield",
            "key": "ISDDS",
            "label": "ISDDS",
            "name": "ISDDS"
        },
        ISDPS: {
            "type": "textfield",
            "key": "ISDPS",
            "label": "ISDPS",
            "name": "ISDPS"
        },
        QueuingImpedesTurns: {
            "type": "radiogroup",
            "key": "QueuingImpedesTurns",
            "label": "Queuing Impedes Turns",
            "name": "QueuingImpedesTurns"
        },
        StateCrashRate: {
            "type": "textfield",
            "key": "StateCrashRate",
            "label": "State Crash Rate",
            "name": "StateCrashRate"
        },
        LeftTurnConflicts: {
            "type": "radiogroup",
            "key": "LeftTurnConflicts",
            "label": "Left Turn Conflicts",
            "name": "LeftTurnConflicts"
        },
        LocalisedCrashRate: {
            "type": "textfield",
            "key": "LocalisedCrashRate",
            "label": "Localised Crash Rate",
            "name": "LocalisedCrashRate"
        },
        SeperationDistanceInadequate: {
            "type": "radiogroup",
            "key": "SeperationDistanceInadequate",
            "label": "Seperation Distance Inadequate",
            "name": "SeperationDistanceInadequate"
        },
        GreaterThan20: {
            "type": "radiogroup",
            "key": "GreaterThan20",
            "label": "Greater Than 20%",
            "name": "GreaterThan20"
        },
        WeavingDistanceInsufficient: {
            "type": "radiogroup",
            "key": "WeavingDistanceInsufficient",
            "label": "Weaving Distance Insufficient",
            "name": "WeavingDistanceInsufficient"
        },
        Spissite95: {
            "type": "radiogroup",
            "key": "Spissite95",
            "label": "95% Spis site",
            "name": "Spissite95"
        },
        SafetyOperationsConcerns: {
            "type": "radiogroup",
            "key": "SafetyOperationsConcerns",
            "label": "Safety Operations Concerns",
            "name": "SafetyOperationsConcerns"
        },
    },
    //LandUseAdt,
    //laneconfig,
    //HighwayAADT,
    //'TIAVolumeThresolds'
    mapActionsToEffects: {
        change: {
            'laneconfig': {
                check: [1.1],
                run: [1],
                uncheck: true
            },
            'LandUseAdt':{
                check:[1.1],
                run:[1],
                uncheck:true
            }
        }
    },
    actions: {
        1: [
            {
                type: 'change',
                name: 'laneconfig'
            }
        ],
        1.1: [
            {
                condition: 'OR',
                rules: [
                    {
                        name: 'LandUseAdt',
                        type: 'GreaterThan',
                        value: 1000
                    },
                    {
                        condition: 'AND',
                        rules: [
                            {
                                name: 'LandUseAdt',
                                type: 'GreaterThan',
                                value: 400
                            },
                            {
                                name: 'LandUseAdt',
                                type: 'LessThan',
                                value: 1001
                            },
                            {
                                condition: 'OR',
                                rules: [
                                    {
                                        condition: 'AND',
                                        rules: [
                                            {
                                                name: 'laneconfig',
                                                type: 'Equals',
                                                value: 2
                                            },
                                            {
                                                name: 'HighwayAADT',
                                                type: 'GreaterThan',
                                                value: 4999
                                            },
                                        ]
                                    },
                                    {
                                        condition: 'AND',
                                        rules: [
                                            {
                                                name: 'laneconfig',
                                                type: 'Equals',
                                                value: 3
                                            },
                                            {
                                                name: 'HighwayAADT',
                                                type: 'GreaterThan',
                                                value: 14999
                                            },
                                        ]
                                    },
                                    {
                                        condition: 'AND',
                                        rules: [
                                            {
                                                name: 'laneconfig',
                                                type: 'Equals',
                                                value: 4
                                            },
                                            {
                                                name: 'HighwayAADT',
                                                type: 'GreaterThan',
                                                value: 9999
                                            },
                                        ]
                                    },
                                    {
                                        condition: 'AND',
                                        rules: [
                                            {
                                                name: 'laneconfig',
                                                type: 'Equals',
                                                value: 5
                                            },
                                            {
                                                name: 'HighwayAADT',
                                                type: 'GreaterThan',
                                                value: 24999
                                            },
                                        ]
                                    }
                                ]
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
                type: 'check',
                name: 'TIAVolumeThresolds',
                'true': 'Y',
                'false': 'N'
            }
        ]
    }
}

export default switchusersconfig

