import React from 'react';
import { useRecoilValue } from 'recoil';
import { authenticated } from '../store';

function Dashboard(props) {
    const auth = useRecoilValue(authenticated)

    return (
        <div className="container">
            Welcome {auth?.user?.name}
        </div>
    );
}

export default Dashboard;