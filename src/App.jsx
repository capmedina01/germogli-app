import './index.css'
import { RouterApp } from "./router/RouterApp"
import { Header } from "./UI/layouts/Header"
import { AuthProvider } from './features/users/hooks/context/AuthContext'


function App() {


  return (
    <>
      <div>
        <AuthProvider>
          <Header />
          <RouterApp />

        </AuthProvider>


      </div>
    </>
  )
}

export default App
