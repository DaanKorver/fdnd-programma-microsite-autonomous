import semester_sprint from "./semester_sprint.js";

const modal = document.querySelector(".modal")
const modalCross = document.querySelector(".modal div")
const ctas = document.querySelectorAll(".cta")

for (let i = 0; i < ctas.length; i++) {
  ctas[i].addEventListener("click", ()=>{
    const semester = getSprints(i)
    fillModal(semester)
    openModal()
  })
}

console.log(modalCross);

console.log(modal);

modal.querySelector(".modal__content").addEventListener("click", (e)=>{
  if(e.target.classList.contains("modal__content")) closeModal()
})

modalCross.addEventListener("click", closeModal)

function closeModal() {
  modal.classList.remove("modal--open")
  document.body.style.overflow = "auto"
}

function openModal() {
  modal.classList.add("modal--open")
  document.body.style.overflow = "hidden"
}

// Getting for JSON
function getSprints(semester) {
  return semester_sprint[semester].sprints
}

function fillModal(semester) {
  modal.querySelector(".modal__content").innerHTML = ""
  semester.forEach(sprint=>{
    modal.querySelector(".modal__content").innerHTML += 
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
}