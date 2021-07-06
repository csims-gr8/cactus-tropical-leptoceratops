// client-side js
// run by the browser each time your view template referencing it is loaded

const dreams = [];

// define variables that reference elements on our page
const jobsList = document.getElementById("jobs-list");

// request the jobs from our app's sqlite database
fetch("/jobs", {})
  .then(res => res.json())
  .then(response => {
  console.log(response)
    response.forEach(row => {
      appendNewJob(`${row.id} - ${row.title}`);
    });
  });

// a helper function that creates a list item for a given dream
const appendNewJob = dream => {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  jobsList.appendChild(newListItem);
};
