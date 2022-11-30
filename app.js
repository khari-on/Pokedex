const apiUrl = 'https://pokeapi.co/api/v2/pokemon/1'


//ajax - axios - fetch 
//call - promise - - async
//fetch = 100
//run a function display - name of pke
// const myPromise = new Promise((resolve,reject)=>{
//     const response = fetch('https://pokeapi.co/api/v2/pokemon/1')
    
//     resolve(response)
    
//     reject('oops')
// })

// myPromise
// .then((data)=>data.json())
// .then((poke)=>console.log(poke))
function getPokemon(data){
    const pokemon = document.getElementById('conatiner')
    
    const {height,name,weight,sprites:{front_default}}=data

    pokemon.innerHTML+=`
    <div class='poke'>
   
    <img src=${front_default} alt="img">
    <h3>${name}</h3>
    <p>Height:${height}</p>
    <p>Height:${weight}</p>
    </div>
    `
}

const fetchPokemon = async(url)=>{
    const res= await fetch(url)
    const data =await res.json()
    
    getPokemon(data)
}

for(let i =1; i <150 ;i++){
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`
    console.log(1)
    fetchPokemon(url);
}





