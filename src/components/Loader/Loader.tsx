import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderContent />
    </LoaderContainer>
  )
}

export default Loader

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const LoaderContent = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #202c39;
    border-color: #202c39 transparent #202c39 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
`
