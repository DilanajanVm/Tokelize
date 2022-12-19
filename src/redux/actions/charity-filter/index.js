

// ** Handle filter
export const handleCharityFilter = (value) => {
    return dispatch => {
        dispatch({ type: 'charityFilter',value})
    }
};
