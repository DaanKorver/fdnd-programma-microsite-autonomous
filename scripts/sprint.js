import sprints from "./sprints.js"

const sprintNummer = (new URLSearchParams(window.location.search).get("sprint")) - 1
const pageContent = sprints[sprintNummer]

const title = document.getElementById("title")
const description = document.getElementById("description")
const links = document.querySelectorAll("#links > li > a")

if(!pageContent) window.location = "index.html"

document.title = `Sprint ${pageContent.sprint} - ${pageContent.naam}`

title.innerText = pageContent.titel
description.innerText = pageContent.beschrijving

for (let i = 0; i < links.length; i++) {
    links[i].href = pageContent.opdrachten[i].live
}
