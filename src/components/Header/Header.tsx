import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { user } = useTypedSelector(state => state.auth)
  const { logout } = useActions()

  const profileRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const handleOutsideClick = (e: any) => {
    if (profileRef.current && !profileRef.current.contains(e.target)) {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isVisible])

  return (
    <>
      <HeaderContainer onClick={e => e.stopPropagation()}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Widgets>Widgets</Widgets>
        </Link>
        <Link to="/store" style={{ textDecoration: 'none' }}>
          <Shops>Shops</Shops>
        </Link>
        <ProfileBtn ref={profileRef} onClick={() => setIsVisible(!isVisible)}>
          {user.username}
          {isVisible && (
            <Dropdown>
              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <DropdownChild>Edit profile</DropdownChild>
              </Link>
              <DropdownChild onClick={logout}>Log out</DropdownChild>
            </Dropdown>
          )}
        </ProfileBtn>
      </HeaderContainer>
    </>
  )
}

export default Header

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px;
  font-size: 18px;
  background-color: #202c39;
`
const ProfileBtn = styled.div`
  position: relative;
  cursor: pointer;
`
const Widgets = styled.div``

const Shops = styled.div``

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  width: 100px;
  background-color: #202c39;
  padding: 5px;
`

const DropdownChild = styled.div`
  padding: 5px;
`
