import updateCollectonType from './shop.types';

const INTIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
};

const shopReducer = ( state = INTIAL_STATE, actions) => {
    switch(actions.type){
        case updateCollectonType.Fetch_Collection_Start:
            return{
                ...state,
                isFetching: true
            }
        case updateCollectonType.Fetch_Collection_Success:
            return{
                ...state,
                isFetching: false,
                collections: actions.payload
            }
        case updateCollectonType.Fetch_Collection_Error:
            return{
                ...state,
                isFetching: false,
                errorMessage: actions.payload
            }
        default:
            return state;
    }
}

export default shopReducer;

