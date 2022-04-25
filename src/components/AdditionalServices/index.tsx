import './index.scss'
import Item from './Item'

export interface AdditionalService {
    name: string
}

export default function AdditionalServices() {
    let additionalServices: AdditionalService[] = [
        {name: 'Верстка файлов'},
        {name: 'Перевод сайтов'},
        {name: 'Перевод деклараций'},
        {name: 'Консульская легализация'},
        {name: 'Перевод аудио и видео'},
        {name: 'Заверение печатью бюро'}
    ]
    return (
        <div className="additional__services--block">
            <div className="additional__services--title">
                Дополнительные услуги
            </div>
            <div className="additional__services--list">
                {additionalServices.map(additionalService => <Item name={additionalService.name} /> )}
            </div>
        </div>
    )
}