export const dateFormatter = (time) => {
    let date = new Date(time * 1000);

    let year = date.getUTCFullYear();
    let month = date.getUTCMonth() + 1;
    let day = date.toLocaleString('en-US', { weekday: 'long' });
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();

    return {
        year, month, day, hours, minutes, seconds
    };
}



export const weatherImage = {
    Clouds: "https://www.svgrepo.com/show/528177/clouds.svg",
    Clear: "https://www.svgrepo.com/show/499892/clear.svg",
    Rain: "https://www.svgrepo.com/show/467239/rain.svg",
    Drizzle: "https://www.svgrepo.com/show/441392/cloud-drizzle.svg",
    Thunderstorm: "https://www.svgrepo.com/show/474586/thunderstorm.svg",
    Snow: "https://www.svgrepo.com/show/475586/snow.svg",
    Mist: "https://www.svgrepo.com/show/154294/mist.svg",
    Haze: "https://www.svgrepo.com/show/227759/haze.svg",
    Fog: "https://www.svgrepo.com/show/474591/fog.svg",
    Smoke: "https://www.svgrepo.com/show/507995/cloud-fog.svg",
    Dust: "https://www.svgrepo.com/show/474589/dust.svg",
    Sand: "https://www.svgrepo.com/show/211763/sand-clock.svg",
    Ash: "https://www.svgrepo.com/show/165799/american-mountain-ash.svg",
    Tornado: "https://www.svgrepo.com/show/407633/tornado.svg",
    Humidity: "https://www.svgrepo.com/show/499938/humidity.svg",
    Pressure: "https://www.svgrepo.com/show/190835/pressure-meter.svg",
    Visibility: "https://www.svgrepo.com/show/228353/visibility-eye.svg"
}


export const convertToFahrenheit = (celsiusValue) => {
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    return fahrenheitValue.toFixed(1);
};

export const convertToCelsius = (fahrenheitValue) => {
    const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
    return Math.ceil(celsiusValue);
};



export const cities = [
    "Abidjan", "Abu Dhabi", "Abuja", "Accra", "Addis Ababa", "Ahmedabad", "Aleppo", "Alexandria", "Algiers", "Almaty",
    "Amman", "Amsterdam", "Anchorage", "Andorra la Vella", "Ankara", "Antananarivo", "Apia", "Arnold", "Ashgabat", "Asmara",
    "Asuncion", "Athens", "Auckland", "Avarua", "Baghdad", "Baku", "Bamako", "Banda Aceh", "Bandar Seri Begawan",
    "Bandung", "Bangkok", "Bangui", "Banjul", "Barcelona", "Barranquilla", "Basrah", "Basse-Terre", "Basseterre", "Beijing",
    "Beirut", "Bekasi", "Belem", "Belgrade", "Belmopan", "Belo Horizonte", "Bengaluru", "Berlin", "Bern", "Bishkek",
    "Bissau", "Bogota", "Brasilia", "Bratislava", "Brazzaville", "Bridgetown", "Brisbane", "Brussels", "Bucharest", "Budapest",
    "Buenos Aires", "Bujumbura", "Bursa", "Busan", "Cairo", "Cali", "Caloocan", "Camayenne", "Canberra", "Cape Town",
    "Caracas", "Casablanca", "Castries", "Cayenne", "Charlotte Amalie", "Chengdu", "Chennai", "Chicago", "Chisinau",
    "Chittagong", "Chongqing", "Colombo", "Conakry", "Copenhagen", "Cordoba", "Curitiba", "Daegu", "Daejeon", "Dakar",
    "Dallas", "Damascus", "Dar es Salaam", "Delhi", "Denver", "Dhaka", "Dili", "Djibouti", "Dodoma", "Doha", "Dongguan",
    "Douala", "Douglas", "Dubai", "Dublin", "Durban", "Dushanbe", "Faisalabad", "Fort-de-France", "Fortaleza", "Freetown",
    "Fukuoka", "Funafuti", "Gaborone", "George Town", "Georgetown", "Gibraltar", "Gitega", "Giza", "Guadalajara", "Guangzhou",
    "Guatemala City", "Guayaquil", "Gujranwala", "Gustavia", "Gwangju", "Hamburg", "Hanoi", "Harare", "Havana", "Helsinki",
    "Ho Chi Minh City", "Hong Kong", "Honiara", "Honolulu", "Houston", "Hyderabad", "Hyderabad", "Ibadan", "Incheon",
    "Isfahan", "Islamabad", "Istanbul", "Izmir", "Jaipur", "Jakarta", "Jeddah", "Jerusalem", "Johannesburg", "Juarez", "Juba",
    "Kabul", "Kaduna", "Kampala", "Kano", "Kanpur", "Kaohsiung", "Karachi", "Karaj", "Kathmandu", "Kawasaki", "Kharkiv",
    "Khartoum", "Khulna", "Kigali", "Kingsburg", "Kingston", "Kingstown", "Kinshasa", "Kobe", "Kolkata", "Kota Bharu",
    "Kowloon", "Kuala Lumpur", "Kumasi", "Kuwait", "Kyiv", "Kyoto", "La Paz", "Lagos", "Lahore", "Libreville", "Lilongwe",
    "Lima", "Lisbon", "Ljubljana", "Lome", "London", "Los Angeles", "Luanda", "Lubumbashi", "Lusaka", "Luxembourg", "Macau",
    "Madrid", "Majuro", "Makassar", "Malabo", "Male", "Mamoudzou", "Managua", "Manama", "Manaus", "Manila", "Maputo",
    "Maracaibo", "Maracay", "Mariehamn", "Marigot", "Maseru", "Mashhad", "Mbabane", "Mecca", "Medan", "Medellin", "Medina",
    "Melbourne", "Mexico City", "Miami", "Minsk", "Mogadishu", "Monaco", "Monrovia", "Montevideo", "Montreal", "Moroni",
    "Moscow", "Mosul", "Multan", "Mumbai", "Muscat", "N'Djamena", "Nagoya", "Nairobi", "Nanchong", "Nanjing", "Nassau",
    "Nay Pyi Taw", "New York", "Niamey", "Nicosia", "Nouakchott", "Noumea", "Novosibirsk", "Nuku'alofa", "Nur-Sultan", "Nuuk",
    "Oranjestad", "Osaka", "Oslo", "Ottawa", "Ouagadougou", "Pago Pago", "Palembang", "Palo Alto", "Panama", "Papeete",
    "Paramaribo", "Paris", "Perth", "Philadelphia", "Phnom Penh", "Phoenix", "Podgorica", "Port Louis", "Port Moresby",
    "Port of Spain", "Port-Vila", "Port-au-Prince", "Porto Alegre", "Porto-Novo", "Prague", "Praia", "Pretoria", "Pristina",
    "Puebla", "Pune", "Pyongyang", "Quezon City", "Quito", "Rabat", "Rawalpindi", "Recife", "Reykjavik", "Riga", "Rio de Janeiro",
    "Riyadh", "Road Town", "Rome", "Roseau", "Saint George's", "Saint Helier", "Saint John's", "Saint Peter Port", "Saint Petersburg",
    "Saint-Denis", "Saint-Pierre", "Saipan", "Salvador", "San Antonio", "San Diego", "San Francisco", "San Jose", "San Juan",
    "San Marino", "San Salvador", "Sanaa", "Santa Cruz de la Sierra", "Santiago", "Santo Domingo", "Sao Paulo", "Sao Tome",
    "Sapporo", "Sarajevo", "Seattle", "Semarang", "Seoul", "Shanghai", "Sharjah", "Shenzhen", "Singapore", "Skopje", "Sofia",
    "South Tangerang", "Soweto", "Stockholm", "Sucre", "Surabaya", "Surat", "Suva", "Sydney", "Tabriz", "Taipei", "Tallinn",
    "Tangerang", "Tarawa", "Tashkent", "Tbilisi", "Tegucigalpa", "Tehran", "Tel Aviv", "Thimphu", "Tianjin", "Tijuana", "Tirana",
    "Tokyo", "Toronto", "Torshavn", "Tripoli", "Tunis", "Ulan Bator", "Vaduz", "Valencia", "Valletta", "Vancouver", "Victoria",
    "Vienna", "Vientiane", "Vilnius", "Warsaw", "Washington", "Wellington", "Willemstad", "Windhoek", "Wuhan", "Xi'an",
    "Yamoussoukro", "Yangon", "Yaounde", "Yekaterinburg", "Yerevan", "Yokohama", "Zagreb"
]
