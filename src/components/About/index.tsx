import './index.scss'
import certificate from '../../img/certificate.png'
import certificateCover from '../../img/certificate_cover.png'
import certificateCoverDesktop from '../../img/certificate_cover_desktop.png'
export default function About() {
    return (
    <div className="about__wrapper">
        <div className="about__text">
            <div className="about__title">О компании</div>
            <div className="about__content">
                <p>Мы – команда профессионалов. </p>
                <p>Наши заказчики знают и рекомендуют нас как компанию, предоставляющую весь спектр переводческих услуг с неизменно высоким качеством. Компания имеет серьёзный опыт работы в сфере переводческого бизнеса, квалифицированный коллектив, наработанные программы взаимодействия с заказчиками. </p>
                <p>В нашей команде только опытные переводчики, которые гарантируют высокое качество обслуживания, обеспечивая полную языковую поддержку клиента, независимо от сложности и объёма требуемых услуг.</p>
            </div>
            <div className="about__sticker">
                <div className="about__sticker--experience">15</div>
                <div className="about__sticker--text">
                    <div className="about__sticker--heading">лет опыта</div>
                    <div className="about__sticker--content">оказания переводческих услуг</div>
                </div>
            </div>
        </div>
        <div className="about__documents">
            <div className="about__documents--title">Сертификат качества ISO 17100</div>
            <div className="about__certificate--wrapper">
                <div className="about__certificate--image">
                    <img className="about__certificate" src={certificate} alt="certificate"></img>
                    <img className="about__certificate--cover" src={certificateCover} alt="certificate_cover"></img>
                    <img className="about__certificate--cover--desktop" src={certificateCoverDesktop} alt="certificate_cover_desktop"></img>
                </div>
            </div>
        </div>
    </div>)
}