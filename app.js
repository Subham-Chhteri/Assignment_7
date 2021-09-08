var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var cont = document.querySelector('.cont');
var min = document.querySelector('.minValue');
var max = document.querySelector('.maxValue');
var wind = document.querySelector('.wind');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = ((data['main']['temp']-273.15).toFixed(2)+' °c');
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var contValue=data['sys']['country'];
  var minValue=((data['main']['temp_min']-273.15).toFixed(2)+' °c');
  var maxValue=((data['main']['temp_max']-273.15).toFixed(2)+' °c');
  var windspd=(data['wind']['speed']+' m/s');
  main.innerHTML = nameValue;
  desc.innerHTML = "Description - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  cont.innerHTML = "Country - "+contValue;
  min.innerHTML = "Min - "+minValue;
  max.innerHTML = "Max - "+maxValue;
  wind.innerHTML = "Wind Speed - "+windspd;
  input.value ="";
  if(descValue.includes("clouds")==true){
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
  }
 else if(descValue.includes("mist")==true){
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1512923927402-a9867a68180e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWlzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

  }
  else if(descValue.includes("snow")==true){
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25vd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

  }
  else if(descValue.includes("rain")==true){
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

  }
  else if(descValue.includes("thundestrom")==true){
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1600377927594-ceae8f8981a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

  }
  else{
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3Vubnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

  }
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "100%";
})

.catch(err => console.log("Wrong city name!"));



})
