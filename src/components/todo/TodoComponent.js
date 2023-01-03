import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { retrieveTodosById, updateTodoById } from "./api/TodoAPIService"
import { useAuth } from "./security/AuthContext"

export default function TodoComponent() {
    const { id } = useParams()
    const authContext = useAuth()
    const userName = authContext.username
    
    const [description, setDescription] = useState('')
    const [targetdate, setTargetDate] = useState('')
    const navigate = useNavigate();

    useEffect(
        () => retrieveTodo(),
             [id]
    )

    function retrieveTodo() {
        console.log("Username ", userName)
        console.log("Id ", id)
        retrieveTodosById(userName, id)
        .then(
            (response) => {
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
            }
            
        )
        .catch(
            (error) => console.log(error)
        )
    }
    
    function onSubmit(values) {
        
        const todo = {
            id: id,
            username: userName,
            description: values.description,
            targetdate: values.targetdate
        }
        console.log("Updated Todo :", todo)
        updateTodoById(userName, id, todo)
        .then(
            (response) => {
                console.log("IN Response: ", response)
                navigate('/listTodo')
            }
        )
        .catch((error)=> console.log(error))
    }

    function validate(values) {
        console.log("In valid, date = ", targetdate);
        let errors = {
            // description: 'Enter Valid Description'
        }
        if(values.description.length < 5) {
            errors.description = 'Enter Valid Description'
        }
        if(values.targetdate == null) {
            errors.targetdate = 'Do Not Enter Empty Date'
        }
        return errors;
    }

    return (
        <div className="TodoComponent">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={ {description, targetdate} }
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}>
                    {
                        (props) => (
                            <Form className="container">
                                <ErrorMessage 
                                    name="description"
                                    component="div"
                                    className="alert alert-warning"
                                    />
                                <ErrorMessage 
                                    name="targetdate"
                                    component="div"
                                    className="alert alert-warning"
                                    />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type = "text" name="description" className="form-control">

                                    </Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field type="date" name="targetdate" className="form-control">

                                    </Field>
                                </fieldset>
                                <button type="submit" className="btn btn-success m-5">Submit</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}