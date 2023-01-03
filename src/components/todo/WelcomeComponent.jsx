import { useState } from 'react';
import { useParams, Link, isRouteErrorResponse } from 'react-router-dom';
import retrieveHelloWorldBean from './api/HelloWorldAPIService';

// Welcome Component
// If Login is successful, redirect to Welcome Component
export default function WelcomeComponent() {
    const { username } = useParams()
    const [dataA, setDataA] = useState(null)
    
    function callHelloWorldBean() {
        retrieveHelloWorldBean()
        .then((response) => successfullResponse(response))
        .catch((error) => errorResponse(error))
        .finally(() => console.log("cleanup"));
    }
    function successfullResponse(response) {
        console.log(response)
        setDataA(response.data)
        console.log("Data = ", dataA)
    }
    function errorResponse(error) {
        console.log("Error Message: ", error)
    }

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage your Todos - <Link to='/listTodo'>Go Here</Link>
            </div>
            <div className='container'>
                <button className='btn btn-success m-5' onClick={callHelloWorldBean}>Call Hello World</button>
            </div>
            <div className='container'>
                <p>{dataA}</p>
            </div>
        </div>
    )
}
