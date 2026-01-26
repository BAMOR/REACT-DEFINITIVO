import type { Activity } from "../types"

export type ActiviryActions =
{type: 'save-activity', payload:{newActivity:Activity}}

type activityState ={
    activities: Activity[]


}

export const initialState:activityState={
    activities: []

}

export const activityReducer = (
    state : activityState = initialState,
    action: ActiviryActions
) => {

    if(action.type === 'save-activity') {
        // este codigo maneja la logica para manejar el state
        console.log('desde el tupe de save-activity')
    }
    

}