import React, { ReactElement } from 'react'



const ActionBtn: React.FC  = ({children}): ReactElement => {
    
    return (
        <div className="ActionBtn"> 
            <span  className="ActionBtn-title">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {children}
            </span>
        </div>
    )
}

export default ActionBtn