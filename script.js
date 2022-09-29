const API_KEY = `e875b2456b21efcc5ff9c06e6a3155c2`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
console.log(url);
fetch(url)
  .then(response => response.json())
  .then(data => displayTemperature(data))

}
const setInnerText = (id,text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = (temperature) => {
    console.log(temperature);
    
    setInnerText('city',temperature.name);
    setInnerText('temperature',temperature.main.temp);
    
    setInnerText('feel',temperature.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('icon');
imgIcon.setAttribute('src',url);
    
    


}