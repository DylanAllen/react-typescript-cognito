import './style.css'
import { useReducer, createContext } from 'react'
import { stateTypes } from '../interfaces'
import { appReducer, initialState, initReducer } from '../utils/reducer'

interface ctsType {
  state: stateTypes;
  dispatch: any
}

const stateCtx: ctsType = {
  state: initialState,
  dispatch: null
}

const StateContext = createContext(stateCtx);

import * as React from "react";
import { Container } from "next/app";

function CApp(Props: any): any {
  const { Component, pageProps } = Props;
  const [state, dispatch] = useReducer(appReducer, initialState, initReducer);
  return (
    <Container>
      <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Component state={state} dispatch={dispatch} {...pageProps} />
      </StateContext.Provider>
    </Container>
  )
}

export default CApp
