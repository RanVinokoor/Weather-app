import axios from 'axios';
import { React, useState  } from 'react';
import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/feather/search';
import { WeatherViewer } from '../Components/WeatherViewer';

export const Forecast = () => {

  const [citySearch, setCitySearch] = useState('tel aviv');
  const [cityData, setCityData] = useState(null);

  const fetchCity=(e)=>{
    e.preventDefault(e);
    axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=jYdjzGIaGbw9JVkQcQk8nYfQ9lG3SRFP&q=${citySearch}`)
    .then((response) =>{
      setCityData(response.data[0])
    })
  }

  return (
    <>
      <main className="wrapper pt-3" onMouseEnter={fetchCity}>
        <h1 className='headline'>AccuWeather API</h1>
        <form className='form-group custom-form' autoComplete='on' onSubmit={fetchCity}>
          <div className='search-box justify-content-center'>
            <input className='form-control' required placeholder='Enter city name...' value={citySearch} onChange={(e)=>setCitySearch(e.target.value)}></input>
            <button type='submit' className='btn btn-secondary btn-sm'>
              <Icon icon={search} size={22}></Icon>
            </button>
          </div>
        </form>
        {cityData&&(
          <div style={{padding: 10+'px' , width: 100+'%'}}>
            <WeatherViewer cityData={cityData}/>
          </div>
        )}
      </main>
    </>
  );
}
