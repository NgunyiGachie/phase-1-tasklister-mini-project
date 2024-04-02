document.addEventListener("DOMContentLoaded", () => {

  let submitButton = document.querySelector('input[value="Create New Task"]')

  let taskContainer = document.getElementById('taskContainer');
  
  submitButton.addEventListener('click', function(event){
    
    event.preventDefault();

    let taskInput = document.getElementById('new-task-description');

    let task = taskInput.value.trim();

    if (task !== '') {
      
      taskContainer.textContent = task;
    
    } else {
      
      alert("Please enter a task!")
    
    }
    
    taskInput.value = ''
  });

  

  const clickableElement = document.getElementById('new-task-description')
  
  clickableElement.addEventListener("click", function() {
    
    let inputField = document.createElement("input");
    
    inputField.type = "text";
    
    inputField.placeholder = "Type here";
    
    clickableElement.innerHTML = "";
    
    clickableElement.appendChild(inputField);
    
    inputField.focus();
    
    inputField.addEventListener("blur", function() {
    
      clickableElement.innerHTML = inputField.value;
    })
  })
});
