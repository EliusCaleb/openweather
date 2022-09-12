const button = document.querySelector('.button')
const inputValue= document.querySelector('.inputValue')
const names= document.querySelector('.names')
const desc= document.querySelector('.desc')
const temp= document.querySelector('.temp')
const apiKey= 'acf204ed7b5ca0cb7edf388a6865e8ce'


button.addEventListener('click',function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+inputValue.value+`&appid=acf204ed7b5ca0cb7edf388a6865e8ce`)
      .then(resp=> resp.json())
      .then(data=>{
        let nameValue = data['name'];
        let tempValue=data['main']['temp'];
        let descValue= data['weather'][0]['description']

        names.innerHtml=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML=descValue;
      })

        
})

