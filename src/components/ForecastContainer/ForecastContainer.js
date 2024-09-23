import React from 'react'
import ForecastBox from '../ForecastBox/ForecastBox';
import styles from "./ForecastContainer.module.css";
import { useSelector } from 'react-redux'
import { convertToCelsius, convertToFahrenheit } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { setUnit } from '../../redux/action';

const ForecastContainer = () => {
    const isCelsius = useSelector(state => state.isCelsius);
    const unit = useSelector(state => state.unit);
    const foreCastArray = useSelector(state => state.foreCastArray);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            {
                foreCastArray.map((item, index) => {
                    return (
                        <ForecastBox
                            key={item.dt}
                            date={item.dt}
                            max_temp={item.main.temp_max}
                            min_temp={item.main.temp_min}
                            weather={item.weather[0].main}
                        />
                    );
                })

            }
        </div>
    )
}

export default ForecastContainer;