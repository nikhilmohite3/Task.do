import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import { deleteTodoApi, deleteTodoById, retrieveTodosById, retrieveTodosByUserName } from "./api/TodoAPIService";
import { useAuth } from "./security/AuthContext";


export default function ListTodoComponent() {
    const today = new Date()
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null)

    const authContext = useAuth()
    const userName = authContext.username;

    const navigate = useNavigate()
    // const todos = [
    //     {
    //         id: 1, description: "Learn AWS", isDone: false,
    //         targetDate: new Date(today.getFullYear() + 11, today.getMonth(), today.getDay())
    //     },
    //     {
    //         id: 2, description: "Learn Full Stack", isDone: false,
    //         targetDate: new Date(today.getFullYear() + 3, today.getMonth(), today.getDay())
    //     },
    //     {
    //         id: 3, description: "Learn System Design", isDone: false,
    //         targetDate: new Date(today.getFullYear() + 14, today.getMonth(), today.getDay())
    //     }
    // ]

    useEffect(
        
        () => refreshTodos()
    )

    function refreshTodos() {
        console.log("IN UseEffect");
        retrieveTodosByUserName(userName)
        .then((response) => {
           
            setTodos(response.data)
            
        })
        .catch((error) => console.log(error))
    }

    function deleteTodo(todoId) {
        console.log("Delete Todo Called, id = ", todoId)
        deleteTodoApi(userName, todoId)
        .then(
            () => {
                setMessage(`Delete of Todo with ${todoId} is successfull.`)
                refreshTodos()
            }
        )
        .catch(error => console.log(error))
    }

    function updateTodo(id) {
        console.log("Update clicked id = ", id)
        navigate(`/todo/${id}`)
    }

    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Target Date</th>
                        <th>Is Done?</th>
                        <th>Delete Todo</th>
                        <th>Update Todo</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                    <td></td>
                                    <td><button className="btn btn-warning" onClick={ () => deleteTodo(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>
                                </tr>
                            )
                        )
                    }
                    

                </tbody>
            </table>
        </div>
    )
}