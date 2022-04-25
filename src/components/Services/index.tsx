import './index.scss'

import documents from '../../img/documents.png'
import justiceTranslate from '../../img/justice_translate.png'
import technicalTranslate from '../../img/technical_translate.png'
import medicalTranslate from '../../img/medical_translate.png'
import artTranslate from '../../img/art_translate.png'
import oralTranslate from '../../img/oral_translate.png'
import notarial from '../../img/notarial.png'
import apostile from '../../img/apostile.png'
import Card from './Card'

export interface Service {
    imageLink: string,
    title: string,
    subcategories: string[],
    subcategoryColor?: string,
}

export default function Services() {
    let services: Service[] | [] = [
        {
            imageLink: documents,
            title: 'Личные документы',
            subcategories: ['паспорт',
                'вод. удостоверения',
                'аттестат',
                'справки',
                'права',
                'свидетельства',
                'вод. удостоверения',
                'док-ты для посольства'
            ]
        },
        {
            imageLink: justiceTranslate,
            title: 'Юридический перевод',
            subcategories: [
                'договора',
                'контракты',
                'соглашения',
                'лицензии',
                'доверенности',
                'протоколы',
                'учредительные док-ты',
                'сертификаты',
                'тендерная документация',
                'бухгалтерская отчетность',
                'аудиторские заключения'
            ]
        },
        {
            imageLink: technicalTranslate,
            title: 'Технический перевод',
            subcategories: [
                'инструкции',
                'руководства',
                'ГОСТы',
                'СНИПы',
                'спецификации',
                'чертежи',
                'схемы',
                'техническая документация',
                'технические презентации'
            ]
        },
        {
            imageLink: medicalTranslate,
            title: 'Медицинский перевод',
            subcategories: [
                'паспорт',
                'вод. удостоверения',
                'аттестат',
                'справки',
                'права',
                'свидетельства',
                'вод. удостоверения',
                'док-ты для посольства'
            ],
            subcategoryColor: '#FF2929'
        },
        {
            imageLink: artTranslate,
            title: 'Художественный перевод',
            subcategories: [
                'паспорт',
                'вод. удостоверения',
                'аттестат',
                'справки',
                'права',
                'свидетельства',
                'вод. удостоверения',
                'док-ты для посольства'
            ],
            subcategoryColor: '#FF2929'
        },
        {
            imageLink: oralTranslate,
            title: 'Устный перевод',
            subcategories: [
                'оnline переговоры',
                'презентации',
                'деловые встречи',
                'обучения',
                'экскурсии',
                'телефонные звонки'
            ]
        },
        {
            imageLink: notarial,
            title: 'Нотариальное заверение',
            subcategories: [
                'нотариальное заверение переводов',
                'нотариальное заверение копий российских документов'
            ]
        },
        {
            imageLink: apostile,
            title: 'Апостиль',
            subcategories: [
                'паспорт',
                'вод. удостоверения',
                'аттестат',
                'справки',
                'права',
                'свидетельства',
                'вод. удостоверения',
                'док-ты для посольства'
            ],
            subcategoryColor: '#FF2929'
        }
    ]

    return (
        <div className="services__wrapper">
            <div className="services__title">
                Наши услуги
            </div>
            <div className="services__cards--wrapper">
            {services.map(service => 
                <Card 
                    imageLink={service.imageLink} 
                    title={service.title} 
                    subcategories={service.subcategories} 
                    subcategoryColor={service.subcategoryColor} 
                /> )}
            </div>
        </div>
    )
}