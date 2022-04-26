import { useState } from 'react'
import './index.scss'

export interface RequestStep {
    name: string | React.ReactNode,
    value: number
}

export default function Request() {
    let steps: RequestStep[] = [
        {
            name: 'Отправьте заявку',
            value: 1
        },
        {
            name: <><div id='step2row1'>Дождитесь ответ от менеджера по стоимости,</div><div id="step2row2">срокам и способу оплаты</div></>,
            value: 2
        },
        {
            name: <><div id="step3row1">Пришлите подтверждение и</div><div id="step3row2">внесите предоплату</div></>,
            value: 3
        },
        {
            name: 'Получите готовый перевод',
            value: 4
        }
    ]
    const [currentStep, setCurrentStep] = useState<RequestStep>(steps[0])
    return (
        <div className="request__wrapper">
            <div className="request__title">Как заказать перевод?</div>
            <div className="request__steps">
                {
                    steps.map(step => <>
                    <div className="request__step--wrapper">
                        <div className={`request__step ${step.value === currentStep.value ? 'request__step--current' : ''}`} onClick={() => setCurrentStep(step)}>
                            <span className={step.value === currentStep.value ? 'request__step--active' : ''}>
                                <div className="request__step--value">
                                    {step.value}
                                </div>
                            </span>
                        </div>
                        <div className="request__step--line" />
                        <div className="request__step--title">{step.name}</div>
                    </div>
                    </>)
                }
            </div>
            <div className="request__button">Отправить заявку</div>
        </div>
    )
}