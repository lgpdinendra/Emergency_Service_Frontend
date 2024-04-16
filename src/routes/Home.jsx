import Hero from "../components/Hero";
import HomeIncident from "../components/HomeIncident";
import NavBar from "../components/NavBar";
import ProjectFooter from "../components/ProjectFooter"

function Home (){
    return(
        <>
        <NavBar/>
        <Hero
            pName = "hero"
            heroImg = "https://images.ctfassets.net/wdjnw2prxlw8/Vmx2ncc9Xy93O6iOVSHFE/475916f1a6eab441f6bb0ca4f344bffb/garreth-paul-3QoABpZPGqs-unsplash.jpg"
            title = "Welcome to Rapid Response"
            text = "Here, you'll find the help you need when things get tough. Whether it's information, support, or resources, we've got you covered. Stay safe, stay informed, and know that we're here for you."
            buttonText = "JOIN WITH US"
            url = "/signup"
            btnClass = "show"
        />
        <HomeIncident/>
        <ProjectFooter/>
        </>
    );
}
export default Home;