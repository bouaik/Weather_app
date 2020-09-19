class Display {
    constructor() {
        this.results = document.querySelector('.results')
        this.cityName = document.getElementById('cityName')
        this.cityCountry = document.getElementById('cityCountry')
        this.cityTemp = document.getElementById('cityTemp')
        this.cityHumidity = document.getElementById('cityHumidity')
        this.cityIcon = document.getElementById('cityIcon')
        this.tempRadios = document.getElementsByName('temp')
    }

    showWeather(data) {
        const {name, sys: {country}, main: {temp, humidity}} = data
        const {description, icon} = data.weather[0]

        this.results.classList.add('showItem')
        this.cityName.textContent = name
        this.cityCountry.textContent = country
        this.cityHumidity.textContent = humidity
        this.cityTemp.textContent = temp
        this.cityIcon.src = `https://openweathermap.org/img/w/${icon}.png`

        this.tempRadios[0].checked = true
        this.tempRadios.forEach( i => {
            i.addEventListener('click', e => {
                let value = e.target
                if(value.id === 'tempC') {
                    this.cityTemp.textContent = (temp).toFixed(2)
                } else if(value.id === 'tempF') {
                    this.cityTemp.textContent = ((temp * 9/5) + 32).toFixed(2)
                }
            })
        })

        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
        
        if(description === 'clear sky') {
            document.body.style.backgroundImage = 'url(https://ak.picdn.net/shutterstock/videos/25313372/thumb/1.jpg)'
        } else if(description === 'smoke')  {
            document.body.style.backgroundImage = 'url(https://images.glaciermedia.ca/polopoly_fs/1.24202463.1600039941!/fileImage/httpImage/image.jpeg_gen/derivatives/landscape_804/bowen-island-ferry-arrival-in-smoke.jpeg)'
        } else if(description === 'few clouds')  {
            document.body.style.backgroundImage = 'url(https://million-wallpapers.com/wallpapers/6/27/342216173017934.jpg)'
        } else if(description === 'scattered clouds')  {
            document.body.style.backgroundImage = 'url(https://live.staticflickr.com/2106/1909487867_de140c7eb8_b.jpg)'
        } else if(description === 'broken clouds')  {
            document.body.style.backgroundImage = 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba52bbb6-d760-4478-b826-f3e2298dcbcc/d8ixdlv-9809d1d7-08ee-4436-b39f-d75cf7a5c9e5.jpg/v1/fill/w_1024,h_768,q_75,strp/broken_clouds_by_leo_6tos_d8ixdlv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NjgiLCJwYXRoIjoiXC9mXC9iYTUyYmJiNi1kNzYwLTQ0NzgtYjgyNi1mM2UyMjk4ZGNiY2NcL2Q4aXhkbHYtOTgwOWQxZDctMDhlZS00NDM2LWIzOWYtZDc1Y2Y3YTVjOWU1LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZHmIN6dLxzQm7ad_1EeSURiCksPiS4EOeGsfkh_KzJU)'
        } else if(description === 'shower rain')  {
            document.body.style.backgroundImage = 'url(https://d53bpfpeyyyn7.cloudfront.net/Pictures/2000x2000fit/6/0/5/3067605_rainystreet_356270.jpg)'
        } else if(description === 'rain')  {
            document.body.style.backgroundImage = 'url(https://singularityhub.com/wp-content/uploads/2020/01/rain-Google-weather-forecasting-machine-learning.jpg)'
        } else if(description === 'thunderstorm')  {
            document.body.style.backgroundImage = 'url(https://www.gannett-cdn.com/-mm-/dac578f017751f13fe9936665ff60a99e20c76a6/c=0-184-3624-2231/local/-/media/2016/12/13/Redding/Redding/636172546351584790--stockphoto---weather-lightning.jpg)'
        } else if(description === 'snow')  {
            document.body.style.backgroundImage = 'url(https://fournews-assets-prod-s3b-ew1-aws-c4-pml.s3.amazonaws.com/media/2017/12/heavy_snowstreet_g_hd.jpg)'
        } else if(description === 'mist')  {
            document.body.style.backgroundImage = 'url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/r9E0QYuleiv25jmq9/6-in-1-video-the-slow-moving-stream-of-cars-on-the-road-during-heavy-fog-foggy-weather-real-time-capture_huefcmcxe_thumbnail-1080_01.png)'
        }
    }
}

export default Display