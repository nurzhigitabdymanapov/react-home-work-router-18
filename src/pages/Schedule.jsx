import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

export const Schedule = () => {
    const navigate = useNavigate()
    const gotoNotificationsPage = ()=>{
        navigate("/notification")
    }
  return (
    <ScheduleContainer>
        <h1>Schedule Page</h1>
        <ScheduleButton onClick={gotoNotificationsPage}>Go to Natification Page</ScheduleButton>
    </ScheduleContainer>
  )
}
const ScheduleButton = styled.button`
    background-color: blue;
    width: 200px;
    height: 35px;
    border: 0;
    border-radius: 5px;
    margin-top: 30px;
`
const ScheduleContainer = styled.div`
    margin-left: 50px;
    margin-top: 50px;
`