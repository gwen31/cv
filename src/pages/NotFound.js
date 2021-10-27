import React from 'react'
import { NavLink } from 'react-router-dom';

function NotFound() {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3>Désolé cette page n'éxiste pas !</h3>
                <NavLink exact to="/">
                <img className="logo" src="./media/home.png" alt="logo home" height="20" width="20"/>
                        <span> Acceuil</span>
                </NavLink>
            </div>
        </div>
    )
}

export default NotFound
