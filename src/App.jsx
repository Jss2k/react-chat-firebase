import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { auth } from './firebase/utils'

import ChatRoom from './pages/ChatRoom/ChatRoom'
import LoginPage from './pages/LoginPage/LoginPage'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'


import { AppWrapper, Main } from './App.styles.js'

const App = () => {
  // const [user] = useAuthState(auth)
  // console.log(user)
  return (
    <AppWrapper>
      <Router>
        <Header />
        <Main>
          <Sidebar />
          <Switch>
            <Route path='/room'>
              <ChatRoom />
            </Route>
            <Route path='/'>
              <LoginPage />
            </Route>
          </Switch>
        </Main>
      </Router>
      {/* <div>{user ? <ChatRoom /> : <LoginPage />}</div> */}
    </AppWrapper>
  )
}

export default App
