import { Dashboard } from './components/Dashboard'
import { Authentication } from './components/Authentication'
import { useAuth } from './utils/useAuth'
import { useState } from 'react'
import { Loading } from './components/ui/Loading'

const App = () =>{
  const {status} = useAuth();

  
  return (
    <>
      {/*eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
      {status ? <Dashboard /> : <Authentication />}
    </>
  )
}

export default App
