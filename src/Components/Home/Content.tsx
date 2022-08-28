import { Button } from 'antd'
import st from './Content.module.css'
import { CardPage } from './Card'

interface IProps {
    showModal: () => void
}

export const Content = (props: IProps) => {
    return (
        <>
            <div className={st.wrapper}>
                <h1 className={st.mainText}>Место для получения медицинской помощи</h1>
                <Button onClick={props.showModal} className={st.button} type="primary" danger>Войти</Button>
                <Button className={st.button} danger>Контакты</Button>
            </div>
            <div className={st.card}>
                <CardPage idSvg='first' title='Онлайн-прием' description='Рыба текст'/>
                <CardPage idSvg='second' title='Экстренный Случай' description='Рыба текст'/>
                <CardPage idSvg='third' title='Лечение рака' description='Рыба текст'/>
            </div>
        </>
    )
}
