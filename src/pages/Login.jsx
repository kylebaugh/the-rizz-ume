import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [register, setRegister] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')


  const toggleRegister = () => {
    setRegister(!register)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(register){
      if(firstName && 
        lastName && 
        email && 
        password === verifyPassword && 
        password.length >= 8){
        
          // register check
        navigate('/jobs')
      }else if(password !== verifyPassword){
        alert('Passwords must match and be more than 8 characters')
      }
    }else if(username && password){
      // login check
      if('success'){
        navigate('/jobs')
      }else{
        alert('Username or password incorrect')
      }
    }
  }

  return (
    <div>

      {register && <div>
        Register
          <form>
            <p>First Name</p>
            <input type="text" placeholder='' onChange={(e) => setFirstName(e.target.value)} />
            <p>Last Name</p>
            <input type="text" placeholder='' onChange={(e) => setLastName(e.target.value)} />
            <p>Email Address</p>
            <input type="text" placeholder='' onChange={(e) => setEmail(e.target.value)} />
            <p>Password</p>
            <input type="text" placeholder='' onChange={(e) => setPassword(e.target.value)} />
            <p>Verify Password</p>
            <input type="text" placeholder='' onChange={(e) => setVerifyPassword(e.target.value)} />
          </form>

          <button onClick={toggleRegister}>Switch to Login</button>
          <button onClick={handleSubmit}>Register</button>
      </div>}

      {!register && <div>
        

        <p onClick={toggleRegister}>Switch to Login</p>

          <form>
            <p>Email Address</p>
            <input type="text" placeholder='' onChange={(e) => setEmail(e.target.value)} />
            <p>Password</p>
            <input type="text" placeholder='' onChange={(e) => setPassword(e.target.value)} />
          </form>

          
          <button onClick={toggleRegister}>Switch to Register</button>
          <button onClick={handleSubmit}>Login</button>
      </div>}
    
    
    </div>
  )
}

export default Login
