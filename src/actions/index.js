import { LIST_DATA_CHART_WEATHER, LIST_DATA_NOW_WEATHER } from "../const/index"
export const actGetListDataWeatherChart = (content) => {
    return {
        type: LIST_DATA_CHART_WEATHER,
        content
    }
}
export const actGetDataNowWeather = (dataNowWeather) => {
    return {
        type: LIST_DATA_NOW_WEATHER,
        dataNowWeather
    }
}