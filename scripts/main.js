import semester_sprint from "./semester_sprint.js";

const modal = document.querySelector(".modal")
const modalCross = document.querySelector(".modal__close")

modal.addEventListener("click", (e)=>{
  if(e.target.classList.contains("modal")) closeModal()
})

modalCross.addEventListener("click", closeModal)

function closeModal() {
  modal.classList.remove("modal--open")
}

function openModal() {
  modal.classList.add("modal--open")
}

openModal()

// Getting for JSON
function getSprints(semester) {
  return semester_sprint[semester].sprints
}

// Fill content
const semester1 = getSprints(0)
console.log(semester1);

semester1.forEach(sprint=>{
  modal.innerHTML += 
`
<section class="sprint">
<h2>Sprint ${sprint.sprint} - ${sprint.naam}</h2>
<section class="sprint__content">
    <p>${sprint.beschrijving}</p>
    <div class="carousel">

    </div>
</section>
</section>
`
})