import { createLayout } from './layout'
import Stepper from './stepper'
import Tabs from './tabs'


export const layoutTypes = {
    default: createLayout,
    stepper: Stepper,
    tab: Tabs
}