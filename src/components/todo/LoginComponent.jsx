import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginComponent.css';
import { useAuth } from './security/AuthContext';

// Login Component
export default function LoginComponent() {

  // Create State
    const [username, setUsername] = useState('Nikhil')
    const [password, setPassword] = useState('')
    const [successMessage, setSuccessMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const navigate = useNavigate();
    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

 

    // Authentication
    function handleSubmit() {
      // Hardcoded
          if (authContext.login(username, password)) {
          setErrorMessage(false);
          navigate(`/welcome/${username}`);
          
        } else {
          setErrorMessage(true);
          authContext.setAuthenticated(false)
        }
    }

    return (
      <div className="container">
        <div className="Login">
          <h1>Login for Managing Todos</h1>
          {/* <SuccessMessage/>
                  <ErrorMessage/> */}
          {/* Alternative of creating two component of Success and Error Message */}
          {errorMessage && <div className='errorMessage' class="text-danger">Authenticated Failed. Check Credentials</div>}
          {/* <form>
                      <div className='form-group row'>
                          <label className="col-sm-2 col-form-label">User Name</label>
                          <div className="col-sm-10">
                              <input type="text" name="username" className="form-control-plaintext"
                                  value={username} onChange={handleUsernameChange} />
                          </div>
                      </div>

                      <div className='form-group row'>
                          <label className="col-sm-2 col-form-label">Password</label>
                          <div className="col-sm-10">
                              <input type="password" name="password" value={password}
                                  className="form-control" onChange={handlePasswordChange} />
                          </div>
                      </div>
                      <div>
                          <button type="button" className='btn btn-success' name="login"
                              onClick={handleSubmit}>Login</button>
                      </div>
                  </form> */}

          <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                  <div className="card rounded-3 text-black">
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">

                          <div className="text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                              style={{ width: "185px" }} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1">We are Task.do Team</h4>
                          </div>

                          <form>


                            <div className="form-outline mb-4">
                              <input type="email" className="form-control"
                                placeholder="Please Enter User Name" onChange={handleUsernameChange} />
                              <label className="form-label"></label>
                            </div>

                            <div className="form-outline mb-4">
                              <input type="password" id="pw" className="form-control"
                                placeholder='Enter Password' onChange={handlePasswordChange} />
                              <label className="form-label" ></label>
                            </div>

                            <div className="text-center pt-1 mb-5 pb-1">
                              <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" id="myButton" type="button"
                                onClick={handleSubmit}>
                                Log in
                              </button>

                              <div>
                                <a className="text-muted" href="#!">Forgot password?</a>
                              </div>

                            </div>

                            {/* <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <button type="button" className="btn btn-outline-danger">Create new</button>
                    </div> */}

                          </form>

                        </div>
                      </div>
                      <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                          <h4 className="mb-4">We are more than just a company</h4>
                          <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
}





