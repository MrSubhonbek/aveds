import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Alert, Button, Form, Input } from 'antd'
import Title from 'antd/lib/typography/Title'
import axios from 'axios'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutsApp, USERS_URL } from '../../shared/constant'
import st from './SingIn.module.css'

interface ISingIn {
  userName: string
  password: string
}

interface IUsers {
  name: string
  password: string
  id: string
}
interface IProps {setIsSingIn: (value:boolean)=>void}

export const SingIn = (props: IProps) => {

  const [errors, setErrors] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish = async ({ userName, password }: ISingIn) => {

    setLoading(true)

    const res = await axios.get(USERS_URL)

    const searchUser = res.data.find((user: IUsers) => user.name === userName)

    if(!searchUser){
      setErrors('No such user exists!')
    }
    else {
      setErrors('') 
      props.setIsSingIn(localStorage.getItem('isLoggedIn') === 'true')
      localStorage.setItem('isLoggedIn', 'true');
      navigate(RoutsApp.Contacts)
    }
    setLoading(false)
  };


  return (

    <Form
      name="normal_login"
      className={st.loginForm}
      initialValues={{ userName: 'Kathleen Stokes', password: '982735341' }}
      onFinish={onFinish}
    >
      <Form.Item
        name="userName"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button loading={loading} type="primary" danger htmlType="submit" className="login-form-button">
          Войти
        </Button>
      </Form.Item>

      {errors &&
        <Form.Item>
          <Alert message={errors} type="error" />
        </Form.Item>}
    </Form>
  );
};