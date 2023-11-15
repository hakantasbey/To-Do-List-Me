const input = document.getElementById("input")
const addBtn = document.getElementById("add")
const clearBtn = document.getElementById("clear")
const ul = document.querySelector("ul")


// addBtn.addEventListener("click", ()=>{
    // const li = document.createElement("li")
    // const span = document.createElement("span")
    // ul.appendChild(li)
    // li.appendChild(span)

    // li.textContent = input.value
    // span.textContent = "X"

//! CGPT nin verdigi cevap sira onemli
addBtn.addEventListener("click",()=>{
    const li = document.createElement("li")
    const spanX = document.createElement("span")
    spanX.textContent= ("X")
    spanX.classList.add("spanJs")
    li.textContent= input.value
    li.appendChild(spanX)
    li.classList.add("liJs")
    ul.appendChild(li)
    input.value = ""
})


ul.addEventListener("click", (e)=>{
    if(e.target.classList.contains("liJs")){
        e.target.classList.toggle("liJs-checked")
    }else if(e.target.classList.contains("spanJs")){
        e.target.parentElement.remove()
    }
})


clearBtn.addEventListener("click", ()=>{
  while(ul.firstChild){
    ul.removeChild(ul.firstChild)
  }
})