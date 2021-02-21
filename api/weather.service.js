const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

const getWeatherByCity = async (city) => {
  const res = await fetch(`${URL}&q=${city}`);

  if (res.ok) {
    return res.json();
  }

  return null;
}

export {
  getWeatherByCity
};