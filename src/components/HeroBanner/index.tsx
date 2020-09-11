import React, { ReactElement } from 'react'

import {HomeInput} from '../HomeInput'

const HeroBanner: React.FC = (): ReactElement =>{
    return(
        <div className = "Banner">
            <div className="Banner-content">
                <h1 className="Banner-contentTitle">
                    Gambling is a  <br/> <span> Win-Win </span> Situation!!!!
                </h1>
                <p className = "Banner-contentText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, deleniti. Similique 
                </p>
                <HomeInput />
            </div>
        </div>
    )
}

export default HeroBanner