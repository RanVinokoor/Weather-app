import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const WeatherViewer = ({ cityData }) => {

    const [data, setData] = useState();

    useEffect(() => {
        setData();

        axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityData.Key}?apikey=jYdjzGIaGbw9JVkQcQk8nYfQ9lG3SRFP&metric=true`)
        .then((response)=>{
            setData(response.data);
        })
    },[cityData.Key])

    return (
        <>
            {data&& (
                <>
                <h2 className='city-country mt-4 mb-4'>
                    {cityData.LocalizedName} | {cityData.Country.LocalizedName}
                </h2>
                <div className='cards-wrapper d-flex justify-content-center flex-wrap'>
                    <div className='card-wrapper d-flex'>
                        <div className='card-box m-2'>
                            <p className='icon-date'>
                            {data.DailyForecasts[0].Date}
                            </p>
                            <p style={{fontSize: '30px', margin: '5px 0 5px 0'}}>
                                {data.DailyForecasts[0].Temperature.Minimum.Value} - {data.DailyForecasts[0].Temperature.Maximum.Value} &deg;{data.DailyForecasts[0].Temperature.Maximum.Unit}
                            </p>
                            <div className='d-flex align-items-center text-center'>
                                <div>
                                    <h5 className='mt-2'>Day</h5>
                                    <p className='mb-0'>
                                    {data.DailyForecasts[0].Day.Icon===1&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/01-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===2&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/02-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===3&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/03-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===4&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/04-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===5&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/05-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===6&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/06-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===7&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/07-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===8&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/08-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===11&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/11-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===12&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/12-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===13&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/13-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===14&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/14-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===15&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/15-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===16&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/16-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===17&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/17-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===18&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/18-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===19&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/19-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===20&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/20-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===21&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/21-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===22&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/22-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===23&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/23-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===24&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/24-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===25&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/25-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===26&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/26-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===27&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/27-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===28&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/28-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===29&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/29-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===30&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/30-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===31&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/31-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    {data.DailyForecasts[0].Day.Icon===32&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/32-s.png'} alt={data.DailyForecasts[0].Day.IconPhrase} />}
                                    </p>
                                    <p className='icon-phrase'>
                                    {data.DailyForecasts[0].Day.IconPhrase}
                                    </p>
                                </div>
                                <div>
                                    <h5 className='mt-2'>Night</h5>
                                    <p className='mb-0'>
                                    {data.DailyForecasts[0].Night.Icon===7&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/07-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===8&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/08-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===11&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/11-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===12&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/12-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===15&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/15-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===18&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/18-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===19&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/19-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===22&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/22-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===24&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/24-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===25&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/25-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===26&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/26-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===27&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/27-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===28&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/28-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===29&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/29-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===30&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/30-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===31&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/31-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===32&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/32-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===33&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/33-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===34&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/34-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===35&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/35-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===36&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/36-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===37&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/37-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===38&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/38-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===39&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/39-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===40&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/40-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===41&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/41-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===42&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/42-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===43&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/43-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    {data.DailyForecasts[0].Night.Icon===44&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/44-s.png'} alt={data.DailyForecasts[0].Night.IconPhrase} />}
                                    </p>
                                    <p className='icon-phrase'>
                                    {data.DailyForecasts[0].Night.IconPhrase}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-wrapper d-flex'>
                        <div className='card-box m-2'>
                            <p className='icon-date'>
                            {data.DailyForecasts[1].Date}
                            </p>
                            <p style={{fontSize: '30px', margin: '5px 0 5px 0'}}>
                                {data.DailyForecasts[1].Temperature.Minimum.Value} - {data.DailyForecasts[1].Temperature.Maximum.Value} &deg;{data.DailyForecasts[1].Temperature.Maximum.Unit}
                            </p>
                            <div className='d-flex align-items-center text-center'>
                                <div>
                                    <h5 className='mt-2'>Day</h5>
                                    <p className='mb-0'>
                                    {data.DailyForecasts[1].Day.Icon===1&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/01-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===2&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/02-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===3&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/03-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===4&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/04-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===5&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/05-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===6&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/06-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===7&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/07-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===8&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/08-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===11&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/11-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===12&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/12-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===13&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/13-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===14&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/14-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===15&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/15-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===16&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/16-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===17&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/17-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===18&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/18-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===19&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/19-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===20&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/20-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===21&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/21-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===22&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/22-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===23&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/23-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===24&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/24-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===25&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/25-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===26&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/26-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===27&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/27-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===28&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/28-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===29&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/29-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===30&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/30-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===31&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/31-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    {data.DailyForecasts[1].Day.Icon===32&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/32-s.png'} alt={data.DailyForecasts[1].Day.IconPhrase} />}
                                    </p>
                                    <p className='icon-phrase'>
                                    {data.DailyForecasts[1].Day.IconPhrase}
                                    </p>
                                </div>
                                <div>
                                    <h5 className='mt-2'>Night</h5>
                                    <p className='mb-0'>
                                    {data.DailyForecasts[1].Night.Icon===7&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/07-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===8&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/08-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===11&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/11-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===12&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/12-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===15&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/15-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===18&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/18-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===19&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/19-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===22&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/22-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===24&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/24-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===25&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/25-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===26&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/26-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===27&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/27-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===28&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/28-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===29&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/29-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===30&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/30-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===31&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/31-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===32&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/32-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===33&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/33-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===34&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/34-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===35&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/35-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===36&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/36-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===37&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/37-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===38&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/38-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===39&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/39-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===40&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/40-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===41&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/41-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===42&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/42-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===43&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/43-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    {data.DailyForecasts[1].Night.Icon===44&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/44-s.png'} alt={data.DailyForecasts[1].Night.IconPhrase} />}
                                    </p>
                                    <p className='icon-phrase'>
                                    {data.DailyForecasts[1].Night.IconPhrase}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-wrapper d-flex'>
                        <div className='card-box m-2'>
                            <p className='icon-date'>
                            {data.DailyForecasts[2].Date}
                            </p>
                            <p style={{fontSize: '30px', margin: '5px 0 5px 0'}}>
                                {data.DailyForecasts[2].Temperature.Minimum.Value} - {data.DailyForecasts[2].Temperature.Maximum.Value} &deg;{data.DailyForecasts[2].Temperature.Maximum.Unit}
                            </p>
                            <div className='d-flex align-items-center text-center'>
                                <div>
                                    <h5 className='mt-2'>Day</h5>
                                    <p className='mb-0'>
                                    {data.DailyForecasts[2].Day.Icon===1&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/01-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===2&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/02-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===3&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/03-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===4&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/04-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===5&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/05-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===6&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/06-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===7&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/07-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===8&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/08-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===11&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/11-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===12&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/12-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===13&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/13-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===14&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/14-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===15&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/15-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===16&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/16-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===17&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/17-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===18&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/18-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===19&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/19-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===20&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/20-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===21&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/21-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===22&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/22-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===23&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/23-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===24&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/24-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===25&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/25-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===26&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/26-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===27&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/27-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===28&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/28-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===29&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/29-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===30&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/30-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===31&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/31-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    {data.DailyForecasts[2].Day.Icon===32&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/32-s.png'} alt={data.DailyForecasts[2].Day.IconPhrase} />}
                                    </p>
                                    <p className='icon-phrase'>
                                    {data.DailyForecasts[2].Day.IconPhrase}
                                    </p>
                                </div>
                                <div>
                                    <h5 className='mt-2'>Night</h5>
                                    <p className='mb-0'>
                                    {data.DailyForecasts[2].Night.Icon===7&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/07-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===8&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/08-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===11&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/11-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===12&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/12-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===15&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/15-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===18&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/18-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===19&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/19-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===22&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/22-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===24&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/24-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===25&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/25-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===26&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/26-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===27&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/27-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===28&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/28-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===29&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/29-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===30&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/30-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===31&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/31-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===32&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/32-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===33&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/33-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===34&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/34-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===35&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/35-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===36&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/36-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===37&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/37-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===38&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/38-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===39&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/39-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===40&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/40-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===41&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/41-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===42&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/42-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===43&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/43-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    {data.DailyForecasts[2].Night.Icon===44&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/44-s.png'} alt={data.DailyForecasts[2].Night.IconPhrase} />}
                                    </p>
                                    <p className='icon-phrase'>
                                    {data.DailyForecasts[2].Night.IconPhrase}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-wrapper d-flex'>
                        <div className='card-box m-2'>
                            <p className='icon-date'>
                            {data.DailyForecasts[3].Date}
                            </p>
                            <p style={{fontSize: '30px', margin: '5px 0 5px 0'}}>
                                {data.DailyForecasts[3].Temperature.Minimum.Value} - {data.DailyForecasts[3].Temperature.Maximum.Value} &deg;{data.DailyForecasts[3].Temperature.Maximum.Unit}
                            </p>
                            <div className='d-flex align-items-center text-center'>
                                <div>
                                    <h5 className='mt-2'>Day</h5>
                                    <p className='mb-0'>
                                    {data.DailyForecasts[3].Day.Icon===1&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/01-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===2&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/02-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===3&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/03-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===4&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/04-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===5&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/05-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===6&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/06-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===7&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/07-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===8&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/08-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===11&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/11-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===12&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/12-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===13&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/13-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===14&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/14-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===15&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/15-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===16&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/16-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===17&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/17-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===18&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/18-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===19&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/19-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===20&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/20-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===21&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/21-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===22&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/22-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===23&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/23-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===24&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/24-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===25&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/25-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===26&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/26-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===27&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/27-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===28&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/28-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===29&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/29-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===30&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/30-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===31&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/31-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    {data.DailyForecasts[3].Day.Icon===32&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/32-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    </p>
                                    <p className='icon-phrase'>
                                    {data.DailyForecasts[3].Day.IconPhrase}
                                    </p>
                                </div>
                                <div>
                                    <h5 className='mt-2'>Night</h5>
                                    <p className='mb-0'>
                                    {data.DailyForecasts[3].Night.Icon===7&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/07-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===8&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/08-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===11&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/11-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===12&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/12-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===15&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/15-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===18&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/18-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===19&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/19-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===22&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/22-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===24&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/24-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===25&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/25-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===26&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/26-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===27&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/27-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===28&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/28-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===29&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/29-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===30&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/30-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===31&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/31-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===32&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/32-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===33&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/33-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===34&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/34-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===35&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/35-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===36&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/36-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===37&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/37-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===38&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/38-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===39&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/39-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===40&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/40-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===41&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/41-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===42&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/42-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===43&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/43-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    {data.DailyForecasts[3].Night.Icon===44&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/44-s.png'} alt={data.DailyForecasts[3].Night.IconPhrase} />}
                                    </p>
                                    <p className='icon-phrase'>
                                    {data.DailyForecasts[3].Night.IconPhrase}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-wrapper d-flex'>
                        <div className='card-box m-2'>
                            <p className='icon-date'>
                            {data.DailyForecasts[4].Date}
                            </p>
                            <p style={{fontSize: '30px', margin: '5px 0 5px 0'}}>
                                {data.DailyForecasts[4].Temperature.Minimum.Value} - {data.DailyForecasts[4].Temperature.Maximum.Value} &deg;{data.DailyForecasts[4].Temperature.Maximum.Unit}
                            </p>
                            <div className='d-flex align-items-center text-center'>
                                <div>
                                    <h5 className='mt-2'>Day</h5>
                                    <p className='mb-0'>
                                    {data.DailyForecasts[4].Day.Icon===1&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/01-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===2&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/02-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===3&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/03-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===4&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/04-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===5&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/05-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===6&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/06-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===7&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/07-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===8&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/08-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===11&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/11-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===12&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/12-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===13&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/13-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===14&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/14-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===15&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/15-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===16&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/16-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===17&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/17-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===18&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/18-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===19&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/19-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===20&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/20-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===21&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/21-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===22&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/22-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===23&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/23-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===24&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/24-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===25&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/25-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===26&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/26-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===27&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/27-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===28&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/28-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===29&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/29-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===30&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/30-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===31&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/31-s.png'} alt={data.DailyForecasts[4].Day.IconPhrase} />}
                                    {data.DailyForecasts[4].Day.Icon===32&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/32-s.png'} alt={data.DailyForecasts[3].Day.IconPhrase} />}
                                    </p>
                                    <p className='icon-phrase'>
                                    {data.DailyForecasts[4].Day.IconPhrase}
                                    </p>
                                </div>
                                <div>
                                    <h5 className='mt-2'>Night</h5>
                                    <p className='mb-0'>
                                    {data.DailyForecasts[4].Night.Icon===7&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/07-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===8&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/08-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===11&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/11-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===12&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/12-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===15&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/15-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===18&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/18-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===19&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/19-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===22&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/22-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===24&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/24-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===25&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/25-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===26&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/26-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===27&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/27-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===28&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/28-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===29&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/29-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===30&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/30-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===31&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/31-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===32&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/32-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===33&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/33-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===34&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/34-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===35&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/35-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===36&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/36-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===37&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/37-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===38&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/38-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===39&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/39-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===40&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/40-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===41&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/41-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===42&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/42-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===43&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/43-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    {data.DailyForecasts[4].Night.Icon===44&&<img className='weather-img' src={'https://developer.accuweather.com/sites/default/files/44-s.png'} alt={data.DailyForecasts[4].Night.IconPhrase} />}
                                    </p>
                                    <p className='icon-phrase'>
                                    {data.DailyForecasts[4].Night.IconPhrase}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
              </>
            )}
        </>
    );
};