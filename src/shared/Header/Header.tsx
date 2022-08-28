import { Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';
import { RoutsApp } from '../constant';

import st from './Header.module.css'

interface IProps {
    showModal?: () => void
    setIsSingIn: (value: boolean) => void
}

export const Header = (props: IProps) => {
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
        <header>
            <span onClick={() => { navigator(RoutsApp.Home) }} className={st.logo}><GlobalSvgSelector id='logo' /></span>
            <div className={st.wrapper}>
                <Button onClick={warning} type="text" >Контакты</Button>
                {(localStorage.getItem('isLoggedIn') === 'true')
                    ? <Button danger className={st.login} onClick={signOut}>Выйти</Button>
                    : <Button danger className={st.login} onClick={props.showModal}>Войти</Button>}

            </div>
        </header>
    )
}

