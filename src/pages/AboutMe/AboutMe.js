import React,{useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'
import Resume1 from '../../assets/MyResume.pdf'

export default function AboutMe(props) {

    let fadeInScreenHandler = (screen) =>{
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
    const Screen_Constants ={
        description: "Dedicated and talented web developer with a passion for crafting exceptional digital experiences. Proficient in HTML, CSS, JavaScript, React, and Node.js. With a strong foundation in both front-end and back-end development, I'm skilled in creating responsive, user-friendly, and high-performance web applications. Eager to collaborate on innovative projects and contribute to the growth of a dynamic team.",
        highlights:{
            bullets:[
                "Web and mobile development",
                "Interactive Front End as per design",
                "React.js",
                "Managing database",
                "Git and GitHub",
                ".NET"
            ],
            heading: "Here are the Few Highlights"
        }
    }
    const renderHighlight = () =>{
        return(
            Screen_Constants.highlights.bullets.map((value, i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
    
    return (
    <div className='about-me-container screen-container fade-in' id={props.id || ""}>
        <div className='about-me-parent'>
            <ScreenHeading title={'About Me'} subHeading={'why Choose Me?'}/>
            <div className='about-me-card'>
                <div className='about-me-profile'></div>
                <div className='about-me-details'>
                    <span className='about-me-description'>{Screen_Constants.description}</span>
                    <div className='about-me-highlights'>
                        <div className='highlight-heading'>
                            <span>{Screen_Constants.highlights.heading}</span>
                        </div>
                        {renderHighlight()}
                    </div>
                    <div className='about-me-options'>
                    <button className='primary-btn'onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>hire me</button>
                        <a href={Resume1} download='Rotshidzwas_CV.pdf'>
                            <button className='highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
