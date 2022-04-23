import Order from '../Order'
import './index.scss'

export default function IndexBanner() {
    return (
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
    )
}