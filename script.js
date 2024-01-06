/*
function showResults(){
//Read the json file

// Cacho los errores con catch(llamo mal la funcion, llamo la api, errores capa 8 xD)

//I need to get acces and manipulate the http petitions for my fetch
fetch('./data.json')
  //i need to get the data as json instead of array so i use res.json
  .then((response)=> response.json())
  /*When i recevied the data i need to show it through the html
    so i have to create a fcn to show it 
  .then((data)=>showData(data))
  //Finally i need to verify if there is some error
  .catch(error => console.log(error))

  //Create f(x) to manipulate data

const showData=(data)=>{
    console.log(data.category)
}  

}
*/

function showResults(){
let summary = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]

  const reaction = document.getElementById('showReaction');
  reaction.textContent=`${summary[0].score}`
  const memory = document.getElementById('showMemory');
  memory.textContent=`${summary[1].score}`
  const verbal = document.getElementById('showVerbal');
  verbal.textContent=`${summary[2].score}`
  const visual = document.getElementById('showVisual');
  visual.textContent=`${summary[3].score}`
  const total = document.getElementById('total');
  total.textContent=`${((summary[0].score+summary[1].score+summary[2].score+summary[3].score)/4).toFixed()}`

}