import ImgHero from '../assets/imgHero.png';
import postreHero from '../assets/postreHero.png';
import Bg from '../assets/bg-imgs-hero.png';

export default function HeroDev() {

    return (

        <>

            <section id='Hero' className="w-[full] flex flex-wrap">

                <div className="max-w-[1600px] flex mt-40 flex-wrap justify-between items-center content-center">
                    <div id='textHero' className="max-w-[550px] flex flex-col gap-4">

                        <h2 className="flex flex-col text-5xl gap-1.5 text-amber-300/80">Web en
                            <span className="txt-transparent-hero text-transparent">Construcción</span>
                        </h2>

                        <p className="text-xl text-rose-700">¡Actualmente en desarrollo, pásate después!</p>
                    </div>

                    <div id='container-imgs-hero' className='flex-row-reverse flex items-end'>
                        <img id='bgImgsHero' className='absolute -z-10 opacity-15 w-[550px]' src={Bg} alt="img" />
                        <img id='bigImg' className=' duration-900 hover:rotate-z-[360deg] cursor-pointer' src={ImgHero} alt="img" />
                        <img className='smallImg size-40 duration-900 hover:rotate-z-[360deg] cursor-pointer hover:scale-125' src={postreHero} alt="img" />
                    </div>
                </div>

            </section>
        </>
    )
}