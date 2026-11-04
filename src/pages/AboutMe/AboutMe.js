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
        description: "Junior Software Developer at the State Information Technology Agency (SITA), maintaining and extending enterprise applications for South African government departments. I work across the full stack: Angular and AngularJS front ends, ASP.NET and C# back ends, and SQL Server databases, deployed on Windows Server and IIS. Day to day I fix bugs, ship features, manage database changes, configure SSL certificates and keep live government systems running reliably. I came up through SITA's intern and experiential training programmes, and I'm always looking to learn more and take on bigger responsibility.",
        highlights:{
            bullets:[
                "Full-stack development: Angular, ASP.NET, C#",
                "SQL Server and MySQL: migration, recovery, cleanup",
                "Windows Server, IIS and SSL certificate management",
                "Maintaining live government web applications",
                "React.js and modern front-end development",
                "Git and GitHub"
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
                        <a href={Resume1} download="Rotshidzwa's CV.pdf">
                            <button className='highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
