import React, { useEffect } from 'react'
import styled from 'styled-components'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Store = () => {
  const { getUserInfo } = useActions()
  const { user } = useTypedSelector(state => state.auth)

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <StoreContainer>
      {user.stores
        .filter(store => store.is_selected)
        .map(store => (
          <StoreCard key={store.id}>
            <StoreCardItem>Name: {store.name}</StoreCardItem>
            <StoreCardItem>URL: {store.url}</StoreCardItem>
            <StoreCardItem>Tags: {store.custom_tags}</StoreCardItem>
            <StoreCardItem>Monthly views: {store.monthly_views}</StoreCardItem>
            <StoreCardItem>Monthly visitors: {store.monthly_visitors}</StoreCardItem>
          </StoreCard>
        ))}
    </StoreContainer>
  )
}

export default Store

const StoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`

const StoreCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`

const StoreCardItem = styled.div`
  color: #202c39;
`
