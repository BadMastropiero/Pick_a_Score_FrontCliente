import React, { ReactElement } from 'react';

import img1 from '../../assets/logos/NFLTeams/Kansas_City_Chiefs.png';
import img2 from '../../assets/logos/NFLTeams/San_Francisco_49ers.png';

 const InfoPage: React.FC = (): ReactElement => {
    return (
        <section className="RulesSection">
            <h5 className="RulesSection-title">
                Conoce las Reglas de Pickascore
            </h5>
            <span className="RulesSection-teamName">Es muy fácil Ganar en Pickascore! Solo Entra, Escoge y Juega el Juego.</span>
            <h3 className="RulesSection-subtitle">
                Quinielas Marcador Final
            </h3>
            <p className="RulesSection-content">
                <span className="RulesSection-point">1.</span> Cada <strong className="RulesSection-alert">cuadro</strong> contiene una combinación de 2 dígitos, 
                la cual llamaremos Score.
                <br/>
                <br/>
                <span className="RulesSection-point">2.</span> 	Estos dígitos corresponden a terminación de los puntos en el marcador final del partido.  Es decir, 
                el último dígito de la terminación en los puntos que cada Equipos hagan en el partido. (Incluyendo Tiempos Extras )
                <br/>
                <br/>
                <span className="RulesSection-point">3.</span> El primer dígito de tu score siempre será la terminación de
                 los puntos del equipo Visitante (desplegados en la parte vertical de la tabla).
                 <br/>
                 <br/>
                 <span className="RulesSection-point">4.</span> El segundo dígito de tu score siempre será la 
                 terminación de los puntos del equipo Local (desplegados en la parte horizontal de la tabla).
            </p>
            <br/>
            <br/>
            <strong className="RulesSection-alert"> <span className="RulesSection-point">ejemplo</span></strong>
            <span  className="RulesSection-teamName"> En superbowl 54, en donde 49ers es el equipo visitante y Chiefs el equipo local. </span>
            <div className="RulesSection-examples">           
                <p className="RulesSection-content">
                    <span className="RulesSection-point">A.</span> Si el marcador fuera...
                    <div className="RulesSection-result">
                        <div className="RulesSection-teamSection">
                            <div className="RulesSection-teamLogo">
                                <img className="RulesSection-logo" src={img2} alt=""/>
                            </div>
                            <span className="RulesSection-teamName"> 49ers </span>
                            <span className="RulesSection-teamScore"> 2 <strong className="RulesSection-alert"> <span className="RulesSection-point"> 0 </span> </strong>  </span>
                        </div>
                        <div className="RulesSection-teamSection">
                            <div className="RulesSection-teamLogo">
                                <img className="RulesSection-logo" src={img1} alt=""/>
                            </div>
                            <span  className="RulesSection-teamName"> Chiefs  </span>
                            <span className="RulesSection-teamScore"> 3 <strong className="RulesSection-alert"> <span className="RulesSection-point"> 0 </span> </strong> </span>
                        </div>
                    </div>
                    El Score ganador sería la combinación <strong className="RulesSection-alert"> <span className="RulesSection-point"> 0 - 0 </span> </strong>
                </p>
                <br/>
                <br/>
                <p className="RulesSection-content">
                    <span className="RulesSection-point">B.</span> Si el marcador fuera...
                    <div className="RulesSection-result">
                        <div className="RulesSection-teamSection">
                            <div className="RulesSection-teamLogo">
                                <img className="RulesSection-logo" src={img2} alt=""/>
                            </div>
                            <span className="RulesSection-teamName"> 49ers </span>
                            <span className="RulesSection-teamScore"> 2 <strong className="RulesSection-alert"> <span className="RulesSection-point"> 1 </span> </strong>  </span>
                        </div>
                        <div className="RulesSection-teamSection">
                            <div className="RulesSection-teamLogo">
                                <img className="RulesSection-logo" src={img1} alt=""/>
                            </div>
                            <span  className="RulesSection-teamName"> Chiefs  </span>
                            <span className="RulesSection-teamScore"> 3 <strong className="RulesSection-alert"> <span className="RulesSection-point"> 6 </span> </strong> </span>
                        </div>
                    </div>
                    El Score ganador sería la combinación <strong className="RulesSection-alert"> <span className="RulesSection-point"> 1 - 6 </span> </strong>
                </p>
                <br/>
                <br/>
                <p className="RulesSection-content">
                <span className="RulesSection-point">C.</span> Si el marcador fuera...
                <div className="RulesSection-result">
                    <div className="RulesSection-teamSection">
                        <div className="RulesSection-teamLogo">
                            <img className="RulesSection-logo" src={img2} alt=""/>
                        </div>
                        <span className="RulesSection-teamName"> 49ers </span>
                        <span className="RulesSection-teamScore"> 3 <strong className="RulesSection-alert"> <span className="RulesSection-point"> 2 </span> </strong>  </span>
                    </div>
                    <div className="RulesSection-teamSection">
                        <div className="RulesSection-teamLogo">
                            <img className="RulesSection-logo" src={img1} alt=""/>
                        </div>
                        <span  className="RulesSection-teamName"> Chiefs  </span>
                        <span className="RulesSection-teamScore"> 1 <strong className="RulesSection-alert"> <span className="RulesSection-point"> 9 </span> </strong> </span>
                    </div>
                </div>
                El Score ganador sería la combinación <strong className="RulesSection-alert"> <span className="RulesSection-point"> 2 - 9 </span> </strong>
            </p>
            </div>
            <br/>
            <br/>
            <p className="RulesSection-content">
                No importa el Marcador, si este fuera, <strong className="RulesSection-alert"> <span className="RulesSection-point"> 12 vs 29 </span> </strong>  
                ó <strong className="RulesSection-alert"> <span className="RulesSection-point"> 22 vs 09 </span> </strong>,  etc. La combinación ganadora sería 
                la misma <strong className="RulesSection-alert"> <span className="RulesSection-point"> (2 – 9)</span> </strong>, 
                
                ya que sigue siendo la 
                misma terminación de los puntos por equipo en el marcador. ( <strong className="RulesSection-alert"> <span className="RulesSection-point"> 2 </span> </strong> 
                de 49ers y <strong className="RulesSection-alert"> <span className="RulesSection-point"> 9 </span> </strong>  de Chiefs).
            </p>
            <br/>
            
            <p className="RulesSection-content">
                <span className="RulesSection-point">5.</span> Tu Score juega una sola oportunidad por partido. Pudiendo comprar todos los scores que quieras.
                <br/>
                <br/>
                <span className="RulesSection-point">6.</span> El premio será el acumulado en cada Pick a Score. (Quiniela Marcador Final)
                <br/>
                <br/>
                <span className="RulesSection-point">7.</span> El premio depende del acumulado en cada Pickascore.
                <br/>
                <br/>
                <span className="RulesSection-point">8.</span> El valor de cada Score es de 60.00 MXN.
                <br/>
                <br/>
                <span className="RulesSection-point">9.</span>	En Pickascore con $60.00 puedes ganar hasta $4000. Es decir, el momio de tu score es hasta de +8000.
            </p>
            <h3 className="RulesSection-subtitle">
                QUINIELAS POR CUARTO
            </h3>
            <p className="RulesSection-content">
                <span className="RulesSection-point">1.</span> Cada <strong className="RulesSection-alert">cuadro</strong> contiene una combinación de 2 dígitos, 
                la cual llamaremos Score.
                <br/>
                <br/>
                <span className="RulesSection-point">2.</span> Estos dígitos corresponden a terminación de los puntos en el marcador total de cada cuarto. Es decir, 
                a cómo vaya el marcador al terminar el tiempo reglamentario de cada cuarto.
                <br/>
                <br/>
                <span className="RulesSection-point">3.</span> El primer dígito de tu score siempre será la terminación de
                 los puntos del equipo Visitante (desplegados en la parte vertical de la tabla).
                 <br/>
                 <br/>
                 <span className="RulesSection-point">4.</span> El segundo dígito de tu score siempre será la 
                 terminación de los puntos del equipo Local (desplegados en la parte horizontal de la tabla).
            </p>
            <br/>
            <br/>
            <strong className="RulesSection-alert"> <span className="RulesSection-point">ejemplo</span></strong>
            <span  className="RulesSection-teamName"> En superbowl 54, en donde 49ers es el equipo visitante y Chiefs el equipo local. </span>
            <div className="RulesSection-examples">           
                <p className="RulesSection-content">
                    <span className="RulesSection-point">A.</span>  Si el Marcador al terminar el 1er cuarto fuera…
                    <div className="RulesSection-result">
                        <div className="RulesSection-teamSection">
                            <div className="RulesSection-teamLogo">
                                <img className="RulesSection-logo" src={img2} alt=""/>
                            </div>
                            <span className="RulesSection-teamName"> 49ers </span>
                            <span className="RulesSection-teamScore"> 2 <strong className="RulesSection-alert"> <span className="RulesSection-point"> 0 </span> </strong>  </span>
                        </div>
                        <div className="RulesSection-teamSection">
                            <div className="RulesSection-teamLogo">
                                <img className="RulesSection-logo" src={img1} alt=""/>
                            </div>
                            <span  className="RulesSection-teamName"> Chiefs  </span>
                            <span className="RulesSection-teamScore"> 3 <strong className="RulesSection-alert"> <span className="RulesSection-point"> 0 </span> </strong> </span>
                        </div>
                    </div>
                    El Score ganador sería la combinación <strong className="RulesSection-alert"> <span className="RulesSection-point"> 0 - 0 </span> </strong>
                </p>
                <br/>
                <br/>
                <p className="RulesSection-content">
                    <span className="RulesSection-point">B.</span> Si el Marcador al terminar el 2do cuarto fuera…
                    <div className="RulesSection-result">
                        <div className="RulesSection-teamSection">
                            <div className="RulesSection-teamLogo">
                                <img className="RulesSection-logo" src={img2} alt=""/>
                            </div>
                            <span className="RulesSection-teamName"> 49ers </span>
                            <span className="RulesSection-teamScore"> 2 <strong className="RulesSection-alert"> <span className="RulesSection-point"> 1 </span> </strong>  </span>
                        </div>
                        <div className="RulesSection-teamSection">
                            <div className="RulesSection-teamLogo">
                                <img className="RulesSection-logo" src={img1} alt=""/>
                            </div>
                            <span  className="RulesSection-teamName"> Chiefs  </span>
                            <span className="RulesSection-teamScore"> 3 <strong className="RulesSection-alert"> <span className="RulesSection-point"> 6 </span> </strong> </span>
                        </div>
                    </div>
                    El Score ganador sería la combinación <strong className="RulesSection-alert"> <span className="RulesSection-point"> 1 - 6 </span> </strong>
                </p>
                <br/>
                <br/>
                <p className="RulesSection-content">
                <span className="RulesSection-point">C.</span> Si el Marcador al terminar el 3er cuarto fuera…
                <div className="RulesSection-result">
                    <div className="RulesSection-teamSection">
                        <div className="RulesSection-teamLogo">
                            <img className="RulesSection-logo" src={img2} alt=""/>
                        </div>
                        <span className="RulesSection-teamName"> 49ers </span>
                        <span className="RulesSection-teamScore"> 3 <strong className="RulesSection-alert"> <span className="RulesSection-point"> 2 </span> </strong>  </span>
                    </div>
                    <div className="RulesSection-teamSection">
                        <div className="RulesSection-teamLogo">
                            <img className="RulesSection-logo" src={img1} alt=""/>
                        </div>
                        <span  className="RulesSection-teamName"> Chiefs  </span>
                        <span className="RulesSection-teamScore"> 1 <strong className="RulesSection-alert"> <span className="RulesSection-point"> 9 </span> </strong> </span>
                    </div>
                </div>
                El Score ganador sería la combinación <strong className="RulesSection-alert"> <span className="RulesSection-point"> 2 - 9 </span> </strong>
            </p>
            </div>
            <br/>
            <br/>
            <p className="RulesSection-content">
                No importa el Marcador, si este fuera, <strong className="RulesSection-alert"> <span className="RulesSection-point"> 12 vs 29 </span> </strong>  
                ó <strong className="RulesSection-alert"> <span className="RulesSection-point"> 22 vs 09 </span> </strong>,  etc. La combinación ganadora sería 
                la misma <strong className="RulesSection-alert"> <span className="RulesSection-point"> (2 – 9)</span> </strong>, 
                
                ya que sigue siendo la 
                misma terminación de los puntos por equipo en el marcador. ( <strong className="RulesSection-alert"> <span className="RulesSection-point"> 2 </span> </strong> 
                de 49ers y <strong className="RulesSection-alert"> <span className="RulesSection-point"> 9 </span> </strong>  de Chiefs).
            </p>
            <br/>
            
            <p className="RulesSection-content">
                <span className="RulesSection-point">5.</span> Tu Score juega una sola oportunidad por cuarto. Pudiendo comprar todos los scores que quieras.
                <br/>
                <br/>
                <span className="RulesSection-point">6.</span> Tu Score, juega en cada uno de los CUARTOS del partido, es decir, tu score tiene 4 oportunidades por partido 
                para ganar hasta $1,000 por cuarto. Pudiendo ganar hasta $4,000 por partido.
                <br/>
                <br/>
                <span className="RulesSection-point">7.</span>  El premio depende del acumulado en cada Pick a Score. (Quiniela por Cuarto). Se divide el Acumulado entre cuatro para sacar 4 Scores ganadores.
                <br/>
                <br/>
                <span className="RulesSection-point">8.</span> El valor de cada Score es de 60.00 MXN.
                <br/>
                <br/>
                <span className="RulesSection-point">9.</span>	En Pickascore con $60.00 puedes ganar hasta $4000. Es decir, el momio de tu score es hasta de +8000.
            </p>
        </section>
    )
}

export default InfoPage