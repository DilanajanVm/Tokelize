// ** Initial State
const initialState = {
    isLog: false
};

const reFreshReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RefreshNavBard':
            return {...state, isLog: action.value};
        default:
            return state
    }
}

export default reFreshReducer
