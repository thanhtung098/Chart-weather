import { LIST_DATA_CHART_WEATHER, LIST_DATA_NOW_WEATHER } from '../const/index'

const weatherReducers = (state = [], action) => {
    switch(action.type) {
        case LIST_DATA_CHART_WEATHER:
            state = {content: action.content}
            return state
        case LIST_DATA_NOW_WEATHER:
            state = {dataNowWeather: action.dataNowWeather ,content: state.content}
            return state
        default: 
            return state
    }
}

export default weatherReducers