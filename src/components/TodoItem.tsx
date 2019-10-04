import React from 'react';
import './TodoItem.css';
import { useTodosDispatch } from "../contexts/TodosContext";

export type TodoItemProps = {
    todo: {
        id: number;
        text: string;
        done: boolean;
    };
}

function TodoItem({todo}: TodoItemProps) {
    const dispatch = useTodosDispatch();

    const handleToggle = (id : number) => {
        dispatch({
            type: "TOGGLE",
            id,
        })
    };

    const handleRemove = (id : number) => {
        dispatch({
            type: "REMOVE",
            id,
        })

    };

    return (
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span className={"text"} onClick={() => handleToggle(todo.id)}>{todo.text}</span>
            <span className={"remove"} onClick={() => handleRemove(todo.id)}>(X)</span>
        </li>
    );
}

export default TodoItem;