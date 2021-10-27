import React from 'react'
import Navigation from '../components/Navigation'

function Homes() {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Gwénaëlle Merle</h1>
                    <h2>Développeuse Web Junior</h2>
                    <div className="pdf">
                        <a href="./media/cv.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Homes
