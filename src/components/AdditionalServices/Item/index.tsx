import { AdditionalService } from '..';
import './index.scss'

import additionalServiceImage from '../../../img/additional_service_img.png'

export default function Item({name}: AdditionalService) {
    return (
        <div className="additional__services--item">
            <img src={additionalServiceImage}></img>
            <span className="additional__services--name">{name}</span>
        </div>
    )
}