const createElem = (elemType, sibOrParentElem, position, attributeType = "", attributeVal) => 
{
    const elem = document.createElement(elemType);
    if(attributeType !== "")
    {
        elem.setAttribute(attributeType, attributeVal);
    }
    sibOrParentElem.insertAdjacentElement(position, elem);
    return elem;
}

let pokNum = parseInt(prompt("How many pokemon you want to see?"));

while((isNaN(pokNum)) || (pokNum < 0))
{
    pokNum = parseInt(prompt("How many pokemon you want to see?"));
}

const pageTitle = document.querySelector("h1");

const test = () => 
{
    alert("hello");
};

pageTitle.onclick = test;

const urlPok = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

if(pokNum === 0)
{
    const msg = createElem("p",pageTitle, "afterend")
    msg.innerText = "No Pokemon Found";
}
else
{
    let parentDiv = createElem("div", pageTitle, "afterend", "id", "pokemonList");
    for(let i = pokNum; i > 0; i--)
    {
        let item = createElem("div", parentDiv, "afterbegin", "class", "item");
        let img = createElem("img", item, "afterbegin", "src", `${urlPok}${i}.png`);
        let num = createElem("span", img, "afterend").innerText = i;
    }
}