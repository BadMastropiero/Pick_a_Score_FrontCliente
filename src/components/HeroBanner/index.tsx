import React, { ReactElement } from 'react'

import ActionBtn from '../ActionBtn'

const HeroBanner: React.FC = (): ReactElement =>{
    return(
        <div className = "Banner">
            <div className="Banner-content">
                <h1 className="Banner-contentTitle">
                    Gambling is a  <br/> <span> Win-Win </span> Situation!!!!
                </h1>
                <p className = "Banner-contentText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, deleniti. Similique 
                    tempore nobis, sunt, quasi quaerat est fuga nostrum accusantium asperiores quos 
                    tempora dolor necessitatibus adipisci consectetur culpa consequatur dolore.
                </p>
                <div className="Banner-btn">
                    <ActionBtn />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner