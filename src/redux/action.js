export const setCelsius = () => {
    return {
        type: 'SET_CELSIUS'
    };
};

export const setFahrenheit = () => {
    return {
        type: 'SET_FAHRENHEIT'
    };
};

export const setCity = (city) => {
    return {
        type: 'SET_CITY',
        payload: city
    };
};

export const setForecast = (array) => {
    return {
        type: 'SET_FORECAST_ARRAY',
        payload: array
    };
};

export const setAdditionalData = (data) => {
    return {
        type: 'SET_ADDITIONAL_DATA',
        payload: data
    };
};

export const setLoading = (boolVal) => {
    return {
        type: 'SET_LOADING',
        payload: boolVal
    };
};

export const setUnit = (unit) => {
    return {
        type: 'TOGGLE_UNIT',
        payload: unit
    };
};

export const setError = (message) => {
    return {
        type: 'SET_ERROR',
        payload: message
    };
};



