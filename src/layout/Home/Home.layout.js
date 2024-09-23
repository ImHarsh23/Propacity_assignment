import WeatherBox from "../../components/WeatherBox/WeatherBox";
import ForecastContainer from "../../components/ForecastContainer/ForecastContainer";
import Highlights from "../../components/Highlights/Highlights";
import styles from "./Home.module.css"
import { useSelector, useDispatch } from "react-redux";
import { setFahrenheit, setCelsius, setUnit } from "../../redux/action";
import Loader from "../../components/Loader/Loader";

function HomeLayout() {
    const isCelsius = useSelector((state) => state.isCelsius);
    let loading = useSelector(state => state.loading)
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <WeatherBox />
            <div className={styles.sideBox}>
                <div className={styles.toggleContainer}>
                    <div
                        className={`${styles.toggleCircle} ${isCelsius ? styles.active : ''}`}
                        onClick={() => {
                            dispatch(setCelsius());
                            dispatch(setUnit("C"));
                        }}
                    >
                        <span>°C</span>
                    </div>
                    <div
                        className={`${styles.toggleCircle} ${!isCelsius ? styles.active : ''}`}
                        onClick={() => {
                            dispatch(setFahrenheit());
                            dispatch(setUnit("F"));
                        }}
                    >
                        <span>°F</span>
                    </div>
                </div>
                {
                    loading ? <Loader /> :
                        <div className={styles.rightContent}>
                            <ForecastContainer />
                            <Highlights />
                        </div>
                }
            </div>
        </div>
    );
}

export default HomeLayout;
