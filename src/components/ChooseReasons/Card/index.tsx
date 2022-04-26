import {Reason} from '../index'
import './index.scss'

export default function Card({imageLink, title, description}: Reason) {
    return (
        <div className="reason__card">
            <div className="reason__card--image"><img className="reason__card--img" src={imageLink} alt="card_image"></img></div>
            <div className="reason__card--text">
                <div className="reason__card--title">{title}</div>
                <div className="reason__card--description">{description}</div>
            </div>
        </div>
    )
}