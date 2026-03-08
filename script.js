function showCategory(cat){

let categories=document.querySelectorAll(".category")

categories.forEach(c=>{
c.classList.add("hidden")
})

document.getElementById(cat).classList.remove("hidden")

}