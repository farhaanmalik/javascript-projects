const btn = document.getElementById("btn");
const colors = ["red", "green", "white", "cyan", "grey", "#000"]; 

const handleBtn = () =>{
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);
    document.body.style.background = colors[randomNumber];
}

btn.addEventListener("click", handleBtn);

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}