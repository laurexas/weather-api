import React from 'react';
import style from './index.module.scss';

interface WeatherInfo {
    date : any,
    temp: number,
    wind: number,
    pressure: number,
    humidity: number,
    icon: string,
    weather: string

}

const WeatherItem = (props: WeatherInfo) => {
    const [day,hour] = props.date.split(' ');
    return (
        <div>
            <div className={style.tableDate}>
                <span>{day}</span>
            </div>
            <div className={style.tableHeaders}>
                <span className={style.headerName}>Laikas</span>
                <span className={style.headerName}>Temperatūra</span>
                <span className={style.headerName}>Vėjas</span>
                <span className={style.headerName}>Slėgis</span>
                <span className={style.headerName}>Oras</span>
                <span className={style.headerName}>Drėgnumas</span>
            </div>
            <div className={style.tableData}>
                <span className={style.headerData}>{hour}</span>
                <span className={style.headerData} style={{color:'orange'}}><img className={style.icon} src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="icon"/>{Math.floor(props.temp)}</span>
                <span className={style.headerData}>{props.wind} m/s</span>
                <span className={style.headerData}>{props.pressure} hPa</span>
                <span className={style.headerData}>{props.weather}</span>
                <span className={style.headerData}>{props.humidity} %</span>
            </div>
        </div>
    )
}


export default WeatherItem;