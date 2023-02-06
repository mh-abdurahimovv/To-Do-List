window.addEventListener('load', function() {
    const form = document.getElementById('new-task-form')
          input = document.getElementById('new-task-input') 
          listElem = document.getElementById('tasks')

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        const task = input.value;

        if(!task) {
            alert('Add task')
            return;
        } 

        const taskElem = document.createElement('div');
        taskElem.classList.add('task');

        const tasklElemeContent = document.createElement('div')
        tasklElemeContent.classList.add('content')
        

        taskElem.appendChild(tasklElemeContent);

        const taskInputElem = document.createElement('input');
        taskInputElem.classList.add('text')
        taskInputElem.type = 'text';
        taskInputElem.value = task;
        taskInputElem.setAttribute('readonly', 'readonly');

        tasklElemeContent.appendChild(taskInputElem);

        
        const taskActionsElement = document.createElement('div');
        taskActionsElement.classList.add('actions');
        taskElem.appendChild(taskActionsElement);

        const taskEditElem = document.createElement('button');
        taskEditElem.classList.add('edit')
        taskEditElem.innerHTML = 'Edit';

        const taskDelElem = document.createElement('button');
        taskDelElem.classList.add('delete')
        taskDelElem.innerHTML = 'Delete';
        

        taskActionsElement.appendChild(taskEditElem);
        taskActionsElement.appendChild(taskDelElem);

        taskElem.appendChild(taskActionsElement)

        listElem.appendChild(taskElem)

        input.value = '';

        taskEditElem.addEventListener('click', function() {
            if (taskEditElem.innerHTML.toLowerCase() === 'edit') {
                taskInputElem.removeAttribute('readonly');
                taskInputElem.focus();
                taskEditElem.innerHTML = 'SAVE'
            } else {
                taskInputElem.setAttribute('readonly', 'readonly');
                taskEditElem.innerHTML = 'Edit'

            }
        })

        taskDelElem.addEventListener('click', function() {
            taskElem.remove()
        })
     })
})         









