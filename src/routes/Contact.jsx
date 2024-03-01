import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

function Contact (){
    return(
        <>
        <NavBar/>
        <Hero
            pName = "hero"
            heroImg = "https://ipintegration.com/wp-content/uploads/2019/12/Securitas-scaled.jpg"
            title = "Welcome to rapid response"
            text = "Contact Us"
            buttonText = "JOIN"
            url = "/"
            btnClass = "show"
        />
        </>
    )
}
export default Contact;