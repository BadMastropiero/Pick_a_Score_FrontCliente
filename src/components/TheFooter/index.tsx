import React, { Fragment, ReactElement } from 'react'

import ActionBtn from '../ActionBtn'

const TheFooter: React.FC = (): ReactElement => {
    return (
        <Fragment>
            <div className="Footer">
                <div className="Footer-left">
                    <h2>
                        Contacts:
                    </h2>
                    <ul className="Footer-contact">
                        <li>
                            <i className = "Facebook-icon"></i>
                            <a href="/">Facebook</a>
                        </li>
                        <li>
                        <i className = "Whatsapp-icon"></i>
                            <a href="/">Whatsapp</a>
                        </li>
                        <li>
                        <i className = "Twitter-icon"></i>
                            <a href="/">Twitter</a>
                        </li>
                        <li>
                        <i className = "Instagram-icon"></i>
                            <a href="/">Instagram</a>
                        </li>
                    </ul>
                </div>
                <div className="Footer-right">
                    <h3>
                        Some important info
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sapiente omnis quis. 
                        Natus doloremque dolores modi placeat minima perspiciatis ad aut numquam illum. 
                        Voluptatum rerum labore corrupti, error laudantium inventore.
                    </p>
                    <div className="Footer-btn">
                        <ActionBtn />
                    </div>
                </div>
            </div>
            <div className="CopyRight">
                <h3>Software developed by <span> KmadaTech</span> &copy; Copyright 2020</h3>
                <i className="Kmada-icon"></i>
            </div>
        </Fragment>
        
    )
} 

export default TheFooter