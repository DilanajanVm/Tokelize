

// ** Handle Loader
export const handleLoader = (value) => {
    return dispatch => {
        dispatch({ type: 'Loader',value})
    }
};
