import Button from "./components/Button"
import ContactForm from "./components/ContactForm"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navigation from "./components/Nav"
import Project from "./components/Project"
import SectionTitle from "./components/SectionTitle"

const Main = () => {
    return (
        <div className="relative">
            <Navigation/>
            <Hero/>
            <SectionTitle text='Experience' call='experience'/>
            <SectionTitle text='2019'/>
            <Experience 
                position='Managing Director'
                company='Thessian Sound, LLC'
                role='Senior WordPress Developer'
                career='Engineer'
                paragraph='My love for marking up the world-wide web started back in 2019 when first becoming invested in creating a website for a recording company I owned. My main tool at the time was the WordPress CMO but this ignited a new passion within me to pursue mastery in the languages behind these tools. '
                btn1='Wordpress' 
                btn2='Elementor'
                btn3='Gutenburg'
                btn4='Photoshop'
                btn5='Illustrator'
                btn6='WooCommerce'
            />
            <SectionTitle text='2023'/>
            <Experience 
                position='Lead Developer'
                company='TIM Corporation'
                role='Senior WordPress Developer'
                career='Engineer'
                paragraph={`In 2023, I was contracted by TIM Corporation to help in the development of their website. Although the scope of the projects was mainly WordPress based, I had to include different technologies and the use of CSS and Javascript for certain functionalities that were needed to be implemented. `}
                btn1='Wordpress' 
                btn2='Elementor'
                btn3='GoDaddy'
                btn4='HTML'
                btn5='CSS'
                btn6='JavaScript'
            />
            <div className="section-btn mx-8 py-10">
                <Button text='View Full Resumé'/>
            </div>
            <SectionTitle text='Projects' call='projects'/>

            <Project/>
            <div className="section-btn mx-8 py-10">
                <Button text='View Full Project Archive'/>
            </div>

            <SectionTitle text='Contact' call='contact'/>
            <ContactForm/>

            <Footer/>
        </div>
    )
}

export default Main
