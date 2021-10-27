import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation =() => {

    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/gwen.jpg" alt="profil" height="150" width="120"/>
                    <h3>Gwénaëlle Merle</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                    <NavLink exact to="/" activeClassName="navActive">
                    <img className="logo" src="./media/home.png" alt="logo home" height="40" width="40"/>
                        <span>Acceuil</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/competences" activeClassName="navActive">
                    <img className="logo" src="./media/skills.png" alt="logo skills" height="40" width="40"/>
                        <span>Compétences</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/portfolio" activeClassName="navActive">
                    <img className="logo" src="./media/portfolio.png" alt="logo portfolio" height="40" width="40"/>
                        <span>Portfolio</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/contact" activeClassName="navActive">
                    <img className="logo" src="./media/contact.png" alt="logo contact" height="40" width="40"/>
                        <span>Contact</span>
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                    <a href="https://www.linkedin.com/in/merle-gw%C3%A9na%C3%ABlle/" target="_blank" rel="noopener noreferrer"> 
                    <img src="./media/linkedin.png" alt="logo linkdin" height="30" width="30"/></a>
                    </li>
                    <li>
                    <a href="https://github.com/gwen31" target="_blank" rel="noopener noreferrer"> 
                    <img src="./media/github.png" alt="logo linkdin" height="30" width="30"/></a>
                    </li>
                    <li>
                    <a href="https://twitter.com/GwenaelleMerle" target="_blank" rel="noopener noreferrer"> 
                    <img src="./media/twitter.png" alt="logo twitter" height="30" width="30"/></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Gwénaëlle Merle - 2021</p>
                </div>
                
            </div>
        </div>
    )
}

export default Navigation
