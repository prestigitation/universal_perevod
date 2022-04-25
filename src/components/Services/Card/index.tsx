import { Service } from '..';
import zayavka from '../../../img/zayavka.png'
import './index.scss'

export default function Card({title, imageLink, subcategories, subcategoryColor}:Service) {
    return (
        <div className="service__card--wrapper">
            <img className="service__card--image" src={imageLink} alt="service_card_image"></img>
            <div className="service__card--content">
                <div className="service__card--title">
                    {title}
                </div>
                <ul className="service__card--categories">
                    {subcategories.map(category => 
                    <li className="service__card--category" style={{color: subcategoryColor ? subcategoryColor : ''}}>
                        {category}
                    </li>)}
                </ul>
                <div className="service__card--request">
                    <img src={zayavka} alt="request"></img>
                </div>
            </div>
        </div>
    )
}