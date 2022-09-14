// client-side js
// run by the browser each time your view template referencing it is loaded

const findJobs = (search) => {
  const path = search
    ? `/jobs?search=${search}`
    : '/jobs';
    
  fetch(path, {})
    .then(res => res.json())
    .then(response => {
      // TODO: Show an error if one is returned      
      console.log(response)
      response.forEach(row => {
        appendNewJob(row.id, `${row.id} - ${row.title}`, row.description);
      });
    });  
}

// define variables that reference elements on our page
const jobsList = document.getElementById("jobs-list");
findJobs();

// request the jobs from our app's sqlite database

// a helper function that creates a list item for a given job
const appendNewJob = (id, label, description) => {
  
  let check = document.createElement('input');
  check.type = 'checkbox';
  check.name = 'save';
  check.id = `select${id}`;
  check.value = id;
  jobsList.appendChild(check); 
  
  const newListItem = document.createElement("li");
  newListItem.innerText = `${label}`;
  jobsList.appendChild(newListItem);
  
  const descriptionItem = document.createElement("text");
  descriptionItem.innerText = `${description}`;
  jobsList.appendChild(descriptionItem);     
};

const removeChildren = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

document.addEventListener('keyup', function(event) {
  removeChildren(jobsList);
  const searchInput = document.getElementById("searchInput");
  findJobs(searchInput.value);
});

// add save checkbox for id for save
// call post /jobs/:id