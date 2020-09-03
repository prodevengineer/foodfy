const modalOverlay= document.querySelector('.modal-overlay')
const recipes=document.querySelectorAll('.recipe')


for (let recipe of recipes) {
  recipe.addEventListener('click', function(){
    modalOverlay.classList.add('active')

    const imageId=recipe.getAttribute('id')
    modalOverlay.querySelector("img").src=`/assets/${imageId}.png`
    
    const title=recipe.querySelector("h4")
    modalOverlay.querySelector(".modal-content h4").textContent=title.textContent

    const chef=recipe.querySelector("h5")
    modalOverlay.querySelector(".modal-content h5").textContent=chef.textContent

  })
}

document.querySelector('.close-modal').addEventListener('click', function(){
  modalOverlay.classList.remove('active')
  
})

