import { useAuthen } from './hooks/use-auth'
import Route from './router/route'
import Loading from './components/Loading';
function App() {
  const { loadingTime } = useAuthen();
  if (loadingTime) {
    return <Loading></Loading>
  }

  return (
    <>
      <Route></Route>
    </>
  )
}

export default App
