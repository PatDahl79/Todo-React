import React, { useState } from 'react'
import './Todo.css'

function Todo() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){
    if(newTask.trim() !== ""){
    setTasks(t => [...t, newTask]);
    setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks); // Update the state with the updatedTasks array
    }
  }
  
  function moveTaskDown(index){
    if (index < tasks.length -1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks); // Update the state with the updatedTasks array
    }

  }

  return(
    <div className="to-do-list">

      <h1>To-Do-Lists</h1>

      <div>
        <input 
        type="text" 
        placeholder='Enter a task...'
        value={newTask}
        onChange={handleInputChange}/>
        <button  className='add-button' onClick={addTask}> Add </button>
      </div>

      <ol>
        {tasks.map((task, index) => 
        <li key={index}>
          <span className='text'>{task}</span>
          <button className='delete-button' onClick={() => deleteTask(index)} > Delete </button>
          <button className='move-button' onClick={() => moveTaskUp(index)} > Upp </button>
          <button className='move-button' onClick={() => moveTaskDown(index)} > Down </button>
        </li>
      )}
      </ol>

    </div>
  );

}

export default Todo