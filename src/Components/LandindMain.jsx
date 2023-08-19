import Fondo from '/src/img/FONDO.jpg'
import Fondo3 from '/src/img/FOTOSv3Mod.png'
export function LandindMain(){
    return(
        <section className='flex relative justify-center items-center'>
           <img className='absolute w-[48%] bottom-0 z-10 animate-fade animate-once' src={Fondo3} alt='Boxeadores'></img>
            <img className='w-full h-full' src={Fondo} alt='Fondo de la velada'></img>
           </section>
    )
}
