import React from 'react'
import { useSelector } from "react-redux"
import ItemDay from "./ItemDay/ItemDay"
import '../../helper'
import './ListWeatherNextDay.css'
const ListWeatherNextDay = (props) => {
    const data =  useSelector((state) => {
        return state
    })
    let dataNextDay = []
    if(data.dataWeather) {
        dataNextDay = data.dataWeather.dataListNextDay
    }
    const listItems = dataNextDay.map((val) =>
        <ItemDay item = {val} key = {val.date_epoch}></ItemDay>
    );
    return (
        <div className="list-weather-next-day">
            {listItems}
        </div>
    )
}

export default ListWeatherNextDay