import axios from 'axios';

const API_KEY = 'b005ba3e47be51a4589a6e477bb77b4c';

export function openWeatherData(city) {
    let url, request;
    if(city)
    {
        city.replace(' ', '+');
        url = 'http://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&APPID='+API_KEY;
        request = axios.get(url).catch(e => request=e);
    }
    else
        request = {data:{list: []}};


    return{
      type: 'OPEN_DATA',
      payload: request
    };
}
