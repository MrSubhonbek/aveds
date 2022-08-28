import { useState } from 'react'
import { Content } from './Content'
import { Header } from '../../shared/Header/Header'
import { Modal } from 'antd';
import { SingIn } from '../SingIn/SingIn';

interface IProps {
    setIsSingIn: (value: boolean) => void
}


export const Home = (props: IProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);
    const handleCancel = () => setIsModalVisible(false);
    return (
        <div>
            <Header showModal={showModal} setIsSingIn={props.setIsSingIn} />
            <Content showModal={showModal} />
            <Modal footer={null} title="Авторизация" onCancel={handleCancel} visible={isModalVisible}>
                <SingIn setIsSingIn={props.setIsSingIn} />
            </Modal>
        </div>
    )
}

