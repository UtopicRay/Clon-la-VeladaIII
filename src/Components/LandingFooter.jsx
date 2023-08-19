import Fondo from '/src/img/Footer/fondoFooter.jpg'
import Logo from  '/src/img/Footer/LOGOV.png'
import sponsor from '/src/img/Footer/sponsors.png'
export function LandingFooter(){
    return(
        <footer>
            <div className='relative flex flex-col justify-center items-center bg-black'>
            <img className='w-full h-[500px]' src={Fondo} alt='Fondo del footer'/>
                <ul className=' flex absolute top-12 z-10 text-white gap-2'>
                    <li>Hola</li>
                    <li>Mundo</li>
                </ul>
                <img className='absolute z-10' src={Logo} alt='Logo de la Velada'/>
                <img className='absolute z-10 bottom-10 w-3/5' src={sponsor} alt='Logo de la Velada'/>
            </div>
            <div className='bg-black py-5'>
                <h3 className='text-white text-center text-[13px] font-sans'>© 2023 La Velada del Año | Todos los derechos reservados.</h3>
            </div>
        </footer>
    )
}