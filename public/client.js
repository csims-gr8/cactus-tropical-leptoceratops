// client-side js
// run by the browser each time your view template referencing it is loaded

const dreams = [];

// define variables that reference elements on our page
const jobsList = document.getElementById("jobs-list");

// request the jobs from our app's sqlite database
fetch("/jobs", {})
  .then(res => res.json())
  .then(response => {
    // TODO: Show an error if one is returned
    console.log(response)
    response.forEach(row => {
      appendNewJob(`${row.id} - ${row.title}`, row.description);
    });
  });

// a helper function that creates a list item for a given job
const appendNewJob = (label, description) => {
  // TODO Do something with the description
  const newListItem = document.createElement("li");
  newListItem.innerText = label;
  jobsList.appendChild(newListItem);
};

