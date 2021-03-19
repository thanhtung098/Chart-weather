import { combineReducers } from 'redux'
import weatherReducers from './weatherReducer.js'

export default combineReducers({
    dataWeather: weatherReducers
})