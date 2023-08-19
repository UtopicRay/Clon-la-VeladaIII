import VeladaIII from '/src/img/VeladaIII.png'
export function LandingHeader(){
    return(
        <header className=' flex justify-between'>
           <div className='flex flex-grow text-black  basis-0' >
            <img className='lg:w-3/5  p-6 ' src={VeladaIII} alt='Titulo la Velada'></img>
           </div>
            <div className='flex flex-grow justify-end basis-0 m-0 p-6'>
                <button className='text-white bg-black px-6 py-2 rounded font-okana text-2xl'>Tienda</button>
            </div>

        </header>
    )
}