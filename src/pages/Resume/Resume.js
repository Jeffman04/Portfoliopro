import React, { useEffect, useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'

export default function Resume(props) {

 /* STATES */
 const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
 const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

 let fadeInScreenHandler = (screen) => {
   if (screen.fadeInScreen !== props.id) return;

   Animations.animations.fadeInScreen(props.id);
 };
 const fadeInSubscription =
   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

 /* REUSABLE MINOR COMPONENTS */
 const ResumeHeading = (props) => {
   return (
     <div className="resume-heading">
       <div className="resume-main-heading">
         <div className="heading-bullet"></div>
         <span>{props.heading ? props.heading : ""}</span>
         {props.fromDate && props.toDate ? (
           <div className="heading-date">
             {props.fromDate + "-" + props.toDate}
           </div>
         ) : (
           <div></div>
         )}
       </div>
       <div className="resume-sub-heading">
         <span>{props.subHeading ? props.subHeading : ""}</span>
       </div>
       <div className="resume-heading-description">
         <span>{props.description ? props.description : ""}</span>
       </div>
     </div>
   );
 };

 /* STATIC RESUME DATA FOR THE LABELS*/
 const resumeBullets = [
   { label: "Education", logoSrc: "education.svg" },
   { label: "Work History", logoSrc: "work-history.svg" },
   { label: "Programming Skills", logoSrc: "programming-skills.svg" },
   { label: "Projects", logoSrc: "projects.svg" },
   { label: "Interests", logoSrc: "interests.svg" },
 ];

 //here we have
 const programmingSkillsDetails = [
    {skill: "JavaScript", ratingPercentage: 75},
    {skill: "React JS", ratingPercentage: 80},
    {skill: "PHP", ratingPercentage: 65},
    {skill: "HTML", ratingPercentage: 85},
    {skill: "CSS", ratingPercentage: 85},
    {skill: "Python", ratingPercentage: 75},
    {skill: "C#", ratingPercentage: 70},
    {skill: "MYSQL", ratingPercentage: 75},
 ];

 const projectsDetails = [
   {
     title: "Personal Portfolio Website",
     duration: { fromDate: "2023", toDate: "2024" },
     description:
       "A Personal Portfolio website to showcase all my details and projects in one place.",
     subHeading: "Technologies Used: React JS, Bootstrap",
   },
   {
     title: "SurveyTaker Website",
        duration: {fromDate: "2023", toDate: "2024"},
        description: "a simple website for taking a survey and storing the data in the database for future reference",
        subHeading: "Technologies Used: React JS, MySQL",
    },
    {
        title: "WordChecker", 
        duration: {fromDate: "2023", toDate: "2023"},
        description: "A simple website for checking the given word or each word in the sentence, what part of speech it is",
        subHeading: "Technologies Used: Python, txt document",
    },
 ];

 const resumeDetails = [
   <div className="resume-screen-container" key="education">
     <ResumeHeading
       heading={"University of Johannesburg"}
       subHeading={"DIPLOMA IN BUSINESS INFORMATION TECHNOLOGY"}
       fromDate={"2021"}
       toDate={"2023"}
     />

     <ResumeHeading
       heading={"Nndweleni Secondary"}
       subHeading={"NATIONAL SENIOR CERTIFICATE"}
       fromDate={"2015"}
       toDate={"2019"}
     />
     
   </div>,

   /* WORK EXPERIENCE */
   <div className="resume-screen-container" key="work-experience">
     <div className="experience-container">
       <ResumeHeading
         heading={"State Information Technology Agency"}
         subHeading={"SOFTWARE DEVELOPER INTERN"}
          fromDate ={"2024"}
          toDate ={"2025"}
       />
       <div className="experience-description">
         <span className="resume-description-text">
         Currently working as a Software developer
         </span>
       </div>
       <div className="experience-description">
         <span className="resume-description-text">
         - maintained the website for the client for managing their
            data, authorising users, uploading documents, etc..
         </span>
         <br />
         <span className="resume-description-text">
         - Cleaning, recovering, and exporting data from the MySQL database for migrating to the new system.{" "}
         </span>
         <br />
         <span className="resume-description-text">
           - Integrate the web with the server and exchange emails.
         </span>
         <br />
       </div>
          <br></br>
          <br></br>
           <ResumeHeading
         heading={"State Information Technology Agency"}
         subHeading={"SOFTWARE DEVELOPER EXPERIENTIAL TRAINEE"}
          fromDate ={"2025"}
          toDate ={"present"}
       />
       <div className="experience-description">
         <span className="resume-description-text">
         Currently working as a Software developer
         </span>
       </div>
       <div className="experience-description">
         <span className="resume-description-text">
         - maintained the website for the client for managing their
            data, authorising users, uploading documents, etc..
         </span>
         <br />
         <span className="resume-description-text">
         - Cleaning, recovering, and exporting data from the MySQL database for migrating to the new system.{" "}
         </span>
         <br />
         <span className="resume-description-text">
           - Integrate the web with the server and exchange emails.
         </span>
         <br />
       </div>
     </div>
   </div>,

   /* PROGRAMMING SKILLS */
   <div
     className="resume-screen-container programming-skills-container"
     key="programming-skills"
   >
     {programmingSkillsDetails.map((skill, index) => (
       <div className="skill-parent" key={index}>
         <div className="heading-bullet"></div>
         <span>{skill.skill}</span>
         <div className="skill-percentage">
           <div
             style={{ width: skill.ratingPercentage + "%" }}
             className="active-percentage"
           ></div>
         </div>
       </div>
     ))}
   </div>,

   /* PROJECTS */
   <div className="resume-screen-container" key="projects">
     {projectsDetails.map((projectsDetails, index) => (
       <ResumeHeading
         key={index}
         heading={projectsDetails.title}
         subHeading={projectsDetails.subHeading}
         description={projectsDetails.description}
         fromDate={projectsDetails.duration.fromDate}
         toDate={projectsDetails.duration.toDate}
       />
     ))}
   </div>,

   /* Interests */
   <div className="resume-screen-container" key="interests">
     <ResumeHeading
       heading="Teaching"
       description="Apart from being a tech enthusiast and a code writer, I also love to teach people what I know, especially maths, simply because I believe in sharing."
     />
     <ResumeHeading
       heading="Music"
       description="Listening to soothing music is something I can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that I can get my hands on."
     />
     <ResumeHeading
       heading="Competitive Gaming"
       description="I like to challenge my reflexes a lot while competing in football games, pushing the rank, and having interactive gaming sessions excite me the most."
     />
   </div>,
 ];

 const handleCarousal = (index) => {
   let offsetHeight = 360;

   let newCarousalOffset = {
     style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
   };

   setCarousalOffsetStyle(newCarousalOffset);
   setSelectedBulletIndex(index);
 };

 const getBullets = () => {
   return resumeBullets.map((bullet, index) => (
     <div
       onClick={() => handleCarousal(index)}
       className={
         index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
       }
       key={index}
     >
       <img
         className="bullet-logo"
         src={require(`../../assets/Resume/${bullet.logoSrc}`)}
         alt="B"
       />
       <span className="bullet-label">{bullet.label}</span>
     </div>
   ));
 };

 const getResumeScreens = () => {
   return (
     <div
       style={carousalOffsetStyle.style}
       className="resume-details-carousal"
     >
       {resumeDetails}
     </div>
   );
 };

 useEffect(() => {
   return () => {
     /* UNSUBSCRIBE THE SUBSCRIPTIONS */
     fadeInSubscription.unsubscribe();
   };
 }, [fadeInSubscription]);

 return (
   <div
     className="resume-container screen-container fade-in"
     id={props.id || ""}
   >
     <div className="resume-content">
       <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
       <div className="resume-card">
         <div className="resume-bullets">
           <div className="bullet-container">
             <div className="bullet-icons"></div>
             <div className="bullets">{getBullets()}</div>
           </div>
         </div>

         <div className="resume-bullet-details">{resumeDetails[selectedBulletIndex]}</div>
       </div>
     </div>
   </div>
 );

}
