import { ReactNode, useState } from 'react';
import './index.scss'
import arrowDown from '../../img/arrow_down.png'
import select from '../../img/select.png'
import docs from '../../img/docs.png'

export interface Step {
    value: number,
    title: string,
    success: false | boolean,
    content?: ReactNode
}

export default function Order() {
    function changeStep(stepNumber: number) {
        if(stepNumber > 1) {
            if(stepNumber > step.value) {

            } else {
                
            }
        } else {
            let nextStep = steps.find(step => step.value === stepNumber)
            setStep(nextStep as Step)
        }
    }

    let steps: Step[] = [
        {
            value: 1, 
            title: 'Направление перевода', 
            success: false, 
            content: 
            <>
                <div className="order__select--wrapper">
                    <div className="order__select"> 
                        <div className="order__select--text">
                            Перевод c
                        </div>
                        <div className="order__select--variants">
                            <img src={select} alt="select"></img>
                        </div>
                    </div> 
                    <div className="order__select--arrow"><img className="order__select--arrow--image" src={arrowDown} alt="arrow_down"></img></div>
                    <div className="order__select"> 
                        <div className="order__select--text">
                            Перевод на
                        </div>
                        <div className="order__select--variants">
                            <img src={select} alt="select"></img>
                        </div>
                    </div>
                </div>
                <div className="order__select--button" onClick={() => changeStep(2)}>
                    Отправить заявку
                </div> 
            </>},
        {
            value: 2, 
            title: 'Текст и строки', 
            success: false,
            content: 
            <>
                <div className="order__data">
                    <div className="order__data--wrapper">
                        <label className="order__data--label">
                            <input className="order__data--file" type="file"/>
                            <img className="order__data--docs" src={docs} alt="docs"></img>
                            <span className="order__data--text">
                                <span className="order__data--line">
                                    Загрузите
                                </span>
                                <span className="order__data--line">
                                    файл
                                </span>
                            </span>
                        </label>
                        <textarea className="order__data--info" placeholder='Введите задание в текстовое поле' />
                    </div>
                    <div className="order__data--buttons">
                        <div className="order__data--button order__data--button--inactive">
                            Назад
                        </div>
                        <div className="order__data--button">
                            Далее
                        </div>  
                    </div>
                </div>
            </>
        },
        {
            value: 3, 
            title: 'Контактные данные', 
            success: false,
            content: 
            <>
                <div className="order__contacts--wrapper">
                    <textarea className="order__contacts--info" placeholder='ФИО' />
                    <textarea className="order__contacts--info" placeholder='Телефон' />
                    <textarea className="order__contacts--info" placeholder='E-mail' />
                </div>
                <div className="order__contacts--buttons">
                    <div className="order__contacts--button order__contacts--button--inactive">
                        Назад
                    </div>
                    <div className="order__contacts--button">
                        Готовo
                    </div>  
                </div>
            </>
        }
    ];
    let [step, setStep] = useState(steps[0])

    return (
        <div className={`order__wrapper ${step.value === steps.length ? 'order__wrapper--last' : ''}`}>
            <div className="order__content">
                <div className="order__title">
                    Расчет перевода
                </div>
                <div className="order__steps">
                    <hr className="order__step--delimiter"></hr>
                    {
                        steps.map((currentStep: Step, index: number) => 
                        <>
                            <span className={`order__step ${currentStep.value === step.value ? 'order__step--active' : '' } `} onClick={() => setStep(currentStep)} key={index}>
                                {currentStep.value}
                            </span>
                        </>
                        )
                    }
                </div>
                <div className="order__steps--titles">
                    {
                        steps.map((currentStep: Step, index: number) => 
                        <>
                            <div className={`order__step--title ${currentStep.title === step.title ? 'order__step--title--active' : ''}`} key={index}>
                                {currentStep.title}
                            </div> 
                        </>
                        )
                    }
                </div>
                <div className={`order__steps--content ${step.value === steps.length ? 'order__steps--last' : ''}`}>
                    {
                        step.content ?? ''
                    }
                </div>
            </div>
        </div>
    )
}