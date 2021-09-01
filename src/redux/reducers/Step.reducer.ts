import StepTypes from '../types/Step.type'

const initialState={
    step1:[],
    step2:[],
    step4:[],
    loading:false,
    error:null
}

export default function StepReducer(state:any=initialState,action:any){
    switch(action.type){
        case StepTypes.STEP_STARTED:
            return{
                ...state,
                loading:true,
                error:null
            }
        case StepTypes.STEP_SUCCESS:
            return{
                ...state,
                loading:true,
                error:null,
                step1:action.payload,
                step2:action.payload,
                step3:action.payload

            }
        case StepTypes.STEP_ERROR:
            return{
                ...state,
                loading:true,
                error:action.payload
            }
        default:
            return state;
    }
}