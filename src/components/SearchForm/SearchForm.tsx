import React from 'react';
import style from './index.module.scss';
import {WeatherData} from '../../types';
import axios, { AxiosResponse } from 'axios';

interface SearchForm {
    search: string,
    onInputChange: (e:string) => void,
    submitSearch: (e: React.SyntheticEvent) => void,
    error: string,
    setData: (data: any) => void,
    api: string,
    setModalError:(error:string) => void
}


const SearchForm = (props: SearchForm):JSX.Element => {
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else { 
            props.setModalError('something went wrong')
          }
    }

    const showPosition = async (position:any) => {
        const lat = Math.floor(position.coords.latitude);
        const long = Math.floor(position.coords.longitude)
        const {data}  : AxiosResponse<WeatherData> = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${props.api}`)
        props.setData(data)
    }



    return (
        <div className={style.searchForm}>
            <form onSubmit={props.submitSearch}>
                <label style={props.error ? {color: 'red'} : undefined}>{props.error ?  props.error : null}</label>
                <input className={style.input}  
                       type="text" 
                       name="City" 
                       value={props.search} 
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onInputChange(e.target.value)}
                       style={props.error ? {border: '1px solid red'} : undefined}
                       placeholder="įveskite miestą..."
                       autoComplete={'off'}
                />
                <button style={props.error ? {border: '1px solid red', color: 'red'} : undefined} className={style.button}>Ieškoti</button>
            </form>
                <button className={style.button} onClick={getLocation}>Mano vietovė</button>
        </div>
    )
}


export default SearchForm;

