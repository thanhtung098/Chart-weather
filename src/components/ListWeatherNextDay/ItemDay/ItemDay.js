import React from 'react'
import getDay from '../../../helper'
const ItemDay = (props) => {
    let val = props.item
    let txtDate = (getDay(val.date) + ' ').split(' ')
    return (
        <div className="item-day">
            <div className="block-date-txt">
                <div className="icon-weather">
                    <h1>{txtDate[0]}</h1>
                    <img src={val.day.condition.icon} />
                </div>
            </div>
            <div className="description-txt">
                <div className="temp-wind">
                    <h3>{val.day.condition.text}</h3>
                    <span>
                        <img src="../icon-item.png" />
                        {val.day.maxtemp_c} - {val.day.mintemp_c} &#8451;
                    </span>
                    <span>
                    <img src="../icon-wind-blue.png" />
                    {val.day.avgvis_km} - {val.day.maxwind_kph} km/h
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ItemDay 