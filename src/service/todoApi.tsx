import axios, { AxiosResponse } from "axios";

const API_URL = 'https://localhost:7110/service/Todo'

interface Task {
    id: number;
    text: string;
    taskType: string;
    isComplete: boolean;
}
const mapTask = (serverTasks: Task[]): Task[] => {
    return serverTasks.map(serverTask => ({
        id: serverTask.id,
        text: serverTask.text,
        taskType: serverTask.taskType,
        isComplete: serverTask.isComplete,
    }));
};

const getTask = async (TodoID: number): Promise<Task> => {
    try {
        const response: AxiosResponse<Task> = await axios.get(`${API_URL}/tasks/${TodoID}`);
        console.log('Response from server:', response.data);
        return response.data;    
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }

}

const getAllTasks = async (): Promise<Task[]> => {
    try {
      const response: AxiosResponse<Task[]> = await axios.get(`${API_URL}/tasks`);
      console.log('Response from server:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  };

const createTask = async (Task: Omit<Task, 'id'>): Promise<Task> => {
    try {
        const response: AxiosResponse<Task> = await axios.post(`${API_URL}/`, Task);
        console.log('Response from server:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}

const editTask = async (TodoID: number, updatedTask: Partial<Task>): Promise<Task> => {
    try {
        const response: AxiosResponse<Task> = await axios.put(`${API_URL}/tasks/${TodoID}`, updatedTask);
        console.log('Response from server:', response.data);
        return response.data;  
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
}

const deleteTask = async (TodoID: number): Promise<Task> => {
    try {
        const response: AxiosResponse<Task> = await axios.delete(`${API_URL}/tasks/${TodoID}`);
        console.log('Response from server:', response.data);
        return response.data;  
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}

export { getTask, getAllTasks, createTask, editTask, deleteTask, mapTask };
export type { Task };
