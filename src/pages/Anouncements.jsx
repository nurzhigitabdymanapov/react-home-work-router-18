import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

export const Anouncements = () => {
    const navigate = useNavigate()
    const gotoStudentPage = () =>{
        navigate("/courses/students")
    }
  return (
    <AnouncementsContainer>
        <h1>Anouncements Page</h1>
        <AnouncementsButton onClick={gotoStudentPage}>Go to Students Page</AnouncementsButton>
    </AnouncementsContainer>
  )
}
const AnouncementsButton = styled.button`
    background-color: blue;
    width: 200px;
    height: 35px;
    border: 0;
    border-radius: 5px;
    margin-top: 30px;
`
const AnouncementsContainer = styled.div`
    margin-left: 50px;
    margin-top: 50px;
`