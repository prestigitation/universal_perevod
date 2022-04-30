import './index.scss'
import recommend from '../../img/recommend.png'
import recommendMobile from '../../img/recommend_mobile.png'
import { useState } from 'react';
import arrowBack from '../../img/arrow_back.png'
import arrowForward from '../../img/arrow_forward.png'

export default function Reviews() {
    let [windowWidth] = useState(window.innerWidth)

    let [slickSettings, setSlickSettings] = useState<object>({
        slidesToShow: windowWidth > 768 ? 3 : 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
    })
    return (
        <div className="reviews__wrapper">
            <div className="reviews__title--mobile">
                Отзывы клиентов
            </div>
            <div className="reviews__title--desktop">
                Рекомендательные письма
            </div>
            <div className="reviews__slider">
                <div className="reviews__slider--arrow reviews__slider--arrow_back">
                    <img src={arrowBack} alt="arrow_back" className="reviews__slider--arrow_back_icon" />
                </div>
                <div className="reviews__image--wrapper">
                    {[1,2,3].map(review => <img className="reviews__image" src={window.innerWidth > 768 ? recommend: recommendMobile} alt="recommend"></img>)}
                </div>
                <div className="reviews__slider--arrow reviews__slider--arrow_forward">
                    <img src={arrowForward} alt="arrow_back" className="reviews__slider--arrow_forward_icon" />
                </div>
            </div>
        </div>
    )
}