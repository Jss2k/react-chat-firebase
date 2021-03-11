import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { firestore } from './firebase/utils'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/utils'

import ChatRoom from './pages/ChatRoom/ChatRoom'
import LoginPage from './pages/LoginPage/LoginPage'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'


import { AppWrapper, Main, Container } from './App.styles.js'

const App = () => {
  const [rooms, setRooms] = useState([])
  const [user] = useAuthState(auth)
  // console.log(user)
  const getChannels = () => {
    firestore.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          name: doc.data().name
        }
      }))
    })
  }

  useEffect(() => {
    getChannels()
  }, [])

  return (
    <AppWrapper>
      <Router>
        {
          !user
          ? <LoginPage />
          : <Container>
              <Header />
                <Main>
                  <Sidebar rooms={rooms} />
                  <Switch>
                    <Route exact path='/'>
                      <ChatRoom />
                    </Route>
                    <Route path='/login'>
                      <LoginPage />
                    </Route>
                  </Switch>
                </Main>
              </Container>
                }
      </Router>
    </AppWrapper>
  )
}

export default App
