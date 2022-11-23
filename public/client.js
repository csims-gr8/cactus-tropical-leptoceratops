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

const jobHandler = () => {
  document.getElementById("jobs").classList.toggle("show");
  // use jobData to populate div passed to click handler
  jobsList.forEach((job) => {});
};

const jobSelectedHandler = (id) => {
  console.log(document.getElementById(id));
  jobData.forEach((job) => {
    if (id === job.id) {
      console.log(job.description);
    }
  });
};
