import { useContext } from "react"
import { generateUniqueId } from "../../../../Helpers/idGenerator"
import { StoreContext } from "../../../../Helpers/store"
import './CurrenciesListRight.scss'


const CurrenciesListRight = () => {

    const {
        currentCourse:[currentCourse],
        currentCurrenceRight: [currentCurrenceRight, setCurrentCurrenceRight],
        currentValueLeft: [,setCurrentValueLeft],
        currentCurrenceLeft:[currentCurrenceLeft],
        currentValueRight:[currentValueRight]
    } = useContext(StoreContext)

    const changeCurrecy = (el) => {
        
        setCurrentCurrenceRight(el.ccy)
        
        const findCurrentCurrenceLeft = currentCourse.find(el => el.ccy === currentCurrenceLeft).buy
        const convert = currentValueRight * el.buy / findCurrentCurrenceLeft
        setCurrentValueLeft(Math.ceil((convert)*100)/100)
    }

    return <div className="currenciesList">
        {currentCourse.map(el => {
            return <div 
            onClick={()=> changeCurrecy(el)}
            key={generateUniqueId()} 
            className={`currenciesList__currencie ${el.ccy === currentCurrenceRight && 'selected'}`}
            >
                {el.ccy}</div>
        })}
    </div>
}

export default CurrenciesListRight