import { Button, Space, Table } from 'antd';
import axios from 'axios';
import React, { useEffect } from 'react';
import Title from 'antd/lib/typography/Title'
import { CONTACTS_URL } from '../../shared/constant';
import { Header } from '../../shared/Header/Header';
import st from './Contacts.module.css'
const { Column } = Table;

interface IContacts {
    key: React.Key;
    name: string;
    phone: string;
}
interface IProps { 
    setIsSingIn: (value: boolean) => void 
}

export const Contacts = (props:IProps) => {
    const [contacts, setContacts] = React.useState<Array<IContacts>>();

    useEffect(() => {
        axios.get(CONTACTS_URL + `?id=${localStorage.getItem('userId')}`).then((response) => {
            setContacts(response.data);
        });
    }, []);

    return (
        <>
        <Header setIsSingIn={props.setIsSingIn} />
        <Title className={st.title}>Контакты</Title>

        <Table dataSource={contacts}>
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Phone" dataIndex="phone" key="phone" />
            <Column
                title="Action"
                key="action"
                render={(_: any, record: IContacts) => (
                    <Space size="middle">
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </Space>
                )}
            />
        </Table>
        </>
    )
}
