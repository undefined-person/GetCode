import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Home = () => {
  const { getWidget, create, dublicateWidget, deleteWidget, getUserInfo } = useActions()
  const { widget } = useTypedSelector(state => state.widget)
  const [widgetName, setWidgetName] = useState<string>('')

  useEffect(() => {
    getWidget()
  }, [])

  const handleWidgetName = (e: React.FormEvent<HTMLInputElement>) => {
    setWidgetName(e.currentTarget.value)
  }

  const handleCreateName = () => {
    create(widgetName)
    setWidgetName('')
  }
  return (
    <>
      <WidgetCreateContainer>
        <WidgetInput value={widgetName} onChange={e => handleWidgetName(e)} />
        <WidgetBtn disabled={!widgetName} onClick={() => handleCreateName()}>
          Create widget
        </WidgetBtn>
      </WidgetCreateContainer>
      <HomeContainer>
        {widget.map(w => (
          <Widget key={w.id}>
            {w.name}
            <WidgetBtns>
              <WidgetBtn onClick={() => deleteWidget(w.id)}>Delete</WidgetBtn> <WidgetBtn onClick={() => dublicateWidget(w.id)}>Dublicate</WidgetBtn> <WidgetBtn>Edit</WidgetBtn>
            </WidgetBtns>
          </Widget>
        ))}
      </HomeContainer>
    </>
  )
}

export default Home

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1em;
  margin-top: 15px;
  padding-bottom: 30px;
`

const Widget = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: #202c39;
`

const WidgetBtn = styled.button`
  background-color: #202c39;
  color: #fff;
  font-size: 16px;
  padding: 10px;
  text-align: center;
  border-radius: 6px;
  border: none;
  margin-right: 5px;
`

const WidgetCreateContainer = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
`

const WidgetInput = styled.input`
  border: none;
  outline: none;
  color: #202c39;
  margin-right: 15px;
  border-bottom: 1px solid #202c39;
  padding: 5px;
  &:focus {
    border-bottom: 1px solid #6f8eae;
  }
`
const WidgetBtns = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`
