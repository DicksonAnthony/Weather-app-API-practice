let weather = {
  apiKey: "6b78144f8d77084dd9d4baaf09cfffc5",
  fetchWeather: (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
  displayWeather: (data) => {},
};
