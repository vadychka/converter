import { useContext } from "react"
import { StoreContext } from "../../../Helpers/store"
import CurrenciesListLeft from "./CurrenciesListLeft/CurrenciesListLeft"


const BlockLeft = () => {

    const {
        currentCourse:[currentCourse],
        currentValueLeft:[currentValueLeft,setCurrentValueLeft],
        currentCurrenceRight:[currentCurrenceRight],
        currentCurrenceLeft:[currentCurrenceLeft],
        currentValueRight:[,setCurrentValueRight]
    } = useContext(StoreContext)

    const convertCurrence = (value) => {
        setCurrentValueLeft(value)
        const findCurrentCurrenceLeft = currentCourse.find(el => el.ccy === currentCurrenceLeft).buy
        const findCurrentCurrenceRight = currentCourse.find(el => el.ccy === currentCurrenceRight).buy
        const convert = value * findCurrentCurrenceLeft / findCurrentCurrenceRight
        setCurrentValueRight(Math.ceil((convert)*100)/100)
    } 
    return <div>
        <CurrenciesListLeft/>
        <input
        type='number'
        value={currentValueLeft}
        onChange={(value)=> convertCurrence(value.target.value)}
        />
    </div>
}

export default BlockLeft