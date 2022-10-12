import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorFinder = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div>
            <h1> {error.status}</h1>
            <h3> {error.statusText}</h3>

        </div>
    );
};

export default ErrorFinder;

