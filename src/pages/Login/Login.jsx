import '../Login/login.css'
import image from '../../assets/background2.jpg'
import { useNavigate } from 'react-router-dom'

const Login = ()=>{
    const navigate=useNavigate()
    return <>
    <div className='containerL' style={{backgroundImage:`url(${image}) `,backgroundSize:"contain"}}> 
        <label htmlFor="">Username</label>
        <input type='text' placeholder='Username'></input>
        <label htmlFor="">Password</label>
        <input type='password' placeholder='Password'></input>
        <a href="">Login with Google</a>
        <a href="" onClick={()=>{
            navigate('/register')
        }}>Sign Up</a>

    </div>
    </>
}

export default Login