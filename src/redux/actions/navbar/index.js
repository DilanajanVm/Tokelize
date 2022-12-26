// ** Handle filter
export const handleRefreshNavBar = (value) => {
    return dispatch => {
        dispatch({type: 'RefreshNavBard', value})
    }
};
