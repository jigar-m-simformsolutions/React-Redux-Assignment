import actionType from '../Actions'

const initialState = {
    b : 1,
}

const reducerB = (state = initialState,action) => {
    
    switch (action.type) {
        case actionType.UpdateB : 
            return {
                ...state,
                b : action.a + state.b   
            }
        default:
            break;
    }

    return state;
}

export default reducerB;