// For using this on you have to add onClick=addOpen to the button
// function addOpen() {
//   let openNav = document.querySelector("header");
//   if (openNav.className === "header") {
//     openNav.className += " nav-open";
//   } else {
//     openNav.className = "header";
//   }
// }

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  if (header.classList.value.includes("nav-open")) {
    header.classList.remove("nav-open");
  } else {
    header.classList.add("nav-open");    
  }
});

// Sticky Navigation

let sectionHeroElement = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting && !header.classList.value.includes("nav-open")) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroElement);

// Smooth scrolling animation

const allLink = document.querySelectorAll("a:link");
allLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Scroll back to top
    // if (href === "/")
    //   e.preventDefault();
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    // console.log(href);

    if (href === "#" || href.startsWith("#")) {
      e.preventDefault();
      const selectClass = document.querySelector(href);
      selectClass.scrollIntoView({ behavior: "smooth" });
    }

    header.classList.remove("nav-open");
  });
});

//Select current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;



const intersectionCallback = (entries) => {
  for (const entry of entries) {
    // Loop over all elements that either enter or exit the view.
    if (entry.isIntersecting) {
      // This is true when the element is in view.
      entry.target.classList.add("show"); // Add a class.
    }
  }
};

/**
 * Create a observer and use the instersectionCallback as
 * the instructions for what to do when an element enters
 * or leaves the view
 */
const observer2 = new IntersectionObserver(intersectionCallback);

/**
 * Get all .item elements and loop over them.
 * Observe each individual item.
 */
const items = document.querySelectorAll(".step-text-box,.step-img-box");
for (const item of items) {
  observer2.observe(item);
}