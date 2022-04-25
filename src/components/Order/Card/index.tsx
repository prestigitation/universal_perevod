import { OrderCard } from '../../IndexBanner';
import './index.scss'

export default function Card({imageLink, bgColor, title, description}: OrderCard) {
    return (
        <div className="order__card--wrapper" style={{backgroundColor: bgColor}}>
            <div className="order__card--image">
                <img className="order__card--image--preview" src={imageLink} alt="card_image"></img>
            </div>
            <div className="order__card--title">
                {title}
            </div>
            <div className="order__card--description">
                {description}
            </div>
        </div>
    )
}