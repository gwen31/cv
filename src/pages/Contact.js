import React from 'react'
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Contact() {
    return (
        <div className="contact">
           <Navigation />
           <div className="contactContent">
               <div className="header"></div>
               <div className="contactBox">
                   <h1>Contactez-moi</h1>
                   <ul>
                       <li>
                       <img className="logo" src="./media/mapmarker.png" alt="icon photographie" height="40" width="40"/>
                           <span>Fonsorbes</span>
                       </li>
                       <li>
                       <img className="logo" src="./media/phone.png" alt="icon photographie" height="40" width="40"/>
                           <CopyToClipboard text="0619431601">
                               <span className="clickInput" 
                               onClick={()=> { alert('Numéro de téléphone copié !');}}>
                                   06 19 43 16 01</span>
                           </CopyToClipboard>
                       </li>
                       <li>
                       <img className="logo" src="./media/mail.png" alt="icon photographie" height="40" width="40"/>
                           <CopyToClipboard text="merlegwenaelle026@gmail.com">
                               <span className="clickInput" 
                               onClick={()=> { alert('Adresse E-mail copié !');}}>
                                   merlegwenaelle026@gmail.com</span>
                           </CopyToClipboard>
                       </li>
                   </ul>
               </div>
               <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/merle-gw%C3%A9na%C3%ABlle/" target="_blank" rel="noopener noreferrer">
                            <h4>linkedin</h4> 
                            <img src="./media/linkedin.png" alt="logo linkdin" height="30" width="30"/>
                        </a>
                   
                        <a href="https://github.com/gwen31" target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <img src="./media/github.png" alt="logo linkdin" height="30" width="30"/>
                        </a>
                    
                        <a href="https://twitter.com/GwenaelleMerle" target="_blank" rel="noopener noreferrer">
                            <h4>twitter</h4> 
                            <img src="./media/twitter.png" alt="logo twitter" height="30" width="30"/>
                            </a>
                    </ul>
               </div>
           </div>
        </div>
    )
}

export default Contact
