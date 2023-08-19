import Revoult from '/src/img/Revoult.png'
import Banner from '/src/img/Baner.png';
import Map from '/src/img/alsaMap.jpg'
import Artistas from '/src/img/Artistas.jpg'

export function LandingPromo() {
    return (
        <section className='flex flex-wrap justify-center items-center'>
            <div className='flex flex-col bg-[#164B60] text-center text-white [&>p]:font-sans
             [&>p]:text-[17px] [&>p]:m-8 w-4/5 justify-center'>
                <h1 className='text-4xl font-black pt-10 font-okana'>Comunicado Oficial</h1>
                <p>
                    En nombre de la organización de La Velada del Año III, queremos ofrecer nuestras más sinceras disculpas a los artistas involucrados por la imposibilidad de incluir finalmente en el stream y en el estadio el tema previsto como cierre del show: 'Los del Espacio', interpretado por LIT Killah, Maria Becerra, Tiago PZK, FMK, Big One, Rusherking, Duki y Emilia. Reconocemos plenamente el esfuerzo y la dedicación que pusieron en prepararse para esta actuación, y lamentamos profundamente cualquier inconveniente o decepción que esto haya causado. Queremos agradecer a los artistas y a sus equipos su tiempo, disponibilidad, compromiso y profesionalidad por hacer todo lo posible para que su actuación se llevara a cabo en el evento.
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col float-left p-6 gap-8 [&>img]:w-full'>
                    <img src={Revoult} alt='Promo'></img>
                    <img src={Banner} alt='Promo de Alsa'></img>
                </div>
                <img className='lg:w-[38%] w-full' src={Map} alt='Mapa de la Velada'></img>
                </div>
            <img className='py-5 w-4/5 ' src={Artistas} alt='Fotos de los Artistas'></img>
        </section>
    )
}