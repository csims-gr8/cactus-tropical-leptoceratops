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
        appendNewJob(row);
      });
    });  
}

// define variables that reference elements on our page
const jobsList = document.getElementById("jobs-list");
findJobs();

// request the jobs from our app's sqlite database

// a helper function that creates a list item for a given job
const appendNewJob = (row) => {  
  const newListItem = document.createElement("li");
  newListItem.innerText = `${row.id} - ${row.title}`;
  jobsList.appendChild(newListItem);
  
  const descriptionItem = document.createElement("text");
  descriptionItem.innerText = `${row.description}`;
  jobsList.appendChild(descriptionItem);
    
  console.log(row.saved);
  const saveButton = document.createElement('button');
  saveButton.appendChild(document.createTextNode(row.saved === 0 ? 'Add to Saved List' : 'Remove from Saved List'));
  jobsList.appendChild(saveButton);
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