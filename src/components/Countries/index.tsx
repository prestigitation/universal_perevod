import './index.scss'

import flagUk from '../../img/flag_uk.png'
import flagGermany from '../../img/flag_germany.png'
import flagSpain from '../../img/flag_spain.png'
import flagRussia from '../../img/flag_russia.png'
import flagPortugal from '../../img/flag_portugal.png'
import flagFrance from '../../img/flag_france.png'
import flagOae from '../../img/flag_oae.png'
import flagChina from '../../img/flag_china.png'
import flagUkraine from '../../img/flag_ukraine.png'
import flagTurkey from '../../img/flag_turkey.png'

export default function Countries() {
    let countries: string[] = [
        flagUk,
        flagGermany,
        flagSpain,
        flagRussia,
        flagPortugal,
        flagFrance,
        flagOae,
        flagChina,
        flagUkraine,
        flagTurkey
    ]

    return (
        <div className="countries__wrapper">
            {countries.map(countryImage => <img className="country__image" src={countryImage} alt="country_image"></img>)}
        </div>
    )
}