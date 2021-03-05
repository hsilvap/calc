import Layout from './components/Layout/Layout'
import { StoreProvider } from './context/store'

const App = () => (
  <StoreProvider>
    <Layout />
  </StoreProvider>
)

export default App
