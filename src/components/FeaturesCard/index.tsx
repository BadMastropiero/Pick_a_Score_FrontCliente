import React, {ReactElement} from 'react';


interface teams {
    team1: { _id: string, name: string }
    team2: { _id: string, name: string }
}

interface FeaturesCardProps {
    source: string
    alt: string
    teams: teams
    description: string
}



const FeaturesCard: React.FC<FeaturesCardProps> = ({source, alt, teams, description}): ReactElement => {
    return (
        <div className="FeaturesContainer-card">
            <span className="FeaturesContainer-text">
                {description}
            </span>
            <img className="FeaturesContainer-img" src={"data:image/png;base64, "+source} alt={alt} />
            <h2 className="FeaturesContainer-name">{teams.team1.name}</h2> 
            <span className="FeaturesContainer-vs">VS</span>
            <h2 className="FeaturesContainer-name">{teams.team2.name}</h2> 
        </div>
    )
}

export default FeaturesCard