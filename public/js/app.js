console.log('Client side javascript file is loaded!')

const weatherFrom = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message_1')
const messageTwo = document.querySelector('#message_2')

weatherFrom.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    messageOne.textContent = "Loading..."
    fetch('/weather?address=' + location).then((response) => {

        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.ForecastData
                console.log('Location', data.location)
                console.log('Forecast', data.ForecastData)
            }
        })

    })
})