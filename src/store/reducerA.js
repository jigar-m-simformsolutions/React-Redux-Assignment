import actionType from '../Actions'

const initialState = {
    a : 1,
}

const reducerA = (state = initialState,action) => {
    
    switch (action.type) {
        case actionType.UpdateA :
            return {
                ...state,
                a : state.a + action.b   
            }
        default:
            break;
    }

    return state;
}

export default reducerA;