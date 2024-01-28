const addCount = document.getElementById("addCount")
const removeCount = document.getElementById("removeCount")
const count = document.getElementById("count")

let counter = 0;

addCount.addEventListener("click", () =>{
    counter++;
    count.innerHTML = counter;
})

removeCount.addEventListener("click", () =>{
    if(counter == 0) return count.innerHTML = 0;
    counter--;
    count.innerHTML = counter;
})

const setCount = () => {
    count = counter;
}