let weather = {
  apiKey: "6b78144f8d77084dd9d4baaf09cfffc5",
  fetchWeather: () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=6b78144f8d77084dd9d4baaf09cfffc5"
    )
      .then((response) => response.json())
      .then(console.log());
  },
};
