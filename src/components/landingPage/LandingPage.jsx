import { useNavigate } from 'react-router-dom'
import video from '../../video/video.mp4'
import './landingPage.css'
import logo from '../../image/logo-detail.jpg'
import swal from 'sweetalert';

const LandingPage = ()=>{
    const navigate = useNavigate()
    const handleClick=()=>{
        swal({
            title:"¡ATENCIÓN!",
            text:"En desarrollo",
            icon:"info",
            button:"aceptar",
            timer:"3000"
        })
    }


    return(
        <div className='conteiner-landing'>
            <div className='conteiner-nav-landing'>
            <img id="logo" src={logo} alt="logo"/>
            <div className='conteiner-about'>
                <div className='text-about' onClick={handleClick}>
                    Servicios
                </div>
                <div className='text-about' onClick={handleClick}>
                    Sobre Nosotros
                </div>
                <div className='text-about' onClick={handleClick}>
                    Contáctanos
                </div>

            </div>

            </div>
            <video  className='video'autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
            <div className='conteiner-cuerpo'>
            <div className='conteiner-text-landing'>
                <h1 id='title-landing'>FOOD</h1>
                <h2 id='text-landing'>Las mejores recetas del mundo en un solo lugar, y si no lo encuentras lo creas</h2>
                <h4 id='h4-landing'>Esta página se creo como parte de un proyecto académico, su finalidad es netamente educativo.</h4>
            </div>

            <div >
                <button id="btn-home" onClick={()=>navigate(`/home`)}>HOME</button>
            </div>
            <div className='contactos-landing'>
                Contactos
                <div>
                <a href='https://www.linkedin.com/in/erik-torres-sacha-a93498200/' target='_blank' rel="noreferrer">
                    <svg   width="80px" height="80px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="20" fill="#0077B5"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z" fill="white"/>
                    </svg>

                </a>
    
                    <a href="https://github.com/ETorresSacha?tab=repositories" target='_blank' rel="noreferrer">
                    <svg width="80px" height="80px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="20" fill="#181717"/>
                        <path d="M6.81348 34.235C9.24811 38.3138 13.0939 41.4526 17.6772 42.9784C18.6779 43.1614 19.0425 42.5438 19.0425 42.0134C19.0425 41.7938 19.0388 41.4058 19.0339 40.8866C19.0282 40.2852 19.0208 39.5079 19.0155 38.6124C13.4524 39.8206 12.2787 35.931 12.2787 35.931C11.3689 33.6215 10.0576 33.0064 10.0576 33.0064C8.2417 31.7651 10.1951 31.7896 10.1951 31.7896C12.2025 31.9321 13.2584 33.8511 13.2584 33.8511C15.0424 36.9071 17.94 36.0243 19.0794 35.5135C19.2611 34.2207 19.7767 33.3391 20.3489 32.8394C15.908 32.3348 11.2387 30.6183 11.2387 22.9545C11.2387 20.7715 12.0184 18.9863 13.2977 17.5879C13.0914 17.082 12.4051 15.0488 13.4929 12.2949C13.4929 12.2949 15.1725 11.7571 18.9934 14.3453C20.5883 13.9021 22.2998 13.6798 24.0003 13.6725C25.6983 13.6798 27.4099 13.9021 29.0072 14.3453C32.8256 11.7571 34.5016 12.2949 34.5016 12.2949C35.5931 15.0488 34.9067 17.082 34.7005 17.5879C35.9823 18.9863 36.757 20.7715 36.757 22.9545C36.757 30.638 32.0804 32.3286 27.6247 32.8234C28.343 33.441 28.9827 34.6614 28.9827 36.5277C28.9827 38.3152 28.9717 39.8722 28.9644 40.9035C28.9608 41.4143 28.9581 41.7962 28.9581 42.0134C28.9581 42.5487 29.3178 43.1712 30.3332 42.976C33.9844 41.7572 37.1671 39.5154 39.5403 36.5903C35.8734 41.1108 30.274 44 23.9997 44C16.6943 44 10.3038 40.0832 6.81348 34.235Z" fill="white"/>
                    </svg>
                    </a>
                </div>
            
            </div>

            </div>

            
        </div>
    )

}

export default LandingPage