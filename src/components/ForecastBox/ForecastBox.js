import React from 'react';
import styles from "./ForecastBox.module.css";
import { convertToFahrenheit, dateFormatter, weatherImage } from '../../utils/constants';
import { useSelector } from 'react-redux';

const ForecastBox = ({ max_temp, min_temp, weather, date }) => {

  let isCelsius = useSelector(state => state.isCelsius);

  return (
    <div className={styles.forcastBox}>
      <span>
        {dateFormatter(date).day}
      </span>
      <span>
        <img src={weatherImage[weather]} alt='forcast-image' width={55}></img>
      </span>

      <div>
        <span>
          {Math.floor(!isCelsius ? convertToFahrenheit(max_temp) : max_temp)}&deg;
        </span>
        <span className={styles.fade}>
          {Math.floor(!isCelsius ? convertToFahrenheit(min_temp) : max_temp)}&deg;
        </span>
      </div>
    </div>
  )
}

export default ForecastBox