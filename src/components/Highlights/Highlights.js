import React from 'react'
import styles from "./Highlights.module.css"
import { useSelector } from 'react-redux'
import { weatherImage } from '../../utils/constants'
import Loader from '../Loader/Loader'

const Highlights = () => {
    let loading = useSelector((state) => state.loading);
    const data = useSelector(state => state.additionalData);

    return (
        loading ? <Loader /> :
            <div>
                <h1>Today's Highlights</h1>
                <div className={styles.container}>

                    <div className={styles.box}>
                        <p>Humidity</p>
                        <span>{data.humidity}&nbsp;%</span>
                        <div>
                            <img src={weatherImage.Humidity} width={64} alt=''></img>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <p>Pressure</p>
                        <span>{data.pressure}&nbsp;hPa</span>
                        <img src={weatherImage.Pressure} width={64} alt=''></img>
                    </div>
                    <div className={styles.box}>
                        <p>Visibility</p>
                        <span>{data.visiblity / 1000}&nbsp;km</span>
                        <img src={weatherImage.Visibility} width={64} alt=''></img>
                    </div>
                </div >
            </div>
    )
}

export default Highlights