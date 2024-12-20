let tasks = [];

let addButton = document.getElementById('add-task');

function addTask() {
   const inputTask = document.getElementById('input-task');
   const inputText = inputTask.value.trim();

   if(inputTask) {
      tasks.push({
         inputText:inputText, completed:false
      });

     
      updateTaskList()
       inputTask.value = ''
   }
}

const deleteTask = (index) => {
   tasks.splice(index, 1);
   updateTaskList();
}

const editTask = (index) => {
   const inputTask = document.getElementById('input-task');
   inputTask.value = tasks[index].inputText;

   tasks.splice(index, 1);
   updateTaskList();
}

function updateTaskList() {
   const taskList = document.getElementById('task-list');
   taskList.innerHTML = '';

   tasks.forEach((task, index) => {
      const listItem = document.createElement('li');

      listItem.innerHTML = `
      <div class="task-list-container" title="Task">
         <div class="tasks">
            <input type="checkbox" class="check-box" title="Check & Uncheck Completed Task">
            <p class="input-result" >${task.inputText}</p>
         </div>
         <div class="action-button">
            <i class='bx bxs-edit' onclick="editTask(${index})" title="Edit Task"></i>
            <i class='bx bxs-trash' onclick="deleteTask(${index})" title="Delete Task"></i>
         </div>
   </div>
      `;
      
      taskList.append(listItem);
   })
}

addButton.addEventListener('click', (e) =>{
   const inputTask = document.getElementById('input-task');
   e.preventDefault()

   addTask()

   
})