import React, {useState} from 'react'

const Project = (props) => {
    const {item} = props
    const [ showInfo, setShowInfos] = useState(false)

    const handleInfo = () => {
            setShowInfos(!showInfo)
        }
    
    return (
        <div className="project">
            
        <div className="icons">
            {item.languagesIcons.map(icon => 
                <i className={icon} key={icon}></i>
            )}
        </div>
            <h3>{item.name}</h3>
                <img src={item.picture} alt="" onClick={handleInfo}/>
                <span className="infos" onClick={handleInfo}>
                    <i className="fas fa-plus-circle"></i>
                </span>
            {
            showInfo && (
                <div className="showInfos">
                    <div className="infosContent">
                        <div className="head">
                            <h2>{item.name}</h2>
                            <div className="sourceCode">
                                <a href={item.source} 
                                rel="noopener noreferrer" 
                                className="button" 
                                target="_blank">
                                    Code source</a>
                            </div>
                        </div>
                        <p className="text">{item.info}</p>
                        <div className="lien">
                            <a href={item.link} 
                                rel="noopener noreferrer"  
                                target="_blank">
                                   {item.link}</a>
                            </div>
                        <div className="button return" onClick={handleInfo}>
                            Retourner sur la page
                        </div>
                    </div>
                </div>   
                )
            }
        </div>
    )
}

export default Project
