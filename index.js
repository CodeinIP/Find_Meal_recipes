import {navbar,display} from './script.js'
// console.log(navbar);

document.getElementById("navbar").innerHTML = navbar();

let id;
const recipe = async ()=>{
    let query = document.getElementById("search").value;
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    // console.log(res);
    let data = await res.json();
    console.log(data.meals[0]);
    display(data.meals[0])
}
let  debounce = ()=>{
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(() => {
        recipe()
    }, 900);
}
document.getElementById("search").addEventListener("input",debounce)
