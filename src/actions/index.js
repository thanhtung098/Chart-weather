import { LIST_DATA_CHART_WEATHER, LIST_DATA_NOW_WEATHER, LIST_DATA_NEXT_DAY_WEATHER } from "../const/index"
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
export const actGetDataListNextDayWeather = (dataListNextDay) => {
    return {
        type: LIST_DATA_NEXT_DAY_WEATHER,
        dataListNextDay
    }
}