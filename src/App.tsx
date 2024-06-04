import { Dashboard } from './pages/Dashboard'
import { UnauthorizedLayout } from './layouts/UnauthorizedLayout'
import { useLogin } from './utils/useLogin'


function App() {
  const {handleLogin, localCreds} = useLogin();
  
  const isLoggedIn = !!localCreds.password && !!localCreds.username;

  return (
    <>
      {/*eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
      {isLoggedIn ? <Dashboard /> : <UnauthorizedLayout handleLogin={handleLogin}/>}
    </>
  )
}

export default App
