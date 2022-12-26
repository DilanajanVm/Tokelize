// ** Redux Imports
import {combineReducers} from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import loader from './spriner'
import filter from './charity-filter'
import language from './language-picker'

const rootReducer = combineReducers({
    auth,
    navbar,
    layout,
    loader,
    filter,
    language

});

export default rootReducer
