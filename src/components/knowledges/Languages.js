import { Component } from 'react';
import ProgressBar from "./ProgressBar";


class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "JavaScript", xp: 0.6},
            {id: 2, value: "Css", xp: 1},
            {id: 3, value: "Php", xp: 0.3},
        ],
        frameworks: [
            {id: 1, value: "React", xp: 0.7},
            {id: 2, value: "Bootstrap", xp: 0.4},
            {id: 3, value: "Sass", xp: 0.4},
            {id: 4, value: "Express", xp: 0.6}
        ]
    }
    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
            <ProgressBar  
                langages={languages}
                className="languagesDisplay"
                title="langages"/>
            <ProgressBar 
                langages={frameworks}
                className="frameworksDisplay"
                title="Frameworks & bibliothèques"
                
            />
        </div>
    )
    }
}

export default Languages;
