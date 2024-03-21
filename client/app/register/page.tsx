import React from 'react';
import RegisterPage from './RegisterPage';
import RedirectAuthenticated from '../RedirectAuthenticated';

export default function Page() {
    return (
        <RedirectAuthenticated>
            <RegisterPage />
        </RedirectAuthenticated>
    );
}
