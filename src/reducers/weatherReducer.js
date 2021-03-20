import { LIST_DATA_CHART_WEATHER, LIST_DATA_NOW_WEATHER } from '../const/index'

const weatherReducers = (state = {content: [], dataNowWeather: []}, action) => {
    switch(action.type) {
        case LIST_DATA_CHART_WEATHER:
            state.content = action.content
            return {...state.content,content: action.content}
        case LIST_DATA_NOW_WEATHER:
            state.dataNowWeather = action.dataNowWeather
            return state
        default: 
            return state
    }
}

export default weatherReducers