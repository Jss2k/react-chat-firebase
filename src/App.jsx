import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/utils'

import LoginPage from './pages/LoginPage/LoginPage'
import ChatRoom from './pages/ChatRoom/ChatRoom'


import { AppWrapper } from './App.styles.js'

const App = () => {
  const [user] = useAuthState(auth)
  return (
    <AppWrapper>
      <div>{user ? <ChatRoom /> : <LoginPage />}</div>
    </AppWrapper>
  )
}

export default App
