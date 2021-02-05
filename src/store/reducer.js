import actionType from '../Actions'

const initialState = {
    age : 21,
    i : 0,
    confirmName : false,
    Name : '',
    result : [],
    EvenAge : [],
    OddAge : [],
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case actionType.NameEnter :
            var name = window.prompt('Enter Name :');
            var Confirm = window.confirm('Confirm or Deny');
            if(Confirm === false){
                return {
                    ...state,
                    Name : name,
                    confirmName : false
                }
            }
            else {
                return {
                    ...state,
                    Name : name,
                    confirmName : true
                }
            }
        case actionType.AgeUp:
            return{
                ...state,
                age : state.age + 1
            }   
        case actionType.AgeDown:
            return{
                ...state,
                age : state.age - 1
            }     
        case actionType.AddAge :
            const age = ++state.age;
            const i = ++state.i;
            return {
                ...state,
                result : state.result.concat({id : i,value : age})
            }
        case actionType.DeleteAge : 
            const newResult = state.result.filter(result => result.id !== action.DltId)
            return {
                ...state,
                result: newResult,
            }
        case actionType.EvenAge:
            const newEvenAge =  state.result.filter(
                function(items){
                    return (items.value % 2 === 0);
                }
            );
            return {
                ...state,
                EvenAge : newEvenAge,
            }
        case actionType.OddAge :
            const newOddAge =  state.result.filter(
                function(items){
                    return (items.value % 2 !== 0);
                }
            );
            return {
                ...state,
                OddAge : newOddAge,
            }
        default:
            break;
    }

    return state;
}

export default reducer;