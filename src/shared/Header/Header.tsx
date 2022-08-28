import { Button } from 'antd';
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';

import st from './Header.module.css'

interface IProps {
    showModal: () => void
}

export const Header = (props: IProps) => {
    return (
        <header>
            <span className={st.logo}><GlobalSvgSelector id='logo' /></span>
            <div className={st.wrapper}>
                <Button onClick={() => props.showModal()} type="text">Контакты</Button>
                <Button danger className={st.login} onClick={props.showModal}>Войти</Button>
            </div>
        </header>
    )
}

