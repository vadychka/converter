import { useContext } from "react"
import { generateUniqueId } from "../../../../Helpers/idGenerator"
import { StoreContext } from "../../../../Helpers/store"
import './CurrenciesListLeft.scss'


const CurrenciesListLeft = () => {
    
    const {
        currentCourse:[currentCourse],
        currentCurrenceLeft:[currentCurrenceLeft, setCurrentCurrenceLeft],
        currentCurrenceRight:[currentCurrenceRight],
        currentValueLeft:[currentValueLeft],
        currentValueRight:[,setCurrentValueRight]
    } = useContext(StoreContext)

    const changeCurrecy = (el) => {
        
        setCurrentCurrenceLeft(el.ccy)
        
        const findCurrentCurrenceRight = currentCourse.find(el => el.ccy === currentCurrenceRight).buy
        const convert = currentValueLeft * el.buy / findCurrentCurrenceRight
        setCurrentValueRight(Math.ceil((convert)*100)/100)
    }

    
    return <div className="currenciesList">
        {currentCourse.map(el => {
            return <div 
            onClick={()=>changeCurrecy(el)}
            key={generateUniqueId()} 
            className={`currenciesList__currencie ${el.ccy === currentCurrenceLeft && 'selected'}`}
            > {el.ccy} </div>
        })}
    </div>
}

export default CurrenciesListLeft