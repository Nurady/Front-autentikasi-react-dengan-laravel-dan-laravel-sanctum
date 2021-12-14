import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authenticated } from '../store';

function Guest({children}) {
    const navigate = useNavigate()
    const auth= useRecoilValue(authenticated)

    useEffect(() => {
        if (auth.check) {
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.check])

    return children
}

export default Guest;