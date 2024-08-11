import '../Landing/landing.css'
// import Header from '../../component/Header/index'
// import img from '../../assets/background2.jpg'
//asian TV shows
import image from '../../assets/background3.jpg'
import image1 from '../../assets/ASIAN TV SHOWS/1.jpg'
import image2 from '../../assets/ASIAN TV SHOWS/2.jpeg'
import image3 from '../../assets/ASIAN TV SHOWS/3.jpg'
import image4 from '../../assets/ASIAN TV SHOWS/4.jpg'
import image5 from '../../assets/ASIAN TV SHOWS/5.jpeg'
// import image6 from '../../assets/ASIAN TV SHOWS/6.jpeg'
import image7 from '../../assets/ASIAN TV SHOWS/7.jpeg'
// import image8 from '../../assets/ASIAN TV SHOWS/8.jpeg'
import image9 from '../../assets/ASIAN TV SHOWS/9.jpg'

//Thriller n Horror
import TH1 from '../../assets/THRILER & HORROR/1.jpeg'
import TH2 from '../../assets/THRILER & HORROR/2.jpg'
import TH3 from '../../assets/THRILER & HORROR/3.jpg'
import TH4 from '../../assets/THRILER & HORROR/4.jpg'
import TH5 from '../../assets/THRILER & HORROR/5.jpg'
import TH6 from '../../assets/THRILER & HORROR/6.jpg'
import TH7 from '../../assets/THRILER & HORROR/7.jpg'

//Top Pick
import TP1 from '../../assets/TOP PICKS/1.jpg'
import TP2 from '../../assets/TOP PICKS/2.jpg'
import TP3 from '../../assets/TOP PICKS/3.jpeg'
import TP4 from '../../assets/TOP PICKS/4.jpeg'
import TP5 from '../../assets/TOP PICKS/5.jpg'
import TP6 from '../../assets/TOP PICKS/6.jpg'
import TP7 from '../../assets/TOP PICKS/7.jpg'
import NavBar from '../../component/Navbar'


const Landing =()=>{
    return <div className='LandingPage'>
        <NavBar></NavBar>
    <div className='BigTV' style={{backgroundImage:`url(${image})`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}>
        <div className='background'>
            <div className='caption' style={{backgroundColor:`transparent`}}>
                <h1 style={{backgroundColor:`transparent`}}> MUNKAR</h1>
                <h2 style={{backgroundColor:`transparent`}}>#1 Movies Today</h2>
                <h3 style={{backgroundColor:`transparent`}}>After Experiencing a traumatic bullyting, a girl return to
                    her boarding school, where unsetting events begin to occur to 
                    her former bullies
                </h3>
                <div style={{backgroundColor:`transparent`}}>
                    <span style={{backgroundColor:`transparent`}}>Cast</span>: Adisty Zara, Safira Ratu Sofya, <i style={{backgroundColor:`transparent`}}>more</i>
                    <br />
                    <span style={{backgroundColor:`transparent`}}>Genre</span>: Indonesian, Horror Movies
                </div>
                <div style={{backgroundColor:`transparent`}}>   
                    <button>Play</button>
                    <button> More Info</button>
                </div>
            </div>
        </div>
    </div>
    <div className='content' style={{backgroundSize:"cover",backgroundRepeat:'no-repeat'}}>
    <div style={{backgroundColor:`black`,color:`white`}}>
        <h2>Suspensful Asian TV Shows</h2>
        <div className='thumbnail'>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${image1})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${image2})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${image3})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${image5})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${image9})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${image4})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${image7})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
        
        </div>
    </div>
    <div style={{backgroundColor:`black`,color:`white`}}>
        <h2>Thriller & Horror</h2>
        <div className='thumbnail'>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${TH3})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${TH2})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${TH1})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${TH4})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${TH5})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${TH6})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${TH7})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            
        </div>
    </div>
    <div style={{backgroundColor:`black`,color:`white`,marginTop:'10px'}}>
        <h2>Today Top Picks For You</h2>
        <div className='thumbnail'>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${TP1})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${TP2})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${TP3})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${TP4})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${TP5})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${TP6})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            <div style={{height:`90px`,width:`150px`,backgroundColor:'white',background:`url(${TP7})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat'}}></div>
            
            
        </div>
    </div>
    </div>
    </div>
}

export default Landing