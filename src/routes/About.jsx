import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProjectFooter from "../components/ProjectFooter"

function About (){
    return(
        <>
        <NavBar/>
        <Hero
            pName = "about"
            heroImg = "https://www.columbian.com/wp-content/uploads/2015/12/80737_auto_accident_roll_over_Auto_accident_roll_over_woman_tra.jpg"
            title = "Contact Us"
            text = "Revolutionizing Emergency Response in Gampaha, Sri Lanka. Learn more about who we are, our mission, and how we're making a difference in the community."
        />
        <ProjectFooter/>
        </>
    )
}
export default About;