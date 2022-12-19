// ** Initial State
const initialState = {
    filter: {}
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'charityFilter':
            return {...state, filter: action.value};
        default:
            return state
    }
}

export default filterReducer
