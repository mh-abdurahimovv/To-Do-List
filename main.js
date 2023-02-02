
// Try to work with arrays and objects
// for example you have an array of tasks

// [ "Read book", "Clean house" ]

// and you will have a function which takes this array a creates html elements and renders it in html
// And that's it you will have to work only items in array and render html every time array will change

window.addEventListener('load', function() {
    const form = document.getElementById('new-task-form')
          input = document.getElementById('new-task-input') 
          listElem = document.getElementById('tasks')

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        const task = input.value;


        if (!task) {
            alert('Please add task');
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
        taskActionsElement.classList.add('action');
        taskElem.appendChild(taskActionsElement);

        const taskEditElem = document.createElement('button');
        taskEditElem.classList.add('edit')
        taskEditElem.innerHTML = 'Edit';
	    
	// Maybe you will remove these css styles and append styles to class delete
        taskEditElem.style = `
        cursor: pointer;
	    margin: 0 0.5rem;
        font-size: 1.125rem;
        font-weight: 700;
        text-transform: uppercase;
        transition: 0.4s;
        background-image: linear-gradient(to right, var(--pink), var(--purple));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        `

        const taskDelElem = document.createElement('button');
        taskDelElem.classList.add('delete')
        taskDelElem.innerHTML = 'Delete';

    	// same here
    	taskDelElem.style = `
        cursor: pointer;
	    margin: 0 0.5rem;
        font-size: 1.125rem;
        font-weight: 700;
        text-transform: uppercase;
        transition: 0.4s;
        color: crimson;
        `

        taskActionsElement.appendChild(taskEditElem);
        taskActionsElement.appendChild(taskDelElem);

        taskElem.appendChild(taskActionsElement)


        listElem.appendChild(taskElem)

        input.value = '';
        

        taskEditElem.addEventListener('click', function() {
            if (taskEditElem.innerText.toLowerCase() === 'edit') {
                taskInputElem.removeAttribute('readonly');
                taskInputElem.focus() // <-- it is creative
                taskEditElem.innerText = 'Save'
            } else {
                taskInputElem.setAttribute('readonle', 'readonly');
                taskEditElem.innerText = 'Edit';
            }
        })

        taskDelElem.addEventListener('click', function() {
            taskElem.remove()
        })

	// You are storing data to localstorage, but not getting it from there
        window.localStorage.setItem('todos', taskElem);
       
        


    })
          
});
