import React, { useState } from 'react';
import { useTodosDispatch } from "../contexts/TodosContext";

function TodoForm() {
    const [value, setValue] = useState('');
    const dispatch = useTodosDispatch();

    const onSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            text: value
        });
        setValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                value={value}
                placeholder={"what are you gonna do?"}
                onChange={e => setValue(e.target.value)}
            />
            <button>등록</button>
        </form>
    )
}

export default TodoForm;