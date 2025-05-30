type Task = {
        title: string,
        completed: boolean,
        createdAt: Date,
    }

const list = document.querySelector<HTMLUListElement>('#list'); //only use for query selector
const form = document.querySelector<HTMLFormElement>('#new-task-form');
const input = document.querySelector<HTMLInputElement>('#new-task-title');

const tasks: Task[] = loadTasks()  //array
tasks.forEach(addListItem)

form?.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(input?.value == '' || input?.value == null) return;

    //create a tasks
    const newTask: Task = {
        title: input.value,
        completed: false,
        createdAt: new Date(),
    }
    tasks.push(newTask)

    addListItem(newTask);
    input.value = ''
});

function addListItem(task: Task){
    const item = document.createElement('li');
    const label = document.createElement('label');
    const  checkbox = document.createElement("input");
    checkbox.addEventListener('change', ()=>{
    task.completed = checkbox.checked

        // saveTask()
        localStorage.setItem("TASKS", JSON.stringify(tasks))
    })

    checkbox.type = "checkbox"
    checkbox.checked = task.completed
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(task.title))
    item.append(label);
    list?.append(item)
}

function loadTasks(): Task[]{
    const taskJson = localStorage.getItem("TASKS");
    if(taskJson == null) return[];
    return JSON.parse(taskJson)
}
