import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authenticated } from '../store';

function Authenticated({children}) {
    const navigate = useNavigate()
    const [auth, setAuth] = useRecoilState(authenticated)

    useEffect(() => {
        if (!auth.check) {
            navigate('/login')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.check])

    return children
}

export default Authenticated;