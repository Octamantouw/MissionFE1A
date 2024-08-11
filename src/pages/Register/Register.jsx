import '../Register/register.css'
import image from '../../assets/background2.jpg'
import { useNavigate } from 'react-router-dom'
const Register=()=>{
    const navigate = useNavigate()
    return<>
    <div className='containerR' style={{backgroundImage:`url(${image}) `,backgroundSize:"contain"}}> 
        <label htmlFor="">Username</label>
        <input type='text' placeholder='Username'></input>
        <label htmlFor="">Password</label>
        <input type='password' placeholder='Password'></input>
        <label htmlFor="">Confirm Password</label>
        <input type='password' placeholder=' Confirm Password'></input>
        <a href="" onClick={()=>{
            navigate('/login')
        }}>Already have account?</a>
        <a href="">Sign Up with Google</a>

    </div>
    
    </>
}

export default Register