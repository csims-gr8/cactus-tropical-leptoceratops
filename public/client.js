// client-side js
// run by the browser each time your view template referencing it is loaded

const findJobs = (search) => {
  fetch("/jobs", {})
    .then(res => res.json())
    .then(response => {
      // TODO: Show an error if one is returned      
      console.log(response)
      response.forEach(row => {
        appendNewJob(`${row.id} - ${row.title}`, row.description);
      });
    });  
}

// define variables that reference elements on our page
const jobsList = document.getElementById("jobs-list");
findJobs();

// request the jobs from our app's sqlite database

// a helper function that creates a list item for a given job
const appendNewJob = (label, description) => {
  // TODO Do something with the description
  const newListItem = document.createElement("li");
  newListItem.innerText = `${label}`;
  jobsList.appendChild(newListItem);
  const descriptionItem = document.createElement("text");
  descriptionItem.innerText = `${description}`;
  jobsList.appendChild(descriptionItem);
};

document.addEventListener('keup', function(event) {
  const searchInput = document.getElementById("searchInput");
  console.log(searchInput.value);
  if (event.code == 13) {
    console.log('maybe');
  }
});

// searchInput.on('keyDown', e => {
//   console.log(searchInput.value);
//   console.log('123');
//   console.log('here');
//   if (e.keyCode == 13) {
//     findJobs($("#searchInput").value);
//   }  
// });

