import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProjectFooter from "../components/ProjectFooter"

import './ServiceStyle.css'

function Service (){
    return(
        <>
        <NavBar/>
        <Hero
            pName = "service"
            heroImg = "https://www.adlittle.pt/sites/default/files/reports/adl_ambulance_services_-_optimizing_operations_cover.jpg"
            title = "Our Services"
            text = "Your gateway to quick, reliable assistance when it matters most! Here, you'll find everything from ambulance rides for emergencies to fire heroes tackling blazes. Our rescue teams are ready for natural disasters like floods or landslides, and our vehicle carriers are on standby for stranded cars. Trust us to be your first responders, always just a click away!"
        />



        <ProjectFooter/>
        </>
    )
}
export default Service;