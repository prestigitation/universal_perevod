import Order from '../Order'
import './index.scss'

import clock from '../../img/clock.png'
import courier from '../../img/courier.png'
import price from '../../img/price.png'
import quality from '../../img/quality.png'
import Card from '../Order/Card'

export interface OrderCard {
    description: string,
    title: string,
    imageLink: string,
    bgColor: string,
}

export default function IndexBanner() {
    let orderCards: OrderCard[] | [] = [
        {
            description: 'Перевод за 1 час', 
            title: 'скорость', 
            imageLink: clock,
            bgColor: '#B8DDDE'  
        },
        {
            description: 'Всего 390 руб',
            title: 'низкие цены',
            imageLink: price,
            bgColor: '#F9EAB5'
        },
        {
            title: 'качество',
            description: 'Переводчики профессионалы',
            imageLink: quality,
            bgColor: '#D7EFC7'
        },
        {
            title: 'бесплатно',
            description: 'Курьерская доставка',
            imageLink: courier,
            bgColor: '#D1D7FA'
        }
    ]

    return (
        <>
        <div className="banner__wrapper">
            <div className="banner__heading--wrapper">
                <div className="banner__heading">
                    Бюро переводов <div className="banner__heading--name"> Универсал </div> в Москве
                </div>
                <div className="banner__delimiter--wrapper">
                    <hr className="banner__delimiter" />
                </div>
                <div className="banner__content">
                    <div className="banner__content--header">
                        ПЕРЕВОДЫ СО ВСЕХ ЯЗЫКОВ МИРА.
                    </div>
                    <div className="banner__content--info">
                    Мы оказываем полный спектр услуг по письменным и устным переводам.
                    </div>
                </div>
            </div>
            <div className="banner__order--wrapper">
                <Order />
            </div>
        </div>
        <div className="banner__wrapper--cards">
            {orderCards.map (card => 
                <Card 
                    bgColor={card.bgColor} 
                    imageLink={card.imageLink}
                    title={card.title}
                    description={card.description}
                /> 
            )}
        </div>
        </>
    )
}