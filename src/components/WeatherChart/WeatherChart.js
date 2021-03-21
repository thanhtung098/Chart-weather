import React, { useEffect, useCallback, useState } from 'react'
import { connect, useSelector } from "react-redux"
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './WeatherChart.css'

const WeatherChart = () => {
    const dataWeather =  useSelector((state) => {
        return state
    })
    let dataChart = []
    if(dataWeather.dataWeather.content.length === 0) {
        return (<div>loading</div>)
    }
    dataWeather.dataWeather.content.map((data) => {
        dataChart.push(data.dewpoint_c)
    })

    const options = {
        title: {
          text: 'Tide chart'
        },
        series: [
          {
            data: dataChart
          }
        ]
    };
    return (
        <div className="ui tide-chart container">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}
export default WeatherChart