import 'bootstrap'
import './styles/main.scss'

import AjaxWheather from './js/ajaxfetch'
import Display from './js/display'


(function () {

    const form = document.getElementById('wheatherForm')
    const cityInput = document.getElementById('cityInput')
    const feedback = document.querySelector('.feedback')
    const loading = document.querySelector('.spinner-border')

    const ajax = new AjaxWheather()
    const display = new Display()

    form.addEventListener('submit', e => {
        e.preventDefault()

        const city = cityInput.value 

        if (city === '') {
            showFeedback('city value cannot be empty')
        } else {
            loading.classList.add('showItem')
            ajax.getWheather(city).then(data => {
                if(data.message === 'city not found') {
                    showFeedback('city with such name cannot be found')
                } else {
                    loading.classList.remove('showItem')
                    display.showWeather(data)
                    cityInput.value = ''
                }
            })
        }
    })

    function showFeedback(text) {
        feedback.classList.add('showItem')
        feedback.innerHTML = `<p>${text}</p>`

        setTimeout(()=> {
            feedback.classList.remove('showItem')
        }, 3000)
    }

})(); 