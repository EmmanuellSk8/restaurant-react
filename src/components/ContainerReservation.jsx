import Footer from "./Footer";
import HeaderReservation from "./HeaderReservation";

export default function ContainerReservation() {


    return(

        <>
        <HeaderReservation/>   
        <div className="absolute w-full bottom-0">
        <Footer/>     
        </div>
        </>
    )
}
