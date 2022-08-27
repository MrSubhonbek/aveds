import { Button, Space, Table } from 'antd';
import axios from 'axios';
import React, { useEffect } from 'react';
import Title from 'antd/lib/typography/Title'
import { CONTACTS_URL } from '../../shared/constant';

const { Column } = Table;

interface IContacts {
    key: React.Key;
    name: string;
    phone: string;
}

export const Contacts: React.FC = () => {
    const [contacts, setContacts] = React.useState<Array<IContacts>>();

    useEffect(() => {
        axios.get(CONTACTS_URL).then((response) => {
            setContacts(response.data);
        });
    }, []);

    return (
        <>
        <Title>List of contacts</Title>

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
