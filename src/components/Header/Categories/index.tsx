import './index.scss'

export interface Category {
    name: string
}

export default function HeaderCategories() {
    let categories: Category[] | [] = [
        {name: 'Услуги'},
        {name: 'Цены'},
        {name: 'О компании'},
        {name: 'Заявка'},
        {name: 'Этапы'},
        {name: 'Преимущества'},
        {name: 'Отзывы'},
        {name: 'Вопросы и ответы'},
        {name: 'Контакты'},
        {name: 'Заказать звонок'}
    ] 
    return (
        <div className='header__categories'>
            {categories.map(category => 
            <span className="header__categories--category">
                {category.name}
            </span>)}
        </div>
    )
}