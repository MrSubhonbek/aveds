import { Button, Col, Row } from 'antd'
import st from './Content.module.css'
import { CardPage } from './Card'

export const Content = () => {
    return (
        <>
            <div className={st.wrapper}>
                <h1 className={st.mainText}>Место для получения медицинской помощи</h1>
                <Button className={st.button} type="primary" danger>Войти</Button>
                <Button className={st.button} danger>Контакты</Button>
            </div>
            <div className={st.card}>
                <CardPage />
                <CardPage />
                <CardPage />
            </div>
        </>
    )
}
