import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

function Service (){
    return(
        <>
        <NavBar/>
        <Hero
            pName = "hero"
            heroImg = "https://www.adlittle.pt/sites/default/files/reports/adl_ambulance_services_-_optimizing_operations_cover.jpg"
            text = "Service"
            buttonText = "JOIN"
            url = "/"
            btnClass = "show"
        />
        </>
    )
}
export default Service;