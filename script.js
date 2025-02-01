document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const todoApp = document.getElementById('todo-app');

    function showErrorMessage(message) {
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error-message');
        errorDiv.textContent = message;
        
        todoApp.insertBefore(errorDiv, taskList);

        setTimeout(() => {
            errorDiv.classList.add('fade-out');
            setTimeout(() => {
                errorDiv.remove();
            }, 300);
        }, 3000);
    }

    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');

        const taskContent = document.createElement('span');
        taskContent.classList.add('task-content');
        taskContent.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        removeButton.textContent = 'Remove';

        removeButton.addEventListener('click', () => {
            listItem.classList.add('fade-out');
            setTimeout(() => {
                listItem.remove();
                if (taskList.children.length === 0) {
                    const emptyMessage = document.createElement('li');
                    emptyMessage.classList.add('empty-message');
                    emptyMessage.textContent = 'No tasks yet. Add a new task above.';
                    taskList.appendChild(emptyMessage);
                }
            }, 300);
        });

        listItem.appendChild(taskContent);
        listItem.appendChild(removeButton);

        return listItem;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            showErrorMessage('Please enter a task description');
            taskInput.classList.add('input-error');
            setTimeout(() => {
                taskInput.classList.remove('input-error');
            }, 1000);
            return;
        }

        const emptyMessage = document.querySelector('.empty-message');
        if (emptyMessage) {
            emptyMessage.remove();
        }

        const listItem = createTaskElement(taskText);
        taskList.appendChild(listItem);
        listItem.classList.add('fade-in');

        taskInput.value = '';
        taskInput.focus();

        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = 'Task added successfully';
        todoApp.insertBefore(successMessage, taskList);

        setTimeout(() => {
            successMessage.classList.add('fade-out');
            setTimeout(() => {
                successMessage.remove();
            }, 300);
        }, 2000);
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    const emptyMessage = document.createElement('li');
    emptyMessage.classList.add('empty-message');
    emptyMessage.textContent = 'No tasks yet. Add a new task above.';
    taskList.appendChild(emptyMessage);
});
