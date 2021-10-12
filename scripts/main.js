import sprints from "./sprints.js";
import avifSupport from "./avifSupport.js";

const sprintsContainer = document.querySelector(".sprints-semesters")


avifSupport().then(()=>{
    renderSprints()
}).catch(()=>{
    renderSprints("noSupport")
    fixImages()
})

function renderSprints(support) {
    sprints.forEach(sprint=>{
        sprintsContainer.innerHTML += 
      `
      <section id="sprint${sprint.sprint}" class="sprint">
      <div class="sprint-image" style="background-image: url('${!support ? sprint.foto : sprint.foto.split(".avif").shift() + ".jpg"}')">
          <div class="sprint-title">
              <h2>Sprint</h2>
              <div class="sprint-number">${sprint.sprint}</div>
          </div>
      </div>
      <div class="sprint-components">
          <button class="cta">learn</button>
          <p class="sprint-name">${sprint.naam}</p>
      </div>
      
      <div class="sprint-components-bottom">
          <div class="heart-container">
              <svg class="heart" viewBox="0 0 32 29.6">
                  <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
              </svg>
          </div>
          <div class="hashtag-container">
              <svg class="hashtag" version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"
                  style="enable-background:new 0 0 490 490;" xml:space="preserve">
                  <path d="M64.333,490h58.401l33.878-137.69h122.259L245.39,490h58.401l33.878-137.69h119.92v-48.162h-108.24l29.2-117.324h79.04
      v-48.162H390.23L424.108,0H365.31l-33.878,138.661H208.79L242.668,0h-58.415l-33.864,138.661H32.411v48.162h106.298l-28.818,117.324
      h-77.48v48.162h65.8L64.333,490z M197.11,186.824h122.642l-29.2,117.324H168.292L197.11,186.824z" />
              </svg>
          </div>
          <div class="arrow-container">
              <a href="sprint.html?sprint=${sprint.sprint}">
                  Bekijk deze sprint
                  <div class="arrow"></div>
              </a>
          </div>
      </div>
      </section>
      `
      })
}

function fixImages() {
    document.querySelector(".home").style.backgroundImage = `url('../assets/hero-image.jpeg')`
    document.querySelector(".opdrachten-leertaken-image").style.backgroundImage = `url('../assets/kickoff-3.JPG')`
}