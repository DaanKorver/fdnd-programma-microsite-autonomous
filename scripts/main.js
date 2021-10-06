import semester_sprint from "./semester_sprint.js";

const ctas = document.querySelectorAll(".cta")


// Getting for JSON
function getSprints(semester) {
  return semester_sprint[semester].sprints
}