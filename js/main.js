
const elList = document.getElementById('container')
const elIts = document.getElementById('item')

fetch ('https://api.openweathermap.org/data/2.5/weather?q=andijon&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c')
  .then((response) => response.json())
  .then((data) => weaTher(data))


  function weaTher(data){
    console.log(data)
    const elLocation = document.createElement('h4')
    const elCountry = document.createElement('h3')
    const elTempt = document.createElement('p')
    const elSpeed = document.createElement('h1')
    
    elLocation.textContent = data.name
    elCountry.textContent = data.sys.country
    elTempt.textContent = data.main.temp
    elSpeed.textContent = data.wind.speed

    elIts.append(elCountry) 
    elIts.append(elLocation) 
    elIts.append(elTempt)
    elIts.append(elSpeed)
  
       

  }
  