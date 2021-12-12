import axios from 'axios';
import React, {useState} from 'react';

function Register(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')

    const [errors, setErrors] = useState([])
    const [message, setMessage] = useState('')

    const record = {
        name, email, password, password_confirmation
    }

    const store = async(e) => {
        e.preventDefault()
        try {
            let response = await axios.post('http://localhost:8000/api/register', record)
            console.log(response.data)  
            setName('')  
            setEmail('')    
            setPassword('')  
            setPasswordConfirmation('')  
        } catch (error) {
            setErrors(error.response.data.errors)
            setMessage(error.response.data.message)
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5">
                    { message ? <div className="alert alert-danger" role="alert">{message}</div> : '' }
                    <div className="card">
                        <div className="card-header">Register</div>
                        <div className="card-body">
                            <form onSubmit={store}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        onChange={(e) => setName(e.target.value)} 
                                        value={name}
                                    />
                                    {
                                        errors.name ? <div className="invalid-feedback">{errors.name[0]}</div> : ''
                                    }
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        value={email}
                                    />
                                    {
                                        errors.email ? <div className="invalid-feedback">{errors.email[0]}</div> : ''
                                    }
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        onChange={(e) => setPassword(e.target.value)} 
                                        value={password} 
                                    />
                                    {
                                        errors.password ? <div className="invalid-feedback">{errors.password[0]}</div> : ''
                                    }
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password_confirmation" className="form-label">Password Confirmation</label>
                                    <input 
                                        type="password" 
                                        name="password_confirmation" 
                                        id="password_confirmation" 
                                        className="form-control"
                                        onChange={(e) => setPasswordConfirmation(e.target.value)} 
                                        value={password_confirmation} 
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;