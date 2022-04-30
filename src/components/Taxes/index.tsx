import './index.scss'

import russia from '../../img/russia.png'
import connect_high from '../../img/connect_high.png'
import connect_low from '../../img/connect_low.png'
import germany from '../../img/germany.png'
import uk from '../../img/uk.png'

export default function Taxes() {
    return (<div className="taxes__wrapper">
        <div className="taxes__title">
            <div className="taxes__title--text">
                Тарифы и цены
            </div>
            <div className="taxes__title--flags">
                <div id="russia"><img src={russia} alt="russian"></img></div>
                <img id="connect_low" src={connect_high} alt="connect_low"></img>
                <img id="connect_high" src={connect_low} alt="connect_hight"></img>
                <div id="germany"><img src={germany} alt="germany"></img></div>
                <div id="uk"><img src={uk} alt="uk"></img></div>
            </div>
        </div>
    </div>)
}