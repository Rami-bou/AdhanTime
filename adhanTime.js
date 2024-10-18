function date() {
    const currentDate = new Date()

    const day = currentDate.getDate().toString().padStart(2, '0')
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
    const year = currentDate.getFullYear()
    const x = [day,month]
    const formattedDate = `${day}-${month}-${year}`
    return x
}

function getCity() {
    let v = document.querySelector(".city").value
    return v
}
const baseUrl = "http://api.aladhan.com/v1/timingsByCity"
// "http://api.aladhan.com/v1/calendarByCity" adhan by calender
let city = getCity()
let todayDate = date()
function getAdhan(city) {
    axios.get(`${baseUrl}?city=${city}&country=DZ&method=2`)
    .then((response) => {
    let day = response.data.data;
    // data.splice(1)
    document.querySelector(".adhan-times").innerHTML=""

        let d = day.timings
        let month = day.date.readable
        document.querySelector(".today").innerHTML = month
            let temp2 = 
            `
            <div class="time" style="margin: 7px;"><div><h2 style="margin: 0px; text-align: center; height: 55px; background-color: plum;">Sunrise</h2></div><h2 style=" font-size: 35px; text-align: center; font-weight: 900;">${d.Sunrise}</h3></div>
            <div class="time" style="margin: 7px;"><div><h2 style="margin: 0px; text-align: center; height: 55px; background-color: plum;">Fajr</h2></div><h2 style=" font-size: 35px; text-align: center; font-weight: 900;"> ${d.Fajr}</h3></div>
            <div class="time" style="margin: 7px;"><div><h2 style="margin: 0px; text-align: center; height: 55px; background-color: plum;">Dhuhr</h2></div><h2 style=" font-size: 35px; text-align: center; font-weight: 900;"> ${d.Dhuhr}</h3></div>
            <div class="time" style="margin: 7px;"><div><h2 style="margin: 0px; text-align: center; height: 55px; background-color: plum;">Asr</h2></div><h2 style=" font-size: 35px; text-align: center; font-weight: 900;"> ${d.Asr}</h3></div>
            <div class="time" style="margin: 7px;"><div><h2 style="margin: 0px; text-align: center; height: 55px; background-color: plum;">Maghrib</h2></div><h2 style=" font-size: 35px; text-align: center; font-weight: 900;">${d.Maghrib}</div>
            <div class="time" style="margin: 7px;"><div><h2 style="margin: 0px; text-align: center; height: 55px; background-color: plum;">Isha</h2></div><h2 style=" font-size: 35px; text-align: center; font-weight: 900;"> ${d.Isha}</h3></div>
            `
            document.querySelector(".adhan-times").innerHTML += temp2

    
  })
}

getAdhan(city)
function userClick() {
    let city = getCity()
    getAdhan(city)
}