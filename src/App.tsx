import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Loader from './components/Loader/Loader'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home'
import Store from './pages/Store/Store'
import { useActions } from './hooks/useActions'
import { useTypedSelector } from './hooks/useTypedSelector'
import { IUser } from './models/IUser'

const App = () => {
  const { isAuth } = useTypedSelector(state => state.auth)
  const { isLoading, error } = useTypedSelector(state => state.app)
  const { setAuth, setUser } = useActions()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setUser({ username: localStorage.getItem('username') || '' } as IUser)
      setAuth(true)
    }
  }, [])

  return (
    <>
      {error && alert(error)}
      {isLoading && <Loader />}
      {isAuth ? (
        <>
          <Header />
          <Container>
            <Switch></Switch>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/store" exact>
              <Store />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Container>
        </>
      ) : (
        <Container>
          <Login />
        </Container>
      )}
    </>
  )
}

export default App

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`
