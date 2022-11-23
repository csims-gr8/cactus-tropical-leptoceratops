// client-side js
// run by the browser each time your view template referencing it is loaded

// define variables that reference elements on our page
const jobsList = document.getElementById("jobs");

let jobData = [];
// request the jobs from our app's sqlite database
fetch("/jobs", {})
  .then((res) => res.json())
  .then((response) => {
    // TODO: Show an error if one is returned
    console.log(response);
    jobData = response;
    // response.forEach(job => {
    //   appendNewJob(`${job.id} - ${job.title}`, job.description);
    // });
  });

// a helper function that creates a list item for a given job
const appendNewJob = (label, description) => {
  // TODO Do something with the description
  const newListItem = document.createElement("li");
  newListItem.innerText = label;
  jobsList.appendChild(newListItem);
};

//handler function that helps display the job selected by the user
const jobSelectionHandler = () => {
  const dropdowns = document.querySelectorAll(".dropdown");
  
  dropdowns.forEach((dropdown) => {
    //get inner elemnts from each dropdown choice
    const select = dropdown.querySelector(".select");
    const selected = dropdown.querySelector(".selected");
    const options = dropdown.querySelectorAll(".menu li");
    const menu = dropdown.querySelector(".menu");
    const caret = dropdown.querySelector(".caret");

    //click event for each selected element
    select.addEventListener("click", () => {
      select.classList.toggle("select-slicked");
      caret.classList.toggle("caret-rotate");
      menu.classList.toggle("menu-open");
    });

    options.forEach((option) => {
      //a click event for the option elements
      option.addEventListener("click", () => {
        //selected option will match the inner text
        selected.innerText = option.innerText;

        select.classList.remove("selected-clicked");
        caret.classList.remove("caret-rotate");

        //menu will close after user selection
        menu.classList.remove("menu-open");

        //remove active class from ALL option elements
        options.forEach((option) => {
          option.classList.remove("active");
        });

        option.classList.add("active");
      });
    });
  });
};

//Dynamically update the job description and location
const jobSelectedHandler = (id) => {
  let selectedJob = document.getElementById(id);
  let descriptionHeader = document.getElementById("description-header");
  let jobDescription = document.getElementById("description");
  let jobLocation = document.getElementById("job-location");
  
  jobData.forEach((job) => {
    if (id === job.id) {
      console.log(job.description);
      descriptionHeader.innerText = job.title;
      jobDescription.innerText = job.description;
      jobLocation.innerText = job.location;
    }
  });
};
