document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function createTaskElement(taskText) {
        // Create list item with task text
        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task-text');
        listItem.appendChild(taskSpan);

        // Create remove button with appropriate styling
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        
        // Add button container for proper spacing
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(removeButton);
        
        // Add interaction handlers
        removeButton.onclick = function() {
            listItem.classList.add('fade-out');
            setTimeout(() => {
                taskList.removeChild(listItem);
            }, 300);
        };

        // Add hover effect class
        listItem.classList.add('task-item');
        
        // Assemble the task item
        listItem.appendChild(buttonContainer);
        
        return listItem;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            const inputElement = taskInput.parentElement;
            inputElement.classList.add('input-error');
            taskInput.placeholder = 'Please enter a task';
            
            setTimeout(() => {
                inputElement.classList.remove('input-error');
                taskInput.placeholder = 'Enter a new task';
            }, 2000);
            return;
        }

        // Create and add the new task
        const listItem = createTaskElement(taskText);
        taskList.appendChild(listItem);

        // Add entrance animation class
        listItem.classList.add('fade-in');
        
        // Reset input field
        taskInput.value = '';
        taskInput.focus();
    }

    // Event Listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Remove error styling when user starts typing
    taskInput.addEventListener('input', () => {
        const inputElement = taskInput.parentElement;
        if (inputElement.classList.contains('input-error')) {
            inputElement.classList.remove('input-error');
            taskInput.placeholder = 'Enter a new task';
        }
    });
});
