import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import ActionBtn from '../../components/ActionBtn';
import { AuthRoutes } from '../../types/enums/app-routes.enum';

const ConfirmationPage: React.FC = (): ReactElement => {
    return (
        <div className="ConfirmationPage">
           <div className="ConfirmationPage-info">
                <span>La compra de su score 1-2 ha sido procesada con éxito</span>
                <span>Su código de acceso es:  </span>
                <span>Con este código podrá acceder libremente a esta plataforma</span>

            </div>
            <div className="ConfirmationPage-btn">
                <ActionBtn>
                        <Link className="ActionBtn-name" to={AuthRoutes.SELECT}> Volver a comprar</Link>
                </ActionBtn>
            </div>
        </div>
    )
}

export default ConfirmationPage