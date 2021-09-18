import React, { useEffect } from 'react'
import styled from 'styled-components'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Profile = () => {
  const { getUserInfo } = useActions()
  const { user } = useTypedSelector(state => state.auth)

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <ProfileContainer>
      <ProfileTitle>Profile edit</ProfileTitle>

      <ProfilePlaceholder> Username </ProfilePlaceholder>
      <ProfileInput name="username" required value={user.username} />

      <ProfilePlaceholder> Firstname </ProfilePlaceholder>
      <ProfileInput name="first_name" required value={user.first_name} />

      <ProfilePlaceholder> Lastname </ProfilePlaceholder>
      <ProfileInput name="last_name" required value={user.last_name} />

      <ProfilePlaceholder> Email </ProfilePlaceholder>
      <ProfileInput type="email" name="email" required value={user.email} />

      <ProfilePlaceholder> Country code </ProfilePlaceholder>
      <ProfileInput name="country_code" value={user.country_code} />

      <ProfilePlaceholder> State </ProfilePlaceholder>
      <ProfileInput name="state" value={user.state} />

      <ProfilePlaceholder> Address </ProfilePlaceholder>
      <ProfileInput name="address" value={user.address} />

      <ProfilePlaceholder> Zip </ProfilePlaceholder>
      <ProfileInput name="zip" value={user.zip} />

      <ProfilePlaceholder> Phone </ProfilePlaceholder>
      <ProfileInput name="phone" value={user.phone} />

      <ProfilePlaceholder> City </ProfilePlaceholder>
      <ProfileInput name="city" value={user.city} />
      <UpdateProfile>Save changes</UpdateProfile>
    </ProfileContainer>
  )
}

export default Profile

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 500px;
`

const ProfileTitle = styled.h2`
  color: #202c39;
  text-align: center;
  margin: 10px 0;
`

const ProfilePlaceholder = styled.h3`
  color: #202c39;
`

const ProfileInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #202c39;
  border-bottom: 1px solid #202c39;
  padding: 5px;
  margin-bottom: 5px;
  &:focus {
    border-bottom: 1px solid #6f8eae;
  }
`

const UpdateProfile = styled.div`
  background-color: #202c39;
  color: #fff;
  padding: 10px;
  width: 100px;
  text-align: center;
  margin: 10px auto 0;
  border-radius: 6px;
  cursor: pointer;
`
