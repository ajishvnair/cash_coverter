import React,{useContext} from 'react';
import {userContext} from './Container';
import { Row,Col,Typography,Button,Switch } from 'antd';
import {setStatus} from './reducer/reducerTypes';

const {Title}=Typography;
function Header(props){
    const userData=useContext(userContext);
    //console.log(userData.state)
    return(
        <div className='Header'>
        <Row>
                <Col span={18} className='Header-Title'>
                <Title level={2}>Settings</Title>
                </Col>
                <Col span={6} className='Header-Button'>
                <Button type="primary" size='large'
                onClick={()=>{
                    props.onSubmit()
                }}
                >Save</Button>
                </Col>
        </Row>
        <Row>
            <Col span={3} className='Header-Status'>
            <Title level={4}>App status:</Title>
            </Col>
            <Col span={2}>
            <Switch checkedChildren="on" 
            size="small" 
            unCheckedChildren="off" 
            className='Status-switch' 
            checked={userData.state.status} 
            onChange={()=>{
                userData.dispatch(setStatus());
                
            }}
            />
            </Col>
        </Row>
        </div>
    )
};
export default Header;