import { Button, Modal } from 'antd'
import st from './Content.module.css'
import { CardPage } from './Card'
import { RoutsApp } from '../../shared/constant'
import { useNavigate } from 'react-router-dom'

interface IProps {
    showModal: () => void
}

export const Content = (props: IProps) => {
    const navigator = useNavigate()
    const signOut = () => {
        localStorage.setItem('isLoggedIn', 'false');
        navigator(RoutsApp.Home)
    }
    const warning = () => {
        if (localStorage.getItem('isLoggedIn') === 'true')
            navigator(RoutsApp.Contacts)
        else
            Modal.warning({
                title: 'Сначала войдите . . .',
            });
    };
    return (
        <>
            <div className={st.wrapper}>
                <h1 className={st.mainText}>Место для получения медицинской помощи</h1>
                {(localStorage.getItem('isLoggedIn') === 'true')
                    ? <Button onClick={signOut} className={st.button} type="primary" danger>Выйти</Button>
                    : <Button onClick={props.showModal} className={st.button} type="primary" danger>Войти</Button>
                }
                <Button onClick={warning} className={st.button} danger>Контакты</Button>
            </div>
            <div className={st.card}>
                <CardPage idSvg='first' title='Онлайн-прием' description='Рыба текст' />
                <CardPage idSvg='second' title='Экстренный Случай' description='Рыба текст' />
                <CardPage idSvg='third' title='Лечение рака' description='Рыба текст' />
            </div>
        </>
    )
}
