import StepTypes from '../types/Step.type'

const getAllCustomersListStarted = () => ({
    type: StepTypes.STEP_STARTED,
    payload: true
});

const getAllCustomersListSuccess = (data:any) => ({
    type: StepTypes.STEP_STARTED,
    payload: data
});

const getAllCustomersListError = (error:any) => ({
    type: StepTypes.STEP_ERROR,
    payload: error
});