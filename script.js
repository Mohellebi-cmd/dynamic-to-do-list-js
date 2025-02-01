document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();
        
        // Check if taskText is empty
        if (taskText === '') {
            alert('Please enter a task'); // Changed to use alert as per requirements
            return;
        }

        // Create new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Add click event to remove button
        removeButton.onclick = () => {
            listItem.remove();
        };

        // Append remove button to list item
        listItem.appendChild(removeButton);

        // Append list item to task list
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
    }

    // Add click event listener to add button
    addButton.addEventListener('click', addTask);

    // Add keypress event listener to input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
