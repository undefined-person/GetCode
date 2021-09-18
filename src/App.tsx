import React from 'react'
import styled from 'styled-components'
import Header from './components/Header/Header'

import Login from './pages/Login/Login'

const App = () => {
  const isAuth = false
  return (
    <>
      {isAuth ? (
        <>
          <Header />
          <Container></Container>
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
