
import { useContext } from 'react'
import {generateUniqueId} from '../../../Helpers/idGenerator'
import { StoreContext } from '../../../Helpers/store'
import './CourseCurrency.scss'


const CourseCurrency = () => {
  
    const {
        currentCourse:[currentCourse]
    } = useContext(StoreContext)
    return (
        <div className='currency'>
            { currentCourse.length && currentCourse.map(el => {
                return <p key={generateUniqueId()}>
                    {el.ccy !== 'UAH' && el.ccy + ' => ' + Math.ceil((el.buy)*100)/100}</p> 
            })}
        </div>
    )
}

export default CourseCurrency