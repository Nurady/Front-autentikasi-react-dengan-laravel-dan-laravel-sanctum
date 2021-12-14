import axios from 'axios';
import React, { useEffect, useState  } from 'react';
import { useRecoilState } from 'recoil';
import Router from './router';
import {authenticated} from './store'

function App(props) {
  const [auth, setAuth] = useRecoilState(authenticated)
  const [mounted, setMounted] = useState(false)

  const getUser = async() => {
      try {
          let response = await axios.get('me')
    
          setAuth({
              check: true,
              user: response.data.data,
          })        
      } catch (e) {
          console.log(e)
      }

      setMounted(true)
  }

  useEffect(() => {
      getUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.check, mounted])

  if (!mounted) {
      return (
          <div className="row justify-content-center align-items-center vh-100">
              <svg widths="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
              <g transform="translate(26.666666666666668,26.666666666666668)">
                <rect x={-20} y={-20} width={40} height={40} fill="#e15b64">
                  <animateTransform attributeName="transform" type="scale" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.1500000000000001;1" begin="-0.3s" />
                </rect>
              </g>
              <g transform="translate(73.33333333333333,26.666666666666668)">
                <rect x={-20} y={-20} width={40} height={40} fill="#f47e60">
                  <animateTransform attributeName="transform" type="scale" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.1500000000000001;1" begin="-0.2s" />
                </rect>
              </g>
              <g transform="translate(26.666666666666668,73.33333333333333)">
                <rect x={-20} y={-20} width={40} height={40} fill="#f8b26a">
                  <animateTransform attributeName="transform" type="scale" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.1500000000000001;1" begin="0s" />
                </rect>
              </g>
              <g transform="translate(73.33333333333333,73.33333333333333)">
                <rect x={-20} y={-20} width={40} height={40} fill="#abbd81">
                  <animateTransform attributeName="transform" type="scale" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.1500000000000001;1" begin="-0.1s" />
                </rect>
              </g>
            </svg>
          </div>
      )
  }

  return <Router />
}

export default App;