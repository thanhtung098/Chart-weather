import React from 'react'
import { useSelector } from "react-redux"
import './NowWeather.css'
const NowWeather = (props) => {
    let dataCondition = {}
    const data =  useSelector((state) => {
        return state
    })
    if(data.dataWeather.dataNowWeather === '' || data.dataWeather.dataNowWeather.length === 0) {
        return (<div> Loading</div>)
    }
    dataCondition = data.dataWeather.dataNowWeather
    return (
            <div>
                <div className="now-weather">
                    <div className="icon-windy"><img src={dataCondition.condition.icon} /></div>
                    <div className="status-weather">
                        {dataCondition.condition.text}
                    </div>
                    <div className="temp-weather-percent">
                        <span className="temp-text"><img src="../thermometer.png" />{dataCondition.temp_c} &#8451; </span>
                        <span className="temp-text-humidity"><img src="../humidity.png" />{dataCondition.humidity} % </span>
                    </div>
                </div>
                <div className="list-function">
                    <ul>
                        <li>
                            <span>PSI</span>
                            <span>{dataCondition.pressure_in}</span>
                        </li>
                        <li>
                            <span>FEELLIKE</span>
                            <span>{dataCondition.feelslike_c}</span>
                        </li>
                        <li>
                            <span>CLOUD</span>
                            <span>{dataCondition.cloud}</span>
                        </li>
                        <li>
                            <span>UV</span>
                            <span>{dataCondition.uv}</span>
                        </li>
                        <li>
                            <span>WIND</span>
                            <span>{dataCondition.wind_kph}</span>
                        </li>
                        <li>
                            <span>WIND DIRECTION</span>
                            <span>{dataCondition.wind_dir}</span>
                        </li>
                    </ul> 
                 </div>
            </div>
    )
    
}
export default NowWeather