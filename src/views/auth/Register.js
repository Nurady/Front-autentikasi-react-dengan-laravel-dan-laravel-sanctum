import axios from 'axios';
import React, {useState} from 'react';

function Register(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')

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
            console.log(error.response)
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5">
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
                                        className="form-control"
                                        onChange={(e) => setName(e.target.value)} 
                                        value={name}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className="form-control" 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        value={email}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        className="form-control"
                                        onChange={(e) => setPassword(e.target.value)} 
                                        value={password} 
                                    />
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