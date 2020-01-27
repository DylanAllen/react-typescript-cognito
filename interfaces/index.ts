
export type User = {
  id: number
  name: string
}

export interface stateTypes {
  authState: string,
  user: any,
  session: any,
  credentials: any
}

export interface actionType {
  type: 'setAuthState' | 'setUser' | 'setSession' | 'setCredentials',
  value: any
}
