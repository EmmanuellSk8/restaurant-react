export default function CreateReservation() {

    return (
        <>
            <section className="flex flex-col gap-10 mt-40 justify-around">
                <h2 className="titles text-4xl font-semibold text-center">Reservar</h2>

                <div className="flex gap-2 flex-col">

                    <form method="post" className="flex flex-wrap max-w-[608px] gap-x-2 gap-y-4">
              
                        <input type="text" className="cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl w-full" placeholder="Nombre" required />

                        <input type="tel" className="w-[300px] cursor-pointer border border-gray-800 bg-gray-50/40 flex px-4 py-2 rounded-2xl" placeholder="Email" required />

                        <input type="number" className="w-[300px] cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl" placeholder="Cédula" required />

                        <input type="number" className="w-[300px] cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl" placeholder="Número de personas" required />

                        <input type="number" className="w-[300px] cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl" placeholder="Teléfono" required />

                        <input type="datetime-local" className="w-full cursor-pointer  border-gray-800 border bg-gray-50/40 flex px-4 py-2 rounded-2xl" />


                    </form>

                    <div className="container-btns-reservation flex justify-between px-6 mt-4 flex-wrap gap-2">
                        <a className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl hover:bg-lime-500/90 cursor-pointer hover:scale-105 ease-in-out duration-300  hover:text-white font-bold">
                        Reservar</a>

                        <a className="border-6 border-double bg-amber-500 px-8 py-1.5 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 hover:bg-red-600 hover:text-white font-bold">
                        Cancelar</a>
                    </div>
                </div>
                
            </section>

        </>
    );

}