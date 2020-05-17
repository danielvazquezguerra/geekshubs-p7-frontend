import React from 'react'
import { Form, Input, Button, notification } from 'antd';
//import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.scss';
import { useHistory } from 'react-router-dom';
import { login } from '../../redux/actions/actions';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const Login = () => {
    const history = useHistory();//props.history
    const onFinish = user => {
        login(user)
            .then(()=>{//como subscribe en angular
                notification.success({ message: 'Keep on Rollin´Baby!!' });
                history.push('/')//this.router.navigate(['/login]) en angular
            })
            .catch(console.error)
    };
    return (
        <div className="Login">

            <section className="LoginWrapper">

                <div className="LoginUp">
                <Form
                className="FormLogin"
                {...layout}
                onFinish={onFinish}
                onFinishFailed={console.error} >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'El email es requerido' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[{ required: true, message: 'La contraseña es requerida' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Conectarse
          </Button>
                </Form.Item>
            </Form>
                </div>

                <img src="images/register-fondo-01.png" className="BackLogin" alt="patineta"/>

                <div className="FootLogin">

                <div className="FootLeft">

                        <h3>PENNY SKATEBOARDS</h3>

                        </div>
                        <div className="FootRight">

                        <p>

                            12 years experience in skateboard manufacturing has given me a strong appreciation for what it takes to make great quality skateboards. I’ve channeled everything I’ve learnt in manufacturing and design to come up with a high performance, long lasting, ultra fun plastic skateboard. 

                        </p>
                            
                        </div>


                </div>


            </section>



            
        </div>
    );
}
export default Login;