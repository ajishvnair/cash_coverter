import React,{useContext} from 'react';
import {Row,Col,Typography,Switch,Input} from 'antd';
import {Subheading} from '@shopify/polaris'
import {userContext} from './Container';
import {setRoundPriceStatus,
        setRoundingDeciaml
} 
from './reducer/reducerTypes';

const {Text}=Typography;
function PriceDisplayOption(){
    const userData=useContext(userContext);
    const handleInputBox=(e)=>{
        const amount=e.target.value;
        if(!amount || amount.match( /^\d{1,}(\.\d{0,2})?$/ )){
            userData.dispatch(setRoundingDeciaml(amount));
        }
    }
    return(
        <div className='display-box currencySelector-main'>
        <Row>
            <Col span={24} className='display-box-heading'>
            <Text strong>Price Display Option</Text>
            </Col>
        </Row>
        <Row>
            <Col span={6} className='round-decimal-text'>
            <Subheading>Round decimal digits:</Subheading>
            </Col>
            <Col span={18} className='round-decimal-switch'>
                <Switch checkedChildren="on" 
                size="small" 
                unCheckedChildren="off" 
                className='Status-switch'
                checked={userData.state.roundPriceStatus}
                onChange={()=>{
                    userData.dispatch(setRoundPriceStatus())
                }} 
            />
            </Col>
        </Row>
        <Row>
            <Col span={6} className='round-decimal-text'>
            <Subheading>Rounding Decimal:</Subheading>
            </Col>
            <Col span={18} className='round-decimal-input'>
                <Input 
                value={userData.state.roundingDecimal}
                onChange={handleInputBox}
                disabled={!userData.state.roundPriceStatus}
                />
            </Col>
        </Row>
        <Row>
            <Col span={24} className='round-decimal-info'>
            <p>Eg: If the converted price is $9.61 it will displayed as $9.99</p>
            </Col>
        </Row>
        </div>
    )
}
export default PriceDisplayOption;