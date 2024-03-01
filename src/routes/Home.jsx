import Hero from "../components/Hero";
import HomeIncident from "../components/HomeIncident";
import NavBar from "../components/NavBar";

function Home (){
    return(
        <>
        <NavBar/>
        <Hero
            pName = "hero"
            heroImg = "https://images.ctfassets.net/wdjnw2prxlw8/Vmx2ncc9Xy93O6iOVSHFE/475916f1a6eab441f6bb0ca4f344bffb/garreth-paul-3QoABpZPGqs-unsplash.jpg"
            title = "Welcome to rapid response"
            text = "Join with us"
            buttonText = "JOIN"
            url = "/"
            btnClass = "show"
        />
        <HomeIncident/>
        </>
    );
}
export default Home;