import './index.scss'

import mark from '../../../img/mark_mobile.png'

export enum TaxCategories {
    '#F9EAB5' = 'ЭКОНОМ',
    '#D7EFC7' = 'СТАНДАРТ',
    '#D1D7FA' = 'БИЗНЕС'
}

export enum Languages {
    'Английский',
    'Немецкий',
    'Испанский'	,		
    'Итальянский',		
    'Китайский'	,		
    'Польский',			
    'Французский'
}

export interface TaxCategory {
    name: Languages,
    prices: {
        [K in TaxCategories]: number
    }
}

export default function TaxesTable() {
    let taxes: TaxCategory[] = [
        {
            name: Languages.Английский,
            prices: {
                'ЭКОНОМ': 350, 'СТАНДАРТ': 350, 'БИЗНЕС': 350
            }
        },
        {
            name: Languages.Немецкий,
            prices: {
                'ЭКОНОМ': 350, 'СТАНДАРТ': 350, 'БИЗНЕС': 350
            }
        },
        {
            name: Languages.Испанский,
            prices: {
                'ЭКОНОМ': 350, 'СТАНДАРТ': 350, 'БИЗНЕС': 350
            }
        },
        {
            name: Languages.Итальянский,
            prices: {
                'ЭКОНОМ': 350, 'СТАНДАРТ': 350, 'БИЗНЕС': 350
            }
        },
        {
            name: Languages.Китайский,
            prices: {
                'ЭКОНОМ': 350, 'СТАНДАРТ': 350, 'БИЗНЕС': 350
            }
        },
        {
            name: Languages.Польский,
            prices: {
                'ЭКОНОМ': 350, 'СТАНДАРТ': 350, 'БИЗНЕС': 350
            }
        },
        {
            name: Languages.Французский,
            prices: {
                'ЭКОНОМ': 350, 'СТАНДАРТ': 350, 'БИЗНЕС': 350
            }
        }
    ]
    return (
        <>
        <table className="taxes__table--wrapper">
            <tr>
                <td id="table__title">Язык перевода</td>
                {Object.entries(TaxCategories).map((category) => <td style={{backgroundColor: category[0]}}> 
                    <span className="taxes__table--category">{category[1]}</span>
                    <img className="taxes__table--mark" src={mark} alt="mark"></img>
                </td>)}
            </tr>
            {
                taxes.map(tax => <tr>
                <td className="taxes__table--language">{Languages[tax.name]}</td>
                {Object.entries(tax.prices).map(price => <td className="taxes__table--price">{price[1]} руб.</td>)}
                </tr>)
            }
        </table>
        <span className="taxes__table--button">
            Показать еще
        </span>
        </>
    )
}