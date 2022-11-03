import { useContext } from "react"
import { StoreContext } from "../../../Helpers/store"
import CurrenciesListRight from "./CurrenciesListRight/CurrenciesListRight"


const BlockRight = () =>{

    const {
        currentCourse:[currentCourse],
        currentCurrenceRight:[currentCurrenceRight],
        currentValueRight:[currentValueRight, setCurrentValueRight],
        currentCurrenceLeft:[currentCurrenceLeft],
        currentValueLeft:[,setCurrentValueLeft]
    } = useContext(StoreContext)

        
    const convertValue = (value) => {
        
        setCurrentValueRight(value)
        const findCurrentCurrenceLeft = currentCourse.find(el => el.ccy === currentCurrenceLeft).buy
        const findCurrentCurrenceRight = currentCourse.find(el => el.ccy === currentCurrenceRight).buy
        const convert = value * findCurrentCurrenceRight / findCurrentCurrenceLeft
        setCurrentValueLeft(Math.ceil((convert)*100)/100)
    } 
    return <div>
         <CurrenciesListRight />
         <input
         type='number'
         value={currentValueRight}
         onChange={(value)=>convertValue(value.target.value)}
         />
    </div>
}

export default BlockRight