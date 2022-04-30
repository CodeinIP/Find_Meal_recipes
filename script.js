function navbar(){
    return `        <div><h3><a href="index.html">Home</a></h3></div>
    <div><h3><a href="todaysrecipe.html">TodaysRecipe</a></h3></div>
    <div><h3><a href="recipes.html">recipes</a></h3></div>
    <div><h3><a href="signup.html">SignUp</a></h3></div>
    <div><h3><a href="login.html">Login</a></h3></div>`;
}


let display = ({strMeal,strInstructions,strYoutube,strMealThumb,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15}) => {
    document.getElementById("container").innerHTML = null;
    let container = document.getElementById("container");
    let imgbox = document.createElement("div");
    let img = document.createElement("img");
    img.src = strMealThumb;
    imgbox.append(img);
    let discbox = document.createElement("div");
    let link = document.createElement("a");
    link.innerText = `Watch video ${link.href=strYoutube}`
    let name = document.createElement("h3");
    name.innerText = strMeal;
    let inst = document.createElement("p");
    let hr = document.createElement("hr");
    inst.innerText = `Instructions:-${strInstructions}`;
    let ingred = document.createElement("p");
    ingred.innerText  = `Ingredients:- ${strIngredient1+" "+strIngredient2+" "+strIngredient3+" "+strIngredient4+" "+strIngredient5+" "+strIngredient6+" "+strIngredient7+" "+strIngredient8+" "+strIngredient9+" "+strIngredient10+" "+strIngredient11+" "+strIngredient12+" "+strIngredient13+" "+strIngredient14+" "+strIngredient15}`;
    discbox.append(name,link,ingred,hr,inst);
    container.append(imgbox,discbox);
}
let displayGrid = (data) => {
    // document.getElementById("container").innerHTML = null;
    data.forEach(({strMeal,strMealThumb,strYoutube}) => {
        let container = document.getElementById("containerforall");
        let box = document.createElement("div");
        let imgbox = document.createElement("div");
        imgbox.setAttribute("id","imgbox")
        let img = document.createElement("img");
        img.src = strMealThumb;
        let descbox = document.createElement("div");
        descbox.setAttribute("id","descbox");
        let name = document.createElement("h3");
        name.innerText = strMeal;
        let link = document.createElement("a");
        link.innerText = `Watch:-${link.href=strYoutube}`
        descbox.append(name,link);
        imgbox.append(img);
        box.append(imgbox,descbox);
        container.append(box);
    })
}
export {navbar,display,displayGrid};