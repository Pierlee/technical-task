document.addEventListener("DOMContentLoaded", function(){
  const menuIcon = document.getElementById("menu-icon")
  const navLinks = document.getElementById("nav-links")

  menuIcon.addEventListener("click", function(){
    navLinks.classList.toggle("active")
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const expandButton = document.getElementById("expand-button")
  const collapsedParagraph = document.querySelector(".about-content .collapsed")

  expandButton.addEventListener("click", function () {
    if (collapsedParagraph.style.display === "none") {
      collapsedParagraph.style.display = "block"
      expandButton.textContent = "Read Less"
    } else {
      collapsedParagraph.style.display = "none"
      expandButton.textContent = "Read More..."
    }
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form")

  contactForm.addEventListener("submit", function (event) {
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const messageInput = document.getElementById("message")

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
      event.preventDefault();
      alert("Please fill out all fields.")
    }
  })
})

// This is where the Liquid.js code starts
const projectsData = [
    {
      "name": "Grocery cart",
      "description": "Using html, css and js exclusively, I created a grocery cart where I can write down the name of the grocery items and the quantity I want to buy. I used setItem and getItem to add the items into the local storage so if you refresh the page all of the items that you have already created are still there.",
      "image": "images/grocery-cart.png",
      "repository": "https://github.com/Pierlee/Grocery-Cart",
      "imageClass": "cart"
    },
    {
      "name": "Organo",
      "description": "I used react to create a webapp using ReactJS where I can add team members and the different areas they work in.",
      "image": "images/organo.png",
      "repository": "https://github.com/Pierlee/Organo",
      "imageClass": "organo"
    },
    {
      "name": "SunnySide",
      "description": "Using html, css and js exclusively, I created a website using the assets from frontend mentor. I used CSS and HTML and a lot of FlexBox to create a responsive website.",
      "image": "images/sunnyside.png",
      "repository": "https://github.com/Pierlee/SunnySide",
      "imageClass": "sunnyside"
    },
    {
      "name": "Results Summary Component",
      "description": "I used react to create a component that would show the scores of each of your abilities and create an average for all scores",
      "image": "images/summary-component.png",
      "repository": "https://github.com/Pierlee/results-summary-component",
      "imageClass": "results-component"
    },
    {
      "name": "Calculadora",
      "description": "Using html, css and js exclusively, I created a cool responsive caclulator that simulates a tablet and a cellphone",
      "image": "images/calculadora.png",
      "repository": "https://github.com/Pierlee/Calculadora",
      "imageClass": "calculadora"
    }
];

const engine = new Liquid();

const template = `
  <ul>
    {% for project in projects %}
    <li class="project">
      <div class="project-header">
        <div class="project-information">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description | truncatewords: 30 }}</p>
        </div>
        <div class="project-buttons">
          <a href="{{ project.repository }}" target="_blank">GitHub</a>
          <a class="show-image-button">Show Image</a>
        </div>
      </div>
      <img class="project-image {{ project.imageClass }}" src="{{ project.image }}" alt="{{ project.name }} Image">
    </li>
    {% endfor %}
  </ul>
`;

const renderData = { projects: projectsData };

engine.parseAndRender(template, renderData).then(html => {
  document.getElementById('projects-list').innerHTML = html;
});

document.addEventListener("DOMContentLoaded", function () {
  const showImageButtons = document.querySelectorAll(".show-image-button");
  const projectImages = document.querySelectorAll(".project-image");

  showImageButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      if (projectImages[index].classList.contains("show")) {
        projectImages[index].classList.remove("show");
        button.textContent = "Show Image";
      } else {
        projectImages[index].classList.add("show");
        button.textContent = "Hide Image";
      }
    });
  });
});
