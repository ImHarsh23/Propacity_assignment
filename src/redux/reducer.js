const initialState = {
    isCelsius: true,
    city: "Delhi",
    foreCastArray: null,
    additionalData: null,
    loading: true,
    unit: "C",
    error: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CELSIUS':
            return {
                ...state,
                isCelsius: true
            };
        case 'SET_FAHRENHEIT':
            return {
                ...state,
                isCelsius: false
            };
        case 'SET_CITY':
            return {
                ...state,
                city: action.payload
            };
        case 'SET_FORECAST_ARRAY':
            return {
                ...state,
                foreCastArray: action.payload
            };
        case 'SET_ADDITIONAL_DATA':
            return {
                ...state,
                additionalData: action.payload
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            };
        case 'TOGGLE_UNIT':
            return {
                ...state,
                unit: action.payload
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
};

export default rootReducer;
