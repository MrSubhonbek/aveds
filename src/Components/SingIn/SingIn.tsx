import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Alert, Button, Form, Input } from 'antd'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutsApp, USERS_URL } from '../../shared/constant'

interface ISingIn {
  userName: string
  password: string
}

interface IUsers {
  name: string
  password: string
  id: string
}
interface IProps { setIsSingIn: (value: boolean) => void }

export const SingIn = (props: IProps) => {

  const [errors, setErrors] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish = async ({ userName, password }: ISingIn) => {

    setLoading(true)

    const res = await axios.get(USERS_URL)

    const searchUser: IUsers = res.data.find((user: IUsers) => user.name === userName)

    if (!searchUser) {
      setErrors('Такого пользователя нет(')
    }
    else {
      setErrors('')
      if (password === searchUser.password) {
        props.setIsSingIn(true)
        localStorage.setItem('isLoggedIn', 'true');
        console.log(searchUser);

        localStorage.setItem('user', searchUser.name.toString());
        localStorage.setItem('userId', searchUser.id.toString());
        navigate(RoutsApp.HiUser)
      }
      else {
        setErrors('Такого пользователя нет(')
      }
    }
    setLoading(false)
  };
  const [form] = Form.useForm();

  return (

    <Form
      form={form}
      autoComplete={"off"}
      name="normal_login"
      initialValues={{ userName: '', password: '' }}
      onFinish={onFinish}
    >
      <Form.Item
        name="userName"
        rules={[
          { required: true, message: 'Пожалуйста, введите имя пользователя!' },
          { min: 3, message: 'Короткое имя пользователя!' }
        ]}
        hasFeedback
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя пользователя" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true, message: 'Пожалуйста, введите пароль!' },
          { min: 8, message: 'Короткий пороль!' }
        ]}
        hasFeedback
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пороль"
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