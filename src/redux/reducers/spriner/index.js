
// ** Initial State
const initialState = {
    isLoading: false,
};

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Loader':
            return { ...state, isLoading: action.value };
        default:
            return state
    }
}

export default loaderReducer
