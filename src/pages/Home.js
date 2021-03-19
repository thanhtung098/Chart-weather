import React, { useEffect, useCallback,  useState, useRef, useMemo } from 'react'
import Header from '../components/Header/Header'
import WeatherChart from '../components/WeatherChart/WeatherChart'
import NowWeather from '../components/NowWeather/NowWeather'
import Map from '../components/Map/Map'
import ListWeatherNextDay from '../components/ListWeatherNextDay/ListWeatherNextDay'
import weatherApi from '../api/weatherApi.js'
import { connect } from "react-redux"
import { actGetListDataWeatherChart, actGetDataNowWeather } from '../actions'
const Home = (props) => {
    const [content, setContent] = useState([])
    const [dataNowWeather, setDataNowWeather] = useState([])
    const [dataListNextDay, setDataListNextDay] = useState([])
    const [check, setCheck] = useState(false)

    const getDataTide = async () => {
        const respone = await weatherApi.get('forecast.json', {
            params: {
                q: 'singapore',
                days: '3'
            }
        })
        if(respone.data) {
            setContent(respone.data.forecast.forecastday[0].hour)
            setDataNowWeather(respone.data.current)
            setDataListNextDay(respone.data.forecast.forecastday)
            setCheck(true)
            props.getListDataWeatherChart(content)
            props.getDataNowWeather(dataNowWeather)
            props.getDataNowWeather(dataListNextDay)
        }
        
    }
    useEffect(() => {
        getDataTide()
    },[check])
    return (
        <div className="top-content">
            <Header></Header>
            <NowWeather dataNowWeather= {dataNowWeather}></NowWeather>
            <WeatherChart></WeatherChart>
            <Map></Map>
            <ListWeatherNextDay dataListNextDay = {dataListNextDay}></ListWeatherNextDay>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListDataWeatherChart: (content) => {
            dispatch(actGetListDataWeatherChart(content))
        },
        getDataNowWeather: (dataNowWeather) => {
            dispatch(actGetDataNowWeather(dataNowWeather))
        },
    }
}
export default connect(null, mapDispatchToProps)(Home)