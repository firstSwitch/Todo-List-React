import React, { useState } from 'react'; 
import { v4 as uuidv4 } from 'uuid'; 
import { EditTodoForm } from './EditTodoForm'; 
import { Todo } from './Todo'; 
import { TodoForm } from './TodoForm'; 
uuidv4(); 
 
export const TodoWrapper = () => { 
    const [todos, setTodos] = useState([]) 
 
    const addTodo = todo => { 
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]) 
        console.log(todos); 
    } 
 
 
    const toggleComplete = id => { 
        setTodos(todos.map(todo => todos.id === id ? { ...todo, completed: !todo.completed } : todo)) 
    } 
 
    const deleteTodo = id => { 
        setTodos(todos.filter(todo => todo.id !== id)) 
    } 
 
    // const editTodo = id =>{ 
    //     setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo)) 
    // } 
 
    const makeTodoEditable = (id) => { 
        console.log(id); 
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)) 
    } 
 
    const editTodo = (value, id) => { 
        console.log(id); 
        setTodos(todos.map(todo => { 
            let newTodo = todo; 
            if(todo.id === id){ 
                newTodo = { ...todo, task: value, isEditing: !todo.isEditing }  
            } 
            return newTodo 
        })) 
    } 
 
    return ( 
        <div className='TodoWrapper'> 
            <h1>Get Things Done</h1> 
            <TodoForm addTodo={addTodo} /> 
            {todos.map((todo, index) => ( 
                todo.isEditing ? ( 
                    <EditTodoForm editTodo={editTodo} task={todo} /> 
                ) : ( 
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={makeTodoEditable} /> 
                ) 
            ))} 
        </div> 
    ) 
}