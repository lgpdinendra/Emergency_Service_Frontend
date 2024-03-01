import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

function About (){
    return(
        <>
        <NavBar/>
        <Hero
            pName = "hero"
            heroImg = "https://www.columbian.com/wp-content/uploads/2015/12/80737_auto_accident_roll_over_Auto_accident_roll_over_woman_tra.jpg"
            title = "Welcome to rapid response"
            text = "About Us"
            buttonText = "JOIN"
            url = "/"
            btnClass = "show"
        />
        </>
    )
}
export default About;