import Logo from "../assets/icon.png";

export default function Header(){

    return(
        <header className="w-full flex justify-center p-4 bg-white shadow-md fixed top-0 z-10">
            <nav className="header flex flex-wrap justify-center items-center gap-x-40">
                <a href="#Hero" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Inicio</a>
                <a href="#Menu" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Menú</a>
            <a href="#Hero" className="flex items-center gap-2 cursor-pointer hover:scale-105 duration-100 ease-in-out">
                <img src={Logo} alt="Logo" className="w-12 h-12"/>
                <h1 className="text-2xl font-bold">Bite & Enjoy</h1>
            </a>
                <a href="#About" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Nosotros</a>
                <a href="#contact" className="text-[1.3rem] font-medium hover:text-orange-400 hover:scale-110 duration-200 ease-in-out">Reservas</a>
            </nav>
        </header>
    )
}