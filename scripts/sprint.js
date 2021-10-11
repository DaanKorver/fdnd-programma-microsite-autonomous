import sprints from "./sprints.js"

const sprintNummer = (new URLSearchParams(window.location.search).get("sprint")) - 1
const pageContent = sprints[sprintNummer]

const title = document.getElementById("title")
const description = document.getElementById("description")
const links = document.querySelectorAll("#links > li > a")
const currentSprintEl = document.querySelector(".current-sprint")
const nextSprintEl = document.querySelector(".next-sprint")
const sprintImage = document.querySelector(".sprint-image")
const sprintDatum = document.querySelector(".datum")

if(!pageContent) window.location = "index.html"

document.title = `Sprint ${pageContent.sprint} - ${pageContent.naam}`

currentSprintEl.innerText = `Sprint ${pageContent.sprint}: ${pageContent.naam}`

if(sprints[sprintNummer + 1]) {
    nextSprintEl.innerText = `Sprint ${sprints[sprintNummer + 1].sprint} - ${sprints[sprintNummer + 1].naam}`
    nextSprintEl.href = `sprint.html?sprint=${sprintNummer + 2}`
} else nextSprintEl.style.display = "none"

title.innerText = pageContent.titel
sprintDatum.innerText = pageContent.datum
description.innerText = pageContent.beschrijving
sprintImage.style.backgroundImage = `url('${pageContent.foto}')`

for (let i = 0; i < links.length; i++) {
    links[i].href = pageContent.opdrachten[i].live
}
