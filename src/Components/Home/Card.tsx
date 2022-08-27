import { Card } from 'antd';
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';
import st from './Card.module.css'

const { Meta } = Card;

export const CardPage = () => {
    return (
        <Card className={st.card} >
            <GlobalSvgSelector id='heart' />
            <Meta
                title="Онлайн-прием"
                description='Банальные, но неопровержимые выводы, а также реплицированные с зарубежных источников, современные исследования.'
            />
        </Card>
    )
}