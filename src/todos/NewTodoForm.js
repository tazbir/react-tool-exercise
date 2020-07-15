import React,{useState} from 'react';
import './NewTodoForm.css';

const NewTodoForm=()=>{
    const [inputValue, setInputValue] = useState('');
    return (<div>
        <input className="new-todo-input" type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)} placeholder="type your new todo"/>
        <button className="new-todo-button">Create todo</button>
    </div>
);
}

export default NewTodoForm;