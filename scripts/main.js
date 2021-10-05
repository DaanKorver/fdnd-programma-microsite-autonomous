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

semester1.forEach(sprint=>{
  modal.innerHTML += 
`
<section class="sprint">
  <h2>Sprint ${sprint.sprint} - <span>${sprint.naam}</span></h2>
  <section class="sprint__content">
      <div>
        <p>${sprint.beschrijving}</p>
        <ul>
          <li><img src="./../assets/link.svg" alt="link"/><a target="_blank" href="${sprint.opdrachten[0].live}">Voorbeeld opdracht 1</a></li>
          <li><img src="./../assets/link.svg" alt="link"/><a target="_blank" href="${sprint.opdrachten[1].live}">Voorbeeld opdracht 2</a></li>
          <li><img src="./../assets/link.svg" alt="link"/><a target="_blank" href="${sprint.opdrachten[2].live}">Voorbeeld opdracht 3</a></li>
        </ul>
      </div>
      <div class="sprint__image">
        <img src="./../assets/vaporwave.png" alt="project"/>
      </div>
  </section>
</section>
`
})

