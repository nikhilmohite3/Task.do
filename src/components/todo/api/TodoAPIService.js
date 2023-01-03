import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export const retrieveTodosByUserName =
    (userName) =>  apiClient.get(`/user/${userName}/todos`);

export const retrieveTodosById =
    (userName, id) =>  apiClient.get(`/user/${userName}/todos/${id}`);

export const deleteTodoApi =
    (userName, id) => apiClient.delete(`/user/${userName}/${id}`);


export const updateTodoById =
    (userName, id, todo) =>  apiClient.put(`/user/${userName}/todos/${id}`, todo);
