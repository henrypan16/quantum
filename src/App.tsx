import { Dashboard } from './components/Dashboard'
import { Authentication } from './components/Authentication'
import { useLogin } from './utils/useLogin'
import { useQuery } from '@tanstack/react-query' 
import { torrentApi } from './utils/torrentApi'

function App() {
  const {isError} = useQuery({
    queryKey: ['torrent', 'info'],
    queryFn: torrentApi.getVersion
  })

  return (
    <>
      {/*eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
      {isError ? <Authentication/> : <Dashboard />}
    </>
  )
}

export default App
