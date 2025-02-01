document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        
        // Add click handler to remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append elements
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
        
        // Return focus to input field for better user experience
        taskInput.focus();
    }

    // Add event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
