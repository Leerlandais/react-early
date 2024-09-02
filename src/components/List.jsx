

import { useState } from 'react';

function createInitialTodos() {
    const initialTodos = [];


    return initialTodos;
}

function TodoList() {
    const [todos, setTodos] = useState(createInitialTodos);
    const [text, setText] = useState('');

    function handleRem(id) {
        setTodos(todos.filter(item => item.id !== id));

    }
    return (
        <>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button style={{marginLeft: "10px"}} onClick={() => {
                setText('');
                setTodos([{
                    id: todos.length,
                    text: text
                }, ...todos]);
            }}>Add</button>
            <ul>
                {todos.map(item => (
                    <li key={item.id}>
                        {item.text}
                        <button className={"smallBtn"} onClick={() => handleRem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList