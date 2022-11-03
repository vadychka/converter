
import axios from 'axios'
import React, { createContext } from 'react'
import { useEffect } from "react"
import { useState } from "react"

export const StoreContext = createContext(null)

const Store = ({ children }) => {

  const [currentCourse, setcurrentCourse] = useState([])

  const [currentCurrenceLeft, setCurrentCurrenceLeft] = useState('USD')
  const [currentCurrenceRight, setCurrentCurrenceRight] = useState('USD')

  const [currentValueLeft, setCurrentValueLeft] = useState(0)
  const [currentValueRight, setCurrentValueRight] = useState(0)

  useEffect(()=>{
          axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
          .then((res)=>{
              res.data.push(
                {ccy: 'UAH', base_ccy: 'UAH', buy: '1', sale: '1'})
              res.data[2].buy *= res.data[0].buy
              setcurrentCourse(res.data)

          }).catch(err => {
              throw new Error(err)
          })
  },[])

  const store = {
    currentCourse: [currentCourse, setcurrentCourse],
    currentCurrenceLeft: [currentCurrenceLeft, setCurrentCurrenceLeft],
    currentCurrenceRight: [currentCurrenceRight, setCurrentCurrenceRight],
    currentValueLeft: [currentValueLeft, setCurrentValueLeft],
    currentValueRight: [currentValueRight, setCurrentValueRight],
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default Store