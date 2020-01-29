import './style.css'
import { useReducer, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { appReducer, initialState, initReducer } from '../utils/reducer'
import * as React from "react";

function CApp(Props: any): any {
  const router = useRouter()
  const [containerClass, setCClass] = useState('hidden mainContain');
  useEffect(() => {
    if (window.location.pathname !== '/') {
      router.push(`${window.location.pathname}${window.location.search}`)
    }
    setCClass('visible mainContain');
  }, [])
  const { Component, pageProps } = Props;
  const [state, dispatch] = useReducer(appReducer, initialState, initReducer);
  return (
    <div className={containerClass}>
      <Component state={state} dispatch={dispatch} {...pageProps} />
      <style jsx>
      {
        `.mainContain {
          opacity: 1;
          transition: all 0.4s ease 0.2s;
        }

        .mainContain.hidden {
          opacity: 0;
        }`
      }
      </style>
    </div>
  )
}

export default CApp
