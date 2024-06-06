import React, { useState } from 'react';
import { Task } from '../../service/todoApi';


interface TodoFormProps {
    onSubmit: (todo: Omit<Task, 'id'>) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
    const [input, setInput] = useState('');
    const [taskType, setTaskType] = useState('Single');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleTaskTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskType(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!input.trim()) { 
            return;
        }
    
        onSubmit({
            text: input,
            taskType: taskType,
            isComplete: false
        });
    
        setInput('');
        setTaskType('Single');
    };

    return (
        <>
        <div className="card">
            <div className="header"><h1>What plan do you have?</h1></div>
            <div className="content">
            <form className='todo-form form-container' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Add a todo'
                    value={input}
                    onChange={handleChange}
                />
                <div className="radio-group">
                    <label className="radio-label">
                        <input
                            type="radio"
                            value="Daily"
                            checked={taskType === 'Daily'}
                            onChange={handleTaskTypeChange}
                            className="form-radio"
                        />
                        <p className='label-color'>Daily Task</p>
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            value="Single"
                            checked={taskType === 'Single'}
                            onChange={handleTaskTypeChange}
                            className="form-radio"
                        />
                        <p className='label-color'>Single Task</p>
                    </label>
                </div>
                <button className='todo-button'>Add</button>
            </form>
            </div>
            </div>
        </>
    );
}

export default TodoForm;