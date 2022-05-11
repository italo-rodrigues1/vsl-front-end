import { ToastContainer } from 'react-toastify';
import RoutesViews from './routes'
import GlobalStyle from './views/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer autoClose={3000}/>
      <RoutesViews/>
    </>
  )
}

export default App;
