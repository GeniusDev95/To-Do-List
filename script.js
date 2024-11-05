document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("addTaskButton");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const clearAllButton = document.getElementById("clearAllButton");
    const submitTaskButton = document.getElementById("submitTaskButton");
    const inputContainer = document.getElementById("inputContainer");

    // Show input field when "Add Task" button is clicked
    addTaskButton.addEventListener("click", () => {
        inputContainer.style.display = "block";
        taskInput.focus(); // Automatically focus on the input field
    });

    // Function to add a task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");

        const leftDiv = document.createElement("div");
        leftDiv.classList.add('leftDiv' , 'form-check');
        leftDiv.title = "Mark it checked if you have completed the task"



         // Create checkbox
         const checkbox = document.createElement("input");
         checkbox.type = "checkbox";
         checkbox.classList.add('task-checkbox' ,'form-check-input');

         const textDiv = document.createElement("div");
         textDiv.classList.add("task-textbox");
         textDiv.appendChild(document.createTextNode(taskText));

 
         // Append checkbox and textbox to the new div
         leftDiv.appendChild(checkbox);
         leftDiv.appendChild(textDiv);


         li.appendChild(leftDiv);
 

        const removeButton = document.createElement("button");
        removeButton.innerHTML = " <i class='fa-solid fa-trash'></i>";
        removeButton.classList.add("remove");
        removeButton.title = "Remove Task";
        removeButton.onclick = () => li.remove();

        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = ""; // Clear the input after adding the task
        inputContainer.style.display = "none";
    };

    // Event Listener for submit task button
    submitTaskButton.addEventListener("click", addTask);

    // Event Listener for Clear All button
    clearAllButton.addEventListener("click", () => {
        taskList.innerHTML = "";
    });

    // Allow pressing "Enter" to add a task
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});