import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {getAllTasks, createTask, editTask, deleteTask, mapTask} from '../../service/todoApi';
import { Task } from '../../service/todoApi';
import NavBar from '../NavBar/NavBar';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Task[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tasks = await getAllTasks();
                const mappedTasks = mapTask(tasks);
                console.log(mappedTasks)
                setTodos(mappedTasks);
                console.log(todos)
            } catch (error) {
                console.error('Failed to fetch tasks:', error);
                setTodos([]);
            }
        };

        fetchData();
    }, []);

    const addTodo = async (todo: Omit<Task, 'id'>) => {
        try {
            const newTodo = await createTask(todo);
            setTodos(prevTodos => [newTodo, ...prevTodos]);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };
    
    const updateTodo = async (todoId: number, updatedTodo: Partial<Task>) => {
        try {
            await editTask(todoId, updatedTodo);
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo.id === todoId ? { ...todo, ...updatedTodo } : todo
                )
            );
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const removeTodo = async (id: number) => {
        try {
            await deleteTask(id);
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error removing task:', error);
        }
    };

    const completeTodo = async (id: number) => {
        try {
            const todoToComplete = todos.find(todo => todo.id === id);
            if (todoToComplete) {
                const updatedTodo = { ...todoToComplete, isComplete: !todoToComplete.isComplete };
                await updateTodo(id, updatedTodo);
            }
        } catch (error) {
            console.error('Error completing task:', error);
        }
    };

    return (
        <div>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;

