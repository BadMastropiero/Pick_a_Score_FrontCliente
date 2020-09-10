import React from 'react'
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';
import {ACCESS_TOKEN} from '../constants';
import {NonAuthRoutes} from '../types/enums/app-routes.enum';

interface Props {
    Component: React.FC<RouteComponentProps>,
    path: string,
    exact?: boolean
}

const AuthRoute = ({Component, path, exact = false}: Props): JSX.Element => {
    const isAuthed = !!localStorage.getItem(ACCESS_TOKEN);
    const messege = 'Por favor loguearse para ver esta página';
    return (
        <Route
            exact={exact}
            render={(props: RouteComponentProps) =>
                isAuthed ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: NonAuthRoutes.HOME,
                            state: {
                                messege,
                                requestedPath: path
                            }
                        }}
                    />
                )
            } 
        />
    );
};

export default AuthRoute