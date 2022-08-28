import st from './HiUser.module.css'
import { Button, Typography } from 'antd';
import { Header } from '../../shared/Header/Header';
import { useNavigate } from 'react-router-dom';
import { RoutsApp } from '../../shared/constant';

const { Title } = Typography;

interface IProps {
  setIsSingIn: (value: boolean) => void
}
export const HiUser = (props: IProps) => {
  const navigator = useNavigate()
    const signOut = () => {
        localStorage.setItem('isLoggedIn', 'false');
        navigator(RoutsApp.Home)
    }
  return (
    <>
      <Header setIsSingIn={props.setIsSingIn} />
      <div className={st.wrapper}>
        <Title className={st.title}>Привет, {localStorage.getItem('user')}</Title>
        <Button onClick={signOut} className={st.button} type="primary" danger>Выйти из аккаунта</Button>
        <Button onClick={()=> navigator(RoutsApp.Contacts)} className={st.button} danger>Перейти в контакты</Button>
      </div>
    </>
  )
}
