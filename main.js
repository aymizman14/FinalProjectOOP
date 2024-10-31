function buttonClicked(){
    var city = document.getElementById("beauty_input").value
    
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`)
    .then((response) => response.json())
    .then((data) => {
        
        console.log(data)  
        console.log(data.main.temp)
        ///console.log(`Temperature in ${data.name} is ${data.main.temp} Kelvin  but feels like ${(data.main.feels_like - 273.15).toFixed(2)}`)
        ///var tempc = data.main.temp - 273.15
        ///console.log(`Temperature in Celcius = ${tempc.toFixed(2)} Celcius`)
        ///console.log(`Weather in ${data.name} is ${data.weather[0].description}`)
        ///console.log(`Temperature in ${data.name} is ${data.main.temp} K`)

        ///document.getElementById("demo1").innerHTML = `Temperature in ${data.name} is ${data.main.temp} Kelvin  but feels like ${(data.main.feels_like - 273.15).toFixed(2)}`
        ///document.getElementById("demo2").innerHTML = `Temperature in Celcius = ${tempc.toFixed(2)} Celcius`
        ///document.getElementById("demo3").innerHTML = `Weather in ${data.name} is ${data.weather[0].description}`
        ///document.getElementById("demo4").innerHTML = `Temperature in ${data.name} is ${data.main.temp} K`



        
    } )  
}