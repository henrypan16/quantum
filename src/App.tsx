import { Dashboard } from './pages/Dashboard'
import { UnauthorizedLayout } from './layouts/UnauthorizedLayout'
import { useLogin } from './utils/useLogin'
import { useEffect } from 'react'

function App() {
  const {handleLogin, isLoggedin} = useLogin();

  useEffect(() => {
    console.log(isLoggedin)
  }, [isLoggedin])
  

  return (
    <>
      {/*eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
      {isLoggedin ? <Dashboard /> : <UnauthorizedLayout handleLogin={handleLogin}/>}
    </>
  )
}

export default App
