const apiKey = "20d9fae05eea0acf3ddbbbffcc87dba9";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const  search_box = document.querySelector(".search input");
        const  search_btn = document.querySelector(".search button");
        const weather_icon = document.querySelector(".weather-icon");
        
        async function checkWeather(city)
        {
            const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
            var data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "kmph";


            if(data.weather[0].main == 'Clouds')
            {
                weather_icon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == 'Clear')
            {
                weather_icon.src = "images/clear.png";
            }
            else if(data.weather[0].main == 'Rain')
            {
                weather_icon.src = "images/rain.png";
            }
            else if(data.weather[0].main == 'Drizzle')
            {
                weather_icon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == 'Mist')
            {
                weather_icon.src = "images/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
        } 

        search_btn.addEventListener("click" , ()=>
            {
                checkWeather(search_box.value);
            });
