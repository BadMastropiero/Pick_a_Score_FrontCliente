import React, {ReactElement} from 'react';


interface teams {
    team1: { _id: string, name: string }
    team2: { _id: string, name: string }
}

interface FeaturesCardProps {
    source1: string
    source2:string
    alt: string
    teams: teams
    description: string
}



const FeaturesCard: React.FC<FeaturesCardProps> = ({source1, source2, alt, teams, description}): ReactElement => {
    return (
        <div className="FeaturesContainer-card">
            <span className="FeaturesContainer-text">
                {description}
            </span>
        <div className="FeaturesContainer-teamSection">
            <img className="FeaturesContainer-img" src={"data:image/png;base64, "+source1} alt={alt} />
            <span className="FeaturesContainer-vs">VS</span>
            <img className="FeaturesContainer-img" src={"data:image/png;base64, "+source2} alt={alt} />
        </div>
            <div className="FeaturesContainer-teamSectionName">
                <h2 className="FeaturesContainer-name">{teams.team1.name}</h2> 
                <h2 className="FeaturesContainer-name">{teams.team2.name}</h2> 
            </div>
        </div>
    )
}

export default FeaturesCard