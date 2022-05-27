import { useAuth } from './contexts/AuthContext'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import {
  About,
  Admin,
  Contact,
  Home,
  PayRent
} from './pages'

export default function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className='App'>
      <ResponsiveAppBar />
      <About />
      <Admin />
      <Contact />
      <Home />
      <PayRent />
      {isLoggedIn ? <LoggedInText /> : <LoggedOutText />}
    </div>
  )
}

const LoggedInText = () => {
  const { account } = useAuth()

  return <p>Hey, {account.username}! I'm happy to let you know: you are authenticated!</p>
}

const LoggedOutText = () => (
  <p>Don't forget to start your backend server, then authenticate yourself.</p>
)
