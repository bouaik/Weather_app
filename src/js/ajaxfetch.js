class AjaxWheather {
  constructor() {
    this.apiKey = '5a5c4674ce9bd002f4df3e98b673df57';
  }

  async getWheather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apiKey}&units=metric`;
    const wheatherData = await fetch(url);
    const wheather = await wheatherData.json();
    return wheather;
  }
}

export default AjaxWheather;