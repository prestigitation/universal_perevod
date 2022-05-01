import { useState } from 'react'

import './index.scss'

import openQuestion from '../../img/open_question.png'
import closeQuestion from '../../img/close_question.png'
export interface QA {
    question: string,
    answer?: string
}

export default function Questions() {
    let [currentQuestionIndex, setCurrentQuestionIndex] = useState<number | undefined>(undefined)

    let questions: QA[] = [
        {
            question: 'Как рассчитать переводческую страницу?',
            answer: 'За учетную (или переводческую) страницу принимается страница, состоящая из 30 строк, в каждой из которых примерно 60 знаков. Таким образом, общее количество печатных знаков с пробелами в переводческой странице равно 1800.'
        },
        {
            question: 'Что такое апостиль?'
        },
        {
            question: 'Чем отличаются апостиль и легализация?'
        },
        {
            question: 'Каким способом можно произвести оплату?'
        },
        {
            question: 'Как рассчитывается срок перевода?'
        },
        {
            question: 'Чем отличается последовательный от синхронного перевода? '
        }
    ]


    return (
        <div className="questions__wrapper">
            <div className="questions__block--wrapper">
                <div className="questions__block--title">
                    Вопросы и ответы
                </div>
                {questions.map((question, index) => <div className="question__wrapper">
                    {currentQuestionIndex === index || (currentQuestionIndex === index && window.innerWidth < 768) ? <hr className="question__line" /> : ''}
                    <div className="question__title">
                        <span className={`question__title--text ${!question.answer ? 'question__title--noanswer' : ''}`}>
                            {question.question}
                        </span>
                        {currentQuestionIndex === index && index !== undefined
                        ? <img onClick={() => setCurrentQuestionIndex(undefined)} className="question__title--image_close" alt="close_question" src={closeQuestion}></img> 
                        : <img onClick={() => {
                            if(questions[index].answer) {
                                setCurrentQuestionIndex(index)
                            }
                            }} className="question__title--image" alt="open_question" src={openQuestion}></img>}
                    </div>
                    {currentQuestionIndex === index && questions[currentQuestionIndex].answer
                        ? <div className="question__answer">
                            {question.answer}
                        </div>
                        :''
                    }
                    <hr className="question__line question__line--bottom" />
                </div>)
                }
            </div>
        </div>
    )
}