import { Card } from 'antd';
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';
import st from './Card.module.css'

const { Meta } = Card;

interface IProps {
    idSvg:string
    title:string
    description: string
}

export const CardPage = (props: IProps) => {
    return (
        <Card className={st.card} >
            <GlobalSvgSelector id={props.idSvg} />
            <Meta title={props.title}/>
            <div className={st.wrapper}></div>
            <span>{props.description}</span>
        </Card>
    )
}