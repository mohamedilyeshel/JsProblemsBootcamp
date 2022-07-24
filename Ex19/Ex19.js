const body = document.body;
const colorBtn = document.querySelector("button");
const colorRgbCode = document.querySelector("h1");

colorBtn.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    colorRgbCode.innerText = body.style.backgroundColor;
    navigator.clipboard.writeText(body.style.backgroundColor);
    colorBtn.innerText = "Copied this color! "+body.style.backgroundColor;
});