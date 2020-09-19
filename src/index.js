import 'bootstrap'
import './styles/main.scss'



(function () {

    const form = document.getElementById('wheatherForm')
    const cityInput = document.getElementById('cityInput')
    const feedback = document.querySelector('.feedback')
    const loading = document.querySelector('.spinner-border')


    function showFeedback(text) {
        feedback.classList.add('showItem')
        feedback.innerHTML = `<p>${text}</p>`

        setTimeout(()=> {
            feedback.classList.remove('showItem')
        }, 3000)
    }

})(); 