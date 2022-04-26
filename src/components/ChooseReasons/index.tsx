import './index.scss'

import urgentTranslate from '../../img/urgent_translate.png'
import urgentNotarius from '../../img/urgent_notarius.png'
import freeCourier from '../../img/free_courier.png'
import personalManager from '../../img/personal_manager.png'
import taxes from '../../img/taxes.png'
import paymentForm from '../../img/payment_form.png'
import bureauSign from '../../img/bureau_sign.png'
import docsFormat from '../../img/docs_format.png'
import highQuality from '../../img/high_quality.png'
import discount from '../../img/discount.png'
import testTranslate from '../../img/test_translate.png'
import clientTarget from '../../img/client_target.png'
import guarantee from '../../img/guarantee.png'
import checking from '../../img/checking.png'
import security from '../../img/security.png'
import Card from './Card'

export interface Reason {
    title: string,
    description: string,
    imageLink: string,
}

export default function ChooseReasons() {
    let reasons: Reason[] = [
        {
            title: 'Срочный перевод',
            description: 'Мы имеем возможность перевода до 100 страниц в сутки. Стандартный срок – 1 страница за 1 час.',
            imageLink: urgentTranslate
        },
        {
            title: 'Срочное заверение нотариусом',
            description: 'Перевод можно заверить в день обращения. Забрать его самостоятельно в нашем офисе или получить скан заверения.',
            imageLink: urgentNotarius
        },
        {
            title: 'Бесплатный курьер',
            description: 'Наш курьер доставит заверенный перевод или оригиналы актов  в любое удобное для вас место и время.',
            imageLink: freeCourier
        },
        {
            title: 'Личный менеджер',
            description: 'За каждой компанией закреплен личный менеджер, который на связи 24/7',
            imageLink: personalManager
        },
        {
            title: 'Тарифы',
            description: 'Возможность выбрать переводчика под любой бюджет без потери качества.',
            imageLink: taxes
        },
        {
            title: 'Мы работаем без предоплат',
            description: 'С постоянными клиентами расчеты производятся раз в месяц по факту оказанных услуг',
            imageLink: paymentForm
        },
        {
            title: 'Заверение печатью бюро',
            description: 'Все переводы, выполненные нашим Бюро, можно заверить печатью нашей компании бесплатно.',
            imageLink: bureauSign
        },
        {
            title: 'Формат документов',
            description: 'Все переводы сохраняются в исходном виде оригиналов.',
            imageLink: docsFormat
        },
        {
            title: 'Высокое качество',
            description: 'Все переводы выполняют переводчики с лингвистическим и профильным образованием.',
            imageLink: highQuality
        },
        {
            title: 'Скидки от объёма',
            description: 'Дополнительные скидки от 50, 100, 150 страниц.',
            imageLink: discount
        },
        {
            title: 'Тестовый перевод',
            description: 'Пришлем на выбор перевод одной страницы от нескольких переводчиков бесплатно.',
            imageLink: testTranslate
        },
        {
            title: 'Высокая клиенториентированность',
            description: 'Опыт работы 15 лет.  Все менеджеры и переводчики профессионалы, к каждому клиенту индивидуальный подход.',
            imageLink: clientTarget
        },
        {
            title: 'Гарантии качества',
            description: 'Все переводы соответствуют международным стандартам, всегда можем внести правки по желанию клиента.',
            imageLink: guarantee
        },
        {
            title: 'Проверка редактором',
            description: 'Переводы по тарифу Бизнес проверяются дополнительным редактором.',
            imageLink: checking
        },
        {
            title: 'Безопасность',
            description: 'Полная конфиденциальность гарантирована.',
            imageLink: security
        }
    ]
    return (
        <div className="reasons__wrapper">
            <div className="reasons__title">
                15 причин выбрать именно нас!
            </div>
            <div className="reasons__cards">
                {reasons.map(reason => 
                <Card 
                    imageLink={reason.imageLink} 
                    title={reason.title} 
                    description={reason.description} 
                />)}
            </div>
        </div>
    )
}