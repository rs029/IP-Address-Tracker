const submit = document.getElementById('inputButton')

submit.addEventListener('click', function() {
    const ipAddress = document.getElementById('ipAddress').value

    fetch(`https://ipinfo.io/${ipAddress}/json?token=514b0411a608b3`) // Using IP Address to get location information
    .then(response => response.json())
    .then(locationData => {
        //Display the location information
        const ip = document.getElementById('ip')
        ip.innerHTML = `<p>${locationData.ip}</p>`

        const city = document.getElementById('city')
        city.innerHTML = `<p>${locationData.city}, ${locationData.country} ${locationData.postal}</p>`

        const timezone = document.getElementById('timezone')
        timezone.innerHTML = `<p>${locationData.timezone}</p>`

        const isp = document.getElementById('isp')
        isp.innerHTML = `<p>${locationData.org}</p>`
    })
    .catch(error => {
        console.error("Error fetching location data:", error)
    })
})
.catch(error => {
    console.error("Error fetching IP address:", error)
})