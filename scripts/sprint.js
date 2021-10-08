import sprints from "./sprints.js"

const sprintNummer = (new URLSearchParams(window.location.search).get("sprint")) - 1
const pageContent = sprints[sprintNummer]

console.log(pageContent);