import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props){
    function handleResponse(response){
        //alert(`the weather in ${response.data.name} is ${response.data.main.temp}`);
    }
    
    let apiKey="43f1d8f12b8168c4b7d63a4219944689";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return(
        <Loader type="puff"
                color="orange"
                height={100}
                width={100}
                timeout={3000}
        />
    )
}