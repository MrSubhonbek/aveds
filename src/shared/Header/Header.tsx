import { Button, PageHeader } from 'antd';
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';

import st from './Header.module.css'

export const Header = () => {
    return (
        <header>
            <span className={st.logo}><GlobalSvgSelector id='logo'/></span>
            <div className={st.wrapper}>
                <Button key="2" type="text">Контакты</Button>
                <Button key="1" danger className={st.login}>Войти</Button>
            </div>
        </header>
    )
}

