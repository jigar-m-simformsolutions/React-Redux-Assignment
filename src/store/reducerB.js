import actionType from '../Actions'

const initialState = {
    b : 1,
}

const reducerB = (state = initialState,action) => {
    
    switch (action.type) {
        case actionType.UpdateB : 
            return {
                ...state,
                a : action.a + action.b   
            }
        default:
            break;
    }

    return state;
}

export default reducerB;