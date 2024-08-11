import "../Header/index.css"
import image from '../../assets/background2.jpg'
import { useNavigate } from "react-router-dom"
const Header =()=>{
    const navigate = useNavigate()
    return <div className="container">
    <div className="header">
        <div className="movie">
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
    <div className="body" style={{backgroundImage:`url(${image}) `,backgroundSize:"contain"}}>
        <div className="Caption">
            <h1>
                Unlimited movies, TV shows, and More
            </h1> 
            <h2>Watch anywhere, cancel anytime</h2>
        </div>
    </div>
    
    </div>
}

export default Header