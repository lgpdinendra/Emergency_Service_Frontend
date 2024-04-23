import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProjectFooter from "../components/ProjectFooter"
import HomeEmergencyKit from "./guidance/HomeEmergencyKit"

function Contact (){
    return(
        <>
        <NavBar/>
        <Hero
            pName = "contact"
            heroImg = "https://ipintegration.com/wp-content/uploads/2019/12/Securitas-scaled.jpg"
            title = "Contact Us"
            text = "Got questions or need a hand? We're here to be your link to the support you need. Whether you need more info or have any concerns, we're all ears! Reach out, and let's make sure you're safe and sound together."
        />
        <HomeEmergencyKit/>
        <ProjectFooter/>
        </>
    )
}
export default Contact;