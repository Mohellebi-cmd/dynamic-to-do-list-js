document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to create a task element
    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        removeButton.onclick = () => {
            listItem.remove();
            removeTaskFromStorage(taskText);
        };

        listItem.appendChild(removeButton);
        return listItem;
    }

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to save tasks to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to remove task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        // If no taskText provided, get it from input
        if (!taskText) {
            taskText = taskInput.value.trim();
            
            if (taskText === '') {
                alert('Please enter a task');
                return;
            }
        }

        // Create and append task element
        const listItem = createTaskElement(taskText);
        taskList.appendChild(listItem);

        // Save to storage if needed
        if (save) {
            saveTaskToStorage(taskText);
            taskInput.value = '';
        }
    }

    // Add click event listener to add button
    addButton.addEventListener('click', () => addTask());

    // Add keypress event listener to input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when page loads
    loadTasks();
});
