import React from 'react'
import { DateContainer } from './DateStyles'
function MyDate() {
    let today = new Date()
    let mydate = today.getFullYear() + '/' +(today.getMonth() + 1) + '/' + today.getDate()
  return (
    <DateContainer>
      <p>{mydate}</p>
    </DateContainer>
  )
}

export default MyDate
