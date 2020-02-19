import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import WeatherItem from './components/WeatherItem/WeatherItem';
import SearchForm from './components/SearchForm/SearchForm';
import Table from './components/Table/Table';
import TableHeader from './components/TableHeader/TableHeader';
import Error from './components/ShowError/ShowError';
import {WeatherData} from './types';



const App = ():JSX.Element => {

  const [ search, setSearch] = useState<string>('');
  const [ WeatherData, setData ] = useState<WeatherData | null>(null);
  const [ error, setError ] = useState<string>('');
  const [ isError, setModalError ] = useState<string | null>(null)

  const API_KEY : string = 'ENTER YOUR API';
  const BASE_URL : string = 'http://api.openweathermap.org/';


  
  const submitSearch = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if(search.length < 1) return setError('Reikalingas miestas*');

    if( /[^\w\s)]|[_]/g.test(search)) return setError('Simboliai draudžiami*')

    try {
      const { data } : AxiosResponse<WeatherData> = await axios.get(`${BASE_URL}/data/2.5/forecast?q=${search}&units=metric&APPID=${API_KEY}`);
      setData(data)
      setError('')
    } 
    catch (error) {
      let data = JSON.stringify(error.response.data);
      setModalError(data)
      setError('')
    }
  } 

  return (
    <div className="App"> 
        <SearchForm search={search} onInputChange={setSearch} submitSearch={submitSearch} error={error} setData={setData} api={API_KEY} setModalError={setModalError}/>
        <Table>
          {WeatherData &&             
            <TableHeader city={WeatherData.city.name} country={WeatherData.city.country}/>
          }
          {WeatherData && WeatherData.list.map((item,key) => 
            <WeatherItem 
              key={key}
              date={item.dt_txt} 
              temp={item.main.temp} 
              wind={item.wind.speed} 
              pressure={item.main.pressure} 
              humidity={item.main.humidity} 
              icon={item.weather[0].icon} 
              weather={item.weather[0].main}
            />)}
        </Table>
        {isError ? <Error message={isError} close={setModalError} /> : null}
    </div>
  );
}

export default App;

