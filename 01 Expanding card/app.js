let panels = document.querySelectorAll(".panel");

panels.forEach(item=>{
    item.addEventListener('click', ()=>{
        removeClass()
        item.classList.add('active')
    })
})

function removeClass(){
    panels.forEach(item=>{
        item.classList.remove('active')
    })
}