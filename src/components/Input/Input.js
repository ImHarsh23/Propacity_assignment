import React, { useState } from 'react';
import styles from './Input.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCity, setError, setLoading } from '../../redux/action';
import Loader from '../Loader/Loader';
import { cities } from '../../utils/constants';

const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    let city = useSelector(state => state.city);
    let errorMessage = useSelector(state => state.error);
    let loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value) {
            const filteredCities = cities
                .filter((city) => city.toLowerCase().includes(value.toLowerCase()))
                .slice(0, 10);
            setSuggestions(filteredCities);
        } else {
            setSuggestions([]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.trim().length) {
            dispatch(setError('Please enter a city'))
        }
        else {

            dispatch(setError(null));
            if (city !== inputValue) {
                dispatch(setLoading(true));
                dispatch(setCity(inputValue));
            }
            setInputValue("");
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        if (!suggestion.trim().length) {
            dispatch(setError('Please enter a city'))
        }
        else {
            dispatch(setError(null));
            if (suggestion !== city) {
                dispatch(setLoading(true));
                dispatch(setCity(suggestion));
            }
            setInputValue("");
            setSuggestions([]);
        }
    };

    return (
        <>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <button type="submit" className={styles.button}>
                    <img src='https://www.svgrepo.com/show/522266/search.svg' alt='search-icon' width={24}></img>
                </button>
                <input
                    className={styles.input}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Search for places..."
                />
                {suggestions.length > 0 && (
                    <ul className={styles.suggestions}>
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className={styles.suggestionItem}
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
                <div className={styles.loaderDiv}>
                    {loading && <Loader />}
                </div>
            </form>
            {
                errorMessage && <p className={styles.error}>{errorMessage}</p>
            }
        </>
    );
};

export default Input;
