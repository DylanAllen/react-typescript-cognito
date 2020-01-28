import { stateTypes, actionType } from '../interfaces';

export const initialState: stateTypes = {
  authState: 'unauthenticated',
  user: null,
  session: null,
  credentials: null
}

export const initReducer = (state: stateTypes = initialState) => {
  console.log('initializing reducer')
    return state;
}

const copyState = (state: stateTypes) => {
  return JSON.parse(JSON.stringify(state));
}

export const appReducer = (state: stateTypes, action: actionType): stateTypes => {
  let newState = copyState(state);
  console.log(state, newState, action.type, action.value);
  switch (action.type) {
    case 'setAuthState':
      console.log(state, newState);
      newState.authState = action.value;
      console.log(newState);
      return newState;
    case 'setUser':
      newState.user = action.value;
      return newState
    case 'setSession':
      newState.session = action.value;
      return newState
    case 'setCredentials':
      newState.credentials = action.value
      return newState
    default:
      return state;
  }
}
