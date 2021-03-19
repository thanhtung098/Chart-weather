import React from 'react'
import './ListWeatherNextDay.css'
const ListWeatherNextDay = (props) => {
    return (
        <div className="list-weather-next-day">
            <div className="item-day">
                <div className="block-date-txt">
                    <div className="icon-weather">
                        <h1>Fri</h1>
                        <img src="//cdn.weatherapi.com/weather/64x64/day/176.png" />
                    </div>
                </div>
                <div className="description-txt">
                    <div className="temp-wind">
                        <h3>Patchy rain possible</h3>
                        <span>
                            <img src="../icon-item.png" />
                            26-30.4 ℃ &#8451;
                        </span>
                        <span>
                        <img src="../icon-wind-blue.png" />
                        11.2-18km/h
                        </span>
                    </div>
                </div>
            </div>
            <div className="item-day">
                <div className="block-date-txt">
                    <div className="icon-weather">
                        <h1>Fri</h1>
                        <img src="//cdn.weatherapi.com/weather/64x64/day/176.png" />
                    </div>
                </div>
                <div className="description-txt">
                    <div className="temp-wind">
                        <h3>Patchy rain possible</h3>
                        <span>
                            <img src="../icon-item.png" />
                            26-30.4 ℃ &#8451;
                        </span>
                        <span>
                        <img src="../icon-wind-blue.png" />
                        11.2-18km/h
                        </span>
                    </div>
                </div>
            </div>
            <div className="item-day">
                <div className="block-date-txt">
                    <div className="icon-weather">
                        <h1>Fri</h1>
                        <img src="//cdn.weatherapi.com/weather/64x64/day/176.png" />
                    </div>
                </div>
                <div className="description-txt">
                    <div className="temp-wind">
                        <h3>Patchy rain possible</h3>
                        <span>
                            <img src="../icon-item.png" />
                            26-30.4 ℃ &#8451;
                        </span>
                        <span>
                        <img src="../icon-wind-blue.png" />
                        11.2-18km/h
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListWeatherNextDay