import React, { useEffect, useState } from 'react'
import Input from '../Input/Input'
import styles from "./WeatherBox.module.css";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setForecast, setAdditionalData, setLoading, setError } from '../../redux/action';
import { convertToFahrenheit, dateFormatter, weatherImage } from '../../utils/constants';
import Loader from '../Loader/Loader';

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

const WeatherBox = () => {
    const [info, setInfo] = useState(null);
    const city = useSelector(state => state.city);
    const unit = useSelector(state => state.unit);
    const isCelsius = useSelector(state => state.isCelsius);
    const dispatch = useDispatch();

    async function fetchWeather() {
        try {
            let { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
            const forcastArray = data.list.filter((item) =>
                item.dt_txt.includes("00:00:00")
            );
            const timezoneOffset = data.city.timezone;
            let todayData = data.list[0];
            let { humidity, pressure } = todayData.main;
            let timeAndDate = dateFormatter(todayData.dt);
            const utcDate = new Date();
            const utcTime = utcDate.getTime() + (utcDate.getTimezoneOffset() * 60000);
            const currentTime = new Date(utcTime + (timezoneOffset * 1000));
            dispatch(setForecast(forcastArray));
            dispatch(setAdditionalData({ humidity, pressure, visiblity: todayData.visibility }));

            setInfo({
                country: data.city.country,
                city: data.city.name,
                day: timeAndDate.day,
                time: `${currentTime.getHours()}:${currentTime.getMinutes()} ${timeAndDate.ampm}`,
                temperature: Math.floor(todayData.main.temp),
                weatherInfo: todayData.weather[0].description,
                weather: todayData.weather[0].main,
                wind: `${todayData.wind.speed} km/h`
            })
        }
        catch (error) {
            if (error.response.data.cod === "404") {
                dispatch(setError(error.response.data.message));
            }
            else {
                dispatch(setError("Something went wrong!!!"));
            }
        } finally {
            dispatch(setLoading(false));
        }
    }

    useEffect(() => {
        fetchWeather();
    }, [city]);

    if (!info) {
        return "";
    }

    return (
        <div className={styles.container}>
            <Input />
            {
                !info ? <Loader /> :
                    <>
                        <div className={styles.weatherImage}>
                            <img src={weatherImage[info.weather]} alt='current-weather' />
                        </div>
                        <p className={styles.temperature}>{!isCelsius ? convertToFahrenheit(info.temperature) : info.temperature}&deg;{unit}</p>
                        <div>
                            <span className='bold-md'>{info.day}</span>
                            <span>,&nbsp;</span>
                            <span>{info.time}</span>
                        </div>
                        <hr />
                        <div className={styles.extra}>
                            <div className={styles.flex}>
                                <div className={styles.iconBox}>
                                    <img src='https://www.svgrepo.com/show/502423/weather.svg'></img>
                                </div>
                                <span className={styles.capitalize}>
                                    {info.weatherInfo}
                                </span>
                            </div>
                            <div className={styles.flex}>
                                <div className={styles.iconBox}>
                                    <img src='https://www.svgrepo.com/show/475599/wind-svg.svg'></img>
                                </div>
                                <span>{info.wind}</span>
                            </div>

                            <div className={styles.flex}>
                                <div className={styles.iconBox}>
                                    <img src='https://www.svgrepo.com/show/530236/location.svg'></img>
                                </div>
                                {info.city + ", " + info.country}
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default WeatherBox