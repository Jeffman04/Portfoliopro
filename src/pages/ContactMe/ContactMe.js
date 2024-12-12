import React,{useState} from "react";
import Typical from "react-typical";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser"

import imgBack from "../../images/mailz.jpeg";
import load1 from "../../images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../Footer/Footer";
import './ContactMe.css';

export default function ContactMe(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
   };
   const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [loading, setLoading] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const submitForm = async (e) => {
    e.preventDefault();

    // Validation
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setBanner("Please fill in all the fields.");
      toast.error("Please fill in all the fields.");
      return;
    }

    setLoading(true);

    const templateParams = {
      name,
      email,
      message,
    };

    try {
      // Send the email using EmailJS
      const response = await emailjs.send(
        'service_g67m0cf',  
        'template_9hz5p2p', 
        templateParams,
        '0Ogw2bCi9PznX3jp9' 
      );

      setBanner("Thank you for contacting us!");
      toast.success("Thank you for contacting us!");
    } catch (error) {
      console.log(error);
      setBanner("There was an error sending your message.");
      toast.error("There was an error sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>
          <a href="https://www.facebook.com/nenungwi.rotshidzwa">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="www.linkedin.com/in/nenungwi-rotshidzwa">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/rotshidzwajeffrey/?hl=en">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://x.com/NenungwiR">
            <i className="fa fa-twitter-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />
            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />
            <label htmlFor="message">Message</label>
            <textarea onChange={handleMessage} value={message} />
            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {loading && (
                  <b className="load">
                    <img src={load1} alt="loading..." />
                  </b>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// export default function ContactMe(props) {
//   let fadeInScreenHandler = (screen) => {
//     if (screen.fadeInScreen !== props.id) return;

//     Animations.animations.fadeInScreen(props.id);
//   };
//   const fadeInSubscription =
//    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

//    const [name, setName] = useState("")
//    const [email, setEmail] = useState("")
//    const [message, setMessage] = useState("")
//    const [banner, setBanner] = useState("")
//    const [bool, setBool] = useState(false)

//    const handleName = (e) =>{
//         setName(e.target.value);
//    }
//    const handleEmail = (e) =>{
//         setEmail(e.target.value);
//    }
//    const handleMessage = (e) =>{
//         setMessage(e.target.value);
//    }
//    const submitForm = async(e) =>{
//     e.preventDefault();
//     try {
//         let data ={
//             name,
//             email,
//             message,
//         };
//         setBool(true)
//         const res =await axios.post(`/contact`,data);
//         if(name.length === 0 || email.length === 0 || message.length === 0){
//             setBanner(res.data.msg)
//             toast.error(res.data.msg)
//             setBool(false)
//         }else if(res.status === 200){
//             setBanner(res.data.msg)
//             toast.success(res.data.msg)
//             setBool(false)
//         }
//     } catch (error) {
//         console.log(error)
//     }
//    }
//   return (
//     <div className="main-container fade-in" id={props.id || ""}>
//       <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
//       <div className="central-form">
//         <div className="col">
//           <h2 className="title">
//             <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
//           </h2>
//           <a href="#">
//             <i className="fa fa-facebook-square"></i>
//           </a>
//           <a href="#">
//             <i className="fa fa-google-plus-square"></i>
//           </a>
//           <a href="#">
//             <i className="fa fa-instagram"></i>
//           </a>
//           <a href="#">
//             <i className="fa fa-twitter-square"></i>
//           </a>
//         </div>
//         <div className="back-form">
//             <div className="img-back">
//                 <h4>Send Your Email Here!</h4>
//                 <img src={imgBack} alt='image not found'/>
//             </div>
//             <form onSubmit={submitForm}>
//                 <p>{banner}</p>
//                 <label htmlFor="name">Name</label>
//                 <input type="text"
//                 onChange={handleName}
//                 value={name}/>
                
//                 <label htmlFor="email">Email</label>
//                 <input type="email"
//                 onChange={handleEmail}
//                 value={email} />

//                 <label htmlFor="message">Message</label>
//                 <textarea type="text"
//                 onChange={handleMessage}
//                 value={message}/>

//                 <div className="send-btn">
//                     <button type="submit">
//                         send<i className="fa fa-paper-plane"/>
//                         {bool ?(<b className="load">
//                             <img src={load1} alt="image not responding"/>
//                         </b>): ("")}
//                     </button>
//                 </div>
//             </form>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }
