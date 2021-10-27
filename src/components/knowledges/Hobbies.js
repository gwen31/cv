import React from 'react'

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Loisirs</h3>
            <ul>
                <li className="hobby">
                    <img className="logo" src="./media/photo.png" alt="icon photographie" height="40" width="40"/>
                    <span>Photographie</span>
                </li>
                <li className="hobby">
                    <img className="logo" src="./media/voyages.png" alt="icon voyages" height="40" width="40"/>
                    <span>Voyages</span>
                </li>
                <li className="hobby">
                    <img className="logo" src="./media/randonees.png" alt="icon randonnée" height="40" width="40"/>
                    <span>Randonnée</span>
                </li>
                <li className="hobby">
                    <img className="logo" src="./media/computer.png" alt="icon computer" height="40" width="40"/>
                    <span>Informatique</span>
                </li>
            </ul>
        </div>
    )
}

export default Hobbies;
