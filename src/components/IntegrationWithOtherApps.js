import React,{useContext} from 'react';
import {Typography,Row,Col,Switch} from 'antd';
import {Subheading} from '@shopify/polaris';
import {userContext} from './Container';
import {setIntegrateWithOtherApps} from './reducer/reducerTypes';

const {Text}=Typography;

function IntegrationWithOtherApps(){
    const userData=useContext(userContext);
    return(
        <div className='currencySelector-main'>
        <Row>
            <Col span={24} className='display-box-heading'>
            <Text strong>Integrate with other Apps</Text>
            </Col>
        </Row>
        <Row>
            <Col span={6} className='round-decimal-text'>
            <Subheading>Integrate upsell funnel Engine Apps:</Subheading>
            </Col>
            <Col span={18} className='round-decimal-switch'>
                <Switch checkedChildren="on" 
                size="small" 
                unCheckedChildren="off" 
                className='Status-switch' 
                checked={userData.state.integreteWithOtherApps}
                onChange={()=>{
                    userData.dispatch(setIntegrateWithOtherApps());
                }}
                />
            </Col>
        </Row>
        </div>
    )
};
export default IntegrationWithOtherApps;