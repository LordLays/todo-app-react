import React, { useState } from 'react';
import { FaWindowClose } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

interface TodoItem {
    id: number;
    text: string;
    taskType: string;
    isComplete: boolean;
}

interface TodoProps {
    todos: TodoItem[];
    completeTodo: (id: number) => void;
    removeTodo: (id: number) => void;
    updateTodo: (id: number, newValue: Partial<TodoItem>) => void;
}

const Todo: React.FC<TodoProps> = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState<number | null>(null);

    const submitUpdate = (id: number, updatedTodo: Partial<TodoItem>) => {
        updateTodo(id, updatedTodo);
        setEdit(null);
    };

    return (
        <>
            {todos.map(todo => (
                <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={todo.id}>
                    <div onClick={() => completeTodo(todo.id)}>
                        {edit === todo.id ? (
                            <input
                                type='text'
                                defaultValue={todo.text}
                                onBlur={(e) => submitUpdate(todo.id, { text: e.target.value })}
                            />
                        ) : (
                            <>
                                <span>{todo.text}</span> ({todo.taskType})
                            </>
                        )}
                    </div>
                    <div className='icons'>
                        <FaWindowClose onClick={() => removeTodo(todo.id)} className='delete-icon' />
                        <CiEdit onClick={() => setEdit(todo.id)} className='edit-icon' />
                    </div>
                </div>
            ))}
        </>
    );
}

export default Todo;