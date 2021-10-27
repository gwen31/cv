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
            {                    //on clique sur l'mage ou button et cela affiche le popup de la carte
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

/*import { Component } from 'react';

export default class Project extends Component {
    state = {
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        let {name, languagesIcons, source, info, picture } = this.props.item
        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon => 
                        <i className={icon} key={icon}></i>
                    )}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="" onClick={this.handleInfo}/>
                <span className="infos" onClick={this.handleInfo}>
                <i className="fas fa-plus-circle"></i>
                </span>
                {
                    this.state.showInfo && (
                         <div className="showInfos">
                    <div className="infosContent">
                        <div className="head">
                            <h2>{name}</h2>
                            <div className="sourceCode">
                                <a href={source} 
                                rel="noopener noreferrer" 
                                className="button" 
                                target="_blank">
                                Code source</a>
                            </div>
                        </div>
                        <p className="text">{info}</p>
                         <div className="button return" onClick={this.handleInfo}>
                            Retourner sur la page
                        </div>
                    </div>
                     
                </div>
                    )
                }
            </div>

        )
    }
}*/
