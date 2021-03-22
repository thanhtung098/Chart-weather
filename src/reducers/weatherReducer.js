import { LIST_DATA_CHART_WEATHER, LIST_DATA_NOW_WEATHER, LIST_DATA_NEXT_DAY_WEATHER } from '../const/index'

const weatherReducers = (state = {content: [], dataNowWeather: [], dataListNextDay: []}, action) => {
    switch(action.type) {
        case LIST_DATA_CHART_WEATHER:
            return {...state,content: action.content}
        case LIST_DATA_NOW_WEATHER:
            return {...state,dataNowWeather: action.dataNowWeather}
        case LIST_DATA_NEXT_DAY_WEATHER:
            return {...state,dataListNextDay: action.dataListNextDay}
        default: 
            return state
    }
}

export default weatherReducers