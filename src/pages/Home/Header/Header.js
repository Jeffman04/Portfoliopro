import React, { useState, useEffect } from "react";
import {
  Total_Screens,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtilities";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };
  let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen)

  const getHeaderOptions = () => {
    return Total_Screens.map((Screen, i) => (
      <div
        key={Screen.screen_name}
        className={getHeaderOptionsClasses(i)}
        onClick={() => switchScreen(i, Screen)}
      >
        <span>{Screen.screen_name}</span>
      </div>
    ));
  };

  const getHeaderOptionsClasses = (index) => {
    let classes = "header-option ";
    if (index < Total_Screens.length - 1) classes += "header-option-seperator ";

    if (selectedScreen === index) classes += "selected-header-option ";

    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);

  return (
    <div
      className="header-container"
      onClick={() => setShowHeaderOptions(!showHeaderOptions)}
    >
      <div className="header-parent">
        <div
          className="header-hamburger"
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>
        <div className="header-logo">
          <span>NENUNGWI~</span>
        </div>
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}



// import React, { useState } from 'react'
// import {Total_Screens, GET_SCREEN_INDEX} from '../../../utilities/commonUtilities'
// import ScrollService from '../../../utilities/ScrollService'
// import {faBars} from '@fortawesome/free-solid-svg-icons'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import './Header.css'


// export default function () {
//   const [selectedScreen, setSelectedScreen] = useState(0)
//   const[showHeaderOptions, setShowHeaderOptions] = useState(false)

//   const updateCurrentScreen = (currentScrren) =>{
//     if(!currentScrren || !currentScrren.screenInView)
//     return;
//     let screenIndex = GET_SCREEN_INDEX(currentScrren.screenInView)
//     if(screenIndex < 0)
//     return
//   }
//   let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen)
   
//   const getHeaderOptions = () =>{
//     return(
//         Total_Screens.map((screen, i)=>(
//             <div key ={screen.screen_name} className= {getHeaderOptionsClass(i)}
//             onClick={() => switchScreen(i,screen)}>
//                 <span>{screen.screen_name}</span>
//             </div>
//         ))
//     )
//   }
//   const getHeaderOptionsClass = (index) =>{
//     let classes = "Header-option";
//     if (index < Total_Screens.length-1)
//     classes += "header-option-separator";

//     if(selectedScreen === index)
//     classes += "selected-header-option";
//     return
//   }

//   const switchScreen = (index, screen) =>{
//     let screenComponent = document.getElementById(screen.screen_name)
//     if(!screenComponent) return;

//     screenComponent.scrollIntoView({behavior: "smooth"});
//     setSelectedScreen(index)
//     setShowHeaderOptions(false)
//     };
  
//   return (
//     <div>
//         <div className="header-container"
//          onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
//             <div className='header-parent'>
//                 <div className='header-hamburger' 
//                 onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
//                 <FontAwesomeIcon className='header-hambuger-bars' icon={faBars}/>
//             </div>
//             <div className='header-logo'>
//                 <span>NENUNGWI~</span>
//             </div>
//             <div className={(showHeaderOptions)? "header-options show-hamburger-options": "header-options"}>
//                 {getHeaderOptions()}
//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }
