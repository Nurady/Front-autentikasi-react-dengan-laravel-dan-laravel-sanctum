import axios from 'axios';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Router from './router';
import {authenticated} from './store'

function App(props) {
  const [auth, setAuth] = useRecoilState(authenticated)

  const getUser = async() => {
      let response = await axios.get('me', {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('tokenUser')}`
          }
      })

      setAuth({
          check: true,
          user: response.data.data,
      })
  }

  useEffect(() => {
      getUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.check])

  return (
    <div>
        <Router />
    </div>
  );
}

export default App;