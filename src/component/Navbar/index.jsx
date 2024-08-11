import "./index.css"
import { useNavigate } from "react-router-dom"

const NavBar =()=>{
    const navigate=useNavigate()
    return <div className="navbar">
    <div className="header">
        <div className="movie"
        onClick={()=>{
            navigate('/')
        }}>
            Chill<i>Flix</i>
        </div>
        <div className="profile">
            <div onClick={()=>{
                navigate("/login")
            }}>
                Login
            </div>
            <div onClick={()=>{
                navigate('/register')
            }}>
                Register
            </div>
        </div>
    </div>

        
    </div>
}

export default NavBar